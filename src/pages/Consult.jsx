import React, { useState } from 'react';
import './Consult.css'; // Import the external CSS file
import { Modal } from 'react-bootstrap'; // Import Bootstrap modal component

const Consult = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="container55">
      <div className="col">
        <div className="rightsideconsult">
          <p className="text">Get your Consultation Today !</p><br></br>
          <button className="button" onClick={handleShowModal}>Book Appointment</button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <div className="appointment-form-container">
          <div className="close-button" onClick={handleCloseModal}>
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
                <label htmlFor="number">Contact Number:</label>
                <input type="number" className="form-control" id="number" name="number" required/>
              </div>
              <div className="form-group">
                <label htmlFor="appointmentDate">Appointment Date:</label>
                <input type="date" className="form-control" id="appointmentDate" name="appointmentDate" required/>
              </div>
              <button type="submit" className="btn btn-primary"><i class="ri-whatsapp-line"></i> Book Appointment</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Consult;
