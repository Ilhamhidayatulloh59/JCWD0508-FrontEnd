export interface IBlog {
  fields: {
    title: string;
    slug: string;
    category: string;
    date: string;
    content: any;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author: {
      fields: {
        name: string;
        email: string;
        avatar: {
          fields: {
            file: {
              url: string;
            };
          };
        };
      };
    };
  };
}
