import { Header } from "@/components";
import LureDealSection from "./section/lureDeal";
// import { BrandDealSection, TimeDealSection } from "./section";

const TimeDeal = () => {
  return (
    <div>
      <Header title="타임특가" isBackButtonVisible={false} />
      <div>
        <LureDealSection />
        {/*
        <BrandDealSection />
        <TimeDealSection /> */}
      </div>
    </div>
  );
};

export default TimeDeal;
