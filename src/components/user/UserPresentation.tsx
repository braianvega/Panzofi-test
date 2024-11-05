
'use client'
import Image from "next/image"
import { MdOutlineDateRange } from "react-icons/md"
import { useAppSelector} from "@/store";


export const UserPresentation = () => {

    const userStore = useAppSelector(store =>store.user.userAuthor);

    console.log(userStore)

    return (
        <>
            <div className="flex items-center">
                <Image
                    src={userStore.userUrlImage}
                    alt="user Image"
                    width={70}
                    height={70}
                    className="rounded-full m-3"
                />
                <span className="font-sans font-semibold text-gray-700">
                    {userStore.username}
                </span>
            </div>
            <div className="ml-4 mb-3">
                <span className="font-sans text-gray-600">
                    Computer Programming
                </span>
                <div className="flex items-center mt-2">
                    <MdOutlineDateRange className="text-gray-700" size={27} />
                    
                    <span className="ml-2 font-sans text-gray-500">
                    { userStore.created_at}
                    </span>
                </div>
            </div>
        </>
    )
}
