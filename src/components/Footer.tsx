import { Link } from "wouter";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 tech-pattern opacity-[0.04]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <span className="font-display font-bold text-xl tracking-widest text-white">
                TECHNOSHINE
              </span>
            </Link>
            <p className="text-white/50 text-sm max-w-sm font-light">
              Premium marble and natural stone restoration specialists. Bringing your surfaces back to life with precision, care, and lasting results.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Gallery", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-primary text-sm font-mono transition-colors"
                  >
                    / {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-primary text-sm font-mono transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-mono">
            &copy; {year} TECHNOSHINE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
