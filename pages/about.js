import Heads from "../components/Heads";
import Navbar from "../components/Navbar";
import AboutImage from "../public/web_shopping.png";


const About = () => {
    return (
        <header className="w-screen h-screen">
            <Heads title='About' keyword='about info' descriptions='shoping card about page' />
            <Navbar />
            <div className=" w-full h-[90%] grid grid-cols-1 md:grid-cols-2">
                <div className="order-2 lg:order-1 flex justify-center items-center flex-col">
                    <div className="w-5/6">
                        <h2 className="text-center md:text-left text-3xl text-red-500  ms-madi-font my-4">About Us</h2>
                        <p className=" ms-madi-font text-center md:text-left">E-commerce is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. It means business transactions through the internet, telephone, credit card, etc.</p>
                        <button className="w-full md:w-auto text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center my-4 ">Learm more</button>
                    </div>
                </div>

                <div className=" order-1 lg:order-2 flex justify-center items-center flex-col">
                    <img src={AboutImage.src} alt='About us image' />
                </div>
            </div>
        </header>
    )
}

export default About;