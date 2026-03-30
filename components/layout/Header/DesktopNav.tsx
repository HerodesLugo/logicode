import { navLinks } from "./data";

export function DesktopNav() {
  return (
    <nav className="hidden md:block bg-header-nav-bg ">
      <div className="section-container">
        <ul className="flex items-center justify-center gap-9 h-[62px]">
          {navLinks.map((link) => (
            <li key={link} className="h-full flex items-center">
              <a
                href="#"
                className="h-full flex items-center relative text-nav-link text-sm font-medium transition-colors hover:text-[#20A64C] dark:hover:text-white active:text-heading after:absolute after:bottom-1 after:left-0 after:w-full after:h-1 after:bg-[#20A64C] dark:after:bg-green-400 after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 active:after:scale-x-100"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
