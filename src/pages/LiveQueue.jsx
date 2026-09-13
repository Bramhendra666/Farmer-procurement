import { useState } from 'react'
import './LiveQueue.css'

function LiveQueue() {
  const [currentToken, setCurrentToken] = useState(98)
  const [farmersAhead, setFarmersAhead] = useState(5)

  const simulateNext = () => {
    if (farmersAhead > 0) {
      setCurrentToken(currentToken + 1)
      setFarmersAhead(farmersAhead - 1)
    }
  }

  return (
    <div className="queue-page">

      <div className="queue-top">
        <span className="queue-eyebrow">
          ● LIVE PROCUREMENT
        </span>

        <h1>Live Smart Procurement Queue</h1>

        <p>
          Track your token in real time and know exactly when
          you need to reach the procurement center.
        </p>
      </div>

      <div className="queue-main">

        <div className="your-token-card">
          <span>Your Token</span>
          <strong>A104</strong>

          <div className="token-details">
            <div>
              <span>Farmers Ahead</span>
              <strong>{farmersAhead}</strong>
            </div>

            <div>
              <span>Estimated Wait</span>
              <strong>{farmersAhead * 5} min</strong>
            </div>
          </div>
        </div>

        <div className="serving-card">
          <span>Currently Serving</span>

          <strong>
            A{currentToken}
          </strong>

          <div className="queue-line">
            <div className="queue-progress"></div>
          </div>

          <p>
            Your token will be called after {farmersAhead} farmers.
          </p>
        </div>

      </div>

      <div className="queue-list-card">

        <div className="list-header">
          <div>
            <span>QUEUE STATUS</span>
            <h2>Procurement Center 02</h2>
          </div>

          <span className="open-badge">
            ● OPEN
          </span>
        </div>

        <div className="queue-item completed">
          <span>A099</span>
          <strong>Completed</strong>
          <small>✓</small>
        </div>

        <div className="queue-item completed">
          <span>A100</span>
          <strong>Completed</strong>
          <small>✓</small>
        </div>

        <div className="queue-item completed">
          <span>A101</span>
          <strong>Completed</strong>
          <small>✓</small>
        </div>

        <div className="queue-item processing">
          <span>A102</span>
          <strong>Processing</strong>
          <small>●</small>
        </div>

        <div className="queue-item waiting">
          <span>A103</span>
          <strong>Waiting</strong>
          <small>•••</small>
        </div>

        <div className="queue-item you">
          <span>A104</span>
          <strong>YOU</strong>
          <small>👤</small>
        </div>

      </div>

      <div className="queue-action">
        <button onClick={simulateNext}>
          Simulate Next Token →
        </button>
      </div>

    </div>
  )
}

export default LiveQueue