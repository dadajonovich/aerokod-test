import { useState } from 'react';

const tabs = ['Ст', '1к', '2к', '3к', '4к'];

export function Tabs() {
  const [currentIndex, setIndex] = useState<number>(0);

  const classNameTab = 'border-custom options';
  const classNameActiveTab =
    'border-custom options bg-active text-white border-active';

  return (
    <div className="font-evolventa">
      <span className="text-lg	font-normal text-label">
        Укажите количество комнат
      </span>
      <div className="relative mt-2 flex gap-x-5">
        {tabs.map((button, index) => (
          <button
            key={index}
            className={
              currentIndex === index ? classNameActiveTab : classNameTab
            }
            onClick={() => setIndex(index)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}
