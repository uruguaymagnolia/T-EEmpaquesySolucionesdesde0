'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

interface SubMenuLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

interface SubMenuCategory {
  category: string;
  links: SubMenuLink[];
}

interface MegaMenuProps {
  triggerLabel: string;
  triggerIcon: LucideIcon;
  subMenuData: SubMenuCategory[];
  scrolled: boolean;
}

const contentVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

export function MegaMenu({ triggerLabel, triggerIcon: TriggerIcon, subMenuData, scrolled }: MegaMenuProps) {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="relative text-muted-foreground hover:text-white transition-colors duration-300 py-2 px-3 rounded-md hover:bg-white/10 flex items-center gap-2 group">
            <motion.span>
              <TriggerIcon
                className={`flex-shrink-0 size-4 transition-all duration-300 ease-in-out ${
                  scrolled ? 'w-0' : 'w-4'
                }`}
              />
            </motion.span>
            <span>{triggerLabel}</span>
            <ChevronDown
              className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute top-full left-0 w-auto">
            <motion.div
              variants={contentVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="origin-top-center mt-2 p-6 bg-[#1a2435] rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {subMenuData.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-sm font-semibold text-white mb-3">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <li key={link.href}>
                            <NavigationMenu.Link asChild>
                              <Link
                                href={link.href}
                                className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-colors"
                              >
                                <Icon className="size-5 text-primary" />
                                <span className="text-muted-foreground hover:text-white text-sm">
                                  {link.label}
                                </span>
                              </Link>
                            </NavigationMenu.Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
