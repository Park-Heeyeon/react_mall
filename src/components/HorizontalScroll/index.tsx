import { useRef, useState, ReactNode } from "react";
import styles from "./index.module.css";

interface HorizontalScrollProps {
  children: ReactNode;
}

export const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollStart, setScrollStart] = useState<number>(0);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (scrollRef.current) {
      setIsDrag(true);
      setStartX(e.pageX);
      setScrollStart(scrollRef.current.scrollLeft);
    }
  };

  const onMouseUp = () => {
    setIsDrag(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDrag && scrollRef.current) {
      const moveX = e.pageX - startX; // 마우스 이동 거리
      scrollRef.current.scrollLeft = scrollStart - moveX; // 이동한 만큼 scrollLeft 업데이트
    }
  };

  return (
    <div
      className={styles.list}
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={isDrag ? onMouseMove : undefined}
      onMouseLeave={onMouseUp}
    >
      {children}
    </div>
  );
};
