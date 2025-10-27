import { createContext, useEffect, useState } from "react"
import app from "../Firebase/Firebse";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()


export default function AuthProvider({ children }) {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const gglesignin = () => {
        return signInWithPopup(auth, provider)
    }

    const updateUser = (newData) => {
        return updateProfile(auth.currentUser, newData)
    }

    const letuserlogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const letUserSignOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const currentuser = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            currentuser()
        }
    }, [])

    const AuthData = {
        user,
        setUser,
        createUser,
        gglesignin,
        updateUser,
        letuserlogin,
        letUserSignOut,
        loading,
    }
    return <AuthContext value={AuthData} >{children}</AuthContext>
}