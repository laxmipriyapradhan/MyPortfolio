import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjvqjojd";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: ""
        });
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("There was an error sending the message", error);
    }
  };

  return (
    <div>
      
      <Container fluid className="resume-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '92vh' }}>
      <h2  className ="contact-header" style={{marginTop: "-400px", marginRight:"-400px"}}>Contact me :)</h2>
        <Form onSubmit={handleFormSubmit} style={{ width: '500px' }}>
          <div className="form-group">
            <label className="form-label">NAME</label>
            <input 
              type="text"
              className="form-input"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">EMAIL</label>
            <input 
              type="email"
              className="form-input"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label className="form-label">CELLNO</label>
            <input 
              type="text"
              className="form-input"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Enter contact number"
            />
          </div>

          <div className="form-group">
            <label className="form-label">MESSAGE</label>
            <textarea 
              className="form-input"
              name="message"
              type="textarea"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Enter your message"
            />
          </div>

          <Button variant="primary" type="submit" style={{ marginTop: '10px', marginRight:"-100px"}}>
            Send Message
          </Button>
        </Form>
      </Container>

      <style jsx>{`
        .form-group {
          display: flex;
          flex-direction: row;
          margin-bottom: 1rem;
          align-items: center;
        }

        .form-label {
          flex: 0.25;
          text-align: right;
          margin-right: 1rem;
        }

        .form-input {
          flex: 0.80;
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          width: 100%;
        }


        @media (max-width: 600px) {
          .form-group {
            flex-direction: column;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: 15px; /* Add some padding on the left side for spacing */
            padding-right: 15px; /* Add some padding on the right side for spacing */
          }
        
          .form-label {
            width: 100%;
            text-align: left;
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
        
          .form-input {
            flex: 1;
            width: 100%; /* Make sure input fields take full width */
          }
        
          Form {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
          }
        
          Button {
            display: block;
            margin-left: -60px;  /* Aligns the button to the right */
            margin-right: 0;
            width: 50%;
          }
        
          .contact-header {
            display: none; /* This hides the h2 tag for mobile view */
          }
        }
      `}</style>
    </div>
  );
}

export default Contactus;
