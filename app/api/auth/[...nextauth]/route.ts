import { authOptions } from "@/context/AuthContext";
import NextAuth from "next-auth";

console.log(`authOptions`, authOptions);
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
