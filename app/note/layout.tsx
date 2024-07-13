import Sidebar from "../components/Sidebar";

export default function NoteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen w-screen flex flex-row">
            <Sidebar />
            { children }
        </div>
    );
};