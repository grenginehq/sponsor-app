import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.currentsapi.services/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "sACxXRU7gcvNnHXgDRkYDpcqiJcTnTn-bT_xmAZIhlahR9_X",
      );

      headers.set("content-type", "application/json");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getNews: build.query<unknown, void>({
      query: () => `/latest-news`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
