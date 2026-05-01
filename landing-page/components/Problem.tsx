import React from "react";

export default function Problem() {
  return (
    <div className="section-bg">
      <div className="wrap">
        <section className="section">
          <div className="section-tag">The problem</div>
          <h2>
            VST vendors ship the entire universe.<br />
            You only need your neighbourhood.
          </h2>
          <p className="section-sub">
            There&apos;s no official way to slim these libraries down. Until now.
          </p>
          <div className="prob-grid">
            <div className="prob-card">
              <div className="prob-icon">📦</div>
              <h3>Bloated by design</h3>
              <p>Vendors require the full library installed for &quot;patch compatibility&quot; — even if you only use 20 presets out of 14,000.</p>
            </div>
            <div className="prob-card">
              <div className="prob-icon">🚫</div>
              <h3>No selective install</h3>
              <p>The official advice is &quot;buy a bigger drive.&quot; That&apos;s not a solution. SteamClean is.</p>
            </div>
            <div className="prob-card">
              <div className="prob-icon">💥</div>
              <h3>Manual deletion breaks things</h3>
              <p>There&apos;s no dependency map. Guessing wrong means broken patches in the middle of a session.</p>
            </div>
            <div className="prob-card">
              <div className="prob-icon">🐌</div>
              <h3>Slower DAW startup</h3>
              <p>Large unindexed libraries slow your plugin browser — even for sounds you&apos;ve never once opened.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
