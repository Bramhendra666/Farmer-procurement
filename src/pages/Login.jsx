import { useState, useEffect } from 'react'
import './Login.css'

function Login() {
  const [activeTab, setActiveTab] = useState('otp')
  const [mobileNumber, setMobileNumber] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', ''])

  // Pre-load mobile number if user just registered
  useEffect(() => {
    const cachedMobile = localStorage.getItem('registeredMobile')
    if (cachedMobile) {
      setMobileNumber(cachedMobile)
    }
  }, [])

  const handleGetOtp = (e) => {
    e.preventDefault()
    if (mobileNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.')
      return
    }
    setOtpSent(true)
  }

  const handleDigitChange = (index, value) => {
    if (value.length > 1) return
    const nextDigits = [...otpDigits]
    nextDigits[index] = value
    setOtpDigits(nextDigits)

    // Auto-advance to next input box
    if (value && index < 5) {
      const nextInput = document.getElementById(`login-otp-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  // Verification redirects straight to Farmer Dashboard
  const handleVerifyOtp = (e) => {
    e.preventDefault()
    if (otpDigits.join('').length === 6) {
      window.location.href = '/dashboard'
    } else {
      alert('Please enter all 6 OTP digits.')
    }
  }

  return (
    <div className="login-screen-root">
      {/* Background Image */}
      <img
        src="/images/farmer-login.png"
        alt="Farmer in the field"
        className="login-field-background"
      />

      {/* TOP-LEFT BRANDING & HEADLINE (IN CLEAR SKY) */}
      <section className="login-top-left-hero">
        <div className="fp-brand-group">
          <svg className="fp-plant-icon" viewBox="0 0 90 90" fill="none">
            <path d="M42 38C34 26 24 18 10 20C6 30 14 46 30 44C36 43 39 40 42 38Z" fill="#136738"/>
            <path d="M48 28C44 16 36 6 22 4C14 14 18 30 32 32C38 33 44 30 48 28Z" fill="#22c55e"/>
            <path d="M52 18C52 6 44 -2 30 -2C22 6 24 20 38 22C44 22 48 20 52 18Z" fill="#eab308"/>
            <path d="M38 52C28 58 16 60 6 52C4 64 16 74 30 68C36 66 38 56 38 52Z" fill="#0f4a27"/>
          </svg>
          <div className="fp-wordmark">
            <span className="fp-f">F</span>
            <span className="fp-p">P</span>
          </div>
        </div>

        <h1 className="sky-welcome-title">
          Welcome Back, <br />
          <span>Kisan</span>
        </h1>
      </section>

      {/* RIGHT FLOATING LOGIN CARD */}
      <main className="login-stage-container">
        <div className="farmer-portal-card">
          {/* Card Brand Header */}
          <div className="card-top-identity">
            <div className="fp-brand-group mini">
              <svg className="fp-plant-icon mini" viewBox="0 0 90 90" fill="none">
                <path d="M42 38C34 26 24 18 10 20C6 30 14 46 30 44C36 43 39 40 42 38Z" fill="#136738"/>
                <path d="M48 28C44 16 36 6 22 4C14 14 18 30 32 32C38 33 44 30 48 28Z" fill="#22c55e"/>
                <path d="M52 18C52 6 44 -2 30 -2C22 6 24 20 38 22C44 22 48 20 52 18Z" fill="#eab308"/>
                <path d="M38 52C28 58 16 60 6 52C4 64 16 74 30 68C36 66 38 56 38 52Z" fill="#0f4a27"/>
              </svg>
              <div className="fp-wordmark mini">
                <span className="fp-f">F</span>
                <span className="fp-p">P</span>
              </div>
            </div>
            <h2 className="card-heading-text">Sign Into Farmer Portal</h2>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="portal-tab-group">
            <button
              type="button"
              className={`portal-tab ${activeTab === 'otp' ? 'selected' : ''}`}
              onClick={() => setActiveTab('otp')}
            >
              <svg className="tab-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3.01c0-1.1-.9-2-2-2zM17 19H7V5h10v14z"/>
              </svg>
              <span>Mobile OTP</span>
            </button>
            <button
              type="button"
              className={`portal-tab ${activeTab === 'voice' ? 'selected' : ''}`}
              onClick={() => setActiveTab('voice')}
            >
              <svg className="tab-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
              <span>Voice Login</span>
            </button>
          </div>

          {activeTab === 'otp' ? (
            <div className="card-steps-flow">
              {/* STEP 1: MOBILE NUMBER */}
              <form onSubmit={handleGetOtp} className="flow-step-unit">
                <div className="step-badge-row">
                  <span className="step-circle-badge">1</span>
                  <span className="step-title-text">Enter Mobile Number</span>
                </div>

                <div className="mobile-input-combo">
                  <div className="combo-prefix">
                    <span>+91</span>
                    <svg className="down-arrow-svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                  <input
                    type="tel"
                    maxLength="10"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                    required
                  />
                </div>

                <button type="submit" className="green-action-btn">
                  <span>Get OTP</span>
                  <span className="arrow-right">→</span>
                </button>
              </form>

              {/* STEP 2: 6-DIGIT OTP */}
              <form onSubmit={handleVerifyOtp} className="flow-step-unit">
                <div className="step-badge-row">
                  <span className="step-circle-badge">2</span>
                  <span className="step-title-text">Enter OTP</span>
                </div>

                <div className="otp-digit-boxes">
                  {otpDigits.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`login-otp-${idx}`}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      className="digit-square"
                      value={digit}
                      onChange={(e) => handleDigitChange(idx, e.target.value)}
                      disabled={!otpSent}
                      required={otpSent}
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className={`verify-action-btn ${otpSent ? 'enabled' : ''}`}
                  disabled={!otpSent}
                >
                  <span>Verify OTP</span>
                  <span className="arrow-right">→</span>
                </button>

                <div className="resend-question-line">
                  Didn't receive OTP?{' '}
                  <button
                    type="button"
                    className="resend-text-link"
                    onClick={() => alert('A new OTP has been sent!')}
                  >
                    Resend OTP
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* VOICE LOGIN TAB */
            <div className="voice-mode-wrapper">
              <div className="voice-icon-circle">🎙️</div>
              <h3>Voice Assisted Login</h3>
              <p>Speak your 10-digit mobile number clearly.</p>
              <button
                type="button"
                className="green-action-btn"
                onClick={() => {
                  setMobileNumber('9876543210')
                  setActiveTab('otp')
                  setOtpSent(true)
                }}
              >
                Start Listening
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Login