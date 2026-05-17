import { useState } from 'react';

export default function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  function toggle(): void {
    setIsOpen((prev) => !prev);
  }
  return {
    isOpen,
    toggle,
  };
}
