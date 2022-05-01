import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const About = () => {
  const profession = useSelector((state: RootState) => state.profession.value);

  return (
    <div className="about--box">
      <h2>About</h2>
      {profession ? (
        <p>
          Sono un Istruttore di Street Dance Professionista con dieci anni di
          esperienza nel modo della Danza appartenente alla cultura Hip Hop e
          dell'Intrattenimento. La mia carriera da istruttore mi ha portato ad
          accrescere le mie skills creative ed interpersonali, punti di forza
          che ritengo fondamentali.
        </p>
      ) : (
        <p>
          Fin da piccolo ho sempre avuto una passione per la tecnologia e per
          l'innovazione, passione che mi ha portato a questo punto della mia
          vita dove ho deciso di dedicarmi alla comprensione e alla natura di
          quest'ultime. La mia recente esperienza lavorativa è stata molto
          stimolante e per questo sono in cerca di esperienze e collaborazioni
          che mi aiutino ad integrare e perseguire gli studi fatti fin ora e le
          mie ambizioni.
        </p>
      )}
    </div>
  );
};

export default About;
