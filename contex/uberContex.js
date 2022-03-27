import { createContext, useEffect, useState } from "react";

export const UberContex = createContext()

export const UberProvider = ({ children }) => {

    const [pickup, setPickup] = useState('')
    const [dropoff, setDropoff] = useState('')
    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    return 
    <UberContex.Provider value={}>
        {children}
    </UberContex.Provider>
}