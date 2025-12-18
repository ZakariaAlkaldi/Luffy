// import { Link } from "react-router-dom";

type NavbarProps = {
  links: string[];
};

function Navbar({ links }: NavbarProps) {
  return (
    <ul className="flex gap-4">
      {links.map((link) => (
        <li className="w-[50px] text-[18px] font-medium text-white hover:text-red-600 hover:font-bold duration-300 cursor-pointer">
          <a href={`#${link.toLowerCase()}`}>{link}</a>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
