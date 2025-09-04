import Hero from '@/components/Hero'

export default function Page(){
  return (
    <>
      <Hero />
      <section>
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.</p>
          <div className="grid grid-3">
            {[
              {title:'Modern Stack', text:'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'},
              {title:'Performance', text:'Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.'},
              {title:'Support', text:'Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod.'},
            ].map((item,i)=> (
              <article className="card" key={i}>
                <div className="p">
                  <h3 style={{marginTop:0}}>{item.title}</h3>
                  <p style={{marginBottom:0}}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
