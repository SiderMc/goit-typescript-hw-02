import axios, { AxiosResponse } from 'axios';
import { Response } from '../interfaces/photos-response';

axios.defaults.baseURL = 'https://api.unsplash.com/search';
const key = 'WNKkXWHEDO9fTXW0GKQrCsOYzawimMDj0PCFPQkI_Ig';

export default async function requestPhotos(page: number,query: string): Promise<Response> {
  const response: AxiosResponse<Response> = await axios.get<Response>(
    '/photos',
    {
      params: {
        page,
        query,
        client_id: key,
        per_page: 15,
      },
    }
  );
  return response.data;
}
