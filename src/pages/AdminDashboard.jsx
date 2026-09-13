import React, { useMemo, useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [search, setSearch] = useState("");

  const records = [
    ["1", "Ramesh Kumar", "Paddy", "12.5", "Green Valley", "Aug 30, 2026", "Completed"],
    ["2", "Sita Devi", "Wheat", "8.0", "Sunrise", "Aug 30, 2026", "Completed"],
    ["3", "Mohan Lal", "Maize", "6.5", "Riverdale", "Aug 29, 2026", "Completed"],
    ["4", "Priya Sharma", "Paddy", "10.0", "Green Valley", "Aug 29, 2026", "Completed"],
    ["5", "Arjun Singh", "Millet", "4.2", "Hillview", "Aug 28, 2026", "Completed"],
  ];

  const filteredRecords = useMemo(() => {
    const value = search.trim().toLowerCase();
    if (!value) return records;
    return records.filter((row) => row.join(" ").toLowerCase().includes(value));
  }, [search]);

  const handleLogout = () => {
    localStorage.removeItem("adminId");
    localStorage.removeItem("adminName");
    window.location.href = "/";
  };

  const navItems = [
    ["Dashboard", "⌂"],
    ["Procurement Centres", "▦"],
    ["Officers", "♙"],
    ["Farmers", "♟"],
    ["Procurement Records", "▤"],
    ["Inventory", "◇"],
    ["Payments", "▣"],
    ["Reports", "▥"],
    ["Settings", "⚙"],
  ];

  return (
    <div className="admin-dashboard">

      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <img src="/images/logo.jpeg" alt="Farmer Procurement" />
          <div>
            <strong>Farmer</strong>
            <strong>Procurement</strong>
          </div>
        </div>

        <nav className="admin-sidebar-nav">
          {navItems.map(([label, icon]) => (
            <button
              key={label}
              type="button"
              className={`admin-nav-item ${activeNav === label ? "active" : ""}`}
              onClick={() => setActiveNav(label)}
            >
              <span>{icon}</span>
              <b>{label}</b>
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="admin-logout"
          onClick={handleLogout}
        >
          <span>↪</span>
          Logout
        </button>
      </aside>

      <main className="admin-dashboard-main">

        <header className="admin-topbar">
          <div className="admin-search">
            <span>⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search farmers, centres, or records..."
            />
          </div>

          <div className="admin-top-actions">
            <button type="button" className="admin-notification">
              ♧
              <i></i>
            </button>

            <div className="admin-profile">
              <div className="admin-profile-avatar">♙</div>
              <strong>Admin</strong>
              <span>⌄</span>
            </div>
          </div>
        </header>

        <div className="admin-content">

          <div className="admin-page-heading">
            <div>
              <h1>Admin Dashboard</h1>
              <p>Monitor procurement activities, manage centres and officers, and view system insights.</p>
            </div>

            <button className="admin-date-filter" type="button">
              <span>▣</span>
              Aug 1, 2026 – Aug 31, 2026
              <b>⌄</b>
            </button>
          </div>

          <section className="admin-kpis">
            <div className="admin-kpi green">
              <div className="admin-kpi-icon">🌿</div>
              <div>
                <span>Total Procurement</span>
                <strong>1,245 MT</strong>
                <small>↑ 12% <em>from last month</em></small>
              </div>
            </div>

            <div className="admin-kpi blue">
              <div className="admin-kpi-icon">♟</div>
              <div>
                <span>Total Farmers</span>
                <strong>892</strong>
                <small>↑ 8% <em>from last month</em></small>
              </div>
            </div>

            <div className="admin-kpi yellow">
              <div className="admin-kpi-icon">▦</div>
              <div>
                <span>Active Centres</span>
                <strong>12</strong>
                <small>out of 15</small>
              </div>
            </div>

            <div className="admin-kpi purple">
              <div className="admin-kpi-icon">♙</div>
              <div>
                <span>Procurement Officers</span>
                <strong>28</strong>
                <small>out of 32</small>
              </div>
            </div>
          </section>

          <section className="admin-middle-grid">

            <div className="admin-panel trend-panel">
              <div className="admin-panel-heading">
                <h2>Procurement Trend</h2>
                <div className="admin-legend">
                  <span><i className="legend-dot"></i> Quantity (MT)</span>
                  <span><i className="legend-line"></i> Farmers</span>
                </div>
              </div>

              <div className="admin-chart">
                <div className="chart-y-labels">
                  <span>200</span>
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>

                <div className="chart-area">
                  <div className="chart-grid"><i></i><i></i><i></i><i></i><i></i></div>
                  <div className="chart-bars">
                    {[30, 48, 60, 70, 92, 110, 128, 150].map((height, i) => (
                      <div className="chart-bar-group" key={i}>
                        <span
                          className="chart-bar"
                          style={{ height: `${height}px` }}
                        ></span>
                        <small>{["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"][i]}</small>
                      </div>
                    ))}
                  </div>

                  <svg className="chart-line-svg" viewBox="0 0 600 190" preserveAspectRatio="none">
                    <polyline
                      points="30,150 105,125 180,105 255,92 330,68 405,48 480,30 555,15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    {[
                      [30,150],[105,125],[180,105],[255,92],
                      [330,68],[405,48],[480,30],[555,15]
                    ].map(([x,y], i) => (
                      <circle key={i} cx={x} cy={y} r="4.5" fill="currentColor" />
                    ))}
                  </svg>
                </div>
              </div>
            </div>

            <div className="admin-panel crop-panel">
              <div className="admin-panel-heading">
                <h2>Crop-wise Procurement</h2>
              </div>

              <div className="donut-wrap">
                <div className="donut">
                  <div>
                    <strong>1,245</strong>
                    <span>MT</span>
                  </div>
                </div>

                <div className="crop-legend">
                  <div><i className="paddy"></i><span>Paddy</span><b>52%</b></div>
                  <div><i className="wheat"></i><span>Wheat</span><b>20%</b></div>
                  <div><i className="maize"></i><span>Maize</span><b>12%</b></div>
                  <div><i className="millet"></i><span>Millet</span><b>8%</b></div>
                  <div><i className="others"></i><span>Others</span><b>8%</b></div>
                </div>
              </div>
            </div>

            <div className="admin-panel activity-panel">
              <div className="admin-panel-heading">
                <h2>Recent Activity</h2>
                <button type="button">View All</button>
              </div>

              <div className="activity-list">
                <div><i>▣</i><p><strong>New procurement record added</strong><span>Centre: Green Valley</span><small>2 mins ago</small></p></div>
                <div><i>♟</i><p><strong>New farmer registered</strong><span>Farmer ID: FRM2025080192</span><small>15 mins ago</small></p></div>
                <div><i>♙</i><p><strong>Officer login</strong><span>Officer ID: OFC032</span><small>40 mins ago</small></p></div>
                <div><i>▣</i><p><strong>Payment processed</strong><span>Farmer ID: FRM2025080187</span><small>1 hour ago</small></p></div>
                <div><i>▦</i><p><strong>Centre updated</strong><span>Centre: Sunrise Procurement Centre</span><small>2 hours ago</small></p></div>
              </div>
            </div>
          </section>

          <section className="admin-bottom-grid">

            <div className="admin-panel records-panel">
              <div className="admin-panel-heading">
                <h2>Recent Procurement Records</h2>
                <button type="button">View All</button>
              </div>

              <div className="admin-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Farmer Name</th>
                      <th>Crop</th>
                      <th>Quantity (MT)</th>
                      <th>Centre</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRecords.map((row) => (
                      <tr key={row[0]}>
                        {row.slice(0, 6).map((cell, i) => <td key={i}>{cell}</td>)}
                        <td><span className="completed-status">{row[6]}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="admin-panel alerts-panel">
              <div className="admin-panel-heading">
                <h2>Alerts &amp; Notifications</h2>
                <button type="button">View All</button>
              </div>

              <div className="alert-list">
                <div><i className="red">!</i><p><strong>Low stock alert</strong><span>Wheat stock below threshold</span><small>1 hour ago</small></p></div>
                <div><i className="orange">i</i><p><strong>Centre inactive</strong><span>Lakeside Centre has not reported today</span><small>3 hours ago</small></p></div>
                <div><i className="blue">i</i><p><strong>New officer registration</strong><span>Approval pending for 2 officers</span><small>5 hours ago</small></p></div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
