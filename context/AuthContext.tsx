import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {
  providers: [
    CognitoProvider({
      clientId: String(process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID),
      clientSecret: String(process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET),
      issuer: String(process.env.NEXT_PUBLIC_COGNITO_ISSUER),
    }),
  ],
  theme: {},
};

export default NextAuth(authOptions);
