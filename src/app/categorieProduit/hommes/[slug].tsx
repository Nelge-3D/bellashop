// pages/categorie-produit/hommes/[slug].tsx
import { CategoryNavigation } from '@/app/components/categoryNavigation';

const categories = [
  { id: 'barbe', nom: 'Barbe', href: '/categorie-produit/hommes/barbe' },
  { id: 'visage', nom: 'Visage', href: '/categorie-produit/hommes/visage' },
  { id: 'corps', nom: 'Corps', href: '/categorie-produit/hommes/corps' },
  { id: 'parfums', nom: 'Parfums', href: '/categorie-produit/hommes/parfums' },
  { id: 'sexualite', nom: 'Sexualité', href: '/categorie-produit/hommes/sexualite' }
];

export default function Page({ params }) {
  return <CategoryNavigation categories={categories} />;
}