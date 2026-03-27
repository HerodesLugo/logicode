import { CloseIcon } from "@/components/icons";

type Props = {
  onClose: () => void;
};

const languages = ["Spanish", "English"] as const;

export function LanguageModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-110 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-[#f4f7f5] dark:bg-[#0c121b] border border-transparent dark:border-[#1e2a38] w-full max-w-sm rounded-[24px] p-8 shadow-2xl flex flex-col">
        {/* Title row */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-heading dark:text-white text-lg font-bold">
            Select Language
          </h3>
          <button
            onClick={onClose}
            className="text-accent hover:opacity-80 transition-opacity"
            aria-label="Close"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Language options */}
        <div className="flex flex-col gap-6">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={onClose}
              className="text-left text-body dark:text-gray-300 hover:text-heading dark:hover:text-white transition-colors text-[16px] font-medium"
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
