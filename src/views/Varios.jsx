import brillo from "../assets/star.png";
import boladisco from "../assets/boladiscoN.png";
import dressCode from "../assets/dresscodeN.png";
import Notamusical from "../assets/discorosa.png";
import copas from "../assets/copasN.png";
import asistencia from "../assets/invitacionN.png";
import regalo from "../assets/regaloN.png";
import qr from "../assets/qr.jpg";

import { useState } from "react";

const Varios = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="m-0 p-0 container">
      <article className="varios0 pt-4 pb-4">
        <section className="container d-flex flex-column align-items-center varios">
          <article className="row">
            <aside className="col-xs-12 text-center cuando mb-4 mt-5 position-relative">
              <img src={brillo} alt="" className="brillo brillo-top" />
              <img src={copas} alt="" width={150} />
              <h4
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Fiesta
              </h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                8 de Noviembre <br />
                21:30hs
              </p>
            </aside>
            <aside className="col-xs-12 text-center donde mb-4 position-relative">
              <img src={boladisco} alt="" width={100} />
              <h4
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="mt-5"
              >
                ¿Dónde?
              </h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Salón Heleh
                <br />
                San Andrés.
              </p>
              <button
                className="btn-varios mt-3 mb-5"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/wdiW8cDNYU9b23Sb7"
                  )
                }
              >
                CÓMO LLEGAR
              </button>
              <img src={brillo} alt="" className="brillo brillo-bottom" />
            </aside>
            <aside className="col-xs-12 text-center dressCode mb-5">
              <img src={dressCode} alt="" width={100} />
              <h4
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="mt-4"
              >
                DressCode
              </h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Elegante
                <br /> Evitar el color rosa
              </p>
              <div className="color-palette">
                <div className="color-circle verde" title="Verde"></div>
              </div>
            </aside>
            <aside className="col-xs-12 text-center playlist mb-4">
              <img src={Notamusical} alt="" width={150} />
              <h4
                className="fs-1 mt-5"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Playlist
              </h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                ¡Creemos la playlist de la noche juntos!
              </p>
              <button
                className="btn-varios mt-3 mb-5"
                onClick={() =>
                  window.open(
                    "https://open.spotify.com/playlist/2gUuOFCXoBFirMlfyc2NkG?si=gxKsaMAFRkaaGOVbLOrTdw&pt=ae8af048bf3ba0d88fa10d1059d1c000"
                  )
                }
              >
                Sugerir canción
              </button>
            </aside>
            <aside className="col-xs-12 text-center asistencia mb-4">
              <img src={asistencia} alt="" width={100} />
              <h4 className="mt-5">Asistencia</h4>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Soñé con este día y me gustaría vivirlo con quienes más
                quiero...
              </p>
              <p>Confirma hasta el 29 de octubre</p>
              <button
                className="btn-varios mt-3 mb-2"
                onClick={() => window.open("https://wa.link/d4ye0i")}
              >
                Confirmar asistencia.
              </button>
            </aside>
            <aside className="col-xs-12 text-center regalo mb-5">
              <img src={regalo} alt="" width={100} />
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                El mejor regalo que pueda tener será tu presencia
              </p>
              <button
                className="btn-varios mt-3 mb-5"
                onClick={() => setShowModal(true)}
              >
                Enviar regalo
              </button>
              {/* Modal */}
              {showModal && (
                <div
                  className="modal-custom position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow text-center"
                  style={{
                    zIndex: 9999, // 🔑 siempre arriba de todo
                    width: "90%",
                    maxWidth: "350px",
                  }}
                >
                  <h5 className="mb-3 fw-bold modalh5">Datos para el regalo</h5>

                  {/* Los <p> ahora sí se ven */}
                  <p className="mb-1">
                    <strong>Alias:</strong> mailen.salazar09
                  </p>
                  <p className="mb-3">
                    <strong>A nombre de:</strong>
                    <br />
                    Mailen Salazar
                  </p>

                  <button
                    className="btn-varios2"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </aside>
            <aside className="col-xs-12 text-center cuando mb-4 mt-5 position-relative">
              <img src={brillo} alt="" className="brillo brillo-top" />

              <h4
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Subi tus fotos
              </h4>
              <img src={qr} alt="" width={300} />
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Compartamos los recuerdos de la noche juntos. ¡Subí tus fotos
                acá!
              </p>
            </aside>
          </article>
        </section>
      </article>

      <article className=" fin d-flex flex-column justify-content-center align-items-center position-relative">
        <img src={brillo} alt="" className="brillo brillo-top1" />
        <h4 data-aos="zoom-in-down">¡No podes faltar!</h4>
        <h2 data-aos="zoom-in-down">Mailen</h2>
        <img src={brillo} alt="" className="brillo brillo-bottom1" />
      </article>
    </section>
  );
};

export default Varios;
