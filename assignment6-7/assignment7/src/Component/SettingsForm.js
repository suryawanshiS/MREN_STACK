import React, { useState } from 'react';

function SettingsForm() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className={`card p-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <h3 className="mb-4">Settings</h3>
      
      <div className="form-check form-switch mb-3">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="darkModeToggle" 
          checked={darkMode} 
          onChange={handleDarkModeToggle} 
        />
        <label className="form-check-label" htmlFor="darkModeToggle">
          Dark Mode
        </label>
      </div>

      <div className="form-check form-switch mb-3">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="notificationsToggle" 
          checked={notifications} 
          onChange={handleNotificationsToggle} 
        />
        <label className="form-check-label" htmlFor="notificationsToggle">
          Notifications
        </label>
      </div>

      <div className="mb-3">
        <label htmlFor="languageSelect">Language</label>
        <select 
          id="languageSelect" 
          className="form-select" 
          value={language} 
          onChange={handleLanguageChange}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>

      <div>
        <p><strong>Current Settings:</strong></p>
        <p>Dark Mode: {darkMode ? 'Enabled' : 'Disabled'}</p>
        <p>Notifications: {notifications ? 'On' : 'Off'}</p>
        <p>Language: {language}</p>
      </div>
    </div>
  );
}

export default SettingsForm;
