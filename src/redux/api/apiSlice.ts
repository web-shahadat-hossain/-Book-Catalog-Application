import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const api = createApi({
  reducerPath: "api",
  tagTypes: [ "book"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (build) => ({
    allBooksGet: build.query({
        query: () => `/book`,
        providesTags:["book"]
      }),
      
      bookCreate: build.mutation({
            query: (data) => ({
              url: "/book/create-book",
              method: "POST",
              body: data,
            }),
            invalidatesTags:["book"]
          }),
        //   updateBook: build.mutation({
        //     query: (email) => ({
        //       url: `/book/${i}`,
        //       method: 'PATCH',  
             
        //     }),
        //     invalidatesTags:["buy_order"]
        //   }),
        //   buyNowOrderStatusDelete: build.mutation({
        //     query: (id) => ({
        //       url: `/order/single-order/${id}`,
        //       method: 'DELETE',  
             
        //     }),
        //     invalidatesTags:["buy_order"]
        //   }),
          
        
        


   
  }),
});


export const {useAllBooksGetQuery}=api