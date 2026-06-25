"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#080808",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {imgError ? (
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#f5f5f0",
                }}
              >
                Buraq<span style={{ color: "#c0392b" }}>Minds</span>
              </div>
            ) : (
              <Image
                src="/images/logo/buraq-minds_master-logo.svg"
                alt="Buraq Minds"
                width={200}
                height={56}
                priority
                onError={() => setImgError(true)}
                style={{ objectFit: "contain" }}
              />
            )}
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
            style={{
              height: "2px",
              background: "var(--color-primary)",
              borderRadius: "1px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
