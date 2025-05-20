import Collapse from "./Collapse";

function About() {
  return (
    <div className="about">
      <div className="banner-about"></div>
      <section className="collapse-section">
        <Collapse
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations 
          sont régulièrement vérifiées par nos équipes."
          type="about"
        />
        <Collapse
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbations du voisinage 
          entraînera une exclusion de la plateforme."
          type="about"
        />
        <Collapse
          title="Service"
          text="La qualité du service est au cœur de nos engagements chez Kasa. 
          Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes 
          où nos locataires, soit empreinte de respect et de bienveillance."
          type="about"
        />
        <Collapse
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes 
          que pour les voyageurs, chaque logement correspond aux critères de 
          sécurité établi par nos services. En laissant une note aussi bien à 
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les 
          standards sont bien respectés. Nous organisons également des ateliers 
          sur la sécurité domestique pour nos hôtes."
          type="about"
        />
      </section>
    </div>
  );
}

export default About;
