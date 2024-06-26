import Remove from '/remove.svg?react';
// import Remove from '/remove.svg';

type SearchInfoProps = {
  quantity: number;
};

export function SearchInfo({ quantity }: SearchInfoProps) {
  return (
    <div className="mt-12 flex">
      <p className="grow text-center font-evolventa text-lg font-normal">
        Найдено {quantity} квартир
      </p>
      <button className="flex items-center justify-between gap-3 font-evolventa text-lg font-normal">
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.78"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.68105 1.50013H5.05452e-05V0.5H3.50005L4.00005 1.00006V4.50051H3.00005V2.50026C2.10377 3.17283 1.45936 4.127 1.17019 5.2097C0.881032 6.2924 0.963884 7.44086 1.40546 8.47083C1.84703 9.5008 2.62173 10.3526 3.60526 10.8895C4.58879 11.4264 5.72415 11.6174 6.82918 11.4317C7.93421 11.2461 8.94486 10.6945 9.69898 9.86568C10.4531 9.03681 10.907 7.97861 10.9878 6.86088C11.0686 5.74314 10.7717 4.63064 10.1447 3.70187C9.51765 2.77311 8.59687 2.0819 7.53005 1.73916L7.83204 0.785037C9.12667 1.20022 10.2419 2.04282 10.9951 3.17482C11.7483 4.30682 12.0948 5.66108 11.9777 7.01576C11.8607 8.37044 11.2871 9.64521 10.351 10.6312C9.4148 11.6172 8.17157 12.2561 6.82493 12.443C5.4783 12.63 4.1081 12.354 2.93881 11.6602C1.76952 10.9665 0.870467 9.89617 0.38894 8.62458C-0.0925876 7.353 -0.12804 5.95556 0.28839 4.66119C0.704819 3.36682 1.54844 2.25227 2.68105 1.50013Z"
            fill="#040306"
          />
        </svg>
        Очистить всё
      </button>
    </div>
  );
}
