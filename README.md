**React Mall**

React Mall은 **React**와 **Vite**를 사용하여 구축된 웹 애플리케이션입니다.

---

**📌 주요 기능**

- **반응형 디자인**
- **Axios를 활용해 API와 통신하여 데이터 표시**
- **수평 / 수직 스크롤 기능 및 무한 스크롤 구현**
- **가상화를 활용한 성능 최적화**
- **에러 처리**
    - **순삭 특가 및 브랜드 특가 섹션**
        
        서버에서 발생하는 에러로 인해 해당 섹션이 표출되지 않더라도, 다른 섹션은 정상적으로 작동합니다.
        
    - **타임 특가 섹션**
        
        에러 발생 시 전체 페이지에 에러 페이지를 표출합니다.
        

---

**🛠️ 사용된 기술 스택**

- **React**
- **Vite**
- **TypeScript**
- **Axios**
- **Tailwind CSS**
- **React Query**
- **Virtuoso**

---

**🌐 CI/CD 배포**

React Mall은 **지속적 통합 및 배포(CI/CD)** 환경을 통해 자동으로 빌드 및 배포됩니다.

**배포된 페이지**

- **S3**: http://react-mall.s3-website-us-east-1.amazonaws.com/deals/time-deal
