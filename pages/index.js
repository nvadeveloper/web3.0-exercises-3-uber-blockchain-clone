// const style = {
//   wrapper: ``,
// }

import Navbar from "../components/Navbar"

const style = {
  wrapper: `h-screen w-screen flex flex-col`
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
      
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
        
        </div>
      </div>
    </div>
  )
}

export default Home