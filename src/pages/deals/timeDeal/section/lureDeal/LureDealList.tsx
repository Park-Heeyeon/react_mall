import { HorizontalScroll } from "@/components/HorizontalScroll";
import LureDealItem from "./LureDealItem";
import { useLureDealQuery } from "@/hooks/deals/lureDealQuery";
import { LureDealItemType } from "@/types/deals";
import SkeletonCard from "@/components/SkeletonCard";

const LureDealList = () => {
  const { data: lureDealItems, isLoading } = useLureDealQuery();

  return (
    <HorizontalScroll>
      {isLoading ? (
        <div className="px-[16px] flex gap-4">
          {Array(20)
            .fill(null)
            .map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
        </div>
      ) : (
        lureDealItems?.map((item: LureDealItemType) => (
          <LureDealItem key={item.id} lureDealItem={item} />
        ))
      )}
    </HorizontalScroll>
  );
};

export default LureDealList;
