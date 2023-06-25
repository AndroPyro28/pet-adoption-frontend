
export interface CreateBlog {
    title: string;
    content: string;
    path:string;
    photos: string[];
} 

export interface UpdateBlog {
    id: number;
    title: string;
    content: string;
    path:string;
    photos: string[];
}

export interface Blog {
    path: string;
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    photos: {
        id: number;
        imageUrl: string;
    }[];
    
} 