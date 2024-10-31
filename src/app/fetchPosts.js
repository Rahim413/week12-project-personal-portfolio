import { connect } from "@/lib/connect";

export async function fetchPosts() {
  const db = connect();
  const postResults = await db.query(`
    SELECT
      posts_table.id,
      profiles.username,
      posts_table.title,
      posts_table.content
    FROM posts_table
    INNER JOIN profiles ON posts_table.clerk_id = profiles.clerk_id;
  `);
  return postResults.rows;
}
