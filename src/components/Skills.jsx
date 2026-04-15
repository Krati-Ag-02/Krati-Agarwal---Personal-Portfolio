export default function Skills() {

  const skills = [
    {title:"Languages", items:["C","C++"]},
    {title:"Web Devlopment", items:["HTML","CSS","JavaScript","Bootstrap","Node.js","Express","EJS","React","REST APIs"]},
    {title:"Cloud & Database", items:["Firebase","DBMS"]},
    {title:"Core Fundamentals", items:["OOPS","DSA"]},
    {title:"Tools & Platforms", items:["Git","GitHub","WordPress"]},
    {title:"Soft Skills", items:["Adaptability","Patience","Organized"]}
  ];

  return (
    <section className="section">
      <h2 className="section-title">SKILLS</h2>

      <div className="grid grid-2">
        {skills.map((s,i)=>(
          <div key={i} className="card">
            <h3>{s.title}</h3>

            <div>
              {s.items.map((it,j)=>(
                <span key={j} className="tag">{it}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}