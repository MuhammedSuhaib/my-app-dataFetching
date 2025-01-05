import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center items-center bg-slate-300 h-screen">
       <img className="" src="https://see.fontimg.com/api/rf5/9YVZK/YTVmYTczZjQyZDhmNGYzZmI0MWEzZWM4N2FlMjhhMmEub3Rm/QXNzaWdubWVudCA3/autumn-flowers.png?r=fs&h=87&w=1000&fg=FBF9F9&bg=353D4B&tb=1&s=87" alt="Calligraphy fonts"/>
          <ul className="flex gap-4 text-2xl font-semibold">
          <li><Link href="/ServerSide" className="active:text-black focus:text-black visited:text-[#354f77] " >Server Side</Link> </li>
          <li><Link href="/ClientSide" className="active:text-black focus:text-black visited:text-[#354f77] " >Client Side</Link> </li>
          </ul>
    </div>
  );
}
