import { Beranda } from "../components/beranda";
import RightBar from "../components/rightbar";
import { SideBar } from "../components/sidebar";

export default function BerandaPage() {
  return (
    <div className="flex min-h-screen gap-2 relative bg-black">
      <div className="md:flex-1 sticky top-0 h-screen">
        <SideBar />
      </div>
      <div className="col-span-2 flex-1 md:flex-[1.5]">
        <Beranda />
      </div>
      <div className="lg:flex-1 sticky top-0 h-screen lg:flex hidden">
        <RightBar />
      </div>
    </div>
  );
}
