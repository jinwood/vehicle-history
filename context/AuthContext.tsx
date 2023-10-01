import CognitoProvider from "next-auth/providers/cognito";
import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    CognitoProvider({
      clientId: String(process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID),
      clientSecret: String(process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET),
      issuer: String(process.env.NEXT_PUBLIC_COGNITO_ISSUER),
    }),
  ],
  theme: {},
  callbacks: {
    redirect: async (url: string, baseUrl: string) => {
      return `${process.env.NEXT_PUBLIC_NGROK_URL}`;
    },
  },
};
