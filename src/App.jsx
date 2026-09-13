import './App.css'
import OfficerLogin from './pages/OfficerLogin.jsx'
import ProcurementDashboard from './pages/ProcurementDashboard.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

function Arrow() {
  return <span className="arrow">→</span>
}

function LeafIcon() {
  return <span className="leaf-icon">🌾</span>
}

function App() {

  /* ================= OFFICER LOGIN ================= */

  if (window.location.pathname === "/officer-login") {
    return <OfficerLogin />
  }

  /* ================= PROCUREMENT DASHBOARD ================= */

  if (window.location.pathname === "/procurement-dashboard") {
    return <ProcurementDashboard />
  }

  /* ================= ADMIN LOGIN ================= */

  if (window.location.pathname === "/admin-login") {
    return <AdminLogin />
  }

  /* ================= ADMIN DASHBOARD ================= */

  if (window.location.pathname === "/admin-dashboard") {
    return <AdminDashboard />
  }

  /* ================= LANDING PAGE ================= */

  return (
    <div className="landing-page">

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <img
          className="hero-image"
          src="/images/hero-farmer.jpeg"
          alt="Farmer working in an agricultural field"
        />

        <div className="hero-overlay"></div>

        {/* ================= NAVBAR ================= */}

        <header className="navbar">

          <div className="nav-container">

            <a href="/" className="brand">

              <img
                src="/images/logo.jpeg"
                alt="Farmer Procurement Logo"
              />

              <div className="brand-text">
                <strong>
                  Farmer Procurement
                </strong>

                <span>
                  Smart Procurement. Better Tomorrow.
                </span>
              </div>

            </a>


            <nav className="nav-links">

              <a
                href="#home"
                className="nav-btn active"
              >
                Home
              </a>

              <a
                href="#about"
                className="nav-btn"
              >
                About
              </a>

              <a
                href="#how-it-works"
                className="nav-btn"
              >
                How It Started
              </a>

              <a
                href="#help"
                className="nav-btn"
              >
                Help
              </a>

            </nav>


            <div className="nav-right">

              <button
                className="nav-btn language-btn"
                type="button"
              >
                🌐 English <span>⌄</span>
              </button>

              <a
                href="/register-farmer"
                className="nav-btn nav-get-started"
              >
                Get Started <Arrow />
              </a>

            </div>

          </div>

        </header>


        {/* ================= HERO CONTENT ================= */}

        <div className="hero-container">

          <div className="hero-content">

            <p className="welcome-text">
              Welcome to
            </p>

            <h1>
              Farmer <span>Procurement</span>
            </h1>

            <h2>
              Less waiting. More certainty.
            </h2>

            <p className="hero-description">
              A simple and transparent platform for
              <br />
              managing agricultural crop procurement.
            </p>

            <a
              href="#portals"
              className="hero-button"
            >
              <span>🌾</span>
              Explore Portals
              <Arrow />
            </a>


            <button
              className="watch-button"
              type="button"
            >

              <span className="play-circle">
                ▶
              </span>

              Watch Video

              <span>
                ▶
              </span>

            </button>


            <div className="hero-features">

              <span>
                🔊 Voice Assistance
              </span>

              <span>
                🌐 తెలుగు
              </span>

              <span>
                हिंदी
              </span>

              <span>
                English
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FLOWING TICKER ================= */}

      <div className="procurement-ticker-wrapper">

        <div className="procurement-ticker">

          <span className="ticker-text">
            Welcome to the Farmer Procurement Portal
          </span>

          <span className="ticker-star">
            ★
          </span>

          <span className="ticker-text">
            Welcome to the Farmer Procurement Portal
          </span>

          <span className="ticker-star">
            ★
          </span>

          <span className="ticker-text">
            Welcome to the Farmer Procurement Portal
          </span>

          <span className="ticker-star">
            ★
          </span>

          <span className="ticker-text">
            Welcome to the Farmer Procurement Portal
          </span>

          <span className="ticker-star">
            ★
          </span>

        </div>


        <div
          className="procurement-ticker"
          aria-hidden="true"
        >

          <span className="ticker-text">
            Welcome to the Farmer Procurement Portal
          </span>

          <span className="ticker-star">
            ★
          </span>

          <span className="ticker-text">
            Welcome to the Farmer Procurement Portal
          </span>

          <span className="ticker-star">
            ★
          </span>

          <span className="ticker-text">
            Welcome to the Farmer Procurement Portal
          </span>

          <span className="ticker-star">
            ★
          </span>

          <span className="ticker-text">
            Welcome to the Farmer Procurement Portal
          </span>

          <span className="ticker-star">
            ★
          </span>

        </div>

      </div>


      {/* ================= CHOOSE YOUR PORTAL ================= */}

      <section
        className="portals-section"
        id="portals"
      >

        <div className="section-heading">

          <div className="heading-title">

            <LeafIcon />

            <h2>
              CHOOSE YOUR PORTAL
            </h2>

            <LeafIcon />

          </div>

          <p>
            Access the platform according to your role.
          </p>

        </div>


        <div className="portal-grid">

          {/* ================= FARMER PORTAL ================= */}

          <div className="portal-card farmer-card">

            <div className="portal-image-wrapper">

              <img
                src="/images/farmer-portal.jpeg"
                alt="Farmer Portal"
              />

            </div>


            <div className="portal-content">

              <div className="portal-icon farmer-icon">
                🌾
              </div>

              <h3>
                FARMER PORTAL
              </h3>

              <p>
                Register your profile, book a slot,
                <br />
                track your token and procurement status.
              </p>

              <a
                href="/register-farmer"
                className="portal-button farmer-button"
              >
                Enter as Farmer <Arrow />
              </a>

            </div>

          </div>


          {/* ================= OFFICER PORTAL ================= */}

          <div className="portal-card officer-card">

            <div className="portal-image-wrapper">

              <img
                src="/images/officer-portal.jpeg"
                alt="Procurement Officer Portal"
              />

            </div>


            <div className="portal-content">

              <div className="portal-icon officer-icon">
                👤
              </div>

              <h3>
                PROCUREMENT OFFICER PORTAL
              </h3>

              <p>
                Manage farmers, queues and
                <br />
                procurement operations.
              </p>

              <a
                href="/officer-login"
                className="portal-button officer-button"
              >
                Access as Officer <Arrow />
              </a>

            </div>

          </div>


          {/* ================= ADMIN PORTAL ================= */}

          <div className="portal-card admin-card">

            <div className="portal-image-wrapper">

              <img
                src="/images/admin-portal.jpeg"
                alt="Admin Portal"
              />

            </div>


            <div className="portal-content">

              <div className="portal-icon admin-icon">
                🛡️
              </div>

              <h3>
                ADMIN PORTAL
              </h3>

              <p>
                Monitor and manage the entire
                <br />
                procurement network.
              </p>

              <a
                href="/admin-login"
                className="portal-button admin-button"
              >
                Access as Admin <Arrow />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROCUREMENT CHALLENGE ================= */}

      <section
        className="problem-section"
        id="about"
      >

        <div className="problem-container">

          <div className="problem-title">

            <span className="small-label">
              THE PROCUREMENT CHALLENGE
            </span>

            <h2>
              Procurement shouldn't
              <br />
              mean uncertainty.
            </h2>

          </div>


          <div className="problem-items">

            <div className="problem-item">

              <div className="problem-icon">
                ◷
              </div>

              <strong>
                Long waiting
              </strong>

              <span>
                periods
              </span>

            </div>


            <div className="problem-item">

              <div className="problem-icon">
                ▣
              </div>

              <strong>
                Unclear
              </strong>

              <span>
                schedules
              </span>

            </div>


            <div className="problem-item">

              <div className="problem-icon">
                ?
              </div>

              <strong>
                Status
              </strong>

              <span>
                uncertainty
              </span>

            </div>

          </div>

        </div>


        <div className="challenge-line">

          <span></span>

          We bring the process together.

          <span></span>

        </div>

      </section>
            {/* ================= HOW IT WORKS ================= */}

      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="section-heading">

          <div className="heading-title">

            <LeafIcon />

            <h2>
              HOW IT WORKS
            </h2>

            <LeafIcon />

          </div>

          <p>
            A simple 4-step process from farm to payment.
          </p>

        </div>


        <div className="steps-container">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              👨‍🌾
            </div>

            <h3>
              Register
            </h3>

            <p>
              Create your
              <br />
              profile
            </p>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              📅
            </div>

            <h3>
              Schedule
            </h3>

            <p>
              Choose when &
              <br />
              where
            </p>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              🌾
            </div>

            <h3>
              Procurement
            </h3>

            <p>
              Complete
              <br />
              procurement
            </p>

          </div>


          <div className="step-arrow">
            →
          </div>


          <div className="step">

            <div className="step-number">
              04
            </div>

            <div className="step-icon">
              ₹
            </div>

            <h3>
              Payment
            </h3>

            <p>
              Track
              <br />
              status
            </p>

          </div>

        </div>


        <a
          href="#how-it-works"
          className="learn-button"
        >
          Learn How It Works <Arrow />
        </a>

      </section>


      {/* ================= ACCESSIBILITY ================= */}

      <section
        className="accessibility-section"
        id="accessibility"
      >

        <div className="accessibility-image">

          <img
            src="/images/accessibility-farmer.jpeg"
            alt="Farmer using voice assistance"
          />

        </div>


        <div className="accessibility-content">

          <div className="accessibility-title">

            <span>
              🌿
            </span>

            <h2>
              DESIGNED FOR EVERY FARMER
            </h2>

          </div>


          <div className="accessibility-list">

            <div>

              <span>
                ◷
              </span>

              <p>
                Simple interaction
              </p>

            </div>


            <div>

              <span>
                🌐
              </span>

              <p>
                Multiple languages
              </p>

            </div>


            <div>

              <span>
                🎙
              </span>

              <p>
                Voice-assisted access
              </p>

            </div>

          </div>


          <a
            href="#help"
            className="learn-button"
          >
            Learn More <Arrow />
          </a>

        </div>

      </section>


      {/* ================= LIVE PROCUREMENT ================= */}

      <section className="live-section">

        <div className="live-left">

          <div className="live-label">

            🌿

            <span>
              ●
            </span>

            LIVE PROCUREMENT

          </div>

          <h2>
            Know what's happening
            <br />
            before you arrive.
          </h2>

        </div>


        <div className="live-card">

          <div className="center-photo">

            <div className="center-placeholder">
              🌾
            </div>

          </div>


          <div className="live-card-content">

            <h3>
              Procurement Center 02
            </h3>

            <span className="open-status">
              ● Center Open
            </span>


            <div className="live-details">

              <span>
                Currently serving
              </span>

              <strong>
                A102
              </strong>


              <span>
                Farmers waiting
              </span>

              <strong>
                12
              </strong>


              <span>
                Next available slot
              </span>

              <strong>
                11:30 AM
              </strong>

            </div>


            <a
              href="/queue"
              className="queue-button"
            >
              View Live Queue <Arrow />
            </a>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="final-cta">

        <img
          src="/images/final-farm.jpeg"
          alt=""
          className="cta-background"
        />

        <div className="cta-overlay"></div>


        <div className="cta-content">

          <div className="cta-heading">

            <span>
              🌾
            </span>

            <h2>
              READY TO MAKE PROCUREMENT SIMPLER?
            </h2>

            <span>
              🌾
            </span>

          </div>


          <p>
            Less waiting. More certainty.
          </p>


          <a
            href="/register-farmer"
            className="cta-button"
          >
            Enter Farmer Portal <Arrow />
          </a>


          <div className="cta-login">

            New to the portal?

            <a href="/register-farmer">
              Register your profile here →
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer
        className="footer"
        id="help"
      >

        <div className="footer-main">


          <div className="footer-brand">

            <div className="footer-logo">

              <img
                src="/images/logo.jpeg"
                alt="Farmer Procurement"
              />

              <div>

                <strong>
                  Farmer Procurement
                </strong>

                <span>
                  Smart Procurement. Better Tomorrow.
                </span>

              </div>

            </div>

          </div>


          <div className="footer-column">

            <h4>
              Portals
            </h4>

            <a href="/register-farmer">
              Farmer Portal
            </a>

            <a href="/officer-login">
              Officer Portal
            </a>

            <a href="/admin-login">
              Admin Portal
            </a>

          </div>
                    <div className="footer-column">

            <h4>
              Platform
            </h4>

            <a href="#about">
              About
            </a>

            <a href="#how-it-works">
              How It Works
            </a>

            <a href="#help">
              Help
            </a>

          </div>


          <div className="footer-column">

            <h4>
              Support
            </h4>

            <a href="#accessibility">
              Accessibility
            </a>

            <a href="#privacy">
              Privacy
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          <div className="footer-language">

            <h4>
              Language
            </h4>

            <div>

              English

              <br />

              తెలుగు

              <br />

              हिंदी

            </div>


            <div className="social-icons">

              <span>
                ▶
              </span>

              <span>
                𝕏
              </span>

              <span>
                f
              </span>

              <span>
                in
              </span>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Farmer Procurement. All rights reserved.
          </span>

          <span>
            Supporting Farmers | Strengthening Agriculture
          </span>

        </div>

      </footer>

    </div>
  )
}

export default App