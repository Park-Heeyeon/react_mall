import { useState } from "react";
import TimeDealTab from "./TimeDealTab";
import TimeDealList from "./TimeDealList";
import styles from "./index.module.css";
import { DealTimeType } from "@/types/deals";
import { useTimeDealQuery } from "@/hooks/deals/timeDealQuery";

const TimeDealSection = () => {
  const [isTimeDealOpen, setIsTimeDealOpen] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<DealTimeType>("current");

  const handleChangeTimeDealOpen = (timeDealOpen: boolean) => {
    setIsTimeDealOpen(timeDealOpen);
  };
  const handleTabChange = (tab: DealTimeType) => {
    setCurrentTab(tab);
  };

  // 에러가 발생한 경우, 에러 발생 페이지 표출
  const { isError } = useTimeDealQuery(currentTab);
  if (isError) throw new Error("타임 특가 페이지에서 오류 발생");

  return (
    <section className={styles.container}>
      <TimeDealTab
        currentTab={currentTab}
        handleTabChange={handleTabChange}
        handleChangeTimeDealOpen={handleChangeTimeDealOpen}
      />
      <TimeDealList currentTab={currentTab} isTimeDealOpen={isTimeDealOpen} />
    </section>
  );
};
export default TimeDealSection;
