import { NavLink, Link } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/phones", "Phones"],
  ["/compare", "Compare"],
  ["/guide", "Guide"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-indigo-600">📱 MobileHub</Link>
        <ul className="flex gap-1 text-sm font-medium">
          {links.map(([to, label]) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 transition ${isActive ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
