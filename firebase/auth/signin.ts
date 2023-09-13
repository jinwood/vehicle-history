import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
  console.log(`sigining in with ${email} ${password}`);
  let result = null,
    error = null;
  try {
    console.log("sign in");
    result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
  } catch (e) {
    console.log(e);
    error = e;
  }

  return { result, error };
}
