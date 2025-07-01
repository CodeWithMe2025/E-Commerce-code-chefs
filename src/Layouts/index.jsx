
import GlobalFallback from "@/components/ui/global-fallback";
import { Suspense } from "react";
import { Outlet } from "react-router";
export default function Layout() {
  return (
        <Suspense fallback={<GlobalFallback/>}>
          <div className="min-h-screen overflow-x-hidden  ">
            <Outlet />
          </div>
        </Suspense>
  );
}
