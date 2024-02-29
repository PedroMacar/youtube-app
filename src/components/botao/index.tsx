import React, { ReactNode } from 'react';

interface BotaoProps {
  children: ReactNode;
  className?: string;
}

const Botao: React.FC<BotaoProps> = ({ children, className }) => {
  return (
    <div className={`group flex w-10 h-10 hover:bg-slate-300 dark:hover:bg-btmenu justify-center items-center rounded-full ${className}`}>
      {children}
    </div>
  );
};

interface BotaoIconProps {
  children: ReactNode;
  className?: string | ""
}

const BotaoIcon: React.FC<BotaoIconProps> = ({ children,className }) => {
  return <span className={`dark:fill-white  ${className}`}>{children}</span>;
};

interface BotaoLabelProps {
  children: ReactNode;
}

const BotaoLabel: React.FC<BotaoLabelProps> = ({ children }) => {
  return <span>{children}</span>;
};

export { Botao, BotaoIcon, BotaoLabel };
