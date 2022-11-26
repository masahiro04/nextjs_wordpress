import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface SearchWordContextProps {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
}

export const SearchWordContext = createContext<SearchWordContextProps>({
  word: '',
  setWord: () => ({})
});

export const SearchWordContextProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [word, setWord] = useState<string>('');
  return (
    <SearchWordContext.Provider
      value={{
        word,
        setWord
      }}
    >
      {children}
    </SearchWordContext.Provider>
  );
};

export const useSearchWord = (): SearchWordContextProps => useContext(SearchWordContext);
