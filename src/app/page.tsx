import Image from "next/image";
import CatImageGenerator from "./components/CatImageGenerator";
import "./CatImagePage.css"
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-900">
      <nav className="flex items-center justify-between w-full mb-5 p-5 bg-slate-950">
        <Image
          src="https://cataas.com/cat/blue/says/:Meow?fontSize=30&fontColor=:blue"
          alt="Logo"
          width={100}
          height={100}
          className="cursor-pointer"
        />
        <div className="flex items-center space-x-4">
          <button className="btn">Sign In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </nav>
      <CatImageGenerator />
    </main>
  );
}
