import React from "react";
import styles from "./index.module.css";

const ErrorBoundary: React.FC = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>문제가 발생했습니다.</h1>
        <p className={styles.errorMessage}>
          예상치 못한 오류가 발생했습니다. <br />
          페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
        </p>
        <button
          className={styles.errorButton}
          onClick={() => window.location.reload()}
        >
          페이지 새로고침
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
