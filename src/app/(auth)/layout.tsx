import "@/app/globals.scss";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Revamp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="shortcut icon" type="image/x-icon" href="/assets/logo.svg" />
        <body className="dark">{children}</body>
      </html>
    </ClerkProvider>
  );
}
