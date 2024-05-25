import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { calcSpaces } from '../../utils/calcSpaces';

type RangeProps = {
  title: string;
  type: 'price' | 'square';
};

export function Range(props: RangeProps) {
  const [min, setMin] = useState<string>(formatPrice(11567));
  const minRef = useRef<HTMLInputElement>(null);

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('handleInput');
    const target = e.target;
    const value = target.value;

    // Количество пробелов у предыдущего значения
    const prevSpaces = calcSpaces(min);

    // Подготовка значения под форматирование
    const valueWithoutSpaces = Number(value.replace(/\s+/g, ''));
    // Форматирование
    const formatedPrice = formatPrice(valueWithoutSpaces);
    // Получение количества пробелов
    const currentSpaces = calcSpaces(formatedPrice);
    // Находим разницу в пробелах
    const difSpaces = currentSpaces - prevSpaces;
    const selectionStart = (target.selectionStart || 0) + difSpaces;

    target.value = formatedPrice;

    target.setSelectionRange(selectionStart, selectionStart);
    setMin(formatedPrice);
  };

  useEffect(() => {
    if (!minRef.current) return;
    minRef.current.style.width = min.length + 'ch';
  }, [min]);

  const { title, type } = props;
  return (
    <div className="font-evolventa">
      <span className="text-lg	font-normal text-label">{title}</span>
      <div className="border-custom options mt-2">
        <div className="flex items-center justify-between	 gap-12">
          <div className="field">
            <span>от</span>
            <input ref={minRef} onChange={handleInput} defaultValue={min} />
            &#8381;
          </div>
          <hr className="w-[20px] border" />
          <div className="field">
            <span>до</span>
            <input onChange={handleInput} />
            &#8381;
          </div>
        </div>
        <div className="slider">
          <div className="progress"></div>
        </div>
        <div className="range-input">
          <input
            type="range"
            className="range-min"
            min="0"
            max="10000"
            value="2500"
            step="100"
          />
          <input
            type="range"
            className="range-max"
            min="0"
            max="10000"
            value="7500"
            step="100"
          />
        </div>
      </div>
    </div>
  );
}
