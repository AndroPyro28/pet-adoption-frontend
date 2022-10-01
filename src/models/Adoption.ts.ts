import { Pet } from "./Pet";
import { User } from "./User";

export interface AdoptionRequest {
    id?: number;
    adopterId: number | string;
    adopteeId: number | string;
    schedule: string
}


export interface AdoptionRecord {
    id: number;
    schedule: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    adopter: User,
    adoptee: Pet
}

export interface AdoptionUpdate {
    schedule: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
}