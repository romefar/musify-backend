import queryString from 'query-string';

type QueryOptions = {
  [k: string]: string | number| undefined;
}

export const generateQueryParams = (options: QueryOptions) => {
  return queryString.stringify(options);
};
