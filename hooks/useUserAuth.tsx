import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseApp";
import { useAppDispatch } from "../store";
import { login, setAuthState, signup } from "../store/slices/authSlice";

export default function useUserAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  /**
   * @name loginUser
   * @description login a user with email and password
   * @param email
   * @param password
   * @return Promise with userCredential
   */
  async function loginUser(email: string, password: string) {
    let errorMessage = "";
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const accessToken = await userCredentials.user.getIdToken();
      dispatch(
        login({
          user: { email: userCredentials.user.email, token: accessToken },
        })
        );
    } catch (error: any) {
      switch (error.message) {
        case "Firebase: Error (auth/invalid-email).":
          errorMessage = "Invalid email";
          break;
        case "Firebase: Error (auth/user-disabled).":
          errorMessage = "User disabled";
          break;
        case "Firebase: Error (auth/user-not-found).":
          errorMessage =
            "The information you entered does not exist. Create an account first";
          break;
        case "Firebase: Error (auth/wrong-password).":
          errorMessage = "Wrong password";
          break;
        default:
          errorMessage = "Something went wrong";
      }
    }
    return errorMessage;
  }

  /**
   * @name createAccount
   * @description sign up a user with email and password
   * @param email
   * @param password
   * @return Promise with userCredential
   */
  async function createAccount(email: string, password: string) {
    let errorMessage = "";
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const accessToken = await userCredentials.user.getIdToken();
      dispatch(
        signup({
          user: { email: userCredentials.user.email, token: accessToken, emailVerified: userCredentials.user.emailVerified, phoneNumber:userCredentials.user.phoneNumber ,displayName:userCredentials.user.displayName },
        })
      );
    } catch (error: any) {
      switch (error.message) {
        case "Firebase: Error (auth/invalid-email).":
          errorMessage = "Invalid email";
          break;
        case "Firebase: Error (auth/email-already-in-use).":
          errorMessage = "Email already exists";
          break;
        case "Firebase: Error (auth/credential-already-in-use).":
          errorMessage = "Credentials are already in use. Try logging in";
          break;  
        default:
          errorMessage = "Something went wrong";
      }
      return errorMessage;
    }
  }

  /**
   * @name monitorAuthState
   * @description checks where the user has signed in or not
   * @return boolean
   */
  async function monitorAuthState() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setAuthState({
            isLoggedIn: true,
            user: { email: user.email, token: user.refreshToken },
          })
        );
      } else {
        dispatch(setAuthState({ isLoggedIn: false, user: null }));
      }
    });
  }
  /**
   * @name logout
   * @description logs out a user
   */
  async function logout() {
    let errorMessage = "";

    signOut(auth)
      .then(() => {
        dispatch(setAuthState({ isLoggedIn: false, user: null }));
      })
      .catch((error: any) => {
        errorMessage = "An error occurred. Please try again later";
        return errorMessage;
      });
  }
  
  async function emailVerification(){
    try {
      auth?.currentUser && await sendEmailVerification(auth?.currentUser);
    } catch (error) {
      console.log(error)
    }
  }
  return { loginUser, createAccount, monitorAuthState, logout, emailVerification };
}
