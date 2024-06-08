import { createApi } from '@reduxjs/toolkit/query/react'
import data from './stackline_frontend_assessment_data_2021.json';

export const productApi = createApi({
    reducerPath: 'productApi',
    endpoints: (builder) => ({
      getProduct: builder.query({
        queryFn: () => {
            return { data: data[0] }
        }
      }),
    }),
  });

  export const { useGetProductQuery } = productApi;
  