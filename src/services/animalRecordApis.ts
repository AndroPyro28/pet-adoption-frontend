import { Pet } from "../models/Pet";
import { Stats } from "../models/Stats";
import { baseApi } from "./Apis";

const AnimalRecordApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createRecord: builder.mutation<void, Pet>({
            query: pet => ({
                url:'/pets',
                method:'POST',
                body: pet,
            }),
            invalidatesTags:['Pet']
        }),
        getAllAnimalRecord: builder.query<Pet[], void>({
            query:() => ({
                url:'/pets',
                method:'GET',
            }),
            transformResponse: (response: Pet[]) => response.sort((a, b) =>  b.id! - a.id!),
            providesTags:['Pet']
        }),
        getAllAnimalRecordExcludeAdopted: builder.query<Pet[], {filter: boolean, search: string}>({
            query:( {filter=false, search=''} : {filter: boolean,search: string}) => ({
                url:`/pets?filter=${filter}&&search=${search}`,
                method:'GET',
            }),
            transformResponse: (response: Pet[]) => response.sort((a, b) =>  b.id! - a.id!),
            providesTags:['Pet']
        }),
        getAllPetsStatus: builder.query<Stats[], void>({
            query: _ => ({
                url:`/pets/stats`,
                method:'GET',
            }),
            providesTags:['Pet']
        }),
    }),
    overrideExisting: false

})

export default AnimalRecordApis;

export const { useCreateRecordMutation, useGetAllAnimalRecordQuery, useGetAllAnimalRecordExcludeAdoptedQuery, useGetAllPetsStatusQuery } = AnimalRecordApis;