import { memo } from "react";

import { useNavigate } from "react-router-dom";
import { Chevron } from "@/assets/Chevron";

import styles from "./index.module.css";

export type HeaderProps = {
  title: string;
  isBackButtonVisible: boolean;
};

export const Header = memo(({ title, isBackButtonVisible }: HeaderProps) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <header className={styles.wrapper}>
      {isBackButtonVisible && (
        <div className={styles.backButton} onClick={handleClickBack}>
          <Chevron />
        </div>
      )}
      {title}
    </header>
  );
});
