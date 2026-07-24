import { createContext, useContext, useState , useEffect} from "react";


//1. create context
export const AuthContext = createContext();

//2. create provider
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");

    useEffect(()=> {
        const get_user= localStorage.getItem("user");
        setUser(JSON.parse(get_user));
    }, []);   

    const storeUser = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(user));
    }

    return (
        <AuthContext.Provider value={{user, storeUser}}>
           {children}
        </AuthContext.Provider>
    )
}

//3. use the context
export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}