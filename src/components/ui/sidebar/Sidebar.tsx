import { Dropdown } from "../dropdown/Dropdown"
import { SidebarItem } from "./SidebarItem"
import { UserPresentation } from "@/components/user/UserPresentation"
import { UserIndicators } from "@/components/user/UserIndicators"
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
                <UserIndicators />

                <hr className="mb-3 mx-4" />
                <div className="flex mb-3">
                    <button className=" w-full mx-3 rounded-xl p-2 bg-orange-600 font-semibold text-sm  ">
                        Join
                    </button>
                </div>
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
                        {
                            Array(6).fill(0).map((x, i) =>
                                <li key={i} className="p-1 text-sm">
                                    <p className="flex">
                                        {"Do you have a question? Check out"}
                                        <Link className="text-orange-600 underline" href={'/'}>link</Link>
                                    </p>
                                </li>
                            )
                        }
                    </ol>
                    <hr className="m-4" />
                    <h3 className="font-bold text-gray-700 text-xs mx-3 mb-2">Related reddits</h3>
                    <ol className="text-gray-600 font-sans mx-8 list-disc">
                        {
                            Array(6).fill(0).map((x, i) =>
                                <li key={i} className="p-1 text-sm">
                                    <Link className="text-orange-600 underline" href={'/'}>Link</Link>
                                </li>
                            )
                        }
                    </ol>
                </div>
            </SidebarItem>
        </div>
    )
}