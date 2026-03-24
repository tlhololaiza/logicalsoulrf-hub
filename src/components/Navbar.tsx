import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Music,
  Video,
  User,
  Calendar,
  Image,
  Link as LinkIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import djLogo from "../assets/dj.png";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/music", label: "Music", icon: Music },
  { to: "/videos", label: "Videos", icon: Video },
  { to: "/about", label: "About", icon: User },
  { to: "/bookings", label: "Bookings", icon: Calendar },
  { to: "/gallery", label: "Gallery", icon: Image },
  { to: "/links", label: "Links", icon: LinkIcon },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 px-4">
        <Link to="/" className="flex items-center gap-3 shrink-0 sm:shrink">
          <img src={djLogo} alt="LogicalsoulRF" className="h-10 w-10" />
          <span className="font-sans text-base sm:text-lg tracking-widest font-bold hidden sm:inline" style={{ color: "hsl(40, 5%, 55%)" }}>LogicalsoulRF</span>
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2 sm:hidden">
          <span className="font-sans text-base tracking-widest font-bold" style={{ color: "hsl(40, 5%, 55%)" }}>LogicalsoulRF</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            return (
              <Link
                key={l.to}
                to={l.to}
                title={l.label}
                className={`transition-colors hover:text-primary font-bold ${
                  location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden font-bold" onClick={() => setOpen(!open)} style={{ color: "hsl(40, 5%, 55%)" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 md:hidden z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-screen w-64 bg-background border-l border-border md:hidden z-40 pt-20"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg"
              >
                <X size={24} style={{ color: "hsl(40, 5%, 55%)" }} />
              </button>
              <div className="flex flex-col items-center gap-8 py-6">
                {links.map((l) => {
                  const IconComponent = l.icon;
                  return (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      title={l.label}
                      className={`transition-colors hover:text-primary flex flex-col items-center gap-2 ${
                        location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <IconComponent size={24} />
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
