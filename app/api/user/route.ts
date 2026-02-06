import { usersTable } from "@/config/schema";
import { db } from "@/config/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  // get logged in user
  const user = await currentUser();

  if (!user || !user.primaryEmailAddress?.emailAddress) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  // check if user exists in DB
  const users = await db
    .select()
    .from(usersTable)
    .where(
      eq(usersTable.email, user.primaryEmailAddress.emailAddress)
    );

  // if not exist → create new user
  if (users.length === 0) {
    const newUser = await db
      .insert(usersTable)
      .values({
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName ?? "Anonymous",
      })
      .returning();

    return NextResponse.json(newUser[0]);
  }

  // if exists → return existing user
  return NextResponse.json(users[0]);
}
