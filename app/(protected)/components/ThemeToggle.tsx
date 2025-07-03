'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import MiniButton from './MiniButton';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <MiniButton>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="flex items-center justify-center text-xl rounded-full cursor-pointer"
      >
        {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </MiniButton>
  );
}
