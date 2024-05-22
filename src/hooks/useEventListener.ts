import { RefObject, useCallback, useEffect } from 'react';

export function useEventListener(
  element: Node | RefObject<HTMLElement>,
  eventName: string,
  cb: () => void,
  deps: unknown[],
) {
  const memoCb = useCallback(cb, deps);

  useEffect(() => {
    const node = element instanceof Node ? element : element.current;
    if (node === null) return;

    node.addEventListener(eventName, memoCb);
    return () => node.removeEventListener(eventName, memoCb);
  }, [memoCb, element]);
}
