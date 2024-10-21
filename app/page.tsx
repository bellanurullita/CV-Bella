import Hero from "./components/hero";

import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import "./bella-style.css";
import RiwayatPendidikan from "./components/riwayatpendidikan";


export default function CVonline() {
  return (   
    <section>
      <Hero/>
      <RiwayatPekerjaan/>
      <RiwayatPendidikan/>
    </section>
  );
}
