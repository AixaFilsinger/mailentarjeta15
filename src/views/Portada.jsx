import quince from "../assets/15.png";
import princesa from "../assets/princesa.jpg";
import castillo from "../assets/castillo.jpg";

const Portada = () => {
  return (
    <section className="d-flex flex-column align-items-center  portada">
      <aside className="linea">
        <h2 className="enfoque mis">
          {"mis".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
        <img src={quince} alt="" width={300} />
        <h2 className="enfoque años">
          {"años".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
      </aside>

      <h1 className="enfoque">
        {"Pilar".split("").map((letra, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {letra}
          </span>
        ))}
      </h1>
      <img src={castillo} alt="" className="decor decor-izq" width={500} />
      <img src={princesa} alt="" className="decor decor-der" width={500} />
    </section>
  );
};

export default Portada;
