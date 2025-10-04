import "~/styles/globals.css";

import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { TopNav } from "~/components/TopNav";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "v1ris",
  description:
    "v1ris is a composer writing interactive music for narrative-driven games.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="font-azeret bg-indigo-300 text-base">
      <body className="relative flex min-h-screen flex-col justify-center bg-[url(/img/starbreak.png)] bg-cover bg-local bg-center align-middle">
        <div className="pointer-events-none absolute inset-0"></div>
        <Toaster position="top-right" />

        <TRPCReactProvider>
          <TopNav />
          <main className="z-[1] flex-1">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
