import { Author } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface userAuthorState {
    // TENDRE CIERTA CANTIDAD DE LLAVES QUE APUNTAN A UN SIMPLEPOKEMON
    userAuthor: Author;
}

//LEER EL LOCALSTORAGE
const getInitialState = () => {

    const userAuthor = {
        "id": 2,
        "username": "Aleksei Sytsevich",
        "name": "Rhino",
        "userUrlImage": "https://wallpapers-clan.com/wp-content/uploads/2022/02/60s-spider-man-funny-pfp-34.jpg",
        "created_at": "2024-11-03T21:17:23.933530Z"
    }
    return userAuthor

}

const initialState: userAuthorState = {
    userAuthor: getInitialState()
}

const userSLice = createSlice({
    name: 'userState',
    initialState,
    reducers: {

        setUserAuthor(state, action: PayloadAction<Author>) {
            state.userAuthor = action.payload
            localStorage.setItem('user-author', JSON.stringify(state.userAuthor))
        },
    }
});

export const { setUserAuthor } = userSLice.actions

export default userSLice.reducer

