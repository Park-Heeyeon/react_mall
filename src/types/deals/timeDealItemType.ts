export interface TimeDealItemType {
  id: number;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discountRate: number;
  image: string;
}

export type DealTimeType = "current" | "next";
