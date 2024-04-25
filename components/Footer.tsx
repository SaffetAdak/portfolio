"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <motion.div
        className="bg-gray-200 h-[1px] w-full mb-8 rounded-full hidden sm:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      ></motion.div>
      <small className="mb-2 block text-xs">
        &copy; 2024 Saffet. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
