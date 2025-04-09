import { useEffect, RefObject } from 'react';

export function useClickOutside(ref: RefObject<HTMLElement | null>, onClickOutside: () => void) {
  useEffect(() => {
    const { current: insideElement } = ref;

    if (!insideElement) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Node && !insideElement.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
}
