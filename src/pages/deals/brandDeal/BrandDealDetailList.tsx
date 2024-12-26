import React, { useEffect, useRef, useState } from "react";
import { useBrandDealQuery } from "@/hooks/deals/brandDealQuery";
import { BrandDealItemType } from "@/types/deals";
import BrandDealDetailItem from "./BrandDealDetailItem";
import styles from "./index.module.css";
import useIntersectionObserver from "@/hooks/common/intersectionObserver";
import SkeletonCard from "@/components/SkeletonCard";

interface BrandDealDetailListProps {
  isFromViewAll: boolean;
}

const BrandDealDetailList: React.FC<BrandDealDetailListProps> = ({
  isFromViewAll,
}) => {
  const [shouldFetch, setShouldFetch] = useState(isFromViewAll);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useBrandDealQuery(shouldFetch, false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 무한스크롤 옵저버 설정
  useIntersectionObserver(
    scrollRef as React.RefObject<HTMLElement>,
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  );

  useEffect(() => {
    if (!data && isFromViewAll) {
      // 데이터가 없을 경우 다시 요청하도록 설정
      setShouldFetch(false);
    }
  }, [data, isFromViewAll]);

  const brandDealDetailItems =
    data?.pages.flatMap((page) => page.itemList) || [];

  return (
    <div className={styles.itemList} ref={scrollRef}>
      {isLoading
        ? Array(20)
            .fill(null)
            .map((_, idx) => <SkeletonCard key={idx} />)
        : brandDealDetailItems.map((item: BrandDealItemType) => (
            <BrandDealDetailItem key={item.id} brandDealDetailItem={item} />
          ))}
      <div style={{ height: "1px" }} />
    </div>
  );
};

export default BrandDealDetailList;
