const tabs = ['Ст', '1к', '2к', '3к', '4к'];

export function Tabs() {
  return (
    <div className="font-evolventa">
      <span className="text-lg	font-normal text-label">
        Укажите количество комнат
      </span>
      <div className="relative mt-2 flex gap-x-5">
        {tabs.map((button, index) => (
          <button key={index} className="options">
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}
