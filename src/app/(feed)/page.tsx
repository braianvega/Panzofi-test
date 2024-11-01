import { Sidebar } from "@/components";
import { PostGrid } from "@/components/posts/posts-grid/PostGrid";

export default function Home({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-11 min-h-screen gap-3">
            <div className="bg-slate-50 grid col-span-8 mt-3 ml-3 mb-3 rounded-md">
                <PostGrid />
            </div>
            <div className="grid col-span-3 mt-3 mr-3 mb-3">
                <Sidebar />
            </div>
        </div>
    );
}