"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Check if the email already exists in the database
      const { data: existingEmail } = await supabase
        .from("waitlist")
        .select("email")
        .eq("email", email)
        .single();

      if (existingEmail) {
        setStatus("error");
        setMessage("This email is already on the waitlist!");
        return;
      }

      // Insert the new email into the database
      const { error } = await supabase.from("waitlist").insert([
        {
          email: email,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      setStatus("success");
      setMessage("Thank you for joining our waitlist!");
      setEmail("");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input and Submit */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 bg-dark border border-cream/20 rounded-full text-light placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-gold-500"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-dark font-bold uppercase tracking-wide rounded-full shadow-gold-glow hover:opacity-90 disabled:opacity-50 transition"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </button>
        </div>
      </form>

      {/* Feedback Message */}
      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            status === "error" ? "text-roseGold" : "text-gold-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
