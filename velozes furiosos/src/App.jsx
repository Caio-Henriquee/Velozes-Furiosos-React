import MonalisaImage from "./assets/monaliza.jpg";
import SkylinePrata from "./assets/skylinePrata2.jpg";
import EclipseVerde from "./assets/eclipseVerde.jpg";
import Dodge from "./assets/dodgeCharger.jpg";
import Card from "./componentes/Card_carros/Index.jsx";
import Header from "./componentes/Header/Index.jsx";
import EclipseSpyder from "./assets/eclipseSpyder.webp";
import Supra from "./assets/supra.jpg";

export default function App() {
  return (
    <div className="app">

      <Header></Header>
      <Card
        imagem={Dodge}
        filme="Dodge Charger"
        titulo="Velozes Furiosos 1"
      />

      <Card
        imagem={EclipseVerde}
        filme="Eclipse Verde"
        titulo="Velozes Furiosos 1"
      />

      <Card
        imagem={EclipseSpyder}
        filme="Eclipse Spyder"
        titulo="Velozes Furiosos 2"
      />

      <Card
        imagem={SkylinePrata}
        filme="Skyline Prata"
        titulo="Velozes Furiosos 1"
      />

      <Card
        imagem={MonalisaImage}
        filme=" Nissan Silvia "
        titulo="Velozes Furioso 3"
      />

      <Card
        imagem={Supra}
        filme="Toyota Supra"
        titulo="Velozes Furioso 1"
      />
    </div>
  );
}
