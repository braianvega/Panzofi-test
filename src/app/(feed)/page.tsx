import { Sidebar } from "@/components";

export default function Home({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-5 min-h-screen gap-3">
            <div className="bg-slate-50 grid col-span-4 mt-3 ml-3 mb-3 ">
                adasda
            </div>
            <div className="grid col-span-1 mt-3 mr-3 mb-3">
                <Sidebar />
            </div>
        </div>
    );
}