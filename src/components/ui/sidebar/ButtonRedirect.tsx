'use client'

import { redirect } from "next/navigation"

export const ButtonRedirect = () => {

    const onToggle=()=>{
        redirect('/login')
    }

    return (
        <div className="flex mb-3">
            <button
                className=" w-full mx-3 rounded-xl p-2 bg-orange-600 font-semibold text-sm"
                onClick={() => onToggle()}>
                Seleccionar autor
            </button>
        </div>
    )
}
