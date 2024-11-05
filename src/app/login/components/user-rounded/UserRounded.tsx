'use client'

import { Author } from '@/interfaces';
import { useAppDispatch} from '@/store';
import { setUserAuthor } from '@/store/user/userSlice';
import Image from 'next/image'
import { redirect } from 'next/navigation';
import React from 'react'

interface Props {
    user: Author
}

export const UserRounded = ({ user }: Props) => {

    const dispatch=useAppDispatch();

    const onSelected = (user: Author) => {
        dispatch(setUserAuthor(user))
        redirect('/feed')
    }

    return (
        <div className="grid gap-4 justify-center">
            <div className="align-middle grid">
                <Image
                    src={user.userUrlImage}
                    onClick={() => onSelected(user)}
                    alt="Imagen del usuario"
                    width={150}
                    height={150}
                    className="rounded-full border-white border-2 w-full cursor-pointer" />
                <h3 className="p-4 text-center">{user.name}</h3>
            </div>
        </div>
    )
}
