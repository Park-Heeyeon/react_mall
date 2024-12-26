const SkeletonItem = () => {
  return (
    <div className="flex px-[10px] py-[16px] w-full">
      <div className="skeleton w-[141px] h-[141px] rounded-lg border border-[#eeeff3] overflow-hidden mr-2 shrink-0"></div>
      <div className="w-full h-[100%]">
        <div className="skeleton w-[60%] h-3"></div>
        <div className="relative w-full h-4 bg-[#eee] rounded-full my-2 overflow-hidden animate-pulse"></div>
        <div className="skeleton w-[50%] h-5 mb-2"></div>
        <div className="skeleton w-[80%] h-3"></div>
      </div>
    </div>
  );
};
export default SkeletonItem;
