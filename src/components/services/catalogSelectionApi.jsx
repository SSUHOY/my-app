import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catalogSelectionApi = createApi({
  reducerPath: 'catalogSectionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/selection/',
  }),
  endpoints: (builder) => ({
    getCatalogSection: builder.query({
      query: () => '',
    }),
    getCatalogSectionTracks: builder.query({
      query: (section) => `${section}`,
    }),
  }),
})

export const { 
    useGetCatalogSectionQuery,
    useGetCatalogSectionTracksQuery } 
    = catalogSelectionApi