// src/Home.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function Home() {
  const [checked, setChecked] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  // Enable music on first interaction
  useEffect(() => {
    const enableSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener("mousemove", enableSound);
      window.removeEventListener("click", enableSound);
    };
    window.addEventListener("mousemove", enableSound);
    window.addEventListener("click", enableSound);

    return () => {
      window.removeEventListener("mousemove", enableSound);
      window.removeEventListener("click", enableSound);
    };
  }, []);

  // Navigate to Hell page when checked
  useEffect(() => {
    if (checked) {
      navigate("/hell");
    }
  }, [checked, navigate]);

  return (
    <>
      <audio ref={audioRef} autoPlay loop muted>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <div className="captcha-container">
        <h2>ReyRey Captcha</h2>
        <p>Please check the box below to prove you are not a robot.</p>
        <label className="captcha-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
          />
          I'm not a robot
        </label>
        <img
          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
          alt="captcha"
          style={{ marginTop: '16px', width: '48px', height: '48px' }}
        />
      </div>
    </>
  )
}

export default Home