import Link from "next/link";
import Navbar from "../components/navbar";

function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <div
        className="bg-green-900 w-11/12 flex flex-col justify-center items-center "
        style={{ height: "90%" }}
      >
        <div className=" ">
          <div>pb</div>
          <div>links</div>
        </div>
      </div>
    </main>
  );
}

export default Home;