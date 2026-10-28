import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsData, roomsData } from "../assets/assets";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [owner, setOwner] = useState(null);
    const [hotelData, setHotelData] = useState([]);
    const [roomData, setRoomData] = useState([]);

    const checkUserLoginStatus = async () => { 
        try {
            const { data } = await axios.get("/api/users/is-auth");
            if (data.success) {
                setUser(true);
            }
        } catch (error) {
            console.error("Error checking user login status:", error);
        }
    }

    const fetchHotelsData = () => {
        setHotelData(hotelsData)
    }

    const fetchRoomsData = () => {
        setRoomData(roomsData)
    }

    useEffect(() => {
        fetchHotelsData();
        fetchRoomsData();
     }, []);

    const value = { navigate, user, setUser, owner, setOwner, hotelData, roomData, axios };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;