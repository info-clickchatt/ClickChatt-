import { useState } from 'react'

export default function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // For MVP, just fake capture. Replace with real endpoint later.
    setSubmitted(true)
  }

  return (
    <div className="wrap">
      <header>
        <a className="logo" href="/">
          <img src="/favicon.svg" width="28" height="28" alt="CC"/>
          <span>ClickChatt</span>
        </a>
        <span className="pill">MVP • Launching</span>
      </header>

      <section>
        <h1>Find trusted local pros in Chattanooga</h1>
        <p className="lead">Hyperlocal directory. Fast responses. TrustLocal™ signals. We’re shipping the full experience soon — get early access.</p>

        <div className="cta">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <input type="email" required placeholder="Enter your email for early access" />
              <button className="btn" type="submit">Notify Me</button>
            </form>
          ) : (
            <a className="btn" href="#" onClick={(e)=>e.preventDefault()}>You’re on the list ✅</a>
          )}
          <a className="btn secondary" href="#" onClick={(e)=>e.preventDefault()}>Partner with ClickChatt</a>
        </div>

        <div className="grid">
          <div className="card"><strong>TrustLocal™</strong><br/> Real testimonials & fast response badges.</div>
          <div className="card"><strong>Categories</strong><br/> Cleaning, Handyman, Lawn Care and more.</div>
          <div className="card"><strong>Hyperlocal</strong><br/> Focused on Chattanooga neighborhoods.</div>
          <div className="card"><strong>Simple</strong><br/> Built to load fast and work on any device.</div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} ClickChatt — MVP</footer>
    </div>
  )
}
