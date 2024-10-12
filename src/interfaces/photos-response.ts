export interface Photos {
  id: string;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
}

export interface Response {
  results: Photos[];
  total: number;
  total_pages: number;
}
