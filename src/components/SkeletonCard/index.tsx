interface SkeletonCardProps {
  width?: string;
  height?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({
  width = "146px",
  height = "227px",
}) => {
  return (
    <div className="skeleton flex flex-col" style={{ width, height }}>
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
