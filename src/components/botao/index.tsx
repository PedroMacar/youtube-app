import React, { ReactNode } from 'react';

interface BotaoProps {
  children: ReactNode;
  className?: string;
}

const Botao: React.FC<BotaoProps> = ({ children, className }) => {
  return (
    <div className={`flex w-10 h-10 hover:bg-slate-300 justify-center items-center rounded-full ${className}`}>
      {children}
    </div>
  );
};

interface BotaoIconProps {
  children: ReactNode;
}

const BotaoIcon: React.FC<BotaoIconProps> = ({ children }) => {
  return <span>{children}</span>;
};

interface BotaoLabelProps {
  children: ReactNode;
}

const BotaoLabel: React.FC<BotaoLabelProps> = ({ children }) => {
  return <span>{children}</span>;
};

export { Botao, BotaoIcon, BotaoLabel };
