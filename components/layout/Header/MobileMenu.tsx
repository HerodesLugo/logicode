import { Logo } from "./Logo";
import { navLinks } from "./data";
import {
  SearchIcon,
  UserIcon,
  ArrowRightIcon,
  CloseIcon,
  LanguageGlobeMobileIcon,
} from "@/components/icons";

type Props = {
  onClose: () => void;
  onOpenLanguage: () => void;
};

export function MobileMenu({ onClose, onOpenLanguage }: Props) {
  return (
    <div className="fixed inset-0 z-100 bg-[#f4f7f5] dark:bg-[#0c121b] text-heading dark:text-white flex flex-col overscroll-contain overflow-y-auto">
      {/* Header row */}
      <div className="flex items-center justify-center h-[92px] px-6 relative shrink-0">
        <Logo />
        <button
          onClick={onClose}
          className="absolute right-6 p-2 text-accent hover:opacity-80"
          aria-label="Close menu"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col px-6 py-6 gap-8 flex-1">
        {/* Search */}
        <div className="flex items-center gap-3 bg-[rgba(0,0,0,0.05)] dark:bg-[#131b25] border border-transparent dark:border-[#1e2a38] px-4 py-4 rounded-xl">
          <SearchIcon className="w-5 h-5 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-[15px] text-heading dark:text-white placeholder:text-gray-500 w-full"
          />
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-8 mt-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-body dark:text-gray-300 text-[15px] font-medium hover:text-heading dark:hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom CTAs */}
      <div className="px-6 py-8 pb-10 shrink-0 flex items-center gap-3 mt-auto">
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#101010] dark:bg-[#2a2c2d] text-white py-[14px] rounded-xl text-sm font-medium hover:opacity-90 transition-colors">
          <UserIcon className="w-4 h-4" />
          Login
        </button>
        <button className="flex-[1.2] flex items-center justify-center gap-2 bg-accent text-white dark:text-[#081b10] py-[14px] rounded-xl text-sm font-bold hover:opacity-90 transition-colors">
          Request Demo
          <ArrowRightIcon className="w-4 h-4" />
        </button>
        <button
          onClick={onOpenLanguage}
          className="flex items-center justify-center w-[52px] h-[48px] rounded-xl bg-[#101010] dark:bg-[#2a2c2d] text-white hover:opacity-90 transition-colors shrink-0"
          aria-label="Language selector"
        >
          <LanguageGlobeMobileIcon className="w-5 h-5 shrink-0" />
        </button>
      </div>
    </div>
  );
}
