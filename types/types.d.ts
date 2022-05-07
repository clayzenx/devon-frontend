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
  id?: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  category?: IStrapiCategory;
  author?: IStrapiAuthor;
  Poster?: string;
}

interface IStrapiLocales {
  attributes: {}
  meta: {}
}

interface IStrapiMeta {
  pagination?: {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
  }
}

type ILocale = 'ru' | 'en' | 'es' | 'zh' | 'ja'

