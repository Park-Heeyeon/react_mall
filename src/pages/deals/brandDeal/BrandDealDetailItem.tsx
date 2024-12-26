import { BrandDealItemType } from "@/types/deals";
import { useEffect, useState } from "react";
import { formatPrice } from "@/utils";
import styles from "./index.module.css";

interface BrandDealDetailItemProps {
  brandDealDetailItem: BrandDealItemType;
}

const BrandDealDetailItem: React.FC<BrandDealDetailItemProps> = ({
  brandDealDetailItem: {
    title = "",
    originalPrice = 0,
    discountedPrice = 0,
    stockPercentage = 0,
    image = "",
  },
}) => {
  const [width, setWidth] = useState(0); // 초기 너비 0 설정

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(stockPercentage); // 애니메이션을 위해 최종 너비 설정
    }, 100);
    return () => clearTimeout(timer);
  }, [stockPercentage]);

  return (
    <div className={styles.itemBox}>
      <div className={styles.itemImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.itemTitle}>{title}</div>
        <div className={styles.itemStockGraph}>
          <div
            className={styles.itemStockGraphFill}
            style={{
              width: `${width}%`,
            }}
          />
          <div className={styles.itemStockText}>{stockPercentage}%</div>
        </div>
        <div className={styles.itemPriceInfo}>
          <div className={styles.itemSalePrice}>
            할인가 {formatPrice(discountedPrice)}
          </div>
          <div className={styles.itemPrice}>
            곧 정상가 {formatPrice(originalPrice)}으로 돌아갑니다.
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandDealDetailItem;
