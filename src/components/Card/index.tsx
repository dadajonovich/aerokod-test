import { formatPrice } from '../../utils/formatPrice';

export function Card() {
  return (
    <div className="border-custom max-w-[580px] px-10 py-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col font-extatica">
          <span className="text-xl font-medium">
            1-комнатная 21,2 м<sup>2</sup>
          </span>
          <div className="mt-2 flex items-end justify-between gap-5">
            <span className="text-3xl font-semibold	">
              {formatPrice(66666666)} &#8381;
            </span>
            <span className="text-sm	font-medium	 line-through">
              {formatPrice(77777777)} &#8381;
            </span>
          </div>
        </div>
        <svg
          className="self-start	"
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.500122"
            width="54"
            height="54"
            rx="27"
            stroke="#040306"
          />
          <path
            d="M27.5 37.0001L26.1225 35.6334C21.23 30.7979 18 27.5985 18 23.6949C18 20.4955 20.299 18.0001 23.225 18.0001C24.878 18.0001 26.4645 18.8388 27.5 20.1538C28.5355 18.8388 30.122 18.0001 31.775 18.0001C34.701 18.0001 37 20.4955 37 23.6949C37 27.5985 33.77 30.7979 28.8775 35.6334L27.5 37.0001Z"
            fill="#040306"
          />
        </svg>
      </div>
      <img className="m-auto	mt-[55px]" src="plan.png"></img>
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <span className="text-label">Проект</span>
          <span>ЖК Мотив</span>
        </div>
        <hr className="my-1 bg-label" />
        <div className="flex items-center justify-between">
          <span className="text-label">Этаж</span>
          <span>2 из 14</span>
        </div>
        <hr className="my-1 bg-label" />
        <div className="flex items-center justify-between">
          <span className="text-label">Срок сдачи</span>
          <span>II квартал 2025</span>
        </div>
      </div>
    </div>
  );
}
