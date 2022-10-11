import { Pet } from "../models/Pet";
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
            providesTags:['Pet']
        }),
        getAllAnimalRecordExcludeAdopted: builder.query<Pet[], {filter: boolean, search: string}>({
            query:( {filter=false, search=''} : {filter: boolean,search: string}) => ({
                url:`/pets?filter=${filter}&&search=${search}`,
                method:'GET',
            }),
            providesTags:['Pet']
        }),
    }),
    overrideExisting: false

})

export default AnimalRecordApis;

export const { useCreateRecordMutation, useGetAllAnimalRecordQuery, useGetAllAnimalRecordExcludeAdoptedQuery } = AnimalRecordApis;