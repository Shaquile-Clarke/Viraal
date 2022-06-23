import Footer from "./footer";
import MainHeader from "./main-header";
import SideBar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <SideBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
