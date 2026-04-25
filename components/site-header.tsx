import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navigation: NavItem[];
};

export function SiteHeader({ navigation }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="glass-panel flex items-center gap-3 rounded-full px-6 py-3.5"
          aria-label="AR Digital Labs home"
        >
          <Image
            src="/brand/header-logo-tight.png"
            alt="AR Digital Labs"
            width={1038}
            height={434}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </a>

        <div className="glass-panel hidden items-center gap-1.5 rounded-full px-2.5 py-1.5 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-slate-600 hover:bg-white hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1.5 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}
