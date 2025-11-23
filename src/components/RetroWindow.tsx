'use client';
import { Rnd } from 'react-rnd';
import { useWindowStore } from '@/store/windowStore';

interface RetroWindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultPos: { x: number; y: number };
}

export const RetroWindow = ({ id, title, children, defaultPos }: RetroWindowProps) => {
  const { windows, focusWindow, closeWindow } = useWindowStore();
  const winState = windows.find((w) => w.id === id);

  if (!winState?.isOpen) return null;

  return (
    <Rnd
      key={`${id}-${winState.openCount}`} // Key changes on reopen, forcing remount
      default={{
        x: defaultPos.x,
        y: defaultPos.y,
        width: 400,
        height: 300,
      }}
      minWidth={200}
      minHeight={150}
      bounds="parent"
      style={{ zIndex: winState.zIndex }}
      onMouseDown={() => focusWindow(id)}
      className="window"
    >
      <div className="title-bar">
        <button
          aria-label="Close"
          className="close"
          onClick={(e) => {
            e.stopPropagation();
            closeWindow(id);
          }}
        />
        <h1 className="title">{title}</h1>
        <button aria-label="Resize" className="resize" disabled />
      </div>

      <div className="window-pane">
        <div className="p-4">
          {children}
        </div>
      </div>
    </Rnd>
  );
};
