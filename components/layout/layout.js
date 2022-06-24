import Footer from "./footer";
import MainHeader from "./main-header";
import SideBar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <SideBar />
      <main className="absolute left-[263px] right-[0px] top-14 overflow-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
