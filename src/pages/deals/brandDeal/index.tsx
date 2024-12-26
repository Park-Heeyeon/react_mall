import { Header } from "@/components";
import { useLocation } from "react-router-dom";
import BrandDealDetailList from "./BrandDealDetailList";

const BrandDeal = () => {
  const location = useLocation();
  // 타임특가 페이지의 브랜드딜 섹션 - 전체보기 경로로 넘어왔는지 확인
  const { isFromViewAll } = location.state || {};

  return (
    <div>
      <Header title="오늘의 브랜드딜" isBackButtonVisible={true} />
      <BrandDealDetailList isFromViewAll={isFromViewAll} />
    </div>
  );
};

export default BrandDeal;
