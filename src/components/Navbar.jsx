import { NavLink } from "react-router-dom";

export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokemones" className={setActiveClass}>
            Pokemones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}