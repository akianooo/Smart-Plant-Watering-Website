import Image from "next/image";
import Navbar from "./components/Nav-bar";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen max-h-screen max-w-screen flex-1 font-sans ">
      <div className="flex w-full h-fit">
        <Navbar />
      </div>
      <main className="flex max-h-full max-w-full flex-col items-center justify-center">
        {/* <Carousel /> */}
      </main>
    </div>
  );
}
