import { useInfiniteQuery } from "@tanstack/react-query";
import axiosInstance from "@/api";
import { BrandDealItemType } from "@/types/deals";

interface BrandDealResponse {
  itemList: BrandDealItemType[];
  isLastPage: boolean;
  nextPage: number;
}

// 브랜드딜 상품 데이터를 가져오는 함수
const fetchBrandDeal = async ({
  pageParam = 1,
}: {
  pageParam: number;
}): Promise<BrandDealResponse> => {
  const response = await axiosInstance.get("/deals/brand-deal", {
    params: { page: pageParam },
  });

  return {
    itemList: response.data.itemList,
    isLastPage: response.data.isLastPage,
    nextPage: pageParam + 1,
  };
};

// 브랜드딜 상품 데이터를 가져오는 리액트 쿼리 커스텀 훅
export const useBrandDealQuery = (
  isFromViewAllPage = false,
  isSinglePage = true
) => {
  return useInfiniteQuery({
    queryKey: ["brandDeal"],
    queryFn: fetchBrandDeal,
    enabled: !isFromViewAllPage, // 타임특가 - 전체보기로부터 진입했다면 첫 번째 API 호출을 비활성화
    initialPageParam: 1,
    getNextPageParam: (lastPage: BrandDealResponse) => {
      if (isSinglePage) return undefined;
      return lastPage.isLastPage ? undefined : lastPage.nextPage;
    },
    retry: false,
  });
};
