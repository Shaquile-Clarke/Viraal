import Footer from "./footer";
import MainHeader from "./main-header";
import SideBar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <SideBar />
      <main className="absolute left-[263px] right-0 top-14  h-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
