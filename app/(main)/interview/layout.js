import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function Layout({ children }) {
  return (
    <div className="px-6 py-8 min-h-screen bg-muted/20">
      <Suspense
        fallback={
          <div className="mt-6">
            <BarLoader width="100%" color="#6366f1" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
