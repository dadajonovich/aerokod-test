export function Select() {
  return (
    <label className="mt-14 block font-evolventa">
      <span className="text-lg	font-normal text-label">Проект</span>
      <div className="relative mt-2">
        <select className="w-full cursor-pointer appearance-none	rounded-[10px] border border-black px-6 py-3 text-[19px]">
          <option disabled selected>
            Все
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="array"
        >
          <path d="M3 5L7.5 9.5L12 5" stroke="#040306" stroke-width="1.5" />
        </svg>
      </div>
    </label>
  );
}