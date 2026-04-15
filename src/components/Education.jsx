export default function Education() {

  const data = [
    {
      title: "B.Tech in Computer Science",
      place: "JECRC University, Jaipur",
      duration: "2022 – 2026",
      score: "77%"
    },
    {
      title: "Senior Secondary Education",
      place: "SRGMSS School, Agra",
      duration: "2022",
      score: "79%"
    },
    {
      title: "Secondary Education",
      place: "SRGMSS School, Agra",
      duration: "2020",
      score: "85%"
    }
  ];

  return (
    <section id="education" className="section">

      <h2 className="section-title">EDUCATION</h2>

      <div className="grid grid-2">

        {data.map((e,i)=>(
          <div key={i} className="card">
            <h3>{e.title}</h3>
            <p>{e.place}</p>
            <p>{e.duration}</p>
            <p >{e.score}</p>
          </div>
        ))}

      </div>

    </section>
  );
}