import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [owner, setOwner] = useState(null);
    const value = { navigate, user, setUser, owner, setOwner };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;