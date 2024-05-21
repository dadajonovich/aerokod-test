import { formatPrice } from '../../utils/formatPrice';

type RangeProps = {
  title: string;
  type: 'price' | 'square';
};

export function Range(props: RangeProps) {
  const { title, type } = props;
  return (
    <div className="font-evolventa">
      <span className="text-lg	font-normal text-label">{title}</span>
      <div className="options mt-2">
        <div className="flex items-center justify-between	 gap-12">
          <div className="field">
            <span>от</span>
            <input value={formatPrice(2800000)} />
          </div>
          <hr className="w-[20px] border" />
          <div className="field">
            <span>до</span>
            <input value={formatPrice(10730000)} />
          </div>
        </div>
        {/* <div className="range-input">
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
        </div> */}
      </div>
    </div>
  );
}
