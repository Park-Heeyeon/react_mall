import { DealTimeType, TimeDealItemType } from "@/types/deals";
import styles from "./index.module.css";
import { formatPrice } from "@/utils";
interface TimeDealItemProps {
  timeDealItem: TimeDealItemType;
  currentTab: DealTimeType;
  isTimeDealOpen: boolean;
}

const TimeDealItem: React.FC<TimeDealItemProps> = ({
  isTimeDealOpen,
  currentTab,
  timeDealItem: {
    title = "",
    originalPrice = 0,
    discountedPrice = 0,
    discountRate = 0,
    image = "",
  },
}) => {
  const isUpcoming = !isTimeDealOpen || currentTab === "next";

  return (
    <div className={styles.itemBox}>
      <div className={styles.itemImage}>
        {isUpcoming && <div className={styles.upcomingItem}>오픈 예정</div>}
        <img
          src={image}
          alt={title}
          className={isUpcoming ? styles.imageOpacity : ""}
        />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemPrice}>{formatPrice(originalPrice)}</div>
        <div className={styles.itemSaleInfo}>
          <span className={styles.itemSaleRate}>{discountRate}%</span>
          <span className={styles.itemSalePrice}>
            {formatPrice(discountedPrice)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default TimeDealItem;
