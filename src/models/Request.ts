export interface AdoptionRequest {
    id?: number;
    adopterId: number | string;
    adopteeId: number | string;
    schedule: string
}