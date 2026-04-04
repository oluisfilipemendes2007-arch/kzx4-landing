"use client";

import { fadeUp } from "../animations";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <nav className="container nav">

        {/* LOGO */}
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          KAUÃ
        </motion.div>

        {/* FRASE + LINK */}
        <motion.a
          href="https://wa.me/5535999415515?text=Quero%20produzir%20com%20você!"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.92 }}
        >
        Quer produzir comigo?
        </motion.a>

      </nav>
    </motion.header>
  );
}