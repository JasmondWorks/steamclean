"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div>
        <a href="#" className="logo">
          steam<span>clean</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#plugins">Plugins</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <button
          className="nav-cta"
          onClick={() => document.getElementById("waitlist-email")?.focus()}
        >
          Get early access
        </button>
      </div>
    </nav>
  );
}
