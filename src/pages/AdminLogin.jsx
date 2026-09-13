import React, { useState } from "react";
import "./AdminLogin.css";

function AdminLogin() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!adminId.trim()) {
      alert("Please enter your Admin ID.");
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }

    setLoading(true);

    localStorage.setItem("adminId", adminId.trim());
    localStorage.setItem("adminName", "Admin");

    if (remember) {
      localStorage.setItem("rememberAdmin", "true");
    } else {
      localStorage.removeItem("rememberAdmin");
    }

    setTimeout(() => {
      setLoading(false);
      window.location.href = "/admin-dashboard";
    }, 700);
  };

  const handleForgotPassword = () => {
    alert(
      "Password recovery request\n\nPlease contact your system administrator or registered support team."
    );
  };

  const handleGovernmentSSO = () => {
    alert("Government SSO integration can be connected to the official SSO service.");
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="admin-login-page">

      <section className="admin-login-visual">
        <img
          src="/images/hero-farmer.jpeg"
          alt="Agricultural field"
          className="admin-login-background"
        />
        <div className="admin-login-overlay"></div>

        <div className="admin-brand">
          <img src="/images/logo.jpeg" alt="Farmer Procurement" />
          <div>
            <strong>Farmer Procurement</strong>
            <span>Government of India</span>
            <small>Ministry of Agriculture &amp; Farmers Welfare</small>
          </div>
        </div>

        <div className="admin-visual-content">
          <p className="admin-eyebrow">ADMINISTRATION &amp; CONTROL</p>

          <h1>
            <span>Admin</span> Portal
          </h1>

          <h2>Manage. Monitor. Ensure. Empower.</h2>

          <p className="admin-visual-description">
            Oversee procurement operations, manage centres and officers,
            monitor data, and ensure a transparent and efficient system
            for every farmer.
          </p>

          <div className="admin-features">
            <div className="admin-feature">
              <div className="admin-feature-icon">▥</div>
              <div>
                <strong>System Monitoring</strong>
                <span>Real-time insights</span>
              </div>
            </div>

            <div className="admin-feature">
              <div className="admin-feature-icon">♟</div>
              <div>
                <strong>Manage Officers</strong>
                <span>Add, update, and track</span>
              </div>
            </div>

            <div className="admin-feature">
              <div className="admin-feature-icon">▦</div>
              <div>
                <strong>Centre Management</strong>
                <span>Monitor all procurement centres</span>
              </div>
            </div>

            <div className="admin-feature">
              <div className="admin-feature-icon">▤</div>
              <div>
                <strong>Reports &amp; Analytics</strong>
                <span>Data-driven decisions</span>
              </div>
            </div>
          </div>

          <div className="admin-stats-strip">
            <div>
              <strong>12+</strong>
              <span>Procurement Centres</span>
            </div>
            <div>
              <strong>28+</strong>
              <span>Procurement Officers</span>
            </div>
            <div>
              <strong>50K+</strong>
              <span>Farmers Onboarded</span>
            </div>
          </div>
        </div>

        <div className="admin-visual-footer">
          <span></span>
          <div>
            <strong>Transparent Procurement</strong>
            <p>Strong Farmers&nbsp; • &nbsp;Prosperous India</p>
          </div>
        </div>
      </section>

      <section className="admin-login-panel">
        <button className="admin-language" type="button">
          ◉ &nbsp; English &nbsp;⌄
        </button>

        <button
          type="button"
          className="admin-back-button"
          onClick={handleBack}
        >
          ← Back to Portal
        </button>

        <div className="admin-login-card">
          <div className="admin-shield">♙</div>

          <div className="admin-login-heading">
            <h1>Admin Login</h1>
            <p>Enter your credentials to access the Admin Portal</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="admin-form-group">
              <label htmlFor="adminId">Admin ID</label>
              <div className="admin-input-wrapper">
                <span>♙</span>
                <input
                  id="adminId"
                  type="text"
                  placeholder="Enter your admin ID"
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label htmlFor="adminPassword">Password</label>
              <div className="admin-input-wrapper">
                <span>▣</span>
                <input
                  id="adminPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="admin-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Show or hide password"
                >
                  {showPassword ? "◉" : "◌"}
                </button>
              </div>
            </div>

            <div className="admin-login-options">
              <label className="admin-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="admin-forgot"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </button>
            </div>

            <button className="admin-signin-button" type="submit">
              {loading ? "Signing In..." : "Sign In  →"}
            </button>
          </form>

          <div className="admin-or">
            <span></span>
            <b>OR</b>
            <span></span>
          </div>

          <button
            type="button"
            className="admin-sso-button"
            onClick={handleGovernmentSSO}
          >
            <span className="sso-emblem">✦</span>
            Login with Government SSO
            <span>→</span>
          </button>

          <div className="admin-secure-note">
            <span>▣</span>
            Secure access for authorized administrators only
          </div>
        </div>

        <div className="admin-support">
          <span>ⓘ</span>
          <span>
            For technical support, contact the system administrator
          </span>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;
