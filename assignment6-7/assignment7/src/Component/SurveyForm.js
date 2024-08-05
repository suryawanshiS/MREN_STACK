import React, { useState } from 'react';

function SurveyForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [feedback, setFeedback] = useState('');
  const [surveyDetails, setSurveyDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the survey details in state
    const details = {
      name,
      age,
      feedback,
    };
    setSurveyDetails(details);
  };

  return (
    <div className="card p-4">
      <h3 className="mb-4">Survey Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Age:</label>
          <input 
            type="number" 
            className="form-control" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label>Feedback:</label>
          <textarea 
            className="form-control" 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-warning">Submit Survey</button>
      </form>

      {surveyDetails && (
        <div className="mt-4">
          <h4>Survey Details</h4>
          <p><strong>Name:</strong> {surveyDetails.name}</p>
          <p><strong>Age:</strong> {surveyDetails.age}</p>
          <p><strong>Feedback:</strong> {surveyDetails.feedback}</p>
        </div>
      )}
    </div>
  );
}

export default SurveyForm;
