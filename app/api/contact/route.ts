import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const serviceType = payload.serviceType?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !phone || !serviceType || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  return NextResponse.json(
    { message: "Contact request submitted successfully." },
    { status: 200 },
  );
}
