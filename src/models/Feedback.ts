import { User } from "./User";

export interface Feedback {
    id?: number;
    message:string;
    rate: number;
    userId?: number;
    pin?: boolean;
    createdAt?: Date
    updatedAt?: Date
}

export interface FeedbackReviews {
    id?: number;
    message:string;
    rate: number;
    userId?: number;
    pin?: boolean;
    createdAt?: Date
    updatedAt?: Date
    user: User
}