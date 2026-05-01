import React from "react";

export default function Hero() {
  return (
    <div className="wrap">
      <section className="hero">
        <div className="badge">
          <div className="badge-dot"></div>Music production tool
        </div>
        <h1>
          You use 1% of your plugin library.<br />
          <span className="accent">Reclaim the other 99%.</span>
        </h1>
        <p className="hero-sub">
          SteamClean scans your VST sound library, traces every file your patches actually depend on, and safely archives everything else — no guesswork, no broken presets.
        </p>
        <div className="hero-actions">
          <a href="#waitlist" className="btn-primary">
            Try SteamClean free
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#how" className="btn-ghost">See how it works</a>
        </div>
        <p className="hero-note">Free during early access &nbsp;·&nbsp; Chrome &amp; Edge on Windows &nbsp;·&nbsp; No install needed</p>

        <div className="stats-bar">
          <div className="stat-cell">
            <div className="stat-val">64 GB</div>
            <div className="stat-label">Omnisphere default install</div>
          </div>
          <div className="stat-cell">
            <div className="stat-val blue">~3 GB</div>
            <div className="stat-label">What most producers use</div>
          </div>
          <div className="stat-cell">
            <div className="stat-val green">61 GB</div>
            <div className="stat-label">Recoverable disk space</div>
          </div>
          <div className="stat-cell">
            <div className="stat-val">0</div>
            <div className="stat-label">Presets broken when done right</div>
          </div>
        </div>
      </section>
    </div>
  );
}
