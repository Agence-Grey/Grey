"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      theme="dark"
      richColors
      toastOptions={{
        style: {
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#f5f5f5",
        },
      }}
    />
  );
}
