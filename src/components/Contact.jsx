import React from 'react'

export default function Contact() {
    return (
        <div id='contact'>
            <h1>CONTACTS</h1>
            <form>
                <input type='text' placeholder='Full Name' required />
                <input type='email' placeholder='Type Your E-Mail' required />
                <textarea placeholder='Write Here.........' name='message'></textarea>
                <input type='submit' value='Send' />
            </form>

        </div>
    )
}