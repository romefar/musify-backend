export interface TopAlbumsParams {
  artist: string;
  mbid?: string;
  autocorrect?: 0 | 1,
  page?: number;
  limit?: number;
}
