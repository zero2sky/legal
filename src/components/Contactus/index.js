import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../Hero/index.css";
import Navbar from "../Navbar/Navbar";
import './index.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      subject: 'New Booking received',
      userEmail: email,
      message: `
      Name : ${name}
      Email : ${email}
      Phone : ${phone}
      Time : ${selectedDate}
      Query : ${query}
      `,
    };

    try {
      const response = await fetch('https://zerotosky.pythonanywhere.com/email/send', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 200) {

        toast.success('Sent Successfully Thank You')
        setName("");
        setEmail("");
        setPhone("");
        setQuery("");
      } else {
        // Handle error response
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="Hero-section">
        <div class="contact-section">
          <div class="inner-container">
            <h1>Booking</h1>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>

                <input
                  className="input"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="input"
                  placeholder="Enter Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <DatePicker
                  className="input"
                  style={{ backgroundColor: 'black' }}
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  placeholderText="Select Date and Time "
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  popperClassName="date-time-picker-popper"
                />

                <input
                  className="input"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="textarea"
                  placeholder="Enter Query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button className="Signup-btn" type="submit">
                  Book Now
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;