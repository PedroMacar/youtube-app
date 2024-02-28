import React from 'react';
import Image from 'next/image'
import { BoxIcon } from '@radix-ui/react-icons';
import { CriarIcon, HamburgerIcon, NotificaocaoIcon } from '@/components/icons';
import { Botao, BotaoIcon, BotaoLabel } from '../botao';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import Link from 'next/link';
import SearchBox from '../pesquisa';


// import { Container } from './styles';

const Menu: React.FC = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex gap-4 items-center'>


                <Botao className=''>
                    <BotaoIcon><HamburgerIcon></HamburgerIcon></BotaoIcon>
                </Botao>

                <Image className='my-[18px] mx-1' src="/menu/logo.svg" width={90} height={20} alt=''></Image>
            </div>
            <div className='w-[600px] justify-center'>
                <SearchBox></SearchBox>
            </div>
            <div className='flex gap-2'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Botao className=''>
                                <BotaoIcon><CriarIcon></CriarIcon></BotaoIcon>
                            </Botao>
                        </TooltipTrigger>
                        <TooltipContent className='bg-zinc-900 bg-opacity-70 text-zinc-50'>
                            <p>Criar</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Botao className='' >
                                <BotaoIcon><NotificaocaoIcon></NotificaocaoIcon></BotaoIcon>
                            </Botao>
                        </TooltipTrigger>
                        <TooltipContent className='bg-zinc-900 bg-opacity-70 text-zinc-50'>
                            <p>Notificações</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                
                <Link href="/">
                    <Avatar>
                    <AvatarImage src='/menu/profile.jpeg'></AvatarImage>
                    <AvatarFallback className='bg-green-700 text-zinc-50'>P</AvatarFallback>
                </Avatar>
                </Link>
            </div>
        </div>
    )
}

export default Menu;