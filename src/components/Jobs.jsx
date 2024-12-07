import Job from "./Job";
import data from "../assets/jobs.json";

// console.log(data);

const Jobs = () => {
  return (
    <section>
      {data.map((job) => {
        console.log(job);
        return (
          <Job
            key={job.id}
            title={job.title}
            contractType={job.contractType}
            city={job.city}
            country={job.country}
            className={job.className}
          />
        );
      })}
      {/* <Job
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        city="Sydney"
        country="Australie"
        className="red"
      />
      <Job
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        city="Pantin"
        country="France"
        className="green"
      />
      <Job
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        city="Paris"
        country="France"
        className="yellow"
      />
      <Job
        title="Chef de Projets"
        contractType="CDD"
        city="Paris"
        country="France"
        className="blue"
      />
      <Job
        title="Développeur React.js"
        contractType="CDI"
        city="Paris"
        country="France"
        className="pink"
      />
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        city="Sydney"
        country="Australie"
        className="blue"
      />
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        city="Sydney"
        country="Australie"
        className="blue"
      />
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        city="Sydney"
        country="Australie"
        className="blue"
      />
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        city="Sydney"
        country="Australie"
        className="blue"
      /> */}
    </section>
  );
};

export default Jobs;
