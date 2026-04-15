export default function Interests() {

  const data = [
    "Pencil Sketching",
    "Oil Pastel Painting"
  ];

  return (
    <section id="interests" className="section">

      <h2 className="section-title">INTERESTS</h2>

      <div className="grid grid-2">

        {data.map((i,index)=>(
          <div key={index} className="card">
            <h3>{i}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}