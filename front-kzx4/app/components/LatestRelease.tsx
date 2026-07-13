"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { fadeUp, fadeLeft, fadeRight } from "../animations";

export default function LatestRelease() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const audioSrc = "/audio/tevito%20masterizado%20(1).wav";

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleJump = (offset: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextTime = Math.min(Math.max(audio.currentTime + offset, 0), duration || audio.currentTime);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

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
          <div className="section-heading">
            <div className="section-title-line" />
            <div>
              <h2 className="section-title">ÚLTIMO LANÇAMENTO</h2>
              <span className="section-subtitle">Música</span>
            </div>
          </div>

          <div className="section-number"></div>
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

              <motion.h3
                className="release-title"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                Escutando Tevito
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
  <p className="parallel-cinematic-text"></p>
</motion.div>

              <motion.div
                className="release-actions"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <motion.a
                  href="https://open.spotify.com/album/3UMCWdwysHZKZFtKR0rIDy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotify-button"
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  initial={false}
                >
                  Ouça no Spotify
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/watch?v=8JxQclGQn-g&list=OLAK5uy_khW6OhuyTCSAWvPw25HePLWZc-61dkiWQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="spotify-button"
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  initial={false}
                >
                  Ouça no YouTube
                </motion.a>

                <div className="player-area">
                  <audio ref={audioRef} src={audioSrc} preload="metadata" />

                  <div className="player-meta">
                    <div className="player-title"></div>
                    <div className="player-subtitle"></div>
                  </div>

                  <div className="progress-bar">
                    <input
                      type="range"
                      min={0}
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleSeek}
                      className="player-seeker"
                      aria-label="Progresso da música"
                    />
                  </div>

                  <div className="player-bottom">
                    <div className="player-controls">
                      <button className="player-icon" aria-label="Voltar 10 segundos" onClick={() => handleJump(-10)}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                          <path d="M18 5.5L9 12l9 6.5V5.5zM8 5.5L0 12l8 6.5V5.5z" />
                        </svg>
                      </button>
                      <button className="play-button" aria-label={isPlaying ? "Pausar" : "Tocar"} onClick={togglePlay}>
                        {isPlaying ? (
                          <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                            <rect x="6" y="5" width="4" height="14" />
                            <rect x="14" y="5" width="4" height="14" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                            <polygon points="8,5 19,12 8,19" />
                          </svg>
                        )}
                      </button>
                      <button className="player-icon" aria-label="Avançar 10 segundos" onClick={() => handleJump(10)}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                          <path d="M6 5.5l9 6.5-9 6.5V5.5zm10 0l8 6.5-8 6.5V5.5z" />
                        </svg>
                      </button>
                    </div>
                    <div className="player-time">
                      {formatTime(currentTime)} / {duration ? formatTime(duration) : "0:00"}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}