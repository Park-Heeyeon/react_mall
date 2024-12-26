import axiosInstance from "@/api";
import { DealTimeType, TimeDealItemType } from "@/types/deals";
import { useInfiniteQuery } from "@tanstack/react-query";

interface FetchTimeDealParams {
  time: DealTimeType;
  pageParam: number;
}

interface TimeDealResponse {
  itemList: TimeDealItemType[];
  isLastPage: boolean;
  nextPage: number;
}

// 타임 특가 상품 데이터를 가져오는 함수
const fetchTimeDeal = async ({
  time = "current",
  pageParam = 1,
}: FetchTimeDealParams): Promise<TimeDealResponse> => {
  const response = await axiosInstance.get("/deals/time-deal", {
    params: { time, page: pageParam },
  });
  return {
    itemList: response.data.itemList,
    isLastPage: response.data.isLastPage,
    nextPage: pageParam + 1,
  };
};

// 타임특가 상품 데이터를 가져오는 리액트 쿼리 커스텀 훅
export const useTimeDealQuery = (time: DealTimeType) => {
  return useInfiniteQuery({
    queryKey: ["timeDeal", time],
    queryFn: ({ pageParam = 1 }) => fetchTimeDeal({ time, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: TimeDealResponse) => {
      return lastPage.isLastPage ? undefined : lastPage.nextPage;
    },
    staleTime: 5 * 60 * 1000, // 데이터가 5분 동안 신선한 상태로 유지
    retry: false,
  });
};
