export default function Certifications() {

  const data = [
    {
      title: "Leadership and Team Effectiveness",
      org: "NPTEL",
      year: "Jan 2025 – Apr 2025"
    },
    {
      title: "Organizational Behaviour",
      org: "NPTEL",
      year: "July 2024 – October 2024"
    }
  ];

  return (
    <section id="certifications" className="section">

      <h2 className="section-title">CERTIFICATIONS</h2>

      <div className="grid grid-2">
        {data.map((c,i)=>(
          <div key={i} className="card">
            <h3>{c.title}</h3>
            <p>{c.org}</p>
            <p>{c.year}</p>
          </div>
        ))}
      </div>

    </section>
  );
}