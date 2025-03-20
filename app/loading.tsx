
export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen flex-col">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#e82f2f]"/>
            <div className="text-gradient mt-6 text-2xl font-semibold">
                Đang tải...
            </div>
        </div>
    );
}
