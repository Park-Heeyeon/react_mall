import {
  Navigate,
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
// import { TimeDeal, BrandDeal } from "@/pages";
import { Suspense } from "react";
import TimeDeal from "@/pages/deals/timeDeal";
// import ErrorBoundary from "@/components/ErrorBoundary";

export const webPath = {
  timeDeal: () => "/deals/time-deal",
  brandDeal: () => "/deals/brand-deal",
};

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return children;
};

const Root = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            로딩중
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <ScrollRestoration />
    </MainLayout>
  );
};

const routes = [
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorBoundary />,
    children: [
      { path: "/", element: <Navigate to={webPath.timeDeal()} replace /> },
      {
        path: webPath.timeDeal(),
        element: <TimeDeal />,
      },
      //   { path: webPath.brandDeal(), element: <BrandDeal /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
