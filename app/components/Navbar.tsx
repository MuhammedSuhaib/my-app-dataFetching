import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 md:p-4 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <img
            src="https://see.fontimg.com/api/rf5/9YVZK/YTVmYTczZjQyZDhmNGYzZmI0MWEzZWM4N2FlMjhhMmEub3Rm/QXNzaWdubWVudCA3/autumn-flowers.png?r=fs&h=87&w=1000&fg=FBF9F9&bg=353D4B&tb=1&s=87"
            alt="Calligraphy fonts"
          />
        </Link>
        <ul className="flex gap-4 text-2xl font-semibold">
          <li>
            <Link
              href="/ServerSide"
              className="active:text-black focus:text-black visited:text-[#354f77] "
            >
              Server Side
            </Link>{" "}
          </li>
          <li>
            <Link
              href="/ClientSide"
              className="active:text-black focus:text-black visited:text-[#354f77] "
            >
              Client Side
            </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
