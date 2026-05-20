"use client";

import { useState, useRef } from "react";

export default function VideoSection() {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPaused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <section className="relative overflow-hidden" aria-labelledby="video-heading">
      <div className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex items-center">

        {/* Video real de fondo */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >

          <source src="/videos/drone.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Play/Pause button */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border border-white/10 scale-110 animate-pulse-slow" />
                <div className="absolute inset-0 rounded-full border border-white/5 scale-125 animate-pulse-slow" style={{ animationDelay: "1s" }} />
                <button
                  onClick={toggleVideo}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center
                            border border-white/20 backdrop-blur-sm bg-white/5
                            transition-all duration-500 hover:border-forest-400/60 hover:bg-forest-900/40
                            hover:shadow-[0_0_50px_rgba(77,115,64,0.3)] active:scale-95"
                  aria-label={isPaused ? "Reproducir video" : "Pausar video"}
                >
                  {isPaused ? <PlayIcon /> : <PauseIcon />}
                </button>
              </div>
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <div className="reveal flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-8 h-px bg-forest-400" />
                <span className="section-label">Así se vive</span>
              </div>
              <h2
                id="video-heading"
                className="reveal text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-6"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
              >
                MIRÁ NUESTRAS<br />
                <span className="text-gradient">EXPERIENCIAS</span>
              </h2>
              <p className="reveal text-white/50 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
                Naturaleza, aventura y momentos que se quedan para siempre.
              </p>
              <button
                onClick={toggleVideo}
                className="reveal inline-flex items-center gap-3 border border-forest-600/50 hover:border-forest-400
                          text-white/70 hover:text-white text-sm px-6 py-3 rounded-sm
                          transition-all duration-300 hover:bg-forest-900/30"
                style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}
              >
                <PlayIcon small />
                {isPaused ? "REPRODUCIR VIDEO" : "PAUSAR VIDEO"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlayIcon({ small = false }: { small?: boolean }) {
  const size = small ? 14 : 28;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1" aria-hidden="true"><path d="M5 3l14 9-14 9V3z" /></svg>;
}
function PauseIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z" /></svg>;
}
