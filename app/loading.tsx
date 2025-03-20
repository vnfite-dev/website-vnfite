
export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen flex-col absolute top-0 left-0 w-full z-50 bg-white bg-opacity-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-[#e0694f]"/>
        </div>
    );
}
