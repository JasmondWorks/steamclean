import React from "react";

export default function Cta() {
  return (
    <div className="cta-section">
      <div className="wrap">
        <h2>Stop paying for disk space<br />you never use.</h2>
        <p>Free during early access &nbsp;·&nbsp; Works on Chrome &amp; Edge &nbsp;·&nbsp; Windows</p>
        <a href="#waitlist" className="btn-primary" style={{ background: "#fff", color: "var(--t1)", display: "inline-flex", padding: "16px 32px", fontSize: "16px" }}>
          Get started free →
        </a>
      </div>
    </div>
  );
}
