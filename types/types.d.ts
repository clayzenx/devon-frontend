interface IStrapiCategory {
  id: number;
  attributes: {
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
  }
}

interface IStrapiAuthor {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IStrapiPost {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  category: IStrapiCategory;
  author: IStrapiAuthor;
}

interface IStrapiLocales {
  attributes: {}
  meta: {}
}

type ILocale = 'ru' | 'en' | 'es' | 'zh' | 'ja'

