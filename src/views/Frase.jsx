import adorno from "../assets/adorno.png"

const Frase = () => {
    return (
        <section className="text-center container frase">
            <img src={adorno} alt="" width={250} className="mb-5" />
            <p>"Hoy dejo atrás mi niñez para comenzar 
                un nuevo capítulo lleno de sueños e ilusiones."
                </p>
                <img src={adorno} alt=""  width={250} className="mt-5 mb-5"/>
        </section>
    );
};

export default Frase;