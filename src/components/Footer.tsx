import { Facebook, Instagram, Twitter, Send, Youtube } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/RusHDaDeej", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/_oarabile.e", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/Oarabil10493200", label: "Twitter" },
  { icon: Send, href: "https://t.me/Logicalsoul", label: "Telegram" },
  { icon: Youtube, href: "https://www.youtube.com/@logicalsoulrf", label: "YouTube" },
];

const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container mx-auto px-4 flex flex-col items-center gap-6">
      <div className="flex gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={s.label}
          >
            <s.icon size={20} />
          </a>
        ))}
      </div>
      <p className="text-muted-foreground text-sm font-body">
        © {new Date().getFullYear()} LogicalsoulRF. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
