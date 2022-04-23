import axios from "axios";
import { useState } from "react";


import Heads from "../components/Heads";
import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css";


const Contact = () => {
    const [inputValue, setInputValue] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    const [showMessage, setShowMessage] = useState({ successMessage: false, errorMessage: false });


    const inputEvent = event => {
        const { name, value } = event.target;
        setInputValue((preValue) => { return { ...preValue, [name]: value } });
    }

    const submitForm = async (event) => {
        event.preventDefault();
        const { firstName, lastName, email, subject, message } = inputValue;

        if (!firstName || !lastName || !email || !subject || !message) {
            return alert('Please fill all input fields');
        }
        //send data to the backend
        const response = await axios.post('/api/contact', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: inputValue
        });

        if (response.status === 200) setShowMessage({ errorMessage: false, successMessage: true });
        else setShowMessage({ errorMessage: true, successMessage: false });

        //after submit form clear input fields
        setInputValue({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    }


    return (
        <section className="h-[90vh] w-screen">
            <Heads title='Contact' keyword='contact help helpCenter' descriptions='shoping card conatct page' />
            <Navbar />

            <div className="flex justify-center items-center flex-col h-full">
                <h2 className="text-center text-red-500 text-3xl border-b-2 mb-10">Contact Us</h2>

                {showMessage.errorMessage &&
                    <div className="my-5">
                        <div className={`${styles.animatedMessage} p-4 mb-4 text-sm text-center text-red-700 bg-red-100 rounded-sm w-full`} role="alert">
                            <span className="font-bold">Error</span> Internal Server Error, Please try again leter
                        </div>
                    </div>
                }


                {showMessage.successMessage &&
                    <div className="my-5">
                        <div className={`${styles.animatedMessage} p-4 mb-4 text-sm text-center text-green-700 bg-green-100 rounded-sm w-full`} role="alert">
                            <span className="font-bold">Success</span> Your message has been sent to the admin
                        </div>
                    </div>
                }


                <form className="md:w-3/6 w-4/5 pb-5 md:pb-0" method="post" onSubmit={submitForm} autoComplete='off'>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="firstName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required="" onChange={inputEvent} value={inputValue.firstName} />
                            <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required="" onChange={inputEvent} value={inputValue.lastName} />
                            <label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>

                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required="" onChange={inputEvent} value={inputValue.email} />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="subject" id="floating_subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer" placeholder=" " required="" onChange={inputEvent} value={inputValue.subject} />
                        <label htmlFor="floating_subject" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 ">Your message</label>
                        <textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border-2 border-gray-300 focus:border-red-500 focus:outline-none " placeholder="Leave a comment..." onChange={inputEvent} value={inputValue.message}></textarea>

                    </div>
                    <button type="submit" className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-sm w-full  px-5 py-2.5 text-center">Submit</button>
                </form>

            </div>

        </section>
    )
}

export default Contact;