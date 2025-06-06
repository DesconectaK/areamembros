
import type { LucideIcon } from 'lucide-react';
import { Home, Compass, Settings as SettingsIcon, Search } from 'lucide-react'; // Adicionado Search para Explorar, se preferir.

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  ariaLabel: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Principal', icon: Home, ariaLabel: 'Navigate to Principal page' },
  { href: '/explore', label: 'Explorar', icon: Compass, ariaLabel: 'Navigate to Explorar page' }, // Usando Compass como antes, mas poderia ser Search
  { href: '/settings', label: 'Ajustes', icon: SettingsIcon, ariaLabel: 'Navigate to Ajustes page' },
];
