import Link from "next/link";
import bg from "public/background.png";
import Image from "next/image";
function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <div
        className="w-11/12 flex flex-col items-center "
        style={{ height: "90%" }}
      >
        <div className=" h-2/3 w-full overflow-hidden">
          <Image
            className="   h-3/4 w-full object-cover rounded-2xl "
            alt="Pb"
            src={bg}
            placeholder="blur"
            quality={100}
            sizes="100%"
          />
        </div>

        <div className="w-full h-1/3 flex items-start justify-center overflow-hidden flex-shrink ">
          <span className="w-full md:w-1/12 ">
            Uni la askljflksadjf akjdfk asjfk kajsdkfjaks kajsfkjasdkf ksadfk
            ,snfmsnam,df msand,mfn asd masndf masmfm,n asnmdf,m
          </span>
        </div>
      </div>
    </main>
  );
}

export default Home;
