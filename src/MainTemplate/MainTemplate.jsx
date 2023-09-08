import { Link, Outlet, useLocation } from "react-router-dom";
import { clsx } from "clsx";

export default function MainTemplate() {
  const { pathName } = useLocation();
  const menu = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/counters",
      label: "Counters",
    },
  ];
  return (
    <>
      <header>
        <nav>
          <ol>
            {menu.map(({ to, label }) => (
              <li key={label}>
                {/* <Link to={to} className="menu-item current">
                  {label}
                </Link> */}
                <Link
                  to={to}
                  className={(clsx("menu-item"), { current: to === pathName })}
                >
                  {label}
                </Link>
              </li>
            ))}
            {/* <li>
              <Link to="/counters" className="menu-item">
                Counter
              </Link>
            </li>
            <li>Menu 3</li> */}
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2023</footer>
    </>
  );
}
