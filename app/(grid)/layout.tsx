import GridContainer from "../components/defaults/GridContainer";
import SideBar from "../components/SideBar/SideBar";
import { NavBar } from "../components/Nav/NavBar";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="max-w-screen bg-gray-950 " >
            {children}
        </main>
    );
}



/* <main className="grid background min-h-screen h-full">
            <GridContainer cols={12}>
                <SideBar />
                <MaxWidthWrapper className="col-span-full lg:col-span-10 overflow-hidden px-10 py-5">
                    <NavBar />
                    {children}
                </MaxWidthWrapper>
            </GridContainer>
        </main > */