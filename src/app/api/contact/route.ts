import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, service, budget, message } = await request.json();

    await addDoc(collection(db, "leads"), {
      name,
      email,
      service,
      budget,
      message,
      createdAt: serverTimestamp(),
      source: "contact-form",
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
