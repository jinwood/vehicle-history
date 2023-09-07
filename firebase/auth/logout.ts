import { getAuth, signOut } from "firebase/auth";

export default async function logout() {
  let result,
    error = null;

  const auth = getAuth();

  try {
    result = await logout(auth);
  } catch (e: unknown) {
    error = e;
  }
}
