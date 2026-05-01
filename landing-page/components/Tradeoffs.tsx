import React from "react";

export default function Tradeoffs() {
  return (
    <div className="wrap">
      <section className="section">
        <div className="section-tag">Honest tradeoffs</div>
        <h2>We&apos;ll tell you what this can&apos;t do.</h2>
        <p className="section-sub">Trust is everything when you&apos;re letting software near your library files.</p>
        <div className="trade-grid">
          <div className="trade-card good">
            <div className="trade-label">What works well</div>
            <p>Patches with explicit file references in their XML — which covers most factory and third-party presets — are mapped with high confidence. The dependency trace is fully deterministic.</p>
          </div>
          <div className="trade-card caution">
            <div className="trade-label">Known limitation</div>
            <p>Some patches use dynamic paths that only resolve inside the plugin at runtime. These are flagged &quot;uncertain&quot; and excluded from archiving by default — we&apos;d rather be safe.</p>
          </div>
          <div className="trade-card good">
            <div className="trade-label">What works well</div>
            <p>Archive mode means nothing is truly gone. Every file is restorable individually or in bulk at any point before you opt into hard delete.</p>
          </div>
          <div className="trade-card caution">
            <div className="trade-label">Known limitation</div>
            <p>New third-party patch banks purchased after archiving may reference archived source files. We&apos;ll surface these automatically when you load a new library.</p>
          </div>
        </div>
        <div className="disclaimer">
          <h3>⚠ Before you use SteamClean — please read</h3>
          <p>SteamClean moves files at the filesystem level. While the archive system is designed to be fully reversible, <strong>we strongly recommend backing up your full library to an external drive before running any operation.</strong></p>
          <p>SteamClean is not affiliated with Spectrasonics or any plugin vendor. Spectrasonics&apos; official position is that the full library must remain intact — this tool operates at the file level to work around that. <strong>Vendor support may not apply to modified installations.</strong></p>
          <p>Never hard-delete until you&apos;ve run at least one full production session with the archived library and confirmed every patch loads correctly.</p>
        </div>
      </section>
    </div>
  );
}
