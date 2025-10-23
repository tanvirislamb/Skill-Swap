import { createContext, useState } from "react"
import app from "../Firebase/Firebse";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const letuserlogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const AuthData = {
        user,
        setUser,
        createUser,
        letuserlogin,
    }
    return <AuthContext value={AuthData} >{children}</AuthContext>
}