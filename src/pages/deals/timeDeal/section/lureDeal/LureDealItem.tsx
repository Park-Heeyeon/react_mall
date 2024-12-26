import React from "react";
import styles from "./index.module.css";
import { discountPercentage, formatPrice } from "@/utils";
import { LureDealItemType } from "@/types/deals";

interface LureDealItemProps {
  lureDealItem: LureDealItemType;
}

const LureDealItem: React.FC<LureDealItemProps> = ({
  lureDealItem: {
    image = "",
    title = "",
    originalPrice = 0,
    discountedPrice = 0,
  },
}) => {
  const discount = discountPercentage(originalPrice, discountedPrice);
  return (
    <div className={styles.itemCard}>
      <div className={styles.cardContent}>
        <div className={styles.itemImage}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.itemInfo}>
          <p className={styles.itemTitle}>{title}</p>
          <div className={styles.priceInfo}>
            <span className={styles.discount}>{discount}%</span>
            <span className={styles.price}>{formatPrice(originalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LureDealItem;
