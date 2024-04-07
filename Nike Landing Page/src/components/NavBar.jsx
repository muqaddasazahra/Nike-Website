import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import {hamburger} from "../assets/icons"

export default function NavBar() {
  return (
    <header className="padding-x py-8 w-full absolute z-10">
      <nav className=" flex justify-between items-center max-container ">
        <a href="">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <a className="font-montserrat leading-normal text-lg text-slate-gray" href={navLink.href}>{navLink.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block"><img src={hamburger} alt="Menu Icon" width={25} height={25}/></div>
      </nav>
    </header>
  );
}
