import React from "react";
import "./ProcurementDashboard.css";

function ProcurementDashboard() {
  const queueData = [
    {
      token: "A101",
      farmer: "Ramesh Kumar",
      crop: "Paddy",
      quantity: "42 Q",
      status: "Waiting",
      statusClass: "waiting",
      action: "Call",
    },
    {
      token: "A102",
      farmer: "Suresh Babu",
      crop: "Red Gram",
      quantity: "18 Q",
      status: "At Centre",
      statusClass: "at-centre",
      action: "Verify",
    },
    {
      token: "A103",
      farmer: "Lakshmi Devi",
      crop: "Paddy",
      quantity: "35 Q",
      status: "Verified",
      statusClass: "verified",
      action: "Weigh",
    },
    {
      token: "A104",
      farmer: "Venkatesh",
      crop: "Maize",
      quantity: "25 Q",
      status: "Weighing",
      statusClass: "weighing",
      action: "Quality",
    },
    {
      token: "A105",
      farmer: "Sarojamma",
      crop: "Paddy",
      quantity: "20 Q",
      status: "Completed",
      statusClass: "completed",
      action: "View",
    },
  ];

  const cropData = [
    {
      name: "Paddy",
      quantity: 62,
      className: "bar-paddy",
    },
    {
      name: "Red Gram",
      quantity: 18,
      className: "bar-redgram",
    },
    {
      name: "Maize",
      quantity: 12,
      className: "bar-maize",
    },
    {
      name: "Others",
      quantity: 6,
      className: "bar-others",
    },
  ];

  return (
    <div className="procurement-dashboard">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside className="dashboard-sidebar">

        {/* Logo / Brand */}

        <div className="sidebar-brand">

          <div className="brand-leaf">
            🌿
          </div>

          <div className="brand-text">
            <strong>Procurement</strong>
            <span>Centre Portal</span>
          </div>

        </div>


        {/* Navigation */}

        <nav className="sidebar-navigation">

          <a
            href="#"
            className="sidebar-link active"
          >
            <span className="sidebar-icon">⌂</span>
            <span>Dashboard</span>
          </a>


          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">♟</span>
            <span>Farmers</span>
          </a>


          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">☷</span>
            <span>Queue</span>
          </a>


          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">🌿</span>
            <span>Crop Verification</span>
          </a>


          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">⚖</span>
            <span>Weighing & Quality</span>
          </a>


          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">🛍</span>
            <span>Procurement</span>
          </a>


          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">▣</span>
            <span>Payments</span>
          </a>


          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">▥</span>
            <span>Reports</span>
          </a>


          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">⚙</span>
            <span>Settings</span>
          </a>

        </nav>


        {/* Logout */}

        <div className="sidebar-bottom">

          <button className="logout-button">
            <span className="sidebar-icon">↪</span>
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* =================================================
          MAIN AREA
      ================================================= */}

      <main className="dashboard-main">


        {/* =================================================
            TOP HEADER
        ================================================= */}

        <header className="dashboard-header">

          <div className="header-left">

            <button className="menu-button">
              ☰
            </button>

            <div className="centre-icon">
              🏢
            </div>

            <div className="centre-details">

              <h2>
                Ongole Procurement Centre
              </h2>

              <p>
                Prakasam District, Andhra Pradesh
              </p>

            </div>

          </div>


          <div className="header-right">

            {/* Date */}

            <div className="date-info">

              <span className="calendar-icon">
                ▣
              </span>

              <div>
                <span>
                  Tue, 10 Sep 2025
                </span>

                <strong>
                  10:24 AM
                </strong>
              </div>

            </div>


            {/* Centre Status */}

            <div className="centre-status">

              <span className="status-dot"></span>

              <div>
                <strong>
                  Centre Open
                </strong>

                <span>
                  08:00 AM – 06:00 PM
                </span>
              </div>

            </div>


            {/* Officer */}

            <div className="officer-profile">

              <div className="profile-avatar">
                👨‍💼
              </div>

              <div className="profile-details">

                <strong>
                  Ravi Kumar
                </strong>

                <span>
                  Procurement Officer
                </span>

              </div>

              <span className="profile-arrow">
                ⌄
              </span>

            </div>

          </div>

        </header>


        {/* =================================================
            DASHBOARD CONTENT
        ================================================= */}

        <div className="dashboard-content">


          {/* Welcome */}

          <section className="welcome-section">

            <h1>
              Welcome, Ravi Kumar
            </h1>

            <p>
              Here's what's happening at your procurement centre today.
            </p>

          </section>


          {/* =================================================
              SUMMARY CARDS
          ================================================= */}

          <section className="summary-grid">


            {/* Farmers Waiting */}

            <div className="summary-card">

              <div className="summary-icon green">
                👥
              </div>

              <div className="summary-info">

                <strong>28</strong>

                <span>
                  Farmers Waiting
                </span>

              </div>

            </div>


            {/* Scheduled */}

            <div className="summary-card">

              <div className="summary-icon blue">
                ▣
              </div>

              <div className="summary-info">

                <strong>56</strong>

                <span>
                  Today's Scheduled
                </span>

              </div>

            </div>


            {/* Crops Received */}

            <div className="summary-card">

              <div className="summary-icon green">
                🌾
              </div>

              <div className="summary-info">

                <strong>124 Q</strong>

                <span>
                  Crops Received
                </span>

                <small>
                  Today
                </small>

              </div>

            </div>


            {/* Procured */}

            <div className="summary-card">

              <div className="summary-icon yellow">
                🛍
              </div>

              <div className="summary-info">

                <strong>98.5 Q</strong>

                <span>
                  Procured Quantity
                </span>

                <small>
                  Today
                </small>

              </div>

            </div>


            {/* Pending Verification */}

            <div className="summary-card">

              <div className="summary-icon red">
                ▤
              </div>

              <div className="summary-info">

                <strong>12</strong>

                <span>
                  Pending Verification
                </span>

              </div>

            </div>


            {/* Payments */}

            <div className="summary-card">

              <div className="summary-icon purple">
                ₹
              </div>

              <div className="summary-info">

                <strong>18</strong>

                <span>
                  Payments Pending
                </span>

              </div>

            </div>

          </section>


          {/* =================================================
              MIDDLE GRID
          ================================================= */}

          <section className="middle-grid">


            {/* =================================================
                TODAY'S QUEUE
            ================================================= */}

            <div className="dashboard-panel queue-panel">

              <div className="panel-header">

                <h2>
                  Today's Queue
                </h2>

                <button className="view-all-button">
                  View All →
                </button>

              </div>


              <div className="queue-table-wrapper">

                <table className="queue-table">

                  <thead>

                    <tr>
                      <th>#</th>
                      <th>Token No.</th>
                      <th>Farmer Name</th>
                      <th>Crop</th>
                      <th>Expected Qty</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>

                  </thead>


                  <tbody>

                    {queueData.map((item, index) => (

                      <tr key={item.token}>

                        <td>
                          {index + 1}
                        </td>

                        <td className="token-number">
                          {item.token}
                        </td>

                        <td className="farmer-name">
                          {item.farmer}
                        </td>

                        <td>
                          {item.crop}
                        </td>

                        <td>
                          {item.quantity}
                        </td>

                        <td>

                          <span
                            className={`queue-status ${item.statusClass}`}
                          >
                            {item.status}
                          </span>

                        </td>

                        <td>

                          <button
                            className={`queue-action ${
                              item.action === "Call"
                                ? "primary-action"
                                : ""
                            }`}
                          >
                            {item.action}
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>


            {/* =================================================
                PROCUREMENT BY CROP
            ================================================= */}

            <div className="dashboard-panel crop-panel">

              <div className="panel-header">

                <h2>
                  Procurement by Crop
                </h2>

                <select className="chart-select">
                  <option>Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>

              </div>


              <div className="chart-area">

                <div className="y-axis">

                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>

                </div>


                <div className="chart">

                  <div className="chart-grid-line line-1"></div>
                  <div className="chart-grid-line line-2"></div>
                  <div className="chart-grid-line line-3"></div>
                  <div className="chart-grid-line line-4"></div>


                  <div className="bars">

                    {cropData.map((crop) => (

                      <div
                        className="bar-column"
                        key={crop.name}
                      >

                        <div className="bar-value">
                          {crop.quantity}
                        </div>

                        <div
                          className={`crop-bar ${crop.className}`}
                          style={{
                            height: `${crop.quantity * 1.9}px`,
                          }}
                        ></div>

                        <span className="bar-label">
                          {crop.name}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              BOTTOM GRID
          ================================================= */}

          <section className="bottom-grid">


            {/* =================================================
                QUICK ACTIONS
            ================================================= */}

            <div className="dashboard-panel quick-actions-panel">

              <div className="panel-header">

                <h2>
                  Quick Actions
                </h2>

              </div>


              <div className="quick-actions-grid">


                <button className="quick-action green-action">

                  <span className="quick-icon">
                    👤+
                  </span>

                  <div>
                    <strong>
                      Register Farmer
                    </strong>

                    <small>
                      Add new farmer
                    </small>
                  </div>

                </button>


                <button className="quick-action blue-action">

                  <span className="quick-icon">
                    🌿
                  </span>

                  <div>
                    <strong>
                      Verify Crop
                    </strong>

                    <small>
                      Check crop details
                    </small>
                  </div>

                </button>


                <button className="quick-action yellow-action">

                  <span className="quick-icon">
                    📢
                  </span>

                  <div>
                    <strong>
                      Start Weighing
                    </strong>

                    <small>
                      Record weight
                    </small>
                  </div>

                </button>


                <button className="quick-action pink-action">

                  <span className="quick-icon">
                    🧪
                  </span>

                  <div>
                    <strong>
                      Quality Check
                    </strong>

                    <small>
                      Enter quality details
                    </small>
                  </div>

                </button>


                <button className="quick-action complete-action">

                  <span className="quick-icon">
                    ✓
                  </span>

                  <div>
                    <strong>
                      Complete Procurement
                    </strong>

                    <small>
                      Finalize and proceed
                    </small>
                  </div>

                </button>

              </div>

            </div>


            {/* =================================================
                RECENT ACTIVITY
            ================================================= */}

            <div className="dashboard-panel activity-panel">

              <div className="panel-header">

                <h2>
                  Recent Activity
                </h2>

                <button className="view-all-button">
                  View All →
                </button>

              </div>


              <div className="activity-list">


                <div className="activity-item">

                  <span className="activity-dot green-dot"></span>

                  <span className="activity-time">
                    10:15 AM
                  </span>

                  <div className="activity-details">

                    <strong>
                      Crop verification completed
                    </strong>

                    <span>
                      A103 - Paddy (35 Q)
                    </span>

                  </div>

                </div>


                <div className="activity-item">

                  <span className="activity-dot blue-dot"></span>

                  <span className="activity-time">
                    09:50 AM
                  </span>

                  <div className="activity-details">

                    <strong>
                      Weighing completed
                    </strong>

                    <span>
                      A102 - Red Gram (18 Q)
                    </span>

                  </div>

                </div>


                <div className="activity-item">

                  <span className="activity-dot green-dot"></span>

                  <span className="activity-time">
                    09:30 AM
                  </span>

                  <div className="activity-details">

                    <strong>
                      New farmer registered
                    </strong>

                    <span>
                      Srinivas Reddy
                    </span>

                  </div>

                </div>


                <div className="activity-item">

                  <span className="activity-dot grey-dot"></span>

                  <span className="activity-time">
                    09:10 AM
                  </span>

                  <div className="activity-details">

                    <strong>
                      Payment processed
                    </strong>

                    <span>
                      A099 - ₹45,200
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default ProcurementDashboard;