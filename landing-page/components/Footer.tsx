import React from "react";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="logo" style={{ fontSize: "17px", textDecoration: "none", color: "var(--t3)" }}>
        steam<span style={{ color: "var(--brand)" }}>clean</span>
      </a>
      <p>Made by producers, for producers</p>
      <p>Not affiliated with Spectrasonics or any plugin vendor</p>
    </footer>
  );
}
