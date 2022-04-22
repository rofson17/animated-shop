import { useState } from "react";


import Heads from "../components/Heads";
import Navbar from "../components/Navbar";

const Contact = () => {
    const [inputValue, setInputValue] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });

    const inputEvent = event => {
        const { name, value } = event.target;
        setInputValue((preValue) => { return { ...preValue, [name]: value } });
    }

    const submitForm = event => {
        event.preventDefault();
        const { firstName, lastName, email, subject, message } = inputValue;

        if (!firstName || !lastName || !email || !subject || !message) {
            return alert('Please fill all input fields');
        }

        //send data to the backend

        //after submit form clear input fields
        setInputValue({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    }


    return (
        <section className="h-[90vh] w-screen">
            <Heads title='Contact' keyword='contact help helpCenter' descriptions='shoping card conatct page' />
            <Navbar />

            <div className="flex justify-center items-center flex-col h-full">
                <h2 className="text-center text-red-500 text-3xl border-b-2 mb-12">Contact Us</h2>

                <form className="md:w-3/6 w-4/5" method="post" onSubmit={submitForm} autoComplete='off'>
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