export interface PostInterface {
    id: number;
    textContent: string;
    author: Author;
    created_at: string;
    comments: Comment[];
}
export interface Author {
    id:number;
    name: string;
    username: string;
    userUrlImage: string;
    created_at: string;
}

export interface ReReply {
    id: number;
    textContent: string;
    author: Author;
    created_at: string;
}

export interface Reply {
    id: number;
    textContent: string;
    author: Author;
    created_at: string;
    rereplies: ReReply[];
}

export interface Comment {
    id: number;
    textContent: string;
    author: Author;
    created_at: string;
    replies: Reply[];
}