"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { fadeLeft, fadeRight } from "../animations";

export default function HeroBio() {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-left"
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="hero-label">Perfil do Artista</span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          KAUÃ
        </motion.h1>

        <div className="hero-bio-box">
          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Kauã é um artista que nasceu em 2007. Ele foi introduzido na música
            desde cedo, começou sua carreira musical como artista & produtor em
            2019, lançando músicas em seu canal no YouTube. Ele tem chamado
            bastante atenção, desde suas letras criativas, batidas e vídeos de
            alto padrão, além de suas colaborações com outros artistas.
          </motion.p>

          <motion.a
            href="https://open.spotify.com/intl-pt/artist/3TgcBvNKbCNKuI72HwwTeC"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(168,85,247,0)",
                "0 0 18px rgba(168,85,247,0.35)",
                "0 0 0px rgba(168,85,247,0)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
             OUÇA
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img
          className="hero-image"
          src="/images/artista.jpg"
          alt="Retrato do artista"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="hero-overlay"></div>

        <motion.div
          className="hero-decorative-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
}