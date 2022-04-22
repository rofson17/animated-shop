import { useEffect } from "react";
import { useRouter } from 'next/router';

import Heads from "../components/Heads";
import Navbar from "../components/Navbar";
import ErorImage from '../public/404error.png'
import styles from '../styles/Error404.module.css';

const Error404 = () => {
    const navigate = useRouter();

    // useEffect(() => {
    //     setTimeout(() => navigate.push('/'), 5000);
    // }, []);


    return (
        <>
            <Heads title='404 Error' keyword='shop store' descriptions='404 error page not found' />
            <Navbar />

            <section className="container mx-auto w-screen">
                <div className=" md:h-[90vh] grid grid-cols-1 md:grid-cols-2 ">
                    <div className="order-2 md:order-1  flex justify-center items-center flex-col">
                        <h2 className="text-3xl capitalize text-center "><span className='text-red-500'>404 Error</span> | <span className="text-gray-500">page not fuond </span> </h2>
                        <p className="my-4 text-center">Looks like your are searching for a wrong page!</p>
                        <div>
                            <button className="text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => navigate.push('/')}>Back to Home</button>
                            <button className="text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => navigate.push('/contact')}>Contact Us</button>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center items-center ">
                        <img src={ErorImage.src} className={styles.imgAnimate} alt="404 image" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error404;