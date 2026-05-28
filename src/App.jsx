import { useState } from "react";
import "./App.css";

import heroBg from "./assets/hero-bg.png";
import posterTrauTem from "./assets/poster-trau-tem.png";
import posterHySu from "./assets/poster-hy-su.png";
import posterChiDo from "./assets/poster-chi-do.png";

function App() {
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <a className="nav-click book-ticket" href="#ticket" />
        <a className="nav-click explore" href="#explore" />
        <a className="nav-click organizer" href="#organizer" />

        <img
          src={posterTrauTem}
          className="poster poster-trau-tem"
          onClick={() => setZoomImg(posterTrauTem)}
          alt="Trầu têm duyên khởi"
        />

        <img
          src={posterHySu}
          className="poster poster-hy-su"
          onClick={() => setZoomImg(posterHySu)}
          alt="Hỷ sự viên mãn"
        />

        <img
          src={posterChiDo}
          className="poster poster-chi-do"
          onClick={() => setZoomImg(posterChiDo)}
          alt="Chỉ đỏ đưa duyên"
        />

        {zoomImg && (
          <div className="zoom-overlay" onClick={() => setZoomImg(null)}>
            <img src={zoomImg} alt="Zoom poster" />
          </div>
        )}
      </section>
    </>
  );
}

export default App;