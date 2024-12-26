import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api";

// 순삭 특가 상품 데이터를 가져오는 함수
const fetchLureDeal = async () => {
  const response = await axiosInstance.get("/deals/lure-deal");
  console.log("gmldus !!!", response.data);
  return response.data;
};

// 순삭 특가 상품 데이터를 가져오는 리액트 쿼리 커스텀 훅
export const useLureDealQuery = () => {
  return useQuery({
    queryKey: ["lureDeal"],
    queryFn: fetchLureDeal,
    retry: false,
  });
};
