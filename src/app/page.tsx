"use client";

// pages/index.tsx
import { useState } from 'react';
import './globals.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Données de démonstration pour les produits
const featuredProducts = [
  {
    id: 'prod-001',
    name: 'Rasoir Luxe',
    description: 'Rasoir professionnel de haute qualité',
    price: 129.99,
    image: './hommes/barbe/barbe01.jpg',
    category: 'barbe'
  },
  {
    id: 'prod-002',
    name: 'Crème Visage',
    description: 'Crème hydratante pour tous les types de peau',
    price: 89.99,
    image: './hommes/visage/visage01.jpg',
    category: 'visage'
  }
];

const Home = () => {
  const [carouselApi, setCarouselApi] = useState<any>(null);

  return (
    <main className="min-h-screen bg-background">
      {/* Section Hero */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-12">
        <div className="container mx-auto px-4">
          <Carousel setApi={setCarouselApi}>
            <CarouselContent>
              {[1, 2, 3].map((slide) => (
                <CarouselItem key={slide}>
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-primary">Collection Homme</CardTitle>
                      <CardDescription>Découvrez nos dernières créations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="default" className="bg-primary text-white hover:bg-red-600">
                        Explorer la collection
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Section Produits en Vedette */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Produits en Vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:-translate-y-1 transition-transform duration-200">
                <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-primary mb-4">
                    ${product.price.toFixed(2)}
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
};

export default Home;