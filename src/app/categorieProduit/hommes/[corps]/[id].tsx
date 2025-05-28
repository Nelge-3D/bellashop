import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Données de démonstration pour les produits de corps
const corpsData = {
  categories: [
    { id: 'douche', nom: 'Produits de douche', description: 'Gels douche et savons' },
    { id: 'lait', nom: 'Laits corporels', description: 'Produits hydratants pour le corps' },
    { id: 'soins', nom: 'Soins spéciaux', description: 'Traitements pour la peau du corps' }
  ],
  produits: [
    {
      id: 'corps-001',
      nom: 'Gel Douche',
      description: 'Gel douche rafraîchissant et doux',
      prix: 19.99,
      image: '/produits/corps/001.jpg',
      categorie: 'douche',
      format: '250ml',
      benefices: ['Nettoyage en profondeur', 'Peau douce']
    },
    {
      id: 'corps-002',
      nom: 'Lait Corps',
      description: 'Lait corporel hydratant longue durée',
      prix: 34.99,
      image: '/produits/corps/002.jpg',
      categorie: 'lait',
      protection: '24h',
      ingredients: ['Karité', 'Argan']
    }
  ]
};

export default function Corps() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = corpsData.produits.filter(p => 
    selectedCategory ? p.categorie === selectedCategory : true
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Produits Corps</h2>
          
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('')}
              className="text-sm"
            >
              Tous les produits
            </Button>
            {corpsData.categories.map((cat) => (
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
                  <div className="space-y-2 mb-4">
                    {produit.benefices && (
                      <div>
                        <h4 className="text-sm font-semibold">Avantages :</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {produit.benefices.map((benefice, index) => (
                            <li key={index}>{benefice}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {produit.ingredients && (
                      <div>
                        <h4 className="text-sm font-semibold">Ingrédients :</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {produit.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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