export type TradingProduct = {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  details: string;
  specs: string[];
  gallery: string[];
};

export type TradingCaseStudy = {
  title: string;
  location: string;
  image: string;
  description: string;
};

export type TradingFaqItem = {
  question: string;
  answer: string;
};
