import type { LucideIcon } from 'lucide-react';
import { Home, LayoutGrid, Compass, Settings as SettingsIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  ariaLabel: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Principal', icon: Home, ariaLabel: 'Navigate to Principal page' },
  { href: '/activities', label: 'Atividades', icon: LayoutGrid, ariaLabel: 'Navigate to Atividades page' },
  { href: '/explore', label: 'Explorar', icon: Compass, ariaLabel: 'Navigate to Explorar page' },
  { href: '/settings', label: 'Ajustes', icon: SettingsIcon, ariaLabel: 'Navigate to Ajustes page' },
];
