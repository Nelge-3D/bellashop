"use client";

// app/categorie-produit/hommes/page.js
import { CategoryNavigation } from '@/app/components/categoryNavigation';
import '@/styles/globals.css';

const categories = [
  { id: 'barbe', nom: 'Barbe', href: '/categorie-produit/hommes/barbe' },
  { id: 'visage', nom: 'Visage', href: '/categorie-produit/hommes/visage' },
  { id: 'corps', nom: 'Corps', href: '/categorie-produit/hommes/corps' },
  { id: 'parfums', nom: 'Parfums', href: '/categorie-produit/hommes/parfums' },
  { id: 'sexualite', nom: 'Sexualité', href: '/categorie-produit/hommes/sexualite' }
];

export default function Page() {
  return <CategoryNavigation categories={categories} />;
}