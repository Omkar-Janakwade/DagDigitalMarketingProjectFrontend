import React from 'react'

const Contact = () => {
    return (
        <>
            <div class="a2">
                <h1 style="color: #00d084; padding-top: 20px;"> Call to Action</h1>
                <p>Ready to Supercharge Your Lead Generation?</p>
                <p>Take the first step toward a steady flow of qualified leads. Connect with DAG’s digital marketing experts today and
                    experience the transformation in your lead pipeline!
                </p>
            </div>

            <div class="container-fluid">
                <div class="row a4">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4 aa4">
                        <img src="../../assets/tempt/img/Section-Image-6.jpg" />
                    </div>
                    <div class="col-sm-6">
                        <h1 style="color: #00d084;">
                            Fill out the form below, and one of our experts will reach out to you within 24 hours.
                        </h1>
                        <form action="">
                            <label htmlFor="firstname">FIRST NAME</label>
                            <input type="text" name='firstname' placeholder="Enter the First Name" />
                            <label htmlFor="lastname">LAST NAME</label>
                            <input type="text" name='lastname' placeholder="Enter the Last Name" />
                            <label htmlFor="phoneNumber">PHONE NUMBER</label>
                            <input type="text" name="phoneNumber" id="" placeholder="Enter the Phone Number" />
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" name="email" id="" placeholder="pat@example.com" />
                            <label htmlFor="service">Service</label>
                            <select name="" id="">

                            </select>
                            <label htmlFor="message">MESSAGE</label>
                            <textarea name="message" id="" placeholder="Enter your message"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div >
                </div >
            </div >
        </>
    )
}

export default Contact
