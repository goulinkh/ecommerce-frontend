import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const NavbarIsStickyContext = createContext<{
  sticky: boolean;
  setSticky: Dispatch<SetStateAction<boolean>>;
}>(null);

export const NavbarIsStickyProvider: React.FC<any> = ({ children }) => {
  // setSticky utilsé par navbar en scroll
  const [sticky, setSticky] = useState(false);
  return (
    <NavbarIsStickyContext.Provider value={{ sticky, setSticky }}>
      {children}
    </NavbarIsStickyContext.Provider>
  );
};
