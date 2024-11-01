export const UserIndicators = () => {
    return (
        <div className="grid grid-cols-3 ml-4 text-gray-800 font-sans mb-3">
            <div>
                <span className="font-semibold">5.7m</span>
                <p className="text-sm">Members</p>
            </div>
            <div>
                <span className="flex items-center font-semibold"><div className="bg-green-500 w-2 h-2 rounded-full flex m-1" />3.4k</span>
                <p className="text-sm">Online</p>
            </div>
            <div>
                <span className="font-semibold">Top 1%</span>
                <p className="text-sm">Ranked by Size</p>
            </div>
        </div>
    )
}
