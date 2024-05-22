import { useState } from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { useInputFormat } from '../../hooks/useInputFormat';

type RangeProps = {
  title: string;
  type: 'price' | 'square';
};

export function Range(props: RangeProps) {
  const minProps = useInputFormat(666666);
  const maxProps = useInputFormat(777777);

  const { title, type } = props;
  return (
    <div className="font-evolventa">
      <span className="text-lg	font-normal text-label">{title}</span>
      <div className="border-custom options mt-2">
        <div className="flex items-center justify-between	 gap-12">
          <div className="field">
            <span>от</span>
            <input {...minProps} />
            &#8381;
          </div>
          <hr className="w-[20px] border" />
          <div className="field">
            <span>до</span>
            <input {...maxProps} />
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
