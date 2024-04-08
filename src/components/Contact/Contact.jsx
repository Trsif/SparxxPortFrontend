import React, {useState} from "react";
import './Contact.css'
const Contact = () => {

    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        setEmail('')
        setMessage('')

    }



    return(
        <div className="contact-container">
            <h2>
                Contact me
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact