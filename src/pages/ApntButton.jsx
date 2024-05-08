import React, { useState } from 'react';
import './ApntButton.css';

const ApntButton = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const toggleAppointmentForm = () => {
    setShowAppointmentForm(!showAppointmentForm);
  };

  return (
    <div>
      <button className='HomeStickyButton' onClick={toggleAppointmentForm}>
        <i className="ri-whatsapp-line"></i>
      </button>

      {showAppointmentForm && (
        <div className="appointment-form-container">
          <div className="close-button" onClick={toggleAppointmentForm}>
            <i className="ri-close-line"></i>
          </div>
          <div className="appointment-form-header">
            Schedule Appointment <i class="ri-calendar-schedule-line"></i>
          </div>
          <div className='formbackground'>
          <form className="appointment-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="place">Place:</label>
              <input type="text" className="form-control" id="place" name="place" required/>
            </div>
            <div className="form-group">
              <label htmlFor="appointmentDate">Appointment Date:</label>
              <input type="date" className="form-control" id="appointmentDate" name="appointmentDate" required/>
            </div>
            <button type="submit" className="btn btn-primary"><i class="ri-whatsapp-line"></i> Book Appointment</button>
          </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApntButton;
