"use client";
import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("var(--ok)");

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Will this break my existing projects?",
      a: "Only if you archive a file a patch depends on and we missed the reference. That's why we have a confidence score system and exclude uncertain files by default. Always use archive mode (not hard delete) for your first run and test in your DAW before clearing the archive."
    },
    {
      q: "Does this work with third-party Omnisphere patch banks?",
      a: "Yes — as long as those patches use standard .prt_omn format with explicit file references, SteamClean traces them exactly like factory patches. Some very old or non-standard third-party formats may be flagged as uncertain."
    },
    {
      q: "What browser do I need?",
      a: "SteamClean uses the File System Access API, which is supported in Chrome and Edge on Windows. Firefox and Safari don't support this API yet. We'll show a clear message if your browser isn't supported."
    },
    {
      q: "Does my library get uploaded anywhere?",
      a: "No. Everything runs locally in your browser. Your files never leave your machine — not even the patch names or file paths. SteamClean reads and writes directly to your disk with no server involved."
    },
    {
      q: "Can I undo everything after archiving?",
      a: "Yes. All archived files move to a _SteamCleanArchive folder inside your library. You can restore individual files or the entire archive at any time. Hard delete requires a separate explicit confirmation and is irreversible."
    },
    {
      q: "Is this against Spectrasonics' terms?",
      a: "Spectrasonics' official position is that the full library must remain installed. SteamClean operates at the file system level to work around this. You own the files on your machine — but be aware that Spectrasonics' support team may not assist with issues that arise on a modified installation."
    }
  ];

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = document.getElementById("waitlist-email") as HTMLInputElement;
    
    if (emailInput && emailInput.value.includes("@")) {
      setIsSubmitting(true);
      setMessage("");
      
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailInput.value }),
        });
        
        if (res.ok) {
          setMessage("You're on the list. We'll be in touch soon.");
          setMessageColor("var(--ok)");
          emailInput.value = "";
        } else {
          setMessage("Something went wrong. Please try again.");
          setMessageColor("red");
        }
      } catch (error) {
        setMessage("Something went wrong. Please try again.");
        setMessageColor("red");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="section-bg">
      <div className="wrap">
        <section className="section" id="faq">
          <div className="section-tag">FAQ</div>
          <h2>Common questions.</h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openIndex === idx ? "open" : ""}`}>
                <button className="faq-q" onClick={() => toggle(idx)}>
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>

          {/* WAITLIST */}
          <div className="waitlist-box" id="waitlist">
            <h3>Join the early access waitlist</h3>
            <p>We&apos;re onboarding producers in batches. Drop your email and we&apos;ll let you know when you&apos;re in.</p>
            <form className="waitlist-form" onSubmit={handleWaitlist}>
              <input type="email" id="waitlist-email" placeholder="your@email.com" required disabled={isSubmitting} />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Joining..." : "Get early access"}
              </button>
            </form>
            {message && (
              <p id="waitlist-msg" style={{ marginTop: 14, fontSize: 13, color: messageColor }}>
                {message}
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
