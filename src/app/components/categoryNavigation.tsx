import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface CategoryNavigationProps {
  categories: Array<{
    id: string;
    nom: string;
    href: string;
  }>;
}

export const CategoryNavigation = ({ categories }: CategoryNavigationProps) => {
  return (
    <nav className="bg-white border-b py-4 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 items-center">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <span>{category.nom}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};