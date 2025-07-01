import { Outlet } from "react-router";
import TheFooter from "@/components/ui/the-footer";
import TheHeader from "@/components/ui/the-header";


export default function DashboardLayout() {
  return (
    <div className="overflow-hidden">
      <TheHeader/>
      <main>
        <Outlet />
      </main>
       <TheFooter />
    </div>
  );
}
