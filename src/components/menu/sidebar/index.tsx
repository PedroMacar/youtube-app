'use client'
import { NavigationMenuDemo } from '@/components/navegacao';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import React from 'react';

// import { Container } from './styles';

const Sidebar: React.FC = () => {
    return (
        <div>
            <div className='pl-4'>
            <NavigationMenu orientation='vertical' className='max-w-full block'>
            <NavigationMenuList className='flex space-y-0 space-x-0 flex-col w-full gap-0'>
            <NavigationMenuDemo/>
            </NavigationMenuList>
            </NavigationMenu>
            </div>
        </div>
    )
}

export default Sidebar;