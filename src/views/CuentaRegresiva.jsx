import { useEffect, useState } from "react";
import adorno1 from "../assets/adorno1.png"
import adorno2 from "../assets/adorno2.png"
import adorno3 from "../assets/adorno3.png"
import adorno4 from "../assets/adorno4.png"
const CuentaRegresiva = () => {
  const targetDate = new Date("2025-11-08T21:30:00").getTime(); // FECHA DEL EVENTO

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0");
        const hours = String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <section className="mb-5">
     <aside className="d-flex justify-content-around">
      <img src={adorno1} alt="" width={170} />
      <img src={adorno2} alt="" width={170}/>
     </aside>

      <section className="cuentaRe d-flex flex-column justify-content-center align-items-center text-center pe-3">
        <h2 className="h2-cuentaRe ">¡Tan solo faltan!</h2>
        <aside className="px-2 pb-2">
          <div className="d-flex flex-column align-items-center justify-content-center contador">
            <div className="d-flex gap-2">
              <div className="text-center">
                <h3>{timeLeft.days}</h3>
                <small>Días</small>
              </div>
              <div className="text-center">
                <h3>{timeLeft.hours}</h3>
                <small>Horas</small>
              </div>
              <div className="text-center">
                <h3>{timeLeft.minutes}</h3>
                <small>Minutos</small>
              </div>
              <div className="text-center">
                <h3>{timeLeft.seconds}</h3>
                <small>Segundos</small>
              </div>
              
            </div>
          </div>
        </aside>
        <h3 className="mt-3">Para este día tan especial</h3>
      </section>
      <aside className="d-flex justify-content-around">
      <img src={adorno3} alt="" width={170} />
      <img src={adorno4} alt="" width={170}/>
     </aside>
    </section>
  );
};

export default CuentaRegresiva;
