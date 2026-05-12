"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface AddOnCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export function AddOnCard({ icon, title, description, index }: AddOnCardProps) {
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[icon] ?? LucideIcons.Package;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition-colors hover:border-[var(--color-accent)]/25"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
        <IconComponent className="h-5 w-5" />
      </div>
      <p className="font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted-foreground)]">{description}</p>
    </motion.div>
  );
}
