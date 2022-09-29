export interface Pet {
    id?: number,
    name: string,
    breed: string,
    type: 'Dog' | 'Cat' | '',
    gender: 'Male' | 'Female' | '',
    age: number | null,
    description: string,
    status: 'READY' | 'ADOPTED' | 'PENDING' | '',
    healthNotes?: string,
    imageUrl: any,
    condition: number | null
    traits: string,
    createdAt?: string | number,
    updatedAt?: string | number,
    ownerId?: number
}