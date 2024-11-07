import Navbar from "./componentes/Navbar";
import MensajeBar from "./componentes/MensajeBar";
import Header from "./componentes/Header";
import Plan from "./componentes/Planes";
import PlanesPago from "./componentes/PlanesPagos";
import OpcPagos from "./componentes/OpcionesPago";
import CaractPago from "./componentes/CaractPago";
import Card from "./componentes/Card";

export default function Home() {
  return (
    <div>
      <MensajeBar />
      <Navbar />
      <Header />
      <Plan />
      <div className="bg-black py-16">
        <PlanesPago />
        <OpcPagos />
        <CaractPago />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-auto max-w-4x1">
        <Card
          title="Individual"
          offer="Gratis durante 2 meses"
          benefits={[
            "1 cuenta Premium",
            "Cancela cuando quieras",
            "Suscríbete o haz un solo pago",
          ]}
          buttonText1="Probar gratis durante 2 mes"
          buttonText2="Un solo pago"
          summary="Gratis durante 2 meses. Luego, 16.900 COP al mes. Oferta disponible solo si no has probado Premium. Consulta las condiciones. La oferta termina el 11 de noviembre de 2024."
          colorBorde="border-pink-500"
          colorTitulo="text-pink-300"
          colorBoton1="bg-pink-400"
          colorBoton2="bg-black"
          textColorBoton1="text-black"
          textColorBoton2="text-white"
        />
        <Card
          title="Lite"
          offer="12.900 COP durante 2 meses"
          benefits={[
            "1 cuenta Premium solo para móviles",
            "Escucha sin conexión en 1 dispositivo",
            "Audio de calidad básica",
            "Suscríbete o haz un solo pago",
          ]}
          buttonText1="Pasar a Premium Lite"
          buttonText2="Un solo Pago"
          summary="12.900 COP por 2 meses. Luego, 12.900 COP al mes. Oferta disponible solo si no has probado Premium. Consulta las condiciones."
          colorBorde="border-green-500" // Borde personalizado
          colorTitulo="text-green-400" // Título personalizado
          colorBoton1="bg-green-300" // Primer botón personalizado
          colorBoton2="bg-black"
          textColorBoton1="text-black"
        />
        <Card
          title="Estudiantes"
          offer="Gratis durante 1 mes"
          benefits={[
            "1 cuenta Premium verificada",
            "Descuento para estudiantes que cumplan los requisitos",
            "Cancela cuando quieras",
          ]}
          buttonText1="Probar gratis durante 1 mes"
          summary="Gratis durante 1 mes. Luego, 9300 COP al mes. Oferta disponible solo para estudiantes matriculados en un centro de educación superior acreditado y que no hayan probado Premium. Consulta las condiciones."
          colorBorde="border-purple-500" // Borde personalizado
          colorTitulo="text-purple-400" // Título personalizado
          colorBoton1="bg-purple-500" // Primer botón personalizado
          textColorBoton1="text-black"
        />
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mx-auto">
          <Card
            title="Duo"
            offer="21.400 COP al mes"
            benefits={[
              "2 cuentas Premium",
              "Cancela cuando quieras",
              "Suscríbete o haz un solo pago",
            ]}
            buttonText1="Pasar a Premium Duo"
            buttonText2="Un solo pago"
            summary="Para parejas que convivan. Consulta las condiciones."
            colorBorde="border-yellow-500" // Borde personalizado
            colorTitulo="text-yellow-300" // Título personalizado
            colorBoton1="bg-yellow-500" // Primer botón personalizado
            colorBoton2="bg-black"
            textColorBoton1="text-black"
          />
          <Card
            title="Familiar"
            offer="26.400 COP al mes"
            benefits={[
              "Hasta 6 cuentas Premium",
              "Controla el contenido etiquetado como explícito",
              "Cancela cuando quieras",
              "Suscríbete o haz un solo pago",
            ]}
            buttonText1="Pasar a Premium Familiar"
            buttonText2="Un solo pago"
            summary="Para hasta 6 miembros de una familia que convivan. Consulta las condiciones."
            colorBorde="border-blue-500" // Borde personalizado
            colorTitulo="text-blue-400" // Título personalizado
            colorBoton1="bg-blue-500" // Primer botón personalizado
            colorBoton2="bg-black"
            textColorBoton1="text-black"
          />
        </div>
      </div>
    </div>
  );
}
