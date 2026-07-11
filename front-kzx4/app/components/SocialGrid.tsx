"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

const socialItems = [
  {
    name: "Spotify",
    action: "Ouça agora",
    icon: "/icons/spotify.png",
    link: "https://open.spotify.com/intl-pt/artist/3TgcBvNKbCNKuI72HwwTeC",
  },
  {
    name: "Instagram",
    action: "Siga",
    icon: "/icons/instagram.png",
    link: "https://www.instagram.com/kaua.kjr/",
  },
  {
    name: "TikTok",
    action: "Vídeos",
    icon: "/icons/tiktok.png",
    link: "https://www.tiktok.com/@ft.kaua?is_from_webapp=1&sender_device=pc",
  },
];

export default function SocialGrid() {
  return (
    <section className="social-section">
      <div className="container">
        <motion.div
          className="social-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {socialItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-card${index === socialItems.length - 1 ? " social-card-last" : ""}`}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="social-overlay"></div>

              <motion.img
                src={item.icon}
                alt={item.name}
                className={`social-icon-img${item.name === "TikTok" ? " social-icon-img--tiktok" : ""}`}
                whileHover={{ rotate: 3, scale: 1.08 }}
                transition={{ duration: 0.25 }}
              />

              <span className="social-name">{item.name}</span>
              <span className="social-action">{item.action}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}