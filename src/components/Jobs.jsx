import Job from "./Job";

const Jobs = () => {
  return (
    <main>
      <Job
        className="red"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        className="green"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="blue"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="pink"
        title="Responsable d'Atelier (H/F)"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        className="red"
        title="Responsable d'Atelier (H/F)"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />
      <Job
        className="green"
        title="Responsable d'Atelier (H/F)"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />
      <Job
        className="yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDI"
        country="USA"
        city="New-York"
      />
      <Job
        className="blue"
        title="Responsable d'Atelier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </main>
  );
};

export default Jobs;
