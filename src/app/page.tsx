import ContactComponent from "../../Components/ContactComponent";
import FooterComponent from "../../Components/FooterComponent";
import MainComponent from "../../Components/MainComponent";
import MapComponent from "../../Components/MapComponent";
import NumberComponent from "../../Components/NumberComponent";
import ReasonComponent from "../../Components/ReasonComponent";
import ServiceComponent from "../../Components/ServiceComponent";
import './globals.css'

export default function Home() {
  return (
    <main className="page">
      <MainComponent />
      <ServiceComponent />
      <ReasonComponent />
      <NumberComponent />
      <ContactComponent />
      <MapComponent />
      <FooterComponent />
    </main>
  );
}
