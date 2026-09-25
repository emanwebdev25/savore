import { useState } from "react"

function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="reservation-page">

      <section className="reservation-hero">
        <div>
          <p>RESERVATIONS</p>

          <h1>
            Make an
            <br />
            occasion of it.
          </h1>

          <span>
            Reserve your table and settle in for an evening of
            thoughtfully prepared food, warm hospitality, and
            memorable moments.
          </span>
        </div>

        <div className="reservation-note">
          <span>✦</span>
          <p>GOOD FOOD.<br />GOOD COMPANY.</p>
        </div>
      </section>

      <section className="reservation-main">

        <div className="reservation-info">

          <div>
            <p>BEFORE YOU VISIT</p>
            <h2>A table prepared<br />just for you.</h2>
          </div>

          <div className="reservation-details">

            <div>
              <span>DINING HOURS</span>
              <p>
                Monday – Sunday
                <br />
                12:00 PM – 11:30 PM
              </p>
            </div>

            <div>
              <span>LOCATION</span>
              <p>
                24 MM Alam Road
                <br />
                Gulberg III, Lahore
              </p>
            </div>

            <div>
              <span>LARGER PARTIES</span>
              <p>
                For groups of 8 or more,
                <br />
                please contact us directly.
              </p>
            </div>

          </div>

        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>

          <div className="form-title">
            <p>BOOK A TABLE</p>
            <h2>Your Details</h2>
          </div>

          <div className="form-row">

            <div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Your phone number"
                required
              />
            </div>

          </div>

          <div className="form-row">

            <div>
              <label>Date</label>
              <input type="date" required />
            </div>

            <div>
              <label>Time</label>
              <input type="time" required />
            </div>

          </div>

          <div>
            <label>Guests</label>

            <select defaultValue="" required>
              <option value="" disabled>
                Number of guests
              </option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8 Guests</option>
            </select>
          </div>

          <div>
            <label>Special Requests</label>

            <textarea
              rows={3}
              placeholder="Birthday, anniversary, seating preference..."
            ></textarea>
          </div>

          <button type="submit">
            Request a Reservation
          </button>

          {submitted && (
            <p className="reservation-success">
              Your reservation request has been received. We look forward
              to welcoming you at Savoré.
            </p>
          )}

        </form>

      </section>

    </main>
  )
}

export default Reservation