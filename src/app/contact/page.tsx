import ContactForm from './ContactForm';

export const metadata = { title: 'Contact Us — The ArtLogic' }

export default function ContactPage () {
  return (
    <section>
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.</p>
        <ContactForm /> 
      </div>
    </section>
  )
}
