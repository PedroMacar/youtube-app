'use client'
import * as React from "react"
import Link from "next/link"
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { HomeIcon } from "@radix-ui/react-icons";
import { HomeIconFull } from "../icons";

interface entrada{
    className?: string | "";
}

const components: { title: string; href: string; description: string; icon: React.ReactNode; iconActive?: React.ReactNode | null, }[] = [
    {
      title: "Home",
      href: "/",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
      icon: <HomeIcon/>,
      iconActive: <HomeIconFull></HomeIconFull>
    },
    {
      title: "Shorts",
      href: "/shorts",
      description:
        "For sighted users to preview content available behind a link.",
      icon: <HomeIcon/>,
      iconActive: <HomeIconFull></HomeIconFull>
    }
  ]
export function NavigationMenuDemo({className}:entrada ){
    const [activeButton, setActiveButton] = useState(getCurrentPageTitle());

    useEffect(() => {
      const currentPage = components.find(
        (component) => window.location.pathname === component.href
      );
      setActiveButton(currentPage ? currentPage.title : components[0].title);
    }, []);
  
    function getCurrentPageTitle() {
      const currentPage = components.find(
        (component) => window.location.pathname === component.href
      );
      return currentPage ? currentPage.title : components[0].title;
    }
  return (
  <>
        {components.map((component) => (
          <ListItem
            key={component.title}
            title={component.title}
            href={component.href}
            icon={component.icon}
            iconActive={component.iconActive}
            description={component.description}
            isActive={activeButton === component.title}
          onClick={() => setActiveButton(component.title)}
          />
        ))}
      </>
  )
}

interface ListItemProps {
  title: string;
  description: string;
  isActive?: boolean;
  icon: React.ReactNode;
  href: string;
  iconActive?: React.ReactNode | null;
  onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ title, href, description, icon, isActive, iconActive }) => {
  return (
    
      <NavigationMenuItem>
        <Link href={href} className={cn("flex shadow-none justify-start gap-6 p-4 bg-zinc-100 space-y-1 rounded-md leading-none no-underline outline-none transition-colors", {
          'bg-accent text-accent-foreground': isActive,
          'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground': !isActive,
        })}>
           
            {isActive ? <i>{iconActive}</i> : <i>{icon}</i>}
          <span className="text-sm font-medium leading-none">{title}</span>
      </Link>
      </NavigationMenuItem>
   
  )
}
