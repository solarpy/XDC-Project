import Image from "next/image";
import Navbar from "./components/global/navbar";
import Header from "./components/Home/header";

export default function Home() {
  return (
    <main className="m-6 ">
      <Navbar />
      <div className="container mx-auto h-screen w-full snap-y snap-mandatory">
        <Header />
      </div>
    </main>
  );
}
