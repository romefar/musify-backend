export interface ArtistInfoParams {
  artist: string;
  mbid?: string;
  // the language to return the biography in, expressed as an ISO 639 alpha-2 code
  lang?: string;
  autocorrect?: 0 | 1,
}
