function About() {
  return (
    <main className="about-page">

      <section className="about-header">
        <p>OUR STORY</p>
        <h1>More Than Just a Restaurant.</h1>
      </section>

      <section className="about-story">
        <div className="about-story-image">
          <img
           src="/src/assets/optimized/04-chicken-biryani.jpg"
            alt="Savoré signature dish"
          />
        </div>

        <div className="about-story-content">
          <p>THE SAVORÉ STORY</p>

          <h2>
            A love for food,
            <br />
            served beautifully.
          </h2>

          <span>
            Savoré was created around a simple idea: great food should bring
            people together. Our menu blends the richness of Desi cuisine
            with the elegance of Continental dining, creating an experience
            that feels familiar yet refined.
          </span>
        </div>
      </section>

      <section className="about-chef">
        <div className="about-chef-inner">

          <div className="about-chef-content">
            <p>MEET OUR CHEF</p>

            <h2>
              Tradition meets
              <br />
              modern craft.
            </h2>

            <span>
              Our kitchen is guided by a passion for honest ingredients,
              thoughtful preparation, and flavors that deserve to be
              remembered.
            </span>
          </div>

          <div className="about-chef-image">
            <img
              src="/src/assets/optimized/13-grilled-beef-steak.jpg" 
              alt="Savoré signature dish"
            />
          </div>

        </div>
      </section>

      <section className="about-philosophy">
        <p>OUR PHILOSOPHY</p>

        <h2>What defines Savoré.</h2>

        <div className="philosophy-grid">

          <div className="philosophy-card">
            <strong>01</strong>
            <h3>Quality</h3>
            <span>
              Carefully selected ingredients and thoughtful preparation.
            </span>
          </div>

          <div className="philosophy-card">
            <strong>02</strong>
            <h3>Flavor</h3>
            <span>
              Bold Desi flavors balanced with modern culinary techniques.
            </span>
          </div>

          <div className="philosophy-card">
            <strong>03</strong>
            <h3>Experience</h3>
            <span>
              A warm, refined setting designed to make every visit memorable.
            </span>
          </div>

        </div>
      </section>

    </main>
  )
}

export default About