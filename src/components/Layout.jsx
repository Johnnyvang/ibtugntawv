import { Link, NavLink, Outlet } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function Layout() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-forest-800/80 bg-forest-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
          <Link
            to="/"
            className="font-display text-lg font-semibold tracking-tight text-forest-50 sm:text-xl"
          >
            IB HAIV NEEG
            <span className="block text-xs font-normal text-accent-soft/90 sm:inline sm:ml-2 sm:text-sm">
              IB TUG NTAWV
            </span>
          </Link>
          </motion.div>
          <nav className="flex items-center gap-1 text-sm sm:gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-forest-800 text-white"
                    : "text-forest-100/80 hover:bg-forest-800/50 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/donors"
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-forest-800 text-white"
                    : "text-forest-100/80 hover:bg-forest-800/50 hover:text-white"
                }`
              }
            >
              Supporters
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-forest-800 bg-forest-900/50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <p className="text-center text-sm text-forest-100/60">
            Hmong Language and Literacy Committee (HLLC) · Preserving Hmong language and literacy
          </p>
        </div>
      </footer>
    </div>
  );
}
