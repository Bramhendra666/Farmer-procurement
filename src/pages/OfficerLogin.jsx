import React, { useState } from "react";
import "./OfficerLogin.css";


function OfficerLogin() {
{
  const [showPassword, setShowPassword] = useState(false);
  const [officerId, setOfficerId] = useState("");
  const [password, setPassword] = useState("");
  const [center, setCenter] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!officerId.trim()) {
      alert("Please enter your Officer ID.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }

    if (!center) {
      alert("Please select your Procurement Centre.");
      return;
    }

    setLoading(true);

    // OTP verification removed.
    // After a successful sign in, open the Procurement Officer Dashboard.
    setTimeout(() => {
      setLoading(false);

      localStorage.setItem("officerId", officerId.trim());
      localStorage.setItem("procurementCentre", center);
      localStorage.setItem("officerName", "Ravi Kumar");

      if (remember) {
        localStorage.setItem("rememberOfficer", "true");
      } else {
        localStorage.removeItem("rememberOfficer");
      }

      window.location.href = "/procurement-dashboard";
    }, 700);
  };

  const handleForgotPassword = () => {
    alert(
      "Password recovery request\n\nPlease contact your system administrator or registered support number."
    );
  };

  const handleCallHelp = () => {
    window.location.href = "/procurement-dashboard";
  };

  const handleBackToPortal = () => {
    window.location.href = "/procurement-dashboard";
  };

  return (
    <div className="officer-login-page">

      {/* ================= LEFT IMAGE ================= */}

      <section className="officer-visual">

        <img
          src="/images/procurement-officer-center.jpg"
          alt="Procurement Centre"
          className="officer-background-image"
        />

        <div className="officer-image-overlay"></div>

        {/* Bottom green shade */}

        <div className="green-bottom-shade">

          <div className="slogan">

            <div className="slogan-line">

              <span className="slogan-leaf">
                🌿
              </span>

              <div className="slogan-text">

                <div className="slogan-white">
                  Every gain matters
                </div>

                <div className="slogan-yellow">
                  Every farmer matters
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= RIGHT LOGIN ================= */}

      <section className="officer-login-section">

        <button
          type="button"
          className="back-to-portal"
          onClick={handleBackToPortal}
        >
          ← Back to Portal
        </button>


        {/* Login Card */}

        <div className="officer-login-card">

          {/* Avatar */}

          <div className="officer-avatar">
            👨‍💼
          </div>


          {/* Heading */}

          <div className="login-heading">

            <h1>
              Sign In to Officer Portal
            </h1>

            <p>
              Secure access for procurement officers
            </p>

          </div>


          {/* Form */}

          <form onSubmit={handleLogin}>

            {/* Officer ID */}

            <div className="form-group">

              <label htmlFor="officerId">
                Officer ID
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  👤
                </span>

                <input
                  id="officerId"
                  type="text"
                  placeholder="Enter your Officer ID"
                  value={officerId}
                  onChange={(e) =>
                    setOfficerId(e.target.value)
                  }
                  autoComplete="username"
                />

              </div>

            </div>


            {/* Password */}

            <div className="form-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  🔐
                </span>

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>

            </div>


            {/* Procurement Centre */}

            <div className="form-group">

              <label htmlFor="center">
                Procurement Centre
              </label>

              <div className="input-wrapper select-wrapper">

                <span className="input-icon">
                  🏢
                </span>

                <select
                  id="center"
                  value={center}
                  onChange={(e) =>
                    setCenter(e.target.value)
                  }
                >

                  <option value="">
                    Select Procurement Centre
                  </option>

                  <option value="ongole">
                    Ongole Procurement Centre
                  </option>

                  <option value="markapur">
                    Markapur Procurement Centre
                  </option>

                  <option value="giddalur">
                    Giddalur Procurement Centre
                  </option>

                  <option value="kanigiri">
                    Kanigiri Procurement Centre
                  </option>

                  <option value="kandukur">
                    Kandukur Procurement Centre
                  </option>

                </select>

                <span className="select-arrow">
                  ⌄
                </span>

              </div>

            </div>


            {/* Remember + Forgot */}

            <div className="login-options">

              <label className="remember-option">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) =>
                    setRemember(e.target.checked)
                  }
                />

                <span className="custom-checkbox">
                  {remember ? "✓" : ""}
                </span>

                <span>
                  Remember this device
                </span>

              </label>


              <button
                type="button"
                className="forgot-password"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>

            </div>


            {/* Sign In */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="spinner"></span>
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <span className="button-arrow">
                    →
                  </span>
                </>
              )}

            </button>

          </form>


          {/* Security */}

          <div className="security-message">

            <span className="security-icon">
              🛡️
            </span>

            <div>

              <strong>
                Secure Officer Access
              </strong>

              <p>
                Your login details are protected
                with secure authentication.
              </p>

            </div>

          </div>


          {/* Help */}

          <button
            type="button"
            className="call-help-button"
            onClick={handleCallHelp}
          >
            ☎ Call Help
          </button>


          {/* Footer */}

          <div className="login-footer-text">
            Authorized Procurement Officers Only
          </div>

        </div>

      </section>

    </div>
  );
}
}

export default OfficerLogin;
