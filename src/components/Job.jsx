const Job = (props) => {
  // la ternaire permet de faire un if/else directement dans le JSX
  // question ? siOui : siNon

  //   Le if inline :
  // question && siOui

  let object;

  return (
    // <div className={"job " + props.className}>
    <div className={`job ${props.className}`}>
      <h2>{props.title ? props.title : "Pas de titre disponible"}</h2>
      {/* <p>{`{`}</p> */}
      <p>{object && object.name}</p>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Job;
