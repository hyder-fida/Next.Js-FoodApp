
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import { usePathname } from "next/navigation";
import NavLink from "../nav-link";

export default function MainHeader() {

  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
             <NavLink href='/meals'>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href='community'>Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
