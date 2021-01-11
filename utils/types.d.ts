export type Product = {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
  description: string;
  created_at: Date;
  updated_at: Date;
  promotion: Promotion;
  categories: Category[];
  media: Media[];
};
export type Media = {
  id: number;
  name: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  provider: string;
  created_at: Date;
  updated_at: Date;
  // Calculé dans parseMedia
  type: "image" | "video" | "unsupported";
};
export type Category = {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  produits: Product[];
};

export type Promotion = {
  id: number;
  new_price: number | null;
  substract_price: number | null;
  percantage_reduction: number | null;
  published_at: Date;
  updated_at: Date;
  produits: Product[];
};
