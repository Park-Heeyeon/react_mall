import { useLureDealQuery } from "@/hooks/deals/lureDealQuery";
import styles from "./index.module.css";
import LureDealList from "./LureDealList";

// 순삭특가 컴포넌트
const LureDealSection = () => {
  const { isError } = useLureDealQuery();

  // 에러가 발생할 경우, 해당 섹션 표출 x
  if (isError) return null;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>오늘만 이 가격, 순삭 특가!</h2>
      </div>
      <div className={styles.content}>
        <LureDealList />
      </div>
    </section>
  );
};
export default LureDealSection;
