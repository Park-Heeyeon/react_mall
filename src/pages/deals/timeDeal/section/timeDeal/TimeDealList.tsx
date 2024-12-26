import styles from "./index.module.css";
import { useTimeDealQuery } from "@/hooks/deals/timeDealQuery";
import { DealTimeType, TimeDealItemType } from "@/types/deals";
import TimeDealItem from "./TimeDealItem";
import { VirtuosoGrid } from "react-virtuoso";
import { useCallback } from "react";

interface TimeDealListProps {
  isTimeDealOpen: boolean;
  currentTab: DealTimeType;
}

interface TimeDealResponse {
  itemList: TimeDealItemType[];
  isLastPage: boolean;
  nextPage: number;
}

const TimeDealList: React.FC<TimeDealListProps> = ({
  currentTab,
  isTimeDealOpen,
}) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useTimeDealQuery(currentTab);

  const timeDealItems =
    data?.pages.flatMap((page: TimeDealResponse) => page.itemList) || [];

  const loadMore = useCallback(() => {
    // 중복 호출 방지
    if (!isFetching && !isFetchingNextPage && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, isFetchingNextPage, isLoading, fetchNextPage]);

  //   if (isLoading) return <LoadingSpinner />;

  return (
    <div className={styles.itemListWrap}>
      <VirtuosoGrid
        useWindowScroll
        data={timeDealItems}
        endReached={loadMore}
        totalCount={timeDealItems.length}
        overscan={300}
        increaseViewportBy={500}
        listClassName={styles.itemList}
        itemClassName={styles.itemBox}
        itemContent={(index) => {
          const item = timeDealItems[index];
          return (
            <TimeDealItem
              key={item.id}
              timeDealItem={item}
              currentTab={currentTab}
              isTimeDealOpen={isTimeDealOpen}
            />
          );
        }}
      />
    </div>
  );
};

export default TimeDealList;
