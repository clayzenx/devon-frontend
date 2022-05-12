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
  locale: ILocale;
  publishedAt: Date;
  category?: IStrapiCategory;
  author?: IStrapiAuthor;
  Poster?: string;
}

interface IStrapiContent {
  attributes: {}
  meta: IStrapiMeta
}

interface IStrapiArticle {
  attributes: IStrapiPost
  id: number
}


interface IStrapiMeta {
  pagination?: {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
  }
}

interface ILangs {
  js: string,
  ts: string,
  html: string,
  css: string
  sh: string,
  vue: string,
  svelte: string
}

type ILocale = 'ru' | 'en' | 'es' | 'zh' | 'ja'

