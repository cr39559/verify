import { useState, useEffect } from 'react'
import './App.css'

import Hell from './Hell.jsx'

function App() {
  const [checked, setChecked] = useState(false)
  const [showHell, setShowHell] = useState(false)

  useEffect(() => {
    if (checked) {

      const audio = new Audio('/public/bad.mp3')
      audio.loop = true
      audio.play()

      setShowHell(true)

      document.body.style.background = "url('/public/death.gif')";
      const captchaImg = document.getElementById('captcha-image');
      if (captchaImg) {
        captchaImg.src = '/public/amogus.gif';
      }
    }
  }, [checked])

  useEffect(() => {
    let animationFrameIdGoteem, animationFrameIdPibble, animationFrameIdBone;
    const imgGoteem = document.getElementById('goteem-image');
    const imgPibble = document.getElementById('pibble-image');
    const imgBone = document.getElementById('bone-image');
    if (!imgGoteem || !imgPibble || !imgBone) return;

    // Initial positions and velocities for all images
    let x1 = 0, y1 = 0, dx1 = 2, dy1 = 2;
    let x2 = 100, y2 = 100, dx2 = 3, dy2 = 2.5;
    let x3 = 200, y3 = 200, dx3 = 2.2, dy3 = 1.8;

    function moveImageGoteem() {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const imgWidth = imgGoteem.offsetWidth;
      const imgHeight = imgGoteem.offsetHeight;

      x1 += dx1;
      y1 += dy1;

      if (x1 + imgWidth >= containerWidth || x1 <= 0) {
        dx1 = -dx1;
      }
      if (y1 + imgHeight >= containerHeight || y1 <= 0) {
        dy1 = -dy1;
      }

      imgGoteem.style.position = 'fixed';
      imgGoteem.style.left = `${x1}px`;
      imgGoteem.style.top = `${y1}px`;

      animationFrameIdGoteem = requestAnimationFrame(moveImageGoteem);
    }

    function moveImagePibble() {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const imgWidth = imgPibble.offsetWidth;
      const imgHeight = imgPibble.offsetHeight;

      x2 += dx2;
      y2 += dy2;

      if (x2 + imgWidth >= containerWidth || x2 <= 0) {
        dx2 = -dx2;
      }
      if (y2 + imgHeight >= containerHeight || y2 <= 0) {
        dy2 = -dy2;
      }

      imgPibble.style.position = 'fixed';
      imgPibble.style.left = `${x2}px`;
      imgPibble.style.top = `${y2}px`;

      animationFrameIdPibble = requestAnimationFrame(moveImagePibble);
    }

    function moveImageBone() {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      const imgWidth = imgBone.offsetWidth;
      const imgHeight = imgBone.offsetHeight;

      x3 += dx3;
      y3 += dy3;

      if (x3 + imgWidth >= containerWidth || x3 <= 0) {
        dx3 = -dx3;
      }
      if (y3 + imgHeight >= containerHeight || y3 <= 0) {
        dy3 = -dy3;
      }

      imgBone.style.position = 'fixed';
      imgBone.style.left = `${x3}px`;
      imgBone.style.top = `${y3}px`;

      animationFrameIdBone = requestAnimationFrame(moveImageBone);
    }

    if (checked) {
      moveImageGoteem();
      moveImagePibble();
      moveImageBone();
    } else {
      imgGoteem.style.position = '';
      imgGoteem.style.left = '';
      imgGoteem.style.top = '';
      imgPibble.style.position = '';
      imgPibble.style.left = '';
      imgPibble.style.top = '';
      imgBone.style.position = '';
      imgBone.style.left = '';
      imgBone.style.top = '';
    }

    return () => {
      cancelAnimationFrame(animationFrameIdGoteem);
      cancelAnimationFrame(animationFrameIdPibble);
      cancelAnimationFrame(animationFrameIdBone);
      if (imgGoteem) {
        imgGoteem.style.position = '';
        imgGoteem.style.left = '';
        imgGoteem.style.top = '';
      }
      if (imgPibble) {
        imgPibble.style.position = '';
        imgPibble.style.left = '';
        imgPibble.style.top = '';
      }
      if (imgBone) {
        imgBone.style.position = '';
        imgBone.style.left = '';
        imgBone.style.top = '';
      }
    };
  }, [checked]);

  return (
    <>
      {showHell && <Hell />}
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
          id='bone-image'
          src="public/skull.gif"
          alt="Bone"
          style={{
            height: '250px',
            width: '200px',
            borderRadius: '10px',
            zIndex: 9999,
            display: checked ? 'block' : 'none'
          }}
        />
        <img
          id='captcha-image'
          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
          alt="captcha"
          style={{ marginTop: '16px', width: '48px', height: '48px' }}
        />
      </div>
      <img
        id='goteem-image'
        src="public/goteem.jpg"
        alt="Placeholder"
        style={{
          height: '250px',
          width: '200px',
          borderRadius: '10px',
          zIndex: 9999,
          display: checked ? 'block' : 'none'
        }}
      />
      <img
        id='pibble-image'
        src="public/pibble.jpg"
        alt="Placeholder"
        style={{
          height: '250px',
          width: '200px',
          borderRadius: '10px',
          zIndex: 9999,
          display: checked ? 'block' : 'none'
        }}
      />
    </>
  )
}

export default App
