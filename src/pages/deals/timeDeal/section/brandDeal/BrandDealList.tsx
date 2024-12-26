import { useBrandDealQuery } from "@/hooks/deals/brandDealQuery";
import { BrandDealItemType } from "@/types/deals";
import BrandDealItem from "./BrandDealItem";
import SkeletonCard from "@/components/SkeletonCard";
import { HorizontalScroll } from "@/components/HorizontalScroll";

const BrandDealList = () => {
  const { data, isLoading } = useBrandDealQuery();
  const brandDealItems = data?.pages?.[0]?.itemList || [];

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
        brandDealItems.map((item: BrandDealItemType) => (
          <BrandDealItem key={item.id} brandDealItem={item} />
        ))
      )}
    </HorizontalScroll>
  );
};

export default BrandDealList;
