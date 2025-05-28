// components/productManager.tsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ProductManagerProps {
  categories: Category[];
  onProductAdd: (product: Product) => void;
}

export const ProductManager = ({ categories, onProductAdd }: ProductManagerProps) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: '',
    name: '',
    description: '',
    price: 0,
    images: [''],
    categoryId: '',
    brand: '',
    stock: 0,
    createdAt: new Date()
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProductAdd(newProduct);
    setNewProduct({
      id: '',
      name: '',
      description: '',
      price: 0,
      images: [''],
      categoryId: '',
      brand: '',
      stock: 0,
      createdAt: new Date()
    });
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Ajouter un nouveau produit</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Nom du produit"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            required
          />
          <Input
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Prix"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            required
          />
          <Input
            placeholder="URL de l'image"
            value={newProduct.images[0]}
            onChange={(e) => setNewProduct({ 
              ...newProduct, 
              images: [e.target.value] 
            })}
            required
          />
          <select
            className="w-full p-2 border rounded-md"
            value={newProduct.categoryId}
            onChange={(e) => setNewProduct({ ...newProduct, categoryId: e.target.value })}
            required
          >
            <option value="">Sélectionnez une catégorie</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <Input
            placeholder="Marque"
            value={newProduct.brand}
            onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
          />
          <Input
            type="number"
            placeholder="Stock"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
            required
          />
          <Button type="submit" className="w-full bg-primary text-white hover:bg-red-600">
            Ajouter le produit
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};