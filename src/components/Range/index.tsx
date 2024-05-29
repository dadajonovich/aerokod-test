import { IMaskInput } from 'react-imask';
import { useRange } from '../../hooks/useRange';
import { useEffect, useRef, useState } from 'react';
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

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getFloatFromValuePrice(e.target.value) < getFloatFromValuePrice(max))
      setMin(e.target.value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (getFloatFromValuePrice(e.target.value) > getFloatFromValuePrice(min))
      setMax(e.target.value);
  };

  const updateProgress = () => {
    if (progressRef.current) {
      const minVal = getFloatFromValuePrice(min);
      const maxVal = getFloatFromValuePrice(max);
      progressRef.current.style.left = (minVal / 100000) * 100 + '%';
      progressRef.current.style.right = 100 - (maxVal / 100000) * 100 + '%';
    }
  };

  useEffect(() => {
    updateProgress();
  }, [min, max]);

  return (
    <div className="font-evolventa">
      <span className="text-lg	font-normal text-label">{title}</span>
      <div className="border-custom options mt-2">
        <div className="flex items-center justify-between	 gap-12">
          <div className="field">
            <span>от</span>
            <IMaskInput
              mask={Number}
              style={{ width: min.length + 'ch' }}
              onAccept={(value) => {
                setMin(value);
              }}
              thousandsSeparator=" "
              value={min}
            />
            &#8381;
          </div>
          <hr className="w-[20px] border" />
          <div className="field">
            <span>до</span>
            <IMaskInput
              mask={Number}
              style={{ width: max.length + 'ch' }}
              onAccept={(value) => setMax(value)}
              thousandsSeparator=" "
              value={max}
            />
            &#8381;
          </div>
        </div>
        <div className="slider">
          <div ref={progressRef} className="progress"></div>
        </div>
        <div className="range-input">
          <input
            type="range"
            className="range-min"
            min="0"
            max="100000"
            onChange={handleMinChange}
            value={getFloatFromValuePrice(min)}
            step="100"
          />
          <input
            type="range"
            className="range-max"
            min="0"
            max="100000"
            onChange={handleMaxChange}
            value={getFloatFromValuePrice(max)}
            step="100"
          />
        </div>
      </div>
    </div>
  );
}
