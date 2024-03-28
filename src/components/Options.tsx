import { Select } from './Select/Select';
import { Tabs } from './Tabs/Tabs';

export function Options() {
  return (
    <>
      <h2 className="font-extatica text-6xl font-medium uppercase">
        Планировки
      </h2>
      <div className="flex gap-x-5">
        <Select />
        <Tabs />
      </div>
    </>
  );
}
