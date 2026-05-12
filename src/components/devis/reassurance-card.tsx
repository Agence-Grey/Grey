"use client";

import { motion } from "framer-motion";

interface ReassuranceCardProps {
  title: string;
  description: string;
  index: number;
}

export function ReassuranceCard({ title, description, index }: ReassuranceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="rounded-[1.5rem] border border-white/10 bg-[var(--color-surface)] p-8"
    >
      <h3 className="mb-2 text-[1.1rem] font-semibold text-white">{title}</h3>
      <p className="text-[0.95rem] leading-relaxed text-[var(--color-muted-foreground)]">{description}</p>
    </motion.div>
  );
}
