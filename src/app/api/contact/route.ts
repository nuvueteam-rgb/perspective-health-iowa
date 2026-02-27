import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
// import { buildEmailHtml } from "@/lib/email"; // Uncomment when email provider is configured

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  preferredContact: z.enum(["email", "phone", "either"]),
  message: z.string().min(10).max(1000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // ----- Configure your email provider here -----
    // Option A: Resend (recommended)
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@perspectivehealthiowa.com",
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New Contact Form Submission — ${data.name}`,
    //   html: buildEmailHtml(data),
    // });

    // Option B: For development, log the submission
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact Form Submission]", {
        timestamp: new Date().toISOString(),
        ...data,
      });
    }

    return NextResponse.json(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 422 }
      );
    }
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
