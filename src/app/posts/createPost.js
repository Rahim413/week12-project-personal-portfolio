"use server";

import { connect } from "@/lib/connect";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function handleCreatePost(formData) {
  const db = connect();
  const { userId } = await auth();

  const title = formData.get("title");
  const content = formData.get("content");

  await db.query(`
    INSERT INTO posts_table (clerk_id, title, content) VALUES ($1, $2, $3)
  `, [userId, title, content]);

  revalidatePath("/posts");
}
