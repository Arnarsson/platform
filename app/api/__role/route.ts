import { NextResponse } from "next/server";
import { getUserRole } from "@/lib/auth/roles";

export async function GET() {
  const role = await getUserRole();
  return NextResponse.json({ role });
}

