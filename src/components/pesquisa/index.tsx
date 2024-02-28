/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);


  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
    // Aqui você pode adicionar a lógica para lidar com a submissão do formulário
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <form className='' onSubmit={handleSubmit}>
      <div className="flex gap-0 space-x-0  h-10">
        <div className={`flex-1 rounded-s-2xl px-2 border-[1px] ${isInputFocused ? 'border-blue-800 shadow-inner  shadow-neutral-300' : 'border-zinc-800'}  flex gap-0 space-x-0 items-center`}>
            <div className={`ddd ${isInputFocused ? 'block' : 'hidden'}`} >
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}>
          <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
        </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Pesquisar"
              aria-label="Pesquisar"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck="false"
              className="w-full p-4 bg-none border-none rounded-s-2xl h-5 "
              style={{ outline: 'none' }}
            >
            </input>
          
          <div className="flex-[6%] items-center justify-center align-middle p-1" >         
                <img src="//www.gstatic.com/inputtools/images/tia.png" alt="Search" />            
          </div>
        </div>
        <button className='w-[9%] p-2 bg-slate-200 rounded-e-2xl border-l-0 border-[1px] border-zinc-800' type="submit" aria-label="Pesquisar">
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}>
          <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
        </svg>
      </button>
      </div>
    </form>
  );
}

export default SearchBox;
