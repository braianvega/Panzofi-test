'use client'

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface Props {
    title: string;
    description: string;
}

export const Dropdown = ({ description, title }: Props) => {

    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="mx-2">
            <div
                className="flex p-3 text-gray-800 justify-between cursor-pointer"
                onClick={() => onToggle()}>
                <h3 className="text-xs uppercase font-semibold">{title}</h3>
                {!toggle
                    ? (<FiChevronDown />)
                    : (<FiChevronUp />)
                }
            </div>
            <hr className="mx-4" />
            <div>
                {
                    toggle &&
                    (<p className="p-3 font-sans text-gray-600">{`${description} ${title}`}</p>)
                }
            </div>

        </div>
    )
}
