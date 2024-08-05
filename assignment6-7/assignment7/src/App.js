import React, { useState } from 'react';
import LoginForm from './Component/LoginForm';
import RegistrationForm from './Component/RegistrationForm';
import SurveyForm from './Component/SurveyForm';
import SearchFilter from './Component/SearchFilter';
import SettingsForm from './Component/SettingsForm';

function App() {
  const [activeForm, setActiveForm] = useState('');

  const renderForm = () => {
    switch (activeForm) {
      case 'login':
        return <LoginForm />;
      case 'registration':
        return <RegistrationForm />;
      case 'survey':
        return <SurveyForm />;
      case 'settings':
        return <SettingsForm />;
      case 'search':
        return <SearchFilter />;
      default:
        return <p>Please select a form to display.</p>;
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Forms and Controlled Components</h1>

      <div className="d-flex justify-content-center mb-4">
        <button 
          className="btn btn-primary mx-2"
          onClick={() => setActiveForm('login')}
        >
          Login Form
        </button>
        <button 
          className="btn btn-success mx-2"
          onClick={() => setActiveForm('registration')}
        >
          Registration Form
        </button>
        <button 
          className="btn btn-warning mx-2"
          onClick={() => setActiveForm('survey')}
        >
          Survey Form
        </button>
        <button 
          className="btn btn-info mx-2"
          onClick={() => setActiveForm('settings')}
        >
          Settings Form
        </button>
        <button 
          className="btn btn-secondary mx-2"
          onClick={() => setActiveForm('search')}
        >
          Search Filter
        </button>
      </div>

      <div className="mt-4">
        {renderForm()}
      </div>
    </div>
  );
}

export default App;
