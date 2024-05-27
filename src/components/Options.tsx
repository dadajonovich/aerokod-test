import { Select } from './Select';
import { Tabs } from './Tabs';
import { Range } from './Range';
import { formatPrice } from '../utils/formatPrice';
import { formatSquare } from '../utils/formatSquare';

export function Options() {
  return (
    <>
      <h2 className="font-extatica text-6xl font-medium uppercase">
        Планировки
      </h2>
      <div className="mt-14 flex gap-x-5">
        <Select />
        <Tabs />
        <Range
          {...{ title: 'Стоимость', type: 'price', toFormat: formatPrice }}
        />
        {/* <Range
          {...{
            title: 'Задайте площадь, м²',
            type: 'square',
            toFormat: formatSquare,
          }}
        /> */}
      </div>
    </>
  );
}
