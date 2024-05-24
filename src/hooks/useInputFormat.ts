import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { formatPrice } from '../utils/formatPrice';
import { calcSpaces } from '../utils/calcSpaces';
import { useEventListener } from './useEventListener';

export function useInputFormat(defaultNumber: number) {
  const defaultValue = formatPrice(defaultNumber);

  // const [prev, setPrev] = useState<number>(calcSpaces(defaultValue));
  const [prev, setPrev] = useState<number>(0);
  const [selectPos, setSelectPos] = useState<number>(0);

  const [isFocus, setIsFocus] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  useEventListener(
    document,
    'select',
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
      console.log(`${spaces} - ${selectedSpaces} = ${spaces - selectedSpaces}`);
      setPrev(spaces - selectedSpaces);
    },
    [ref, isFocus],
  );

  useEffect(() => {
    console.log(prev);
  }, [prev]);

  useEventListener(ref, 'focus', () => setIsFocus(true), []);
  useEventListener(ref, 'blur', () => setIsFocus(false), []);

  const onClick: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target;
    setSelectPos(target.selectionEnd || 0);
  };

  const onInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    // Инпут
    const target = e.target;

    // Текущая позиция каретки
    // const selectPos = target.selectionEnd || 0;

    // Значение без пробелов
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

  return { ref, onInput, onClick, defaultValue } as const;
}
