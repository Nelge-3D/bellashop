// components/categoryManager.tsx
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CategoryManagerProps {
  categories: Category[];
  onCategoryAdd: (category: Category) => void;
}

export const CategoryManager = ({ categories, onCategoryAdd }: CategoryManagerProps) => {
  const [newCategory, setNewCategory] = useState<Category>({
    id: '',
    name: '',
    description: '',
    image: '',
    level: 'sub',
    parentId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCategoryAdd(newCategory);
    setNewCategory({
      id: '',
      name: '',
      description: '',
      image: '',
      level: 'sub',
      parentId: ''
    });
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Ajouter une nouvelle catégorie</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Nom de la catégorie"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
            required
          />
          <Input
            placeholder="Description"
            value={newCategory.description}
            onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
          />
          <Input
            placeholder="URL de l'image"
            value={newCategory.image}
            onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
            required
          />
          <select
            className="w-full p-2 border rounded-md"
            value={newCategory.parentId}
            onChange={(e) => setNewCategory({ ...newCategory, parentId: e.target.value })}
          >
            <option value="">Catégorie principale</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <Button type="submit" className="w-full bg-primary text-white hover:bg-red-600">
            Ajouter la catégorie
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};