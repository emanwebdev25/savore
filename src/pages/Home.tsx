import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Home() {
    return (
        <main>
            <Navbar />
            <section className="hero-section">
                <div className="hero-content">
                    <p>WELCOME TO SAVORÉ</p>
                    <h1>Where Every Meal<br />Becomes a Memory.</h1>
                    <span>
                        A refined dining experience bringing together
                        the warmth of Desi flavors and the elegance of Continental cuisine.
                    </span>

                    <div className="hero-buttons">
                        <a href="/menu">Explore Menu</a>
                        <a href="/reservation">Reserve a Table</a>
                    </div>
                </div>
            </section>
            <div className="section-divider">
                <span>SAVORÉ</span>
            </div>
            <section className="intro-section">
                <div className="intro-image">
                    <img
                       src="/optimized/04-chicken-biryani.jpg"
                        alt="Savoré signature dish"
                    />
                </div>

                <div className="intro-content">
                    <p>THE SAVORÉ EXPERIENCE</p>

                    <h2>
                        Crafted with tradition.
                        <br />
                        Served with elegance.
                    </h2>

                    <span>
                        Savoré brings together the richness of Desi cuisine and the refinement
                        of Continental dining, creating a table where every dish has a story.
                    </span>

                    <div className="intro-details">
                        <div>
                            <strong>01</strong>
                            <p>Authentic Flavors</p>
                        </div>

                        <div>
                            <strong>02</strong>
                            <p>Modern Dining</p>
                        </div>

                        <div>
                            <strong>03</strong>
                            <p>Made to Remember</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="featured-intro">
                <span>✦</span>
            </div>
            <section className="featured-section">
                <div className="featured-heading">
                    <div>
                        <p>FROM OUR KITCHEN</p>
                        <h2>Signature Dishes</h2>
                    </div>

                    <span>
                        A selection of dishes that represent the flavors
                        and character of Savoré.
                    </span>
                </div>

                <div className="featured-grid">
                    <div className="featured-card">
                        <img
                            src="/optimized/01-chicken-karahi.jpg"
                            alt="Chicken Karahi"
                        />
                        <div>
                            <h3>Chicken Karahi</h3>
                            <span>PKR 1,850</span>
                        </div>
                    </div>

                    <div className="featured-card">
                        <img
                            src="/optimized/13-grilled-beef-steak.jpg"
                            alt="Grilled Beef Steak"
                        />
                        <div>
                            <h3>Grilled Beef Steak</h3>
                            <span>PKR 2,850</span>
                        </div>
                    </div>

                    <div className="featured-card">
                        <img
                            src="/optimized/33-molten-lava-cake.jpg"
                            alt="Molten Lava Cake"
                        />
                        <div>
                            <h3>Molten Lava Cake</h3>
                            <span>PKR 750</span>
                        </div>
                    </div>
                </div>
                <div className="featured-bottom">
                    <span>DISCOVER THE COMPLETE MENU</span>
                    <a href="/menu">View Menu</a>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Home