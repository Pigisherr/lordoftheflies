import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow text-center">
        <h1 className="text-4xl font-bold my-6">Welcome to the Lord of the Flies Website!</h1>
        <p className="text-lg mb-2">Dive into the themes, characters, and deeper meaning of William Goldings classic novel.</p>
        <div className="mt-4 flex flex-col items-center">
          <div className="flex flex-row gap-3">
            <Image className="flex" src="/book2.jpg" width={275} height={200} alt="bookImage" />
            <Image className="flex" src="/book.jpg" width={275} height={200} alt="bookImage" />
            <Image className="flex" src="/book3.jpg" width={275} height={200} alt="bookImage" />
          </div>
        </div>
      </div>
    </div>
  );
}