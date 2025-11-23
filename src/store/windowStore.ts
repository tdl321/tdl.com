import { create } from 'zustand';

export interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMin: boolean;
  zIndex: number;
  defaultPosition: { x: number; y: number };
  openCount: number; // Used as key to force remount
  content: React.ReactNode;
}

interface SystemState {
  windows: WindowState[];
  activeWindowId: string | null;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

export const useWindowStore = create<SystemState>((set) => ({
  windows: [
    {
      id: 'about',
      title: 'Intro',
      isOpen: true,
      isMin: false,
      zIndex: 1,
      defaultPosition: { x: 120, y: 50 },
      openCount: 0,
      content: null,
    },
    {
      id: 'experience',
      title: 'Experience',
      isOpen: false,
      isMin: false,
      zIndex: 0,
      defaultPosition: { x: 260, y: 385 },
      openCount: 0,
      content: null,
    },
    {
      id: 'projects',
      title: 'Projects',
      isOpen: false,
      isMin: false,
      zIndex: 0,
      defaultPosition: { x: 950, y: 200 },
      openCount: 0,
      content: null,
    },
    {
      id: 'education',
      title: 'Education',
      isOpen: false,
      isMin: false,
      zIndex: 0,
      defaultPosition: { x: 590, y: 20 },
      openCount: 0,
      content: null,
    },
    {
      id: 'interests',
      title: 'Interests',
      isOpen: false,
      isMin: false,
      zIndex: 0,
      defaultPosition: { x: 815, y: 400 },
      openCount: 0,
      content: null,
    },
  ],
  activeWindowId: null,

  focusWindow: (id) =>
    set((state) => {
      const maxZ = Math.max(...state.windows.map((w) => w.zIndex), 0);
      return {
        activeWindowId: id,
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, zIndex: maxZ + 1 } : w
        ),
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isOpen: false } : w
      ),
    })),

  openWindow: (id) =>
    set((state) => {
      const maxZ = Math.max(...state.windows.map((w) => w.zIndex), 0);
      return {
        windows: state.windows.map((w) =>
          w.id === id
            ? {
                ...w,
                isOpen: true,
                zIndex: maxZ + 1,
                openCount: w.openCount + 1, // Increment to force remount
              }
            : w
        ),
      };
    }),
}));
