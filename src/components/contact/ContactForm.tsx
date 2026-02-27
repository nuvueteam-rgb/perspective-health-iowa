"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[\d\s\-\(\)\+]{7,20}$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z.string().optional(),
  preferredContact: z.enum(["email", "phone", "either"], {
    required_error: "Please select your preferred contact method",
  }),
  message: z
    .string()
    .min(10, "Please tell us a bit more (at least 10 characters)")
    .max(1000, "Message is too long (max 1000 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-teal/10 border border-teal/30 rounded-2xl p-10 text-center">
        <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-charcoal mb-3">
          Message Received!
        </h3>
        <p className="text-gray-600 mb-2">
          Thank you for reaching out to Perspective Health Iowa.
        </p>
        <div className="bg-white rounded-xl p-5 text-left mt-6 space-y-2">
          <p className="font-semibold text-charcoal text-sm">What happens next:</p>
          <ul className="text-sm text-gray-600 space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">✓</span>
              A member of our team will review your message within 1 business day.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">✓</span>
              We&apos;ll reach out via your preferred contact method to answer questions and schedule your appointment.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-0.5">✓</span>
              If your matter is urgent, please call us directly at{" "}
              <a href="tel:+17125550100" className="text-teal font-medium hover:underline">
                (712) 555-0100
              </a>
              .
            </li>
          </ul>
        </div>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="btn-teal mt-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          placeholder="Jane Smith"
          autoComplete="name"
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-charcoal placeholder-gray-400 bg-white",
            "focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
            "transition-all duration-200",
            errors.name ? "border-red-400 bg-red-50" : "border-gray-200"
          )}
        />
        {errors.name && (
          <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
            <AlertCircle size={12} /> {errors.name.message}
          </p>
        )}
      </div>

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="jane@example.com"
            autoComplete="email"
            className={cn(
              "w-full px-4 py-3 rounded-xl border text-charcoal placeholder-gray-400 bg-white",
              "focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
              "transition-all duration-200",
              errors.email ? "border-red-400 bg-red-50" : "border-gray-200"
            )}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-1.5">
            Phone Number
          </label>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            placeholder="(712) 555-0100"
            autoComplete="tel"
            className={cn(
              "w-full px-4 py-3 rounded-xl border text-charcoal placeholder-gray-400 bg-white",
              "focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
              "transition-all duration-200",
              errors.phone ? "border-red-400 bg-red-50" : "border-gray-200"
            )}
          />
          {errors.phone && (
            <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Service of interest */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-1.5">
          Service of Interest
        </label>
        <select
          {...register("service")}
          id="service"
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-charcoal bg-white",
            "focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
            "transition-all duration-200",
            "border-gray-200"
          )}
        >
          <option value="">— Select a service (optional) —</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="general">General Inquiry</option>
          <option value="insurance">Insurance Question</option>
          <option value="new-patient">New Patient</option>
        </select>
      </div>

      {/* Preferred contact method */}
      <div>
        <p className="block text-sm font-semibold text-charcoal mb-2">
          Preferred Contact Method <span className="text-red-500">*</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "either", label: "Either" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                {...register("preferredContact")}
                type="radio"
                value={option.value}
                className="w-4 h-4 accent-teal"
              />
              <span className="text-sm text-charcoal group-hover:text-teal transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
        {errors.preferredContact && (
          <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
            <AlertCircle size={12} /> {errors.preferredContact.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          placeholder="Tell us about your health goals, questions, or what you're looking for..."
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-charcoal placeholder-gray-400 bg-white resize-none",
            "focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent",
            "transition-all duration-200",
            errors.message ? "border-red-400 bg-red-50" : "border-gray-200"
          )}
        />
        {errors.message && (
          <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Error state */}
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 text-sm text-red-700">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <p>
            We encountered an error sending your message. Please try again or
            call us directly at{" "}
            <a href="tel:+17125550100" className="font-medium underline">
              (712) 555-0100
            </a>
            .
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitStatus === "submitting"}
        className={cn(
          "btn-primary w-full gap-2 text-base",
          submitStatus === "submitting" && "opacity-70 cursor-not-allowed"
        )}
      >
        {submitStatus === "submitting" ? (
          <>
            <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-4 h-4" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-teal">
          Privacy Policy
        </a>
        . We never share your information.
      </p>
    </form>
  );
}
