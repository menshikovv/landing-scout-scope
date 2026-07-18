import { NextResponse } from "next/server";

const BACKEND_URL = "http://195.133.50.65:8080/api/v1/top-talents";

export async function GET() {
  const res = await fetch(BACKEND_URL, { cache: "no-store" });
  const data = await res.json();
  return NextResponse.json(data);
}
