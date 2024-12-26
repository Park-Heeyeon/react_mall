const SkeletonCard = () => {
  return (
    <div className="skeleton flex w-[146px] h-[227px] flex-col">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-[80%]"></div>
      <div className="flex gap-2">
        <div className="skeleton h-4 w-10"></div>
        <div className="skeleton h-4 w-20"></div>
      </div>
    </div>
  );
};
export default SkeletonCard;
