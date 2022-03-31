import { useContext } from "react"
import { UberContext } from "../context/uberContext"
import RideSelector from "./RideSelector"


const style = {
    wrapper: `flex-1 h-full flex flex-col justify-between`,
    rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
    confirmButtonContainer: ` border-t-2 cursor-pointer z-10`,
    confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
}


const Confirm = () => {

    const { currentAccount, pickup, dropoff, price, selectedRide } = useContext(UberContext)

    const storeTripDetails = async (pickup, dropoff) => {
        try {
            await fetch('/api/db/saveTrips', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  pickupLocation: pickup,
                  dropoffLocation: dropoff,
                  userWalletAddress: currentAccount,
                  price: price,
                  selectedRide: selectedRide,
                }),
              })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.rideSelectorContainer}>
                <RideSelector />
            </div>  
            <div className={style.confirmButtonContainer}>
                <div className={style.confirmButtonContainer}>
                    <div 
                        className={style.confirmButton}
                        onClick={() => storeTripDetails(pickup, dropoff)}
                    >
                        Confirm {selectedRide.service || 'UberX'}
                    </div>
                </div>
            </div> 
        </div>
  )
}

export default Confirm