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

import section3Bg from "./assets/section3-bg.png";
import ticketGroup from "./assets/ticket-group.png";

function App() {
  const [zoomImg, setZoomImg] = useState(null);

  const [tickets, setTickets] = useState({
  khoiLe: 0,
  thanhLe: 0,
  vienMan: 0,
});

const ticketPrices = {
  khoiLe: 100000,
  thanhLe: 150000,
  vienMan: 200000,
};

const updateTicket = (type, value) => {
  setTickets((prev) => ({
    ...prev,
    [type]: Math.max(0, prev[type] + value),
  }));
};

const totalPrice =
  tickets.khoiLe * ticketPrices.khoiLe +
  tickets.thanhLe * ticketPrices.thanhLe +
  tickets.vienMan * ticketPrices.vienMan;

const formatPrice = (price) => {
  return price.toLocaleString("vi-VN") + "VNĐ";
};

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

      <section
        id="ticket"
        className="ticket-section"
        style={{ backgroundImage: `url(${section3Bg})` }}
      >
        <img
          src={ticketGroup}
          className="ticket-group-img"
          onClick={() => setZoomImg(ticketGroup)}
          alt="Bộ vé Bách Niên Hỷ Sự"
        />

        <TicketCounter
          className="ticket-khoi-le"
          label="KHỞI LỄ"
          quantity={tickets.khoiLe}
          price={ticketPrices.khoiLe}
          onMinus={() => updateTicket("khoiLe", -1)}
          onPlus={() => updateTicket("khoiLe", 1)}
        />

        <TicketCounter
          className="ticket-thanh-le"
          label="THÀNH LỄ"
          quantity={tickets.thanhLe}
          price={ticketPrices.thanhLe}
          onMinus={() => updateTicket("thanhLe", -1)}
          onPlus={() => updateTicket("thanhLe", 1)}
        />

        <TicketCounter
          className="ticket-vien-man"
          label="VIÊN MÃN"
          quantity={tickets.vienMan}
          price={ticketPrices.vienMan}
          onMinus={() => updateTicket("vienMan", -1)}
          onPlus={() => updateTicket("vienMan", 1)}
        />

        <div className="ticket-total-box">
          <span>TỔNG:</span>
          <strong>{formatPrice(totalPrice)}</strong>
          <button onClick={() => alert("Đặt vé thành công!")}>
            ĐẶT VÉ
          </button>
        </div>
      </section>
    </>
  );
}

function TicketCounter({
  className = "",
  label,
  quantity,
  price,
  onMinus,
  onPlus,
}) {
  return (
    <div className={`ticket-counter ${className}`}>
      <div>
        <strong>{label}</strong>
        <span>{price.toLocaleString("vi-VN")}VNĐ</span>
      </div>

      <div className="ticket-actions">
        <button onClick={onMinus}>-</button>
        <span>{quantity}</span>
        <button onClick={onPlus}>+</button>
      </div>
    </div>
  );
}

export default App;