import { Select } from './Select';
import { Tabs } from './Tabs';
import { Range } from './Range';

export function Options() {
  return (
    <>
      <h2 className="font-extatica text-6xl font-medium uppercase">
        Планировки
      </h2>
      <div className="mt-14 flex gap-x-5">
        <Select />
        <Tabs />
        <Range {...{ title: 'Стоимость', type: 'price' }} />
        {/* <Range {...{ title: 'Задайте площадь, м²', type: 'square' }} /> */}
      </div>
    </>
  );
}
