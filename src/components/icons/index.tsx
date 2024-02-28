import React from 'react';

// import { Container } from './styles';

const   HamburgerIcon: React.FC = () => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="24" 
        viewBox="0 0 24 24" 
        width="24" 
        focusable="false" 
        >
        <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"/>
    </svg>
  )
}

const CriarIcon: React.FC = () => {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8.5H9V11.5H7V8.5H4V6.5H7V3.5H9V6.5H12V8.5ZM15 1.5H1V13.5H15V7.11L19 8.94V4.06L15 5.89V1.5ZM16 0.5V4.33L20 2.5V10.5L16 8.67V14.5H0V0.5H16Z" fill="black"/>
</svg>

  )
}
const NotificaocaoIcon: React.FC = () => {
  return (
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18.5H10C10 19.6 9.1 20.5 8 20.5C6.9 20.5 6 19.6 6 18.5ZM16 15.85V17.5H0V15.85L2 13.97V8.81998C2 5.89998 3.56 3.59998 6 2.83998V2.45998C6 1.03998 7.49 -0.040024 8.99 0.699976C9.64 1.01998 10 1.72998 10 2.45998V2.84998C12.44 3.59998 14 5.90998 14 8.82998V13.98L16 15.85ZM15 16.27L13 14.39V8.91998C13 6.44998 11.81 4.55998 9.87 3.81998C8.61 3.28998 7.23 3.31998 6.03 3.84998C4.15 4.60998 3 6.48998 3 8.91998V14.39L1 16.27V16.5H15V16.27Z" fill="black"/>
    </svg>
  )
}

const HomeIcon: React.FC = () => {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.44L15 7.52999V17H11V11H5V17H1V7.52999L8 1.44ZM8 0.119995L0 7.08V18H6V12H10V18H16V7.08L8 0.119995Z" fill="black"/>
</svg>
  )
}
const HomeIconFull: React.FC = () => {
  return (
    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 18.5V7.58L8 0.619995L16 7.58V18.5H10V12.5H6V18.5H0Z" fill="black"/>
</svg>

  )
}




export {HamburgerIcon, CriarIcon,NotificaocaoIcon,HomeIcon,HomeIconFull};