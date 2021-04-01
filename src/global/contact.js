import React, { useState } from 'react'
import '../css/contact.css'
import FeatherIcon from 'feather-icons-react'
import { successMessageNotification, errorMessageNotification } from '../components/Notifications/Notification'

const Contact = () => {
    const [name, setName] = useState()
    const [subject, setSubject] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const sendEmail = () =>{
        window.Email.send({
            Host: process.env.REACT_APP_HOST,
            Username: process.env.REACT_APP_USERNAME,
            Password: process.env.REACT_APP_PASSWORD,
            To: "sugmovie.contact@gmail.com",
            From: email,
            Subject: subject,
            Body: message
        })
        .then(() =>successMessageNotification(name))
        .catch(() =>errorMessageNotification())
    }
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleSubject = (e) =>{
        setSubject(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleMessage = (e) =>{
        setMessage(e.target.value)
    }
    return (
        <div className="contact-form-wrapper">
            <div className="contact-form">
                <div className="contact-informations-wrapper">
                    <h2>Would like to hear from you.</h2>
                    <div className="contact-informations">
                        <FeatherIcon icon="mail" size={18} color="#F03A17" />
                        <span className="mail">sugmovie.contact@gmail.com</span>
                    </div>
                </div>
                <div className="form">
                    <form onSubmit={(e)=>{
                        sendEmail()
                        e.preventDefault()
                        }}>
                        <h2>Contact us</h2>
                        <div className="field-wrapper">
                            <input
                             type="text"
                             className="field"
                             placeholder="Full name"
                             onChange={handleName}
                             required/>
                        </div>
                        <div className="field-wrapper">
                            <input
                                type="text"
                                className="field"
                                placeholder="Subject"
                                onChange={handleSubject}
                                required/>
                        </div>
                        <div className="field-wrapper">
                            <input
                                type="email"
                                className="field"
                                placeholder="Email"
                                onChange={handleEmail}
                                required/>
                        </div>
                        <div className="field-wrapper">
                            <textarea
                                rows="10"
                                className="field"
                                placeholder="Message"
                                onChange={handleMessage}
                                required/>
                        </div>
                        <button type="submit" className="send-btn">
                            Send
                            <FeatherIcon
                                icon="send"
                                size={18}
                                color="white"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact 
