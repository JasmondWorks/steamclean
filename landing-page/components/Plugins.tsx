import React from "react";

export default function Plugins() {
  return (
    <div className="section-bg" id="plugins">
      <div className="wrap">
        <section className="section">
          <div className="section-tag">Plugin support</div>
          <h2>Built for the biggest libraries first.</h2>
          <p className="section-sub">Omnisphere is fully supported today. More plugins ship as we validate the approach with real producers.</p>
          <div className="plugin-grid">
            <div className="plugin-card">
              <div className="plugin-pill pill-live">Live</div>
              <div className="plugin-name">Omnisphere</div>
              <div className="plugin-by">Spectrasonics</div>
            </div>
            <div className="plugin-card dim">
              <div className="plugin-pill pill-soon">Soon</div>
              <div className="plugin-name">Kontakt</div>
              <div className="plugin-by">Native Instruments</div>
            </div>
            <div className="plugin-card dim">
              <div className="plugin-pill pill-soon">Soon</div>
              <div className="plugin-name">Keyscape</div>
              <div className="plugin-by">Spectrasonics</div>
            </div>
            <div className="plugin-card dim">
              <div className="plugin-pill pill-soon">Soon</div>
              <div className="plugin-name">Trilian</div>
              <div className="plugin-by">Spectrasonics</div>
            </div>
            <div className="plugin-card dim">
              <div className="plugin-pill pill-soon">Soon</div>
              <div className="plugin-name">Serum</div>
              <div className="plugin-by">Xfer Records</div>
            </div>
            <div className="plugin-card dim">
              <div className="plugin-pill pill-soon">Soon</div>
              <div className="plugin-name">Spire</div>
              <div className="plugin-by">Reveal Sound</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
