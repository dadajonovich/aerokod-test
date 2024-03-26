export function Select() {
  return (
    <label className="mt-12 inline-block">
      <span className="text-label block font-evolventa	text-lg font-normal">
        Проект
      </span>
      <select className="rounded-[10px] border border-black px-6 py-3.5">
        <option disabled selected>
          Все
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </label>
  );
}
