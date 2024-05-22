import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { formatPrice } from '../utils/formatPrice';
import { calcSpaces } from '../utils/calcSpaces';
import { useEventListener } from './useEventListener';

export function useInputFormat(defaultNumber: number) {
  const defaultValue = formatPrice(defaultNumber);

  const [prev, setPrev] = useState<number>(calcSpaces(defaultValue));
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  useEventListener(
    document,
    'selectionchange',
    () => {
      if (!ref.current) return;
      if (!isFocus) return;
      const target = ref.current;

      const start = target.selectionStart;
      const end = target.selectionEnd;

      const isEmpy = start === null || end === null || start === end;

      const spaces = calcSpaces(target.value);
      const selectedValue = isEmpy ? '' : target.value.slice(start, end);

      const selectedSpaces = calcSpaces(selectedValue);

      setPrev(spaces - selectedSpaces);
    },
    [ref, isFocus],
  );

  useEffect(() => {
    console.log(prev);
  }, [prev]);

  useEventListener(ref, 'focus', () => setIsFocus(true), []);
  useEventListener(ref, 'blur', () => setIsFocus(false), []);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target;
    const selectPos = target.selectionEnd || 0;
    const valueWithoutSpaces = Number(target.value.replace(/\s+/g, ''));

    const format = formatPrice(valueWithoutSpaces);
    const currentSpaces = calcSpaces(format);

    target.value = format;

    const currentSelect = selectPos + (currentSpaces - prev);
    console.log(
      `${selectPos} + (${currentSpaces} - ${prev}) = ${currentSelect} `,
    );
    target.setSelectionRange(currentSelect, currentSelect);
  };

  return { ref, onInput: onChange, defaultValue } as const;
}
