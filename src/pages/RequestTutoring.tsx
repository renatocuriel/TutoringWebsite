import React from 'react';

const RequestTutoring = () => (
    <div>
      <h1>Request Tutoring</h1>
      <p>Fill out the form below to request tutoring for a specific course.</p>
      <form>
        <label htmlFor="course">Course:</label>
        <input type="text" id="course" name="course" />
        <button type="submit">Request Tutoring</button>
      </form>
    </div>
);

export default RequestTutoring