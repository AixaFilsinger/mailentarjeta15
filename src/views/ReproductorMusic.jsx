
import corona from "../assets/corona.png";
import { useState, useRef } from "react";

const ReproductorMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="d-flex flex-column justify-content-center align-items-center repro">
      {/* 👑 Imagen de la corona */}
      <img src={corona} alt="Corona" width={120} className="mb-3" />

      {/* 🎵 Botón de Play / Pause */}
      <button className="btn-music" onClick={togglePlay}>
        {isPlaying ? (
          <i className="bi bi-pause-fill"></i>
        ) : (
          <i className="bi bi-play-fill"></i>
        )}
      </button>

      {/* 🎧 Audio */}
      <audio ref={audioRef} src="/music/Ayrton.mp3" preload="auto"></audio>
    </section>
  );
};

export default ReproductorMusic;

