import { useEffect, useState } from 'react'
import './Dashboard.css'

function Dashboard() {
  const [farmerName, setFarmerName] = useState('Ramesh Kumar')
  const [farmerId, setFarmerId] = useState('FP12345')
  const [selectedCrop, setSelectedCrop] = useState('Paddy')

  useEffect(() => {
    const cachedId = localStorage.getItem('registeredFarmerId')
    if (cachedId) {
      // Shorten display if generated with FP-2026-XXXXX
      setFarmerId(cachedId.replace('FP-2026-', 'FP'))
    }
  }, [])

  return (
    <div className="portal-layout-root">
      {/* =========================================================
          LEFT SIDEBAR (WITH IMAGE BACKDROP & BRANDING)
      ========================================================= */}
      <aside className="portal-sidebar">
        <img
          src="/images/sidebar-bg.png"
          alt="Lush green meadow backdrop"
          className="sidebar-bg-image"
        />
        <div className="sidebar-dark-overlay"></div>

        <div className="sidebar-content">
          {/* Logo Header */}
          <div className="sidebar-brand">
            <div className="brand-leaf-icon">
              <svg viewBox="0 0 100 90" fill="none">
                <path d="M45 42C38 32 30 25 15 28C10 38 18 52 35 50C40 49 43 45 45 42Z" fill="#1b5e20"/>
                <path d="M52 32C48 20 40 10 25 8C18 18 22 34 38 36C45 37 50 34 52 32Z" fill="#4caf50"/>
                <path d="M55 22C55 10 48 0 35 0C28 8 30 22 45 25C50 25 54 23 55 22Z" fill="#ffb300"/>
                <path d="M42 55C32 60 20 62 10 55C8 68 20 78 35 72C40 70 42 60 42 55Z" fill="#0d3b14"/>
              </svg>
              <div className="brand-letters">
                <span className="b-f">F</span>
                <span className="b-p">P</span>
              </div>
            </div>
            <h2>Farmer Procurement Portal</h2>
          </div>

          {/* Nav List */}
          <nav className="sidebar-nav">
            <a href="/dashboard" className="nav-item active">
              <span className="item-icon">🏠</span>
              <span>Dashboard</span>
            </a>
            <a href="#profile" className="nav-item">
              <span className="item-icon">👤</span>
              <span>My Profile</span>
            </a>
            <a href="/register-crop" className="nav-item">
              <span className="item-icon">🍃</span>
              <span>My Crops</span>
            </a>
            <a href="#transactions" className="nav-item">
              <span className="item-icon">📄</span>
              <span>My Transactions</span>
            </a>
            <a href="#notifications" className="nav-item">
              <span className="item-icon">🔔</span>
              <span>Notifications</span>
              <span className="nav-badge-bubble">3</span>
            </a>
            <a href="#help" className="nav-item">
              <span className="item-icon">❓</span>
              <span>Help &amp; Support</span>
            </a>
          </nav>

          {/* Bottom Slogan */}
          <div className="sidebar-bottom-slogan">
            <span className="sprout-leaf-icon">🍃</span>
            <p>Together for a Prosperous Tomorrow</p>
          </div>
        </div>
      </aside>

      {/* =========================================================
          RIGHT MAIN CONTENT STAGE
      ========================================================= */}
      <div className="portal-main-area">
        {/* Top Header Bar */}
        <header className="portal-top-bar">
          <div className="search-box-wrap">
            <span className="search-glass-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for crops, procurement centres, schemes..."
            />
          </div>

          <div className="top-bar-stats">
            <div className="weather-widget">
              <span className="sun-icon">☀️</span>
              <div className="weather-meta">
                <strong>28°C</strong>
                <small>Prakasam, AP</small>
              </div>
            </div>

            <div className="v-divider"></div>

            <div className="date-widget">
              Tue, 9 Sep 2026
            </div>

            <div className="bell-notify-btn">
              <span className="bell-symbol">🔔</span>
              <span className="bell-count">3</span>
            </div>

            {/* Profile Dropdown Badge */}
            <div className="profile-pill-wrap">
              <div className="profile-avatar-thumb">
                <img
                  src="/images/dashboard-hero.png"
                  alt="Farmer thumbnail"
                  className="avatar-face"
                />
              </div>
              <div className="profile-text-meta">
                <strong>{farmerName}</strong>
                <small>Farmer ID: {farmerId}</small>
              </div>
              <span className="dropdown-caret">⌄</span>
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <div className="portal-body-scroll">
          {/* 1. HERO BANNER */}
          <section className="portal-hero-card">
            <img
              src="/images/dashboard-hero.png"
              alt="Farmer in the golden crop field"
              className="hero-farmer-bg"
            />
            <div className="hero-gradient-overlay"></div>

            <div className="hero-left-headline">
              <h1>
                Good Morning, <br />
                <span>{farmerName}!</span>
                <span className="hero-leaf-badge">🍃</span>
              </h1>
              <p className="hero-quote">
                “Your efforts today, <br />
                &nbsp;&nbsp;a stronger tomorrow.”
              </p>
            </div>

            {/* Floating Glassmorphic Features Card */}
            <div className="hero-floating-glass-box">
              <div className="glass-benefit-row">
                <span className="benefit-sym scale">⚖️</span>
                <span>Fair Prices</span>
              </div>
              <div className="glass-benefit-row">
                <span className="benefit-sym shield">🛡️</span>
                <span>Transparent Process</span>
              </div>
              <div className="glass-benefit-row">
                <span className="benefit-sym people">👥</span>
                <span>Support for Every Farmer</span>
              </div>
            </div>
          </section>

          {/* 2. STATS 4-GRID TILES */}
          <section className="stats-metric-strip">
            {/* My Crops */}
            <div className="stat-card green-tint">
              <div className="stat-icon-square green">🍃</div>
              <div className="stat-body">
                <small>My Crops</small>
                <strong>2</strong>
                <span>Paddy, Red Gram</span>
              </div>
              <div className="stat-round-arrow green">→</div>
            </div>

            {/* Active Procurement */}
            <div className="stat-card blue-tint">
              <div className="stat-icon-square blue">🚚</div>
              <div className="stat-body">
                <small>Active Procurement</small>
                <strong>1</strong>
                <span>In Progress</span>
              </div>
              <div className="stat-round-arrow blue">→</div>
            </div>

            {/* Total Earnings */}
            <div className="stat-card orange-tint">
              <div className="stat-icon-square orange">₹</div>
              <div className="stat-body">
                <small>Total Earnings</small>
                <strong>₹56,000</strong>
                <span>This Season</span>
              </div>
              <div className="stat-round-arrow orange">→</div>
            </div>

            {/* Completed Sales */}
            <div className="stat-card purple-tint">
              <div className="stat-icon-square purple">✓</div>
              <div className="stat-body">
                <small>Completed Sales</small>
                <strong>3</strong>
                <span>This Season</span>
              </div>
              <div className="stat-round-arrow purple">→</div>
            </div>
          </section>

          {/* 3. TWO COLUMNS (MAIN COLUMN 68% + RIGHT ASIDE 32%) */}
          <div className="dashboard-content-split">
            {/* LEFT BIG COLUMN */}
            <div className="split-left-main">
              {/* Quick Actions */}
              <div className="section-head-line">
                <h3>Quick Actions</h3>
                <a href="#view-all" className="view-link">View All →</a>
              </div>

              <div className="quick-actions-row">
                <div
                  className="quick-action-tile green"
                  onClick={() => (window.location.href = '/register-crop')}
                >
                  <div className="tile-icon green">🌱</div>
                  <strong>Sell / Register Crop</strong>
                  <p>Start selling your produce</p>
                  <div className="tile-hover-arrow green">→</div>
                </div>

                <div
                  className="quick-action-tile blue"
                  onClick={() => (window.location.href = '/queue')}
                >
                  <div className="tile-icon blue">📅</div>
                  <strong>View Procurement Schedule</strong>
                  <p>Check dates at nearby centres</p>
                  <div className="tile-hover-arrow blue">→</div>
                </div>

                <div className="quick-action-tile yellow">
                  <div className="tile-icon yellow">📍</div>
                  <strong>Find Procurement Centre</strong>
                  <p>Locate nearest centre</p>
                  <div className="tile-hover-arrow yellow">→</div>
                </div>

                <div className="quick-action-tile purple">
                  <div className="tile-icon purple">📑</div>
                  <strong>My Transactions</strong>
                  <p>View your sales and payments</p>
                  <div className="tile-hover-arrow purple">→</div>
                </div>
              </div>

              {/* Lower Double Column: Activities + Schedule */}
              <div className="activities-schedule-pair">
                {/* Recent Activities */}
                <div className="panel-white-card">
                  <div className="panel-title-bar">
                    <h3>Recent Activities</h3>
                    <a href="#activities" className="view-link">View All →</a>
                  </div>

                  <div className="activity-records-list">
                    <div className="activity-line">
                      <div className="status-circle-icon green">✓</div>
                      <div className="activity-info">
                        <strong>Paddy sale completed</strong>
                        <small>10 Quintals at Markapur Centre</small>
                      </div>
                      <span className="activity-date">02 Sep 2026</span>
                      <span className="record-chevron">›</span>
                    </div>

                    <div className="activity-line">
                      <div className="status-circle-icon blue">₹</div>
                      <div className="activity-info">
                        <strong>Payment processed</strong>
                        <small>₹22,000 credited to your account</small>
                      </div>
                      <span className="activity-date">02 Sep 2026</span>
                      <span className="record-chevron">›</span>
                    </div>

                    <div className="activity-line">
                      <div className="status-circle-icon orange">⏰</div>
                      <div className="activity-info">
                        <strong>Red Gram sale in progress</strong>
                        <small>5 Quintals at Giddalur Centre</small>
                      </div>
                      <span className="activity-date">25 Aug 2026</span>
                      <span className="record-chevron">›</span>
                    </div>

                    <div className="activity-line">
                      <div className="status-circle-icon gray">📄</div>
                      <div className="activity-info">
                        <strong>Profile updated</strong>
                        <small>Bank account details updated</small>
                      </div>
                      <span className="activity-date">20 Aug 2026</span>
                      <span className="record-chevron">›</span>
                    </div>
                  </div>
                </div>

                {/* Upcoming Schedule */}
                <div className="panel-white-card">
                  <div className="panel-title-bar">
                    <h3>Upcoming Schedule</h3>
                    <a href="#schedule" className="view-link">View All →</a>
                  </div>

                  <div className="schedule-timeline-list">
                    <div className="schedule-entry active-node">
                      <div className="date-node-pill active">
                        <strong>12</strong>
                        <span>Sep</span>
                      </div>
                      <div className="schedule-info">
                        <strong>Paddy Procurement</strong>
                        <small className="time-range">09:00 AM – 05:00 PM</small>
                        <small className="center-name">Markapur Procurement Centre</small>
                      </div>
                      <span className="record-chevron">›</span>
                    </div>

                    <div className="schedule-entry">
                      <div className="date-node-pill">
                        <strong>18</strong>
                        <span>Sep</span>
                      </div>
                      <div className="schedule-info">
                        <strong>Red Gram Procurement</strong>
                        <small className="time-range">09:00 AM – 04:00 PM</small>
                        <small className="center-name">Giddalur Procurement Centre</small>
                      </div>
                      <span className="record-chevron">›</span>
                    </div>

                    <div className="schedule-entry">
                      <div className="date-node-pill">
                        <strong>25</strong>
                        <span>Sep</span>
                      </div>
                      <div className="schedule-info">
                        <strong>Maize Procurement</strong>
                        <small className="time-range">09:00 AM – 05:00 PM</small>
                        <small className="center-name">Kanigiri Procurement Centre</small>
                      </div>
                      <span className="record-chevron">›</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT WIDGET COLUMN */}
            <div className="split-right-aside">
              {/* Crop Price Updates Card */}
              <div className="panel-white-card price-chart-card">
                <div className="panel-title-bar">
                  <h3>Crop Price Updates</h3>
                  <a href="#prices" className="view-link">View All →</a>
                </div>

                {/* Crop Filter Tabs */}
                <div className="crop-pill-toggles">
                  {['Paddy', 'Red Gram', 'Maize'].map((crop) => (
                    <button
                      key={crop}
                      type="button"
                      className={`crop-toggle ${selectedCrop === crop ? 'active' : ''}`}
                      onClick={() => setSelectedCrop(crop)}
                    >
                      {crop}
                    </button>
                  ))}
                </div>

                {/* Price Display */}
                <div className="price-stat-callout">
                  <div className="rate-num">₹2,320</div>
                  <div className="rate-diff-pill">
                    <span>↑ 5%</span>
                    <small>vs last week</small>
                  </div>
                </div>

                {/* Chart with Paddy Image Overlay */}
                <div className="chart-preview-box">
                  <img
                    src="/images/paddy-crop.png"
                    alt="Paddy crop"
                    className="chart-paddy-photo"
                  />
                  <svg className="trend-curve-svg" viewBox="0 0 280 60" fill="none">
                    <path
                      d="M10 50 C 40 45, 60 55, 90 40 C 130 20, 160 48, 200 30 C 230 18, 250 15, 270 12"
                      stroke="#10b981"
                      strokeWidth="2.5"
                    />
                    <circle cx="10" cy="50" r="3.5" fill="#10b981"/>
                    <circle cx="90" cy="40" r="3.5" fill="#10b981"/>
                    <circle cx="200" cy="30" r="3.5" fill="#10b981"/>
                    <circle cx="270" cy="12" r="4.5" fill="#047857"/>
                  </svg>
                </div>

                <button
                  type="button"
                  className="market-prices-cta-btn"
                  onClick={() => alert('Opening mandi price board...')}
                >
                  <span className="icon-circle-sm">→</span>
                  <span>View Detailed Market Prices</span>
                  <span className="caret-r">›</span>
                </button>
              </div>

              {/* Need Help Card with Sprout Photo */}
              <div className="panel-white-card need-help-card">
                <img
                  src="/images/sprout-soil.png"
                  alt="Sprouting seedling in soil"
                  className="sprout-bg-thumb"
                />
                <div className="help-text-header">
                  <div className="headphone-badge">🎧</div>
                  <div>
                    <h3>Need Help?</h3>
                    <p>Our support team is here for you</p>
                  </div>
                </div>

                <a href="tel:18001207890" className="call-help-full-btn">
                  <span>📞</span> Call Help
                </a>
              </div>

              {/* Prefer Voice Assistance Pill Card */}
              <div
                className="voice-assist-card"
                onClick={() => alert('Initiating IVR callback to your registered phone...')}
              >
                <div className="voice-farmer-avatar">
                  <img src="/images/dashboard-hero.png" alt="Farmer avatar" />
                </div>
                <div className="voice-meta">
                  <strong>Prefer Voice Assistance?</strong>
                  <small>We'll call you and guide you.</small>
                </div>
                <div className="voice-round-arrow">→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard