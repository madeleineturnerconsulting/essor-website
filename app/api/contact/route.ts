import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Supabase environment variables are not configured.");
  }
  return createClient(url, key);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, message } = body as Record<string, string>;

  if (!name || !company || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  let supabase;
  try {
    supabase = getSupabase();
  } catch {
    return NextResponse.json({ error: "Service not configured." }, { status: 503 });
  }

  const { error } = await supabase.from("contact_submissions").insert([
    { name, company, email, message },
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: "Failed to save your message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
