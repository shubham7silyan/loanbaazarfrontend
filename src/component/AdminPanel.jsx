import React, { useState, useEffect, useCallback } from 'react';
import './AdminPanel.css';
import API_BASE_URL from '../config/api';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({ total: 0, unread: 0, read: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filterBy, setFilterBy] = useState('all');
  const [expandedContact, setExpandedContact] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsLoggedIn(true);
      fetchContacts();
    }
  }, [fetchContacts, sortBy, filterBy]);

  // Format date and time
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const formatted = date.toLocaleString('en-IN', options);
    const [datePart, timePart] = formatted.split(', ');
    return { date: datePart, time: timePart };
  };

  // Fetch contacts
  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/contacts`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        
        // Sort contacts
        let sortedContacts = [...data];
        if (sortBy === 'newest') {
          sortedContacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (sortBy === 'oldest') {
          sortedContacts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        } else if (sortBy === 'unread') {
          sortedContacts.sort((a, b) => (a.isRead === b.isRead) ? 0 : a.isRead ? 1 : -1);
        }

        // Filter contacts
        if (filterBy === 'unread') {
          sortedContacts = sortedContacts.filter(contact => !contact.isRead);
        } else if (filterBy === 'read') {
          sortedContacts = sortedContacts.filter(contact => contact.isRead);
        }

        setContacts(sortedContacts);
        
        // Calculate stats
        const totalContacts = data.length;
        const unreadContacts = data.filter(contact => !contact.isRead).length;
        const readContacts = data.filter(contact => contact.isRead).length;
        
        setStats({
          total: totalContacts,
          unread: unreadContacts,
          read: readContacts
        });
      } else {
        setError('Failed to fetch contacts');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  }, [sortBy, filterBy]);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        setIsLoggedIn(true);
        fetchContacts();
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  // Mark as read
  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/contacts/${id}/read`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      
      if (response.ok) {
        fetchContacts(); // Refresh the list
      } else {
        const errorData = await response.json();
        setError('Failed to mark as read: ' + (errorData.error || 'Unknown error'));
      }
    } catch (err) {
      setError('Failed to mark as read');
    }
  };

  // Mark as unread
  const markAsUnread = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/contacts/${id}/unread`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      
      if (response.ok) {
        fetchContacts(); // Refresh the list
      } else {
        const errorData = await response.json();
        setError('Failed to mark as unread: ' + (errorData.error || 'Unknown error'));
      }
    } catch (err) {
      setError('Failed to mark as unread');
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.ok) {
        setContacts(contacts.filter(contact => contact._id !== id));
        fetchContacts(); // Refresh stats
      } else {
        setError('Failed to delete contact');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  // Toggle contact expansion
  const toggleContactExpansion = (contactId) => {
    if (expandedContact === contactId) {
      setExpandedContact(null);
    } else {
      setExpandedContact(contactId);
      // Mark as read when expanded
      const contact = contacts.find(c => c._id === contactId);
      if (contact && !contact.isRead) {
        markAsRead(contactId);
      }
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
    setContacts([]);
    setStats({ total: 0, unread: 0, read: 0 });
    setExpandedContact(null);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle sort/filter changes
  useEffect(() => {
    if (isLoggedIn) {
      fetchContacts();
    }
  }, [fetchContacts, isLoggedIn]);

  // Truncate message for list view
  const truncateMessage = (message, maxLength = 80) => {
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength) + '...';
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login">
        <div className="login-background">
          <div className="login-container">
            <div className="login-header">
              <div className="admin-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" fill="currentColor"/>
                </svg>
              </div>
              <h2>Admin Login</h2>
              <p>Access your LoanBazar admin dashboard</p>
            </div>
            
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" fill="currentColor"/>
                  </svg>
                  <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    onChange={handleInputChange}
                    placeholder="Enter username"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" fill="currentColor"/>
                  </svg>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              {error && (
                <div className="error-message">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" fill="currentColor"/>
                  </svg>
                  {error}
                </div>
              )}
              
              <button type="submit" disabled={loading} className="login-btn">
                {loading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Authenticating...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" fill="currentColor"/>
                    </svg>
                    Sign In
                  </>
                )}
              </button>
            </form>
            
            <div className="login-footer">
              <p> 2024 LoanBazar. Secure Admin Access.</p>
              <button 
                onClick={() => window.location.href = '/'} 
                className="back-to-main-btn"
                type="button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" fill="currentColor"/>
                </svg>
                Back to Main Website
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Admin Panel - Contact Submissions</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      {error && <div className="error">{error}</div>}

      {/* Stats Dashboard */}
      <div className="stats-dashboard">
        <div className="stat-card">
          <div className="stat-number">{stats.total}</div>
          <div className="stat-label">Total Messages</div>
        </div>
        <div className="stat-card unread">
          <div className="stat-number">{stats.unread}</div>
          <div className="stat-label">Unread Messages</div>
        </div>
        <div className="stat-card read">
          <div className="stat-number">{stats.read}</div>
          <div className="stat-label">Read Messages</div>
        </div>
      </div>

      <div className="contacts-section">
        <div className="contacts-header">
          <h2>Contact Form Submissions ({stats.total})</h2>
          <div className="controls">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="unread">Unread First</option>
            </select>
            
            <select 
              value={filterBy} 
              onChange={(e) => setFilterBy(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Messages</option>
              <option value="unread">Unread Only</option>
              <option value="read">Read Only</option>
            </select>
            
            <button onClick={fetchContacts} className="refresh-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" fill="currentColor"/>
              </svg>
              Refresh
            </button>
          </div>
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="contacts-container list">
            {contacts.length === 0 ? (
              <div className="no-contacts">No contact submissions found.</div>
            ) : (
              contacts.map((contact) => (
                <div 
                  key={contact._id} 
                  className={`contact-item ${contact.isRead ? 'read' : 'unread'} ${expandedContact === contact._id ? 'expanded' : ''}`}
                >
                  {/* List View - Gmail Style */}
                  <div 
                    className="contact-list-header"
                    onClick={() => toggleContactExpansion(contact._id)}
                  >
                    <div className="contact-list-info">
                      <div className="contact-name-status">
                        {!contact.isRead && <div className="unread-dot"></div>}
                        <h3 className={!contact.isRead ? 'unread-name' : ''}>{contact.name}</h3>
                        <span className="contact-phone">({contact.phone})</span>
                      </div>
                      <div className="contact-preview">
                        <span className="message-preview">{truncateMessage(contact.message)}</span>
                      </div>
                    </div>
                    <div className="contact-list-meta">
                      <div className="contact-date">{formatDateTime(contact.createdAt).date}</div>
                      <div className="contact-time">{formatDateTime(contact.createdAt).time}</div>
                    </div>
                    <div className="expand-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d={expandedContact === contact._id ? "M7,14L12,9L17,14H7Z" : "M7,10L12,15L17,10H7Z"} fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  {expandedContact === contact._id && (
                    <div className="contact-expanded-details">
                      <div className="contact-full-info">
                        <div className="contact-meta-grid">
                          <div className="meta-item">
                            <strong>Email:</strong> {contact.email}
                          </div>
                          <div className="meta-item">
                            <strong>Submitted:</strong> {formatDateTime(contact.createdAt).date} at {formatDateTime(contact.createdAt).time}
                          </div>
                        </div>
                        <div className="message-section">
                          <strong>Message:</strong>
                          <div className="message-full">{contact.message}</div>
                        </div>
                        <div className="contact-actions">
                          {contact.isRead ? (
                            <button onClick={() => markAsUnread(contact._id)} className="unread-btn">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,18H4V8L12,13L20,8V18M20,6L12,11L4,6H20Z" fill="currentColor"/>
                              </svg>
                              Mark Unread
                            </button>
                          ) : (
                            <button onClick={() => markAsRead(contact._id)} className="read-btn">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M21.8,13.2C22.2,13.6 22.2,14.4 21.8,14.8L20.4,16.2C20,16.6 19.2,16.6 18.8,16.2L15.5,12.9L12.2,16.2C11.8,16.6 11,16.6 10.6,16.2L9.2,14.8C8.8,14.4 8.8,13.6 9.2,13.2L12.5,9.9L9.2,6.6C8.8,6.2 8.8,5.4 9.2,5L10.6,3.6C11,3.2 11.8,3.2 12.2,3.6L15.5,6.9L18.8,3.6C19.2,3.2 20,3.2 20.4,3.6L21.8,5C22.2,5.4 22.2,6.2 21.8,6.6L18.5,9.9L21.8,13.2Z" fill="currentColor"/>
                              </svg>
                              Mark Read
                            </button>
                          )}
                          <button onClick={() => deleteContact(contact._id)} className="delete-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" fill="currentColor"/>
                            </svg>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminPanel;
