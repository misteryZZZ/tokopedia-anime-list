import { useQuery } from '@apollo/client';
import { GET_ANIME } from '../graph/Queries';

export const useDetails = (id) => {
    const {data, loading, error} = useQuery(GET_ANIME, {
        variables : {
            id: id,
        },
    });

  return {
      data,
      loading,
      error
  }
}
