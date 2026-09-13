import { useState } from 'react'
import './RegisterFarmer.css'

function RegisterFarmer() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    village: '',
    mandal: '',
    district: '',
    state: '',
    preferredLanguage: '',
    interactionMode: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [farmerId, setFarmerId] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName.trim() || formData.mobileNumber.length !== 10) {
      alert('Please provide your full name and a valid 10-digit mobile number.')
      return
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000)
    const newFarmerId = `FP-2026-${randomNum}`
    setFarmerId(newFarmerId)
    setSubmitted(true)

    // Optional: Saves to localStorage so Login page can prefill the mobile number
    localStorage.setItem('registeredMobile', formData.mobileNumber)
    localStorage.setItem('registeredFarmerId', newFarmerId)

    // Auto-redirect to Login after 2.5 seconds so they have time to see their Farmer ID
    setTimeout(() => {
      window.location.href = '/login'
    }, 2500)
  }

  return (
    <div className="farmer-reg-viewport">
      {/* Background Image Layer */}
      <img
        src="/images/farmer-field.png"
        alt="Farmer using smartphone in field"
        className="farmer-reg-bg"
      />
      <div className="farmer-reg-overlay"></div>

      {/* Main Single-Screen Grid */}
      <main className="farmer-reg-main">
        {/* LEFT COLUMN: HERO INFORMATION ONLY */}
        <section className="reg-info-column">
          <div className="welcome-badge">
            <span className="badge-sprout">🌾</span> WELCOME TO
          </div>

          <h1 className="hero-reg-title">
            Farmer <br />
            <span>Registration</span>
          </h1>
        </section>

        {/* RIGHT COLUMN: COMPACT FORM CARD */}
        <section className="reg-card-column">
          <div className="reg-floating-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="reg-card-form">
                <div className="card-heading-group">
                  <div className="card-title-row">
                    <span className="gold-leaf-symbol">🌾</span>
                    <h2>Create Your Farmer Account</h2>
                  </div>
                  <p>Fill in the details below to register as a farmer.</p>
                </div>

                <div className="reg-grid-inputs">
                  {/* Full Name */}
                  <div className="input-group-cell">
                    <label htmlFor="fullName">Full Name *</label>
                    <div className="input-with-icon">
                      <span className="cell-icon">👤</span>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="input-group-cell">
                    <label htmlFor="mobileNumber">Mobile Number *</label>
                    <div className="input-with-icon">
                      <span className="cell-icon">📞</span>
                      <input
                        id="mobileNumber"
                        type="tel"
                        name="mobileNumber"
                        maxLength="10"
                        placeholder="Enter 10 digit mobile number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Village */}
                  <div className="input-group-cell">
                    <label htmlFor="village">Village *</label>
                    <div className="input-with-icon">
                      <span className="cell-icon">🏡</span>
                      <input
                        id="village"
                        type="text"
                        name="village"
                        placeholder="Enter village name"
                        value={formData.village}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Mandal */}
                  <div className="input-group-cell">
                    <label htmlFor="mandal">Mandal *</label>
                    <div className="input-with-icon">
                      <span className="cell-icon">📍</span>
                      <input
                        id="mandal"
                        type="text"
                        name="mandal"
                        placeholder="Enter mandal name"
                        value={formData.mandal}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* District */}
                  <div className="input-group-cell">
                    <label htmlFor="district">District *</label>
                    <div className="input-with-icon">
                      <span className="cell-icon">🗺️</span>
                      <select
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select district</option>
                        <option value="Chittoor">Chittoor</option>
                        <option value="Guntur">Guntur</option>
                        <option value="Krishna">Krishna</option>
                        <option value="Kurnool">Kurnool</option>
                        <option value="Nellore">Nellore</option>
                        <option value="Prakasam">Prakasam</option>
                      </select>
                    </div>
                  </div>

                  {/* State */}
                  <div className="input-group-cell">
                    <label htmlFor="state">State *</label>
                    <div className="input-with-icon">
                      <span className="cell-icon">🏛️</span>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select state</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Language */}
                  <div className="input-group-cell">
                    <label htmlFor="preferredLanguage">Preferred Language *</label>
                    <div className="input-with-icon">
                      <span className="cell-icon">🌐</span>
                      <select
                        id="preferredLanguage"
                        name="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select language</option>
                        <option value="English">English</option>
                        <option value="Telugu">తెలుగు</option>
                        <option value="Hindi">हिंदी</option>
                      </select>
                    </div>
                  </div>

                  {/* Interaction Mode */}
                  <div className="input-group-cell">
                    <label htmlFor="interactionMode">Interaction Mode *</label>
                    <div className="input-with-icon">
                      <span className="cell-icon">🎙️</span>
                      <select
                        id="interactionMode"
                        name="interactionMode"
                        value={formData.interactionMode}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select mode</option>
                        <option value="Standard Web">Standard Web Mode</option>
                        <option value="Voice Assisted">Voice Assisted Mode</option>
                        <option value="Assisted Call">Procurement Call Center</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field-note-info">
                  <span className="info-badge">ℹ</span> Choose how you would like to interact with the system.
                </div>

                {/* Submit Action */}
                <button type="submit" className="card-submit-btn">
                  <span>👤⁺</span> Register Profile →
                </button>

                {/* Direct Link to Login */}
                <div className="card-login-row">
                  Already have an account? <a href="/login">Login</a>
                </div>

                {/* Bottom Call Support Ribbon */}
                <div className="help-assisted-box">
                  <span className="help-icon">📱</span>
                  <div className="help-desc">
                    <strong>Need help registering? Call your nearest procurement center.</strong>
                    <small>Our officer will assist you with the registration process.</small>
                  </div>
                </div>
              </form>
            ) : (
              /* SUCCESS STATE: DISPLAYS FARMER ID THEN SENDS TO /login */
              <div className="success-registered-pane">
                <div className="success-circle-symbol">✓</div>
                <h2>Farmer Account Created!</h2>
                <p>Your unified procurement registration is complete.</p>
                
                <div className="farmer-id-badge-banner">
                  <span>YOUR ASSIGNED FARMER ID</span>
                  <strong>{farmerId}</strong>
                </div>

                <p style={{ fontSize: '11px', color: '#657e70', margin: '4px 0' }}>
                  Redirecting to Login screen in a moment...
                </p>

                {/* Navigates to /login, NOT /dashboard */}
                <button
                  type="button"
                  className="card-submit-btn"
                  onClick={() => {
                    window.location.href = '/login'
                  }}
                >
                  Proceed to Login →
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default RegisterFarmer