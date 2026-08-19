import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Default only allows q=75; the hero mesh texture uses a lower quality
    // since it's a decorative background at 40% opacity.
    qualities: [30, 75],
  },
  // Dev-mode phone testing over LAN hits the server by its network IP, not
  // localhost — without this, Next blocks that origin's access to /_next/*
  // dev resources (including the HMR socket and, effectively, hydration),
  // so the page loads but never becomes interactive.
  allowedDevOrigins: ["192.168.1.92"],
};

export default nextConfig;
