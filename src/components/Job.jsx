const Job = (props) => {
  console.log(props);
  return (
    <article className={props.className}>
      <h2>{props.title}</h2>
      <div className="bottom-article">
        <p>{props.contractType}</p>
        <p>{props.country}</p>
        <p>{props.city}</p>
      </div>
    </article>
  );
};

export default Job;
