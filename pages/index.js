import Heads from "../components/Heads";
import Navbar from '../components/Navbar';

import styles from "../styles/Home.module.css";

const App = () => {
  return (

    <header className={styles.home_page}>
      <Heads title='Home' keyword='shop store' descriptions='shoping card home page' />
      <Navbar />
      <div className="w-screen  h-[90vh] flex justify-center items-center flex-col">
        <div className="bg-white w-3/4 p-3  rounded-lg">
          <h2 className={`w-full text-center text-3xl lg:text-4xl ${styles.animatedHeading}`}>Welcome to the shop</h2>
        </div>
      </div>
    </header>


  )
}

export default App;