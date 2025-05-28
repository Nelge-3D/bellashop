import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Données de démonstration pour les parfums
const parfumsData = {
  categories: [
    { id: 'eau-de-toilette', nom: 'Eau de Toilette', description: 'Parfums légers pour un usage quotidien' },
    { id: 'eau-de-parfum', nom: 'Eau de Parfum', description: 'Concentré en essence pour une longue durée' },
    { id: 'parfum', nom: 'Parfum', description: 'Concentré maximum pour une persistante exceptionnelle' }
  ],
  produits: [
    {
      id: 'parfum-001',
      nom: 'Essence Élégante',
      description: 'Parfum masculin aux notes de cuir et de bois',
      prix: 89.99,
      image: '/produits/parfums/001.jpg',
      categorie: 'eau-de-parfum',
      concentration: '15%',
      duree: '8-10 heures'
    },
    {
      id: 'parfum-002',
      nom: 'Fresh Sport',
      description: 'Eau de toilette fraîche et dynamique',
      prix: 69.99,
      image: '/produits/parfums/002.jpg',
      categorie: 'eau-de-toilette',
      concentration: '5%',
      duree: '6-8 heures'
    }
  ]
};

export default function Parfums() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = parfumsData.produits.filter(p => 
    selectedCategory ? p.categorie === selectedCategory : true
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Parfums</h2>
          
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('')}
              className="text-sm"
            >
              Tous les parfums
            </Button>
            {parfumsData.categories.map((cat) => (
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
                    <span className="text-sm text-muted-foreground">{produit.concentration}</span>
                    <span className="text-sm text-muted-foreground">{produit.duree}</span>
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