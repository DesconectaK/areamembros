"use client";

import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  ariaLabel: string;
}

export function NavLink({ href, label, icon: Icon, isActive, ariaLabel }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "flex flex-col items-center justify-center flex-1 p-2 rounded-md transition-all duration-200 ease-in-out group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-nav-background",
        isActive ? "text-primary" : "text-nav-foreground-inactive hover:text-primary/80",
      )}
    >
      <Icon
        className={cn(
          "h-6 w-6 mb-0.5 transition-transform duration-200 ease-in-out group-hover:scale-110",
           isActive ? "stroke-[2.5px]" : "" // "Filled" effect by making active icon bolder
        )}
        aria-hidden="true"
      />
      <span className={cn(
        "text-xs font-medium transition-opacity duration-200 ease-in-out",
        isActive ? "opacity-100 font-semibold" : "opacity-90 group-hover:opacity-100"
      )}>
        {label}
      </span>
    </Link>
  );
}
