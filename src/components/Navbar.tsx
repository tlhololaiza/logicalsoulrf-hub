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
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl tracking-widest text-primary">
          LogicalsoulRF
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const IconComponent = l.icon;
            return (
              <Link
                key={l.to}
                to={l.to}
                title={l.label}
                className={`transition-colors hover:text-primary ${
                  location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <IconComponent size={20} />
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {links.map((l) => {
                const IconComponent = l.icon;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    title={l.label}
                    className={`transition-colors hover:text-primary ${
                      location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <IconComponent size={24} />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
