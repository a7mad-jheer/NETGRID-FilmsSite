import SideMenu from "@/components/Dashboard/global/SideMenu";
import MaxWidthWrapper from "@/components/Dashboard/global/MaxWidthWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen bg-gray-950">
      <SideMenu />
      <div className="grow min-w-0  p-4 ">{children}</div>
    </main>
  );
}
