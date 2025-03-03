import React from 'react'

function Card_text() {
    return (
        <div className="card-columns">
            <section className="text-content">
                <p>
                    A continuacion podras consultar los datos del clima en el formulario que estas viendo en pantalla, los datos aparecen en las tarjetas con sus correspondientes.
                </p>
                <p>
                    (Temperaturas, Region/Pais/Estado)
                </p>
                <p>
                    Creador: Eber Colmenares
                </p>
            </section>
            <section className="text-content">
                <p>
                    Esta APP Utiliza una Api llamada OpenWheather, Diseñada para obtener datos del clima en tiempo real, para poder utilizarla necesitas introducir tu ciudad, pais y estado, una vez introducidos los datos, presiona el boton "Obtener Clima" y listo, podras ver los datos del clima en las tarjetas.
                </p>
            </section>
        </div>
    )
}

export default Card_text
