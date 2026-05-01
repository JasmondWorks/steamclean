import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Implement actual database or external service integration here.
    // E.g., Save to database using DATABASE_URL, or send to Mailchimp/Resend using the API keys in .env.local

    console.log(`New waitlist signup: ${email}`);

    return NextResponse.json(
      { success: true, message: "Successfully joined the waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
