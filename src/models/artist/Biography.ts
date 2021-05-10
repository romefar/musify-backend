export interface Biography<T> {
  links: {
    link: T;
  };
  published: string;
  summary: string;
  content: string;
}
