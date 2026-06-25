"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingWidgets() {
  const [mounted, setMounted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  const PRIMARY = "#c0392b";
  const PRIMARY_SHADOW = "rgba(192,57,43,0.4)";
  const BG = "linear-gradient(135deg, #c0392b 0%, #922b21 100%)";

  return (
    <>
      {/* Bottom-left — Project Cost Calculator */}
      <Link
        href="/#estimator"
        style={{
          position: "fixed", bottom: "24px", left: "24px", zIndex: 1000,
          display: "inline-flex", alignItems: "center", gap: "12px",
          padding: "11px 20px", background: BG,
          borderRadius: "100px", textDecoration: "none",
          boxShadow: `0 4px 24px ${PRIMARY_SHADOW}`,
        }}
      >
        <div style={{
          width: "32px", height: "32px", borderRadius: "8px",
          background: "rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px", flexShrink: 0
        }}>📊</div>
        <div>
          <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.65)", fontWeight: 600, lineHeight: 1 }}>
            GET AN ESTIMATE
          </div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "white", lineHeight: 1.3, marginTop: "2px" }}>
            Project Cost Calculator
          </div>
        </div>
      </Link>

      {/* Bottom-right — Ask Buraq Minds */}
      <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 1000 }}>
        {chatOpen && (
          <div style={{
            position: "absolute", bottom: "72px", right: 0, width: "290px",
            background: "#111111", border: "1px solid rgba(192,57,43,0.3)",
            borderRadius: "12px", padding: "20px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "6px", background: BG, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>
                  💬
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>Ask Buraq Minds</div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>Live AI assistant</div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: "20px", lineHeight: 1 }}>×</button>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", marginBottom: "14px", fontWeight: 300, lineHeight: 1.65 }}>
              Have a question about our services? We typically respond within 24 hours.
            </p>
            <Link href="/contact" style={{ display: "block", textAlign: "center" as const, padding: "10px", background: BG, color: "white", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              Start a Conversation →
            </Link>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "11px 20px", background: BG,
            borderRadius: "100px", border: "none", cursor: "pointer",
            boxShadow: `0 4px 24px ${PRIMARY_SHADOW}`,
          }}
        >
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
            💬
          </div>
          <div style={{ textAlign: "left" as const }}>
            <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.65)", fontWeight: 600, lineHeight: 1 }}>
              LIVE ASSISTANT
            </div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "white", lineHeight: 1.3, marginTop: "2px" }}>
              Ask Buraq Minds
            </div>
          </div>
        </button>
      </div>
    </>
  );
}