import SideNav from './componentsCore/sideNav';
import MainDashSection from './homeComponents/mainDashSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <SideNav>
        <main className="flex w-full">
          <MainDashSection />
        </main>
      </SideNav>
    </div>
  );
}
