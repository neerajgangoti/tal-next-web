export const metadata = { title: 'Services — The ArtLogic' }

const services = [
  { title:'Web Development', text: 'Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title:'UI/UX Design', text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est.' },
  { title:'eCommerce', text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla.' },
  { title:'Branding', text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.' },
  { title:'SEO & Analytics', text: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.' },
  { title:'Support', text: 'Maecenas sed diam eget risus varius blandit sit amet non magna.' },
];

export default function ServicesPage(){
  return (
    <section>
      <div className="container">
        <h1 className="section-title">Services</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod.</p>
        <div className="grid grid-3">
          {services.map((s, i)=> (
            <article className="card" key={i}>
              <div className="p">
                <h3 style={{marginTop:0}}>{s.title}</h3>
                <p style={{marginBottom:0}}>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
