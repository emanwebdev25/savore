function Contact() {
  return (
    <main className="contact-page">

      <section className="contact-header">
        <p>FIND US</p>
        <h1>Come Dine With Us.</h1>
        <span>
          We would love to welcome you at Savoré.
        </span>
      </section>

      <section className="contact-info">

        <div className="contact-card">
          <span>01</span>
          <h2>Visit Us</h2>
          <p>
            24 MM Alam Road,
            <br />
            Gulberg III, Lahore
          </p>
        </div>

        <div className="contact-card">
          <span>02</span>
          <h2>Opening Hours</h2>
          <p>
            Monday – Sunday
            <br />
            12:00 PM – 11:30 PM
          </p>
        </div>

        <div className="contact-card">
          <span>03</span>
          <h2>Get in Touch</h2>
          <p>
            +92 300 1234567
            <br />
            hello@savore.pk
          </p>
        </div>

      </section>

      <section className="contact-map">
        <div>
          <p>LAHORE, PAKISTAN</p>
          <h2>Right in the heart of the city.</h2>
        </div>
      </section>

    </main>
  )
}

export default Contact