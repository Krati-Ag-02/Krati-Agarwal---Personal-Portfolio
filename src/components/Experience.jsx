export default function Experience() {

  const data = [
    {
      role: "Counselling Trainee",
      company: "LawSikho (Addictive Learning)",
      duration: "Feb 2026 – Mar 2026",
      points: [
        "Interacted with students through calls and understood their requirements",
        "Improved communication and interpersonal skills through real conversations",
        "Handled follow-ups and maintained basic CRM updates"
      ]
    }
  ];

  return (
    <section id="experience" className="section">

      <h2 className="section-title">EXPERIENCE</h2>

      <div className="grid">

        {data.map((exp,i)=>(
          <div key={i} className="card">

            <h3>{exp.role}</h3>
            <p>{exp.company} • {exp.duration}</p>

            <ul >
              {exp.points.map((p,j)=>(
                <li key={j}>{p}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </section>
  );
}