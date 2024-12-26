import { useEffect } from "react";

// 무한스크롤 옵저버 훅
const useIntersectionObserver = (
  targetRef: React.RefObject<HTMLElement>,
  callback: IntersectionObserverCallback
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    const currentElement = targetRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      observer.disconnect();
    };
  }, [targetRef, callback]);
};

export default useIntersectionObserver;
