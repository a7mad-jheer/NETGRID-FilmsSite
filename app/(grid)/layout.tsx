import GridContainer from "../../components/Dashboard/defaults/GridContainer";
import SideBar from "../components/SideBar/SideBar";
import { NavBar } from "../../components/Dashboard/NavBar";
import MaxWidthWrapper from "../../components/Dashboard/defaults/MaxWidthWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="max-w-screen bg-gray-950 ">{children}</main>;
}
