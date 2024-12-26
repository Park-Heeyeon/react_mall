import { BrandDealItemType } from "@/types/deals";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { formatPrice } from "@/utils";

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;

interface BrandDealItemProps {
  brandDealItem: BrandDealItemType;
}

const BrandDealItem: React.FC<BrandDealItemProps> = ({
  brandDealItem: {
    title = "",
    discountedPrice = 0,
    discountRate = 0,
    image = "",
    discountEndDate = "",
  },
}) => {
  return (
    <div className={styles.itemCard}>
      <div className={styles.cardContent}>
        <div className={styles.itemImage}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.itemInfo}>
          <TimerBadge discountEndDate={discountEndDate} />
          <div className={styles.itemTitle}>{title}</div>
          <div className={styles.priceInfo}>
            <span className={styles.discount}>{discountRate}%</span>
            <span className={styles.price}>{formatPrice(discountedPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandDealItem;

// 할인 종료 시간 타이머 뱃지 컴포넌트
const TimerBadge = ({ discountEndDate }: { discountEndDate: string }) => {
  const calcDiscountTime = () => {
    const now = new Date(); // 현재 시간
    const endDate = new Date(discountEndDate); // 할인 종료일
    const diffTime = endDate.getTime() - now.getTime();

    if (diffTime <= 0) return null; // 할인 시간이 지났으면 null 반환

    const days = Math.floor(diffTime / MS_IN_DAY);
    const hours = Math.floor((diffTime % MS_IN_DAY) / MS_IN_HOUR);
    const minutes = Math.floor((diffTime % MS_IN_HOUR) / MS_IN_MINUTE);
    const seconds = Math.floor((diffTime % MS_IN_MINUTE) / MS_IN_SECOND);

    return { days, hours, minutes, seconds };
  };

  const [leftTime, setLeftTime] = useState(calcDiscountTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const realTimeTimer = calcDiscountTime();
      return !realTimeTimer ? clearInterval(timer) : setLeftTime(realTimeTimer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    if (!leftTime) return "할인 종료";

    const { days, hours, minutes, seconds } = leftTime;
    const timeParts = [
      days > 0 ? `${days}일` : "",
      hours > 0 ? `${hours}시간` : "",
      minutes > 0 ? `${minutes}분` : "",
      seconds > 0 ? `${seconds}초` : "",
    ].filter(Boolean);

    const timer = timeParts.join(" ");
    return timer === " " ? "상시할인" : timer;
  };

  return <div className={styles.timerBadge}>{formatTime()}</div>;
};
