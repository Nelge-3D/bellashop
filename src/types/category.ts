// types/category.ts
interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  parentId?: string;
  level: 'main' | 'sub';
}

// types/product.ts
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  categoryId: string;
  brand?: string;
  stock: number;
  createdAt: Date;
}