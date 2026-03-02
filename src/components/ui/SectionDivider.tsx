import { PinwheelLogo } from "./PinwheelLogo";

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8 sm:py-10">
      <div className="flex items-center gap-4 w-[65%] max-w-3xl">
        <div className="flex-1 h-px bg-gray-300" />
        <PinwheelLogo className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 opacity-70" />
        <div className="flex-1 h-px bg-gray-300" />
      </div>
    </div>
  );
}
