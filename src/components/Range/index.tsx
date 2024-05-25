import { formatPrice } from '../../utils/formatPrice';
import { useInputPrice } from '../../hooks/useInputPrice';
import { useRange } from '../../hooks/useRange';
import { useState } from 'react';

type RangeProps = {
  title: string;
  type: 'price' | 'square';
};

export function Range(props: RangeProps) {
  const { title, type } = props;

  const [min, setMin] = useState<string>(formatPrice(11567));
  const [max, setMax] = useState<string>(formatPrice(11567));

  const minProps = useInputPrice(min, setMin);
  const maxProps = useInputPrice(max, setMax);
  const rangeProps = useRange();
  console.log(rangeProps);
  return (
    <div className="font-evolventa">
      <span className="text-lg	font-normal text-label">{title}</span>
      <div className="border-custom options mt-2">
        <div className="flex items-center justify-between	 gap-12">
          <div className="field">
            <span>от</span>
            <input {...minProps} defaultValue={min} />
            &#8381;
          </div>
          <hr className="w-[20px] border" />
          <div className="field">
            <span>до</span>
            <input {...maxProps} defaultValue={max} />
            &#8381;
          </div>
        </div>
        <div className="slider">
          <div className="progress"></div>
        </div>
        <div {...rangeProps} className="range-input">
          <input type="range" min="0" max="10000" value="2500" step="100" />
          <input type="range" min="0" max="10000" value="7500" step="100" />
        </div>
      </div>
    </div>
  );
}
