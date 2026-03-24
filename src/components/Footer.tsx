import { Facebook, Instagram, X, Send, Youtube } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/RusHDaDeej", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/logicalsoul012?igsh=MXJ1amp0bzlwbmsxcQ==", label: "Instagram" },
  { icon: X, href: "https://twitter.com/Oarabil10493200", label: "X (Twitter)" },
  { icon: Send, href: "https://t.me/Logicalsoul", label: "Telegram" },
  { icon: Youtube, href: "https://www.youtube.com/@logicalsoulrf", label: "YouTube" },
];

const Footer = () => (
  <footer className="border-t border-border bg-background py-8 sm:py-10">
    <div className="container mx-auto px-4 flex flex-col items-center gap-4 sm:gap-6">
      <div className="flex gap-3 sm:gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={s.label}
          >
            <s.icon size={18} className="sm:w-5 sm:h-5" />
          </a>
        ))}
      </div>
      <p className="text-muted-foreground text-xs sm:text-sm font-body text-center">
        © {new Date().getFullYear()} LogicalsoulRF. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
