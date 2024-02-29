'use client'
import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils"
import {NavigationMenuItem} from "@/components/ui/navigation-menu"
import { HomeIconFull, HomeIcon, InscricoesIcon, InscricoesIconFull } from "../icons";

interface Entrada {
    className?: string;
}

const components: { title: string; href: string; description: string; icon: React.ReactNode; iconActive: React.ReactNode }[] = [
    {
      title: "Home",
      href: "/",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
      icon: <HomeIcon/>,
      iconActive: <HomeIconFull/>
    },
    {
      title: "Shorts",
      href: "/shorts",
      description:
        "For sighted users to preview content available behind a link.",
      icon: <HomeIcon/>,
      iconActive: <HomeIconFull/>
    },
    {
      title: "Inscrições",
      href: "/Inscricoes",
      description:
        "For sighted users to preview content available behind a link.",
      icon: <InscricoesIcon/>,
      iconActive: <InscricoesIconFull/>
    }
];

export function NavigationMenuDemo({className}: Entrada) {
  const pathname = usePathname()

  return (
    <>
      {components.map((component, index) => (
        <ListItem
          key={component.title}
          title={component.title}
          href={component.href}
          icon={component.icon}
          iconActive={component.iconActive}
          isActive={pathname === component.href || (index === 0 && pathname === "/")}
        />
      ))}
    </>
  );
}

interface ListItemProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  iconActive: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ title, href, icon, iconActive, isActive }) => {
  return ( 
    <NavigationMenuItem>
      <Link href={href}> <div className={cn("flex px-4 shadow-none items-center justify-start gap-5 py-2 bg-zinc-100 dark:bg-transparent rounded-lg dark:fill-white  transition-colors dark:hover:bg-btmenu", { 'dark:bg-btmenu': isActive })}>
          <span className="w-6 h-6">{isActive ? iconActive : icon}</span>
          <span className="text-sm font-medium leading-none">{title}</span>
          </div>
      </Link>
    </NavigationMenuItem>
  );
};
