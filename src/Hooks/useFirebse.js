import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

            .finally(() => setIsLoading(false))
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const emailPasswordRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be at least 6 character")
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain 2 uppercase.");
            return;
        }

        isLogin ? loginProcess(email, password) : createNewUser(email, password);
    }

    const loginProcess = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setIsLogin(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
                setError("");
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {

        }).catch((error) => {
            setError(error.message);
        });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            }).catch((error) => {
                setError(error.message);
            })
    }

    const emailPasswordLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const toogleLogin = e => {
        setIsLogin(e.target.checked);
        console.log(e.target.checked);
    }

    useEffect(() => {
        const observedUserState = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => observedUserState;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        })
            .finally(() => setIsLoading(false))
    }

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return {
        user, googleSignIn, logOut, isLoading, emailPasswordRegistration, handleEmailChange, handlePasswordChange, error, emailPasswordLogin, toogleLogin, isLogin, resetPassword, handleNameChange
    }
}

export default useFirebase;