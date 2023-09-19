"use client";
import { useSession, SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const Session = ({
  children,
  pageProps,
}: {
  children: ReactNode;
  pageProps: any;
}) => {
  return (
    <SessionProvider session={pageProps.session}>{children}</SessionProvider>
  );
};
