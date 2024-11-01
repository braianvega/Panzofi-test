import React from 'react'

interface Props{
    children: React.ReactNode;
    title?:string;
}

export const SidebarItem = ({title="", children}:Props) => {
    return (
        <div className="bg-teal-950" >
            <div className="rounded-md border">
                <div className="h-11 items-center flex">
                    <h3 className="m-3 font-semibold">{title}</h3>
                </div>
                <div className="bg-slate-50">
                    {children}
                </div>
            </div>
        </div>
    )
}
