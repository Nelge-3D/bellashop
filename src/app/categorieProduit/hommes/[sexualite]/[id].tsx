import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Données de démonstration pour les produits intimes
const sexualiteData = {
  categories: [
    { id: 'lubrifiants', nom: 'Lubrifiants', description: 'Produits intimes de qualité' },
    { id: 'accessoires', nom: 'Accessoires', description: 'Accessoires pour un usage personnel' }
  ],
  produits: [
    {
      id: 'sexualite-001',
      nom: 'Lubrifiant Silicone',
      description: 'Lubrifiant intime de haute qualité',
      prix: 29.99,
      image: '/produits/sexualite/001.jpg',
      categorie: 'lubrifiants',
      volume: '100ml',
      type: 'Silicone'
    }
  ]
};

export default function Sexualite() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = sexualiteData.produits.filter(p => 
    selectedCategory ? p.categorie === selectedCategory : true
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Produits Intimes</h2>
          
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('')}
              className="text-sm"
            >
              Tous les produits
            </Button>
            {sexualiteData.categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className="text-sm"
              >
                {cat.nom}
              </Button>
            ))}
          </div>

          {/* Liste des produits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((produit) => (
              <Card key={produit.id} className="hover:-translate-y-1 transition-transform duration-200">
                <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={produit.image} 
                    alt={produit.nom}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{produit.nom}</CardTitle>
                  <CardDescription>{produit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{produit.volume}</span>
                    <span className="text-sm text-muted-foreground">{produit.type}</span>
                  </div>
                  <p className="text-lg font-bold text-primary mb-4">
                    ${produit.prix.toFixed(2)}
                  </p>
                  <Button className="w-full bg-primary text-white hover:bg-red-600">
                    Voir le produit
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}