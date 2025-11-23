'use client';
import { Folder } from 'lucide-react';
import { useWindowStore } from '@/store/windowStore';

interface DesktopIconProps {
  id: string;
  label: string;
}

export const DesktopIcon = ({ id, label }: DesktopIconProps) => {
  const { openWindow, focusWindow } = useWindowStore();

  const handleDoubleClick = () => {
    openWindow(id);
    focusWindow(id);
  };

  return (
    <button
      onDoubleClick={handleDoubleClick}
      className="desktop-icon flex flex-col items-center justify-center w-20 h-20 hover:bg-white/10 focus:outline-none focus:bg-white/20 rounded"
    >
      <Folder
        size={48}
        className="text-white stroke-[1.5] pointer-events-none"
        style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))' }}
      />
      <span className="text-white text-xs mt-1 font-chicago text-center drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] pointer-events-none">
        {label}
      </span>
    </button>
  );
};
