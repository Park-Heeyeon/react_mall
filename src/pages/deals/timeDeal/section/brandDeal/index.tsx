import { useBrandDealQuery } from "@/hooks/deals/brandDealQuery";

import styles from "./index.module.css";
import { webPath } from "@/router";
import { useNavigate } from "react-router-dom";
import BrandDealList from "./BrandDealList";

// 브랜드딜 컴포넌트
const BrandDealSection = () => {
  const { isError } = useBrandDealQuery();
  const navigate = useNavigate();

  const handleClickGoToBrandDeal = () => {
    navigate(webPath.brandDeal(), {
      state: { isFromViewAll: true },
    });
  };

  // 에러가 발생할 경우, 해당 섹션 표출 x
  if (isError) return null;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>오늘의 브랜드딜</h2>
        <div className={styles.viewAll} onClick={handleClickGoToBrandDeal}>
          전체보기
        </div>
      </div>
      <div className={styles.content}>
        <BrandDealList />
      </div>
    </section>
  );
};
export default BrandDealSection;
