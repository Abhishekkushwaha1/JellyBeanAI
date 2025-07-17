import React, { useState } from 'react';
import './JellybeanDashboard.css';

const JellybeanDashboard = () => {
  const [agents, setAgents] = useState([
    { id: 1, name: "SebesBot Alpha", useCase: "Sales Outreach", performance: "97%", online: true },
    { id: 3, name: "SupportBot Beta", useCase: "Customer Support", performance: "98%", online: true },
    { id: 4, name: "Scheduler AI", useCase: "Meeting Scheduling", performance: "95%", online: true },
    { id: 5, name: "LeadGen Agent", useCase: "Lead Qualification", performance: "80%", online: false },
    { id: 6, name: "HR Assistant", useCase: "Internal HR", performance: "87%", online: true },
    { id: 7, name: "Marketing Guru", useCase: "Content Generation", performance: "91%", online: false },
    { id: 8, name: "Financial Bot", useCase: "Invoice Processing", performance: "75%", online: true },
    { id: 9, name: "Data Analyst AI", useCase: "Report Generation", performance: "89%", online: true }
  ]);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAgentStatus = (id) => {
    setAgents(agents.map(agent => 
      agent.id === id ? { ...agent, online: !agent.online } : agent
    ));
  };

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <header className="top-nav">
        <div className="nav-left">
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <h1>Jellybean AI</h1>
          <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              <li 
                className={activeTab === 'dashboard' ? 'active' : ''}
                onClick={() => {
                  setActiveTab('dashboard');
                  setMobileMenuOpen(false);
                }}
              >
                Dashboard
              </li>
              <li 
                className={activeTab === 'agents' ? 'active' : ''}
                onClick={() => {
                  setActiveTab('agents');
                  setMobileMenuOpen(false);
                }}
              >
                AI Agents
              </li>
              <li 
                className={activeTab === 'conversations' ? 'active' : ''}
                onClick={() => {
                  setActiveTab('conversations');
                  setMobileMenuOpen(false);
                }}
              >
                Conversations
              </li>
              <li 
                className={activeTab === 'analytics' ? 'active' : ''}
                onClick={() => {
                  setActiveTab('analytics');
                  setMobileMenuOpen(false);
                }}
              >
                Analytics
              </li>
              <li 
                className={activeTab === 'settings' ? 'active' : ''}
                onClick={() => {
                  setActiveTab('settings');
                  setMobileMenuOpen(false);
                }}
              >
                Settings
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
          </div>
          <div className="notifications">
            <button>🔔</button>
            <span className="badge">3</span>
          </div>
          <div className="user-profile">
            <div className="avatar">👤</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === 'dashboard' && (
          <div className="dashboard-container">
            <div className="welcome-banner">
              <h2>Welcome to Jellybean AI Dashboard!</h2>
              <hr></hr>
              <p>
                Manage your powerful AI agents that seamlessly handle sales, support, and scheduling, 
                empowering your business to scale effortlessly.
              </p>
            </div>

            <div className="metrics-container">
              <div className="metric-card">
                <h3>Total Agents</h3>
                <div className="metric-value">{agents.length}</div>
                <p className="metric-label">Activity Conversations</p>
                <p className="metric-subvalue">2,130</p>
                <p className="metric-sublabel">Last 24 hours</p>
              </div>

              <div className="metric-card">
                <h3>Working Scheduled</h3>
                <div className="metric-value">345</div>
                <p className="metric-label">This month</p>
              </div>

              <div className="metric-card">
                <h3>Sales Generated</h3>
                <div className="metric-value">887,200</div>
                <p className="metric-label">Last 30 days</p>
              </div>
            </div>

            <div className="performance-section">
              <h2>📊 Agent Performance Overview</h2>
              <p>Performance of AI agents over the last 6 months.</p>
              <div className="performance-chart">
                <div className="chart-bars">
                  <div className="bar" style={{ height: '60%' }}></div>
                  <div className="bar" style={{ height: '30%' }}></div>
                  <div className="bar" style={{ height: '55%' }}></div>
                  <div className="bar" style={{ height: '15%' }}></div>
                  <div className="bar" style={{ height: '5%' }}></div>
                  <div className="bar" style={{ height: '45%' }}></div>
                </div>
                <div className="chart-labels">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>

            <div className="agents-section">
              <div className="section-header">
                <h2>AI Agents List</h2>
                <p>Manage your active and inactive AI agents.</p>
              </div>
              <div className="table-container">
                <table className="agents-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Agent Name</th>
                      <th>Use Case</th>
                      <th>Performance</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agents.map(agent => (
                      <tr key={agent.id}>
                        <td data-label="ID">{agent.id}</td>
                        <td data-label="Agent Name"><strong>{agent.name}</strong></td>
                        <td data-label="Use Case"><strong>{agent.useCase}</strong></td>
                        <td data-label="Performance"><strong>{agent.performance}</strong></td>
                        <td data-label="Status">
                          <div 
                            className={`status-indicator ${agent.online ? 'online' : 'offline'}`}
                            onClick={() => toggleAgentStatus(agent.id)}
                            title={`Click to toggle ${agent.online ? 'offline' : 'online'}`}
                          >
                            <div className="status-dot"></div>
                            <span>{agent.online ? 'Online' : 'Offline'}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="deploy-section">
              <h2>Deploy a New AI Agent</h2>
              <p>Expand your capabilities by adding more specialized AI agents to your team.</p>
              <button className="add-agent-btn">Add Agent</button>
            </div>

            <div className="conversations-section">
              <h2>Recent Customer Conversations</h2>
              <p>Quick view of recent interactions handled by your agents.</p>
              <div className="conversation-cards">
                <div className="conversation-card">
                  <h4>Alice Johnson with SalesBot Alpha</h4>
                  <p>Customer insights about premium features and pricing in the enterprise plan.</p>
                  <p className="time-ago">2 hours ago</p>
                </div>
                <div className="conversation-card">
                  <h4>Bob Wilkins with SupportBot Beta</h4>
                  <p>Issue regarding two-factor authentication received; provided steps for password reset.</p>
                  <p className="time-ago">5 hours ago</p>
                </div>
                <div className="conversation-card">
                  <h4>Charlie Davis with Scheduler AI</h4>
                  <p>Successfully scheduled a demo call for next Tuesday at 10 AM PST.</p>
                  <p className="time-ago">Wednesday</p>
                </div>
              </div>
            </div>

            <div className="activity-section">
              <h2>Recent Activity Feed</h2>
              <p>Latest system and agent activities.</p>
              <div className="activity-feed">
                <div className="activity-item">
                  <p><strong>Agent "SalesBot Alpha" successfully closed a deal.</strong></p>
                  <p className="time-ago">30 minutes ago</p>
                </div>
                <div className="activity-item">
                  <div className="checkbox-item">
                    <input type="checkbox" id="activity1" />
                    <label htmlFor="activity1">New support ticket assigned to "SupportBot Beta".</label>
                  </div>
                  <p className="time-ago">1 hour ago</p>
                </div>
                <div className="activity-item">
                  <div className="checkbox-item">
                    <input type="checkbox" id="activity2" />
                    <label htmlFor="activity2">Agent "Scheduler AI" confirmed a meeting with new client.</label>
                  </div>
                  <p className="time-ago">4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'agents' && (
          <div className="tab-content">
            <h2>AI Agents Management</h2>
            {/* Agents management content */}
          </div>
        )}

        {activeTab === 'conversations' && (
          <div className="tab-content">
            <h2>Customer Conversations</h2>
            {/* Conversations content */}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="tab-content">
            <h2>Analytics Dashboard</h2>
            {/* Analytics content */}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="tab-content">
            <h2>Settings</h2>
            {/* Settings content */}
          </div>
        )}

        <footer className="dashboard-footer">
          <p>© 2025 Jellybean AI. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default JellybeanDashboard;