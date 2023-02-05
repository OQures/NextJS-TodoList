import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Login from "@/components/Login";
import { useAuth } from "@/context/AuthContext";
import UserDashboard from "@/components/UserDashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </>
  );
}
