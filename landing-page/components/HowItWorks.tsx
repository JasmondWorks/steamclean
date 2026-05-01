import React from "react";

export default function HowItWorks() {
  return (
    <div className="wrap">
      <section className="section" id="how">
        <div className="section-tag">How it works</div>
        <h2>
          Four steps. Fully reversible.<br />
          Nothing moved without your say.
        </h2>

        <div className="mockup">
          <div className="mockup-bar">
            <div className="m-dot" style={{ background: "#FF5F57" }}></div>
            <div className="m-dot" style={{ background: "#FEBC2E" }}></div>
            <div className="m-dot" style={{ background: "#28C840" }}></div>
            <span className="m-title">SteamClean — Omnisphere 2.8</span>
          </div>
          <div className="mockup-body">
            <div className="m-side">
              <div className="m-side-label">Sound sources</div>
              <div className="m-row idle"><span>Acoustic</span><span className="m-sz red">4.2 GB</span></div>
              <div className="m-row active"><span>Atmospheres</span><span className="m-sz">3.8 GB</span></div>
              <div className="m-row idle"><span>Bass</span><span className="m-sz red">2.1 GB</span></div>
              <div className="m-row idle"><span>Pads</span><span className="m-sz">1.4 GB</span></div>
              <div className="m-row idle"><span>Synth</span><span className="m-sz red">6.7 GB</span></div>
              <div className="m-row idle"><span>Orchestral</span><span className="m-sz red">8.3 GB</span></div>
              <div className="m-row idle"><span>Keys</span><span className="m-sz">0.9 GB</span></div>
            </div>
            <div className="m-main">
              <div className="m-main-label">Dependency analysis — all patches</div>
              <div className="m-kpi-row">
                <div className="m-kpi">
                  <div className="m-kpi-val">61.4 GB</div>
                  <div className="m-kpi-label">Total library</div>
                </div>
                <div className="m-kpi">
                  <div className="m-kpi-val g">2.8 GB</div>
                  <div className="m-kpi-label">In active use</div>
                </div>
                <div className="m-kpi">
                  <div className="m-kpi-val">58.6 GB</div>
                  <div className="m-kpi-label">Safe to archive</div>
                </div>
              </div>
              <div className="m-bar-wrap">
                <div className="m-bar"><div className="m-bar-fill" style={{ width: "5%", background: "#16A34A" }}></div></div>
                <div className="m-bar-label"><span>In active use</span><span>5%</span></div>
              </div>
              <div className="m-bar-wrap">
                <div className="m-bar"><div className="m-bar-fill" style={{ width: "95%", background: "#BFDBFE" }}></div></div>
                <div className="m-bar-label"><span>Eligible for archiving</span><span>95%</span></div>
              </div>
              <button className="m-action">
                Archive unused files
                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">1</div>
            <h3>Select your library folder</h3>
            <p>Point SteamClean at your STEAM folder. Everything is read-only until you explicitly confirm an action.</p>
            <span className="pill pill-ok">Read-only scan</span>
          </div>
          <div className="step-card">
            <div className="step-num">2</div>
            <h3>Paste your patch list</h3>
            <p>Add the preset names you use. SteamClean parses every patch file and traces the full dependency tree — including nested references.</p>
            <span className="pill pill-ok">Full dependency trace</span>
          </div>
          <div className="step-card hi">
            <div className="step-num">3</div>
            <h3>Review what&apos;s safe</h3>
            <p>Clear breakdown of used vs unused files with a confidence score for anything uncertain. Nothing moves until you approve it.</p>
            <span className="pill pill-warn">You approve everything</span>
          </div>
          <div className="step-card">
            <div className="step-num">4</div>
            <h3>Archive, don&apos;t delete</h3>
            <p>Files move to _SteamCleanArchive inside your library folder. Restore any file in one click. Hard delete is opt-in only.</p>
            <span className="pill pill-ok">Fully reversible</span>
          </div>
        </div>
      </section>
    </div>
  );
}
