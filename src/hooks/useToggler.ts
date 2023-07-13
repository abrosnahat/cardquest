import { useState } from 'react';

export const useToggler = (defaultIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
  const toggle = (newState?: boolean) =>
    setIsOpen(
      typeof newState !== 'undefined' ? newState : (prevState) => !prevState
    );

  return { isOpen, toggle };
};
