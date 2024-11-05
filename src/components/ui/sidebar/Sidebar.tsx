

import { Dropdown } from "../dropdown/Dropdown"
import { ButtonRedirect } from "./ButtonRedirect"
import { SidebarItem } from "./SidebarItem"
import { UserPresentation } from "@/components/user/UserPresentation"
import Link from "next/link"


const generalDescription = "Esta es una breve descripcion para el dropdown con titulo "
const dropdownRulesInfo = [
    "1. Keep submissions on topic and of high quality",
    "2. No surveys",
    "3. No résumés/job listings",
    "4. /r/programming is not support forum",
    "5. Spam",
]

export const Sidebar = () => {
    return (
        <div className="flex flex-col gap-3">
            <SidebarItem>
                {/* User Presentation */}
                <UserPresentation />

                <hr className="mb-3 mx-4" />

                {/* user indicators */}
                <div className="flex ml-4 gap-9 text-gray-800 font-sans mb-3">
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

                <hr className="mb-3 mx-4" />
                <ButtonRedirect />
                <hr className="mb-3 mx-4" />
                <div>
                    <Dropdown description={generalDescription} title="Community options" />
                </div>
            </SidebarItem>

            <SidebarItem title="r/programming Rules">
                <div className="py-2">
                    {
                        dropdownRulesInfo.map(rule =>
                            <Dropdown title={rule} key={rule} description={generalDescription} />
                        )
                    }
                </div>
            </SidebarItem>

            <SidebarItem title="Info">
                <div className="py-2">
                    <ol className="text-gray-600 font-sans mx-8 list-disc">
                        <li className="p-1 text-sm">
                            <p className="flex">
                                {"Do you have a question? Check out"}
                                <Link className="text-orange-600 underline" href={'/'}>link</Link>
                            </p>
                        </li>
                        <li className="p-1 text-sm">
                            <p className="flex">
                                {"Do you have a question? Check out"}
                                <Link className="text-orange-600 underline" href={'/'}>link</Link>
                            </p>
                        </li>
                    </ol>
                    <hr className="m-4" />
                    <h3 className="font-bold text-gray-700 text-xs mx-3 mb-2">Related reddits</h3>
                    <ol className="text-gray-600 font-sans mx-8 list-disc">
                        <li className="p-1 text-sm">
                            <Link className="text-orange-600 underline" href={'/'}>Link</Link>
                        </li>

                        <li className="p-1 text-sm">
                            <Link className="text-orange-600 underline" href={'/'}>Link</Link>
                        </li>
                    </ol>
                </div>
            </SidebarItem>
        </div>
    )
}