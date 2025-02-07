import {
  useNavigate,
  useHref,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  HeroUIProvider,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarBrand,
} from "@heroui/react";

import { Art, Home, Baking, Travel } from "./pages";
import "./App.css";
import clsx from "clsx";

const PATHS = [
  { href: "/art", label: "Art", element: <Art /> },
  { href: "/baking", label: "Baking", element: <Baking /> },
  { href: "/travels", label: "Travels", element: <Travel /> },
];

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <Navbar classNames={{ wrapper: "px-1" }} style={{ marginBottom: "64px" }}>
        <NavbarBrand>
          <a className="text-3xl" style={{ fontFamily: "alike" }} href={"/"}>
            Anna
          </a>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {PATHS.map((path) => {
            const isActive = pathname === path.href;
            return (
              <NavbarItem
                className={clsx(
                  "navbar-link",
                  isActive && "navbar-link--active"
                )}
                isActive={isActive}
                key={path.label}
                title={path.label}
              >
                <Link href={path.href}>{path.label}</Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {PATHS.map((path) => (
          <Route path={path.href} element={path.element} />
        ))}
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
