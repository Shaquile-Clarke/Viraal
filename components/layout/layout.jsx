import Footer from "./footer";
import MainHeader from "./main-header";
import MobileNav from "./mobile-nav";
import SideBar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <MobileNav />
      <main className="xl:absolute xl:left-[263px] xl:right-0 xl:top-14 h-full">
        {children}
      </main>
      <SideBar />
      <Footer />
    </>
  );
}
