import { formatPrice } from '../../utils/formatPrice';
import { useInputPrice } from '../../hooks/useInputPrice';
import { useRange } from '../../hooks/useRange';
import { useRef, useState } from 'react';
import { getFloatFromValuePrice } from '../../utils/getFloatFromValuePrice';

type RangeProps = {
  title: string;
  type: 'price' | 'square';
  toFormat: (value: number) => string;
};

export function Range(props: RangeProps) {
  const { title, type, toFormat } = props;

  const [min, setMin] = useState<string>(toFormat(11567));
  const [max, setMax] = useState<string>(toFormat(77666));
  const progressRef = useRef<HTMLDivElement>(null);

  const minProps = useInputPrice(min, setMin);
  const maxProps = useInputPrice(max, setMax);
  const rangeInputProps = useRange(min, max, setMin, setMax, progressRef);

  return (
    <div className="font-evolventa">
      <span className="text-lg	font-normal text-label">{title}</span>
      <div className="border-custom options mt-2">
        <div className="flex items-center justify-between	 gap-12">
          <div className="field">
            <span>от</span>
            <input {...minProps} value={min} />
            &#8381;
          </div>
          <hr className="w-[20px] border" />
          <div className="field">
            <span>до</span>
            <input {...maxProps} value={max} />
            &#8381;
          </div>
        </div>
        <div className="slider">
          <div ref={progressRef} className="progress"></div>
        </div>
        <div {...rangeInputProps} className="range-input">
          <input
            type="range"
            className="range-min"
            min="0"
            max="100000"
            value={getFloatFromValuePrice(min)}
            step="100"
          />
          <input
            type="range"
            className="range-max"
            min="0"
            max="100000"
            value={getFloatFromValuePrice(max)}
            step="100"
          />
        </div>
      </div>
    </div>
  );
}
