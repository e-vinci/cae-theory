"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { SiteMetaData } from "@/types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  siteMetaData: SiteMetaData;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const isPathActive = (currentPath: string, linkPath: string): boolean => {
  if (linkPath === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(linkPath);
};

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink 
        className={cn(
          navigationMenuTriggerStyle(), 
          "hover:bg-accent", 
          "hover:text-inherit",
          "relative"
        )}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </NavigationMenuLink>
    </Link>
  );
};

const Navbar = ({ siteMetaData }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <div className="border-b">
      <div className="container flex h-16 items-center justify-center">
        <NavigationMenu className="max-w-full">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavLink href="/" isActive={isPathActive(pathname, "/")}>
                <span className="font-bold text-blue-500">{siteMetaData.title}</span>
              </NavLink>
            </NavigationMenuItem>

            {siteMetaData.menuLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                {link.subMenu ? (
                  <>
                    <div className="relative">
                      <NavigationMenuTrigger className="hover:bg-transparent hover:text-inherit data-[state=open]:bg-transparent">
                        {link.name}
                      </NavigationMenuTrigger>
                      {isPathActive(pathname, link.link) && (
                        <motion.div
                          layoutId="underline"
                          className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {link.subMenu.map((subLink) => (
                          <ListItem
                            key={subLink.name}
                            title={subLink.name}
                            href={subLink.link}
                          >
                            Découvrez plus d&apos;informations sur {subLink.name.toLowerCase()}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavLink href={link.link} isActive={isPathActive(pathname, link.link)}>
                    {link.name}
                  </NavLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
