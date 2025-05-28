// pages/admin.tsx
import { CategoryManager } from '../components/categoryManager';
import { ProductManager } from '../components/productManager';
import { useState } from 'react';

const AdminPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const handleCategoryAdd = (newCategory: Category) => {
    setCategories([...categories, { ...newCategory, id: `cat-${Date.now()}` }]);
  };

  const handleProductAdd = (newProduct: Product) => {
    setProducts([...products, { ...newProduct, id: `prod-${Date.now()}` }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Gestion du Catalogue</h1>
      
      <CategoryManager 
        categories={categories}
        onCategoryAdd={handleCategoryAdd}
      />
      
      <ProductManager 
        categories={categories}
        onProductAdd={handleProductAdd}
      />
    </div>
  );
};

export default AdminPage;