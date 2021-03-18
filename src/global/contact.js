import React from 'react'
import FeatherIcon from 'feather-icons-react'


const Contact = () => {
    return (
        <div className="contact-form-wrapper">
            <div className="contact-form">
                <div className="contact-informations-wrapper">
                    <h2>Would like to head from you.</h2>
                    <div className="contact-informations">
                        <FeatherIcon icon="mail" size={18} color="#F03A17" />
                        <span className="mail">co.yacouri@gmail.com</span>
                    </div>
                </div>
                <div className="form">
                    <form>
                        <h2>Contact us</h2>
                        <div className="field-wrapper">
                            <input
                             type="text"
                             className="field"
                             placeholder="Full name"/>
                        </div>
                        <div className="field-wrapper">
                            <input
                                type="text"
                                className="field"
                                placeholder="Subject"/>
                        </div>
                        <div className="field-wrapper">
                            <input
                                type="email"
                                className="field"
                                placeholder="Email"/>
                        </div>
                        <div className="field-wrapper">
                            <textarea
                                rows="10"
                                className="field"
                                placeholder="Message"/>
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
