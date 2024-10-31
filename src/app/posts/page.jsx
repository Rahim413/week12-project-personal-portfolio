"use server";

import { connect } from "@/lib/connect";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import "./posts.css";

async function fetchPosts(db) {
  const postResults = await db.query(
    `SELECT
      posts_table.id,
      profiles.username,
      posts_table.title,
      posts_table.content
    FROM posts_table
    INNER JOIN profiles ON posts_table.clerk_id = profiles.clerk_id`
  );
  return postResults.rows;
}

async function handleCreatePost(formData) {
  "use server";
  const db = connect();
  const { userId } = await auth();

  const title = formData.get("title");
  const content = formData.get("content");

  await db.query(
    `INSERT INTO posts_table (clerk_id, title, content) VALUES ($1, $2, $3)`,
    [userId, title, content]
  );

  revalidatePath("/posts");
}

async function handleDeletePost(formData) {
  "use server";
  const db = connect();
  const { userId } = await auth();
  const postId = formData.get("postId");

  await db.query(
    `DELETE FROM posts_table WHERE id = $1 AND clerk_id = $2`,
    [postId, userId]
  );

  revalidatePath("/posts");
}

export default async function PostsPage() {
  const db = connect();
  const posts = await fetchPosts(db);

  return (
    <div className="posts-page">
      <h2>Posts</h2>
      
      <div className="form-container">
        <h3>Add New Post</h3>
        <form action={handleCreatePost} className="post-form">
          <input name="title" placeholder="Title" required className="input" />
          <textarea name="content" placeholder="New Post" required className="textarea"></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      <div className="posts-table">
        <h3>All Posts</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Title</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.username}</td>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>
                  <form action={handleDeletePost} className="delete-form"> 
                    <input type="hidden" name="postId" value={post.id} />
                    <button type="submit" className="delete-button">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
