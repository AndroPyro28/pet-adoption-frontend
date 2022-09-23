export interface Pet {
    id?: number,
    name: string,
    breed: string,
    type: 'dog' | 'cat',
    gender: 'male' | 'female',
    age: number,
    description: string,
    status: 'ready' | 'adopted' | 'pending'
}