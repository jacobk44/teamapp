import { NextResponse } from "next/server";

type BookingPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  propertyType?: string;
  serviceType?: string;
  date?: string;
  notes?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as BookingPayload;

  const fullName = payload.fullName?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const propertyType = payload.propertyType?.trim();
  const serviceType = payload.serviceType?.trim();
  const date = payload.date?.trim();
  const notes = payload.notes?.trim() ?? "";

  if (!fullName || !email || !phone || !propertyType || !serviceType || !date) {
    return NextResponse.json(
      { error: "Please complete all required booking fields." },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      message: "Booking request submitted successfully.",
      data: {
        fullName,
        email,
        phone,
        propertyType,
        serviceType,
        date,
        notes,
      },
    },
    { status: 200 },
  );
}
