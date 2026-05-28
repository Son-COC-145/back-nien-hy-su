import { useState } from "react";
import "./App.css";

import heroBg from "./assets/hero-bg.png";
import posterTrauTem from "./assets/poster-trau-tem.png";
import posterHySu from "./assets/poster-hy-su.png";
import posterChiDo from "./assets/poster-chi-do.png";

import section2Bg from "./assets/section2-bg.png";

import itemHyPhuc from "./assets/item-hy-phuc.png";
import itemTrauCau from "./assets/item-trau-cau.png";
import itemNghiLe from "./assets/item-nghi-le.png";
import itemTuongTac from "./assets/item-tuong-tac.png";

import gallery1 from "./assets/gallery-1.png";
import gallery2 from "./assets/gallery-2.png";
import gallery3 from "./assets/gallery-3.png";
import gallery4 from "./assets/gallery-4.png";

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

      <section
        id="explore"
        className="exhibition-section"
        style={{ backgroundImage: `url(${section2Bg})` }}
      >
        <img
          src={itemHyPhuc}
          className="exhibit-item item-hy-phuc"
          onClick={() => setZoomImg(itemHyPhuc)}
          alt=""
        />

        <img
          src={itemTrauCau}
          className="exhibit-item item-trau-cau"
          onClick={() => setZoomImg(itemTrauCau)}
          alt=""
        />

        <img
          src={itemNghiLe}
          className="exhibit-item item-nghi-le"
          onClick={() => setZoomImg(itemNghiLe)}
          alt=""
        />

        <img
          src={itemTuongTac}
          className="exhibit-item item-tuong-tac"
          onClick={() => setZoomImg(itemTuongTac)}
          alt=""
        />

        <img
          src={gallery1}
          className="gallery-img gallery-1"
          onClick={() => setZoomImg(gallery1)}
          alt=""
        />

        <img
          src={gallery2}
          className="gallery-img gallery-2"
          onClick={() => setZoomImg(gallery2)}
          alt=""
        />

        <img
          src={gallery3}
          className="gallery-img gallery-3"
          onClick={() => setZoomImg(gallery3)}
          alt=""
        />

        <img
          src={gallery4}
          className="gallery-img gallery-4"
          onClick={() => setZoomImg(gallery4)}
          alt=""
        />
      </section>
    </>
  );
}

export default App;