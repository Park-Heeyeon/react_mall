import { DealTimeType } from "@/types/deals";
import styles from "./index.module.css";
import { useEffect } from "react";

interface TimeDealTabProps {
  currentTab: DealTimeType;
  handleTabChange: (tab: DealTimeType) => void;
  handleChangeTimeDealOpen: (timeDealOpen: boolean) => void;
}

const TimeDealTab: React.FC<TimeDealTabProps> = ({
  currentTab,
  handleTabChange,
  handleChangeTimeDealOpen,
}) => {
  const currentHour = new Date().getHours();

  useEffect(() => {
    if (currentHour < 7 || currentHour >= 23) {
      handleChangeTimeDealOpen(false);
    } else {
      handleChangeTimeDealOpen(true);
    }
  }, [currentHour, handleChangeTimeDealOpen]);

  const generateTabData = (): { id: DealTimeType; label: string }[] => {
    if (currentHour < 7 || currentHour >= 23) {
      return [{ id: "current", label: "7시에 시작되는 오늘의 타임특가!" }];
    }

    if (currentHour === 22) {
      return [
        { id: "current", label: "11시에 끝나는 오늘의 마지막 타임특가!" },
      ];
    }

    return [
      { id: "current", label: `${formatHour(currentHour)}` },
      { id: "next", label: `${formatHour(currentHour + 1)}` },
    ];
  };

  const formatHour = (hour: number) => {
    if (hour === 0) return "오전 12시";
    if (hour === 12) return "오후 12시";
    return `${hour < 12 ? "오전" : "오후"} ${hour <= 12 ? hour : hour - 12}시`;
  };

  const tabData = generateTabData() || [];

  if (tabData.length === 1) {
    return (
      <div className={styles.header}>
        <h2 className={styles.title}>{tabData[0].label}</h2>
      </div>
    );
  }

  return (
    <div className={styles.tabWrap}>
      {tabData.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tab} ${
            currentTab === tab.id ? styles.activeTab : ""
          }`}
          onClick={() => handleTabChange(tab.id)}
        >
          <span>{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TimeDealTab;
