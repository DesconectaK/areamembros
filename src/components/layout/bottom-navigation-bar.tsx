
"use client";

import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { NavLink } from './nav-link';
import { cn } from '@/lib/utils';

export function BottomNavigationBar() {
  const pathname = usePathname();

  // Do not render the navigation bar on the login page
  if (pathname === '/login') {
    return null;
  }

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 h-nav-height bg-nav-background border-t border-border/20 shadow-lg z-50",
        "flex items-center justify-around"
      )}
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          icon={item.icon}
          isActive={pathname === item.href}
          ariaLabel={item.ariaLabel}
        />
      ))}
    </nav>
  );
}
