"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../animations";

export default function LatestRelease() {
  return (
    <section className="latest-release">
      <div className="container">
        <motion.div
          className="section-top"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <h2 className="section-title">ÚLTIMO LANÇAMENTO</h2>
            <span className="section-subtitle">Single</span>
          </div>

          <div className="section-number">000</div>
        </motion.div>

        <div className="release-card">
          <motion.div
            className="release-image-box"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              className="release-image"
              src="/images/backwoods.jpg"
              alt="Capa do single"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />

            <motion.div
              className="badge"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              NOVA
            </motion.div>
          </motion.div>

          <motion.div
            className="release-content centered"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <motion.div
                className="release-meta"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <span className="meta-badge">novo hit</span>
                <span className="meta-text"></span>
              </motion.div>

              <motion.h3
                className="release-title"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                Backwoods
              </motion.h3>

              <motion.div
  className="parallel-cinematic"
  initial={{ opacity: 0, y: 40, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 0.3 }}
>
  {/* camadas de névoa */}
  <div className="cinematic-smoke smoke-1"></div>
  <div className="cinematic-smoke smoke-2"></div>
  <div className="cinematic-smoke smoke-3"></div>

  {/* partículas/luzes */}
  <div className="cinematic-particles">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  {/* frase */}
  <p className="parallel-cinematic-text">
  Todos os caminhos levam a <strong>BACKWOODS</strong>
</p>
</motion.div>

              <motion.div
                className="release-actions"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <motion.a
                  href="https://open.spotify.com/intl-pt/track/0iM0Mk5fI8h3VX07A9Q4z1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotify-button"
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Ouvir no Spotify
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}