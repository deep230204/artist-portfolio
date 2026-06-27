import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navigation";

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-[#D4AF37]"
                  : "text-white hover:text-[#D4AF37]"
              }`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;