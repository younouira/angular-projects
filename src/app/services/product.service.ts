import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, Article } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'ASUS ROG Gaming PC RTX 4090',
      category: 'Gaming',
      description: 'Puissant PC gamer avec processeur Ryzen 9 et RTX 4090 pour les jeux AAA',
      price: 3499,
      imageUrl: 'https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1725895661758.webp&w=1200&q=75',
      stock: 8,
      rating: 4.9,
      specs: [
        { label: 'Processeur', value: 'AMD Ryzen 9 7950X3D' },
        { label: 'Carte Graphique', value: 'NVIDIA RTX 4090' },
        { label: 'RAM', value: '64GB DDR5' },
        { label: 'Stockage', value: '2TB NVMe SSD' },
        { label: 'Alimentation', value: '1200W Modular' }
      ],
      features: ['Ray Tracing', '4K Gaming', 'Overclock Ready', 'RGB Lighting', 'Liquid Cooling']
    },
    {
      id: 2,
      name: 'Dell XPS 15 Ultrabook',
      category: 'Portable',
      description: 'Laptop ultra-fin conçu pour créatifs avec écran 4K OLED',
      price: 2199,
      imageUrl: 'https://www.tunisianet.com.tn/109918-large/pc-portable-dell-xps-15-i7-7e-gen-16-go-silver-sim-orange-offerte-30-go-internet-security-bitdefender.jpg',
      stock: 12,
      rating: 4.8,
      specs: [
        { label: 'Écran', value: '15.6" 4K OLED Touch' },
        { label: 'Processeur', value: 'Intel Core i9-13900H' },
        { label: 'Carte Graphique', value: 'NVIDIA RTX 4080' },
        { label: 'RAM', value: '32GB LPDDR5' },
        { label: 'Batterie', value: '86Wh (12h autonomie)' }
      ],
      features: ['Touchscreen OLED', 'Thunderbolt 4', 'Premium Design', 'Créatif Pro', 'Léger 4.2kg']
    },
    {
      id: 3,
      name: 'Lenovo ThinkPad Pro',
      category: 'Bureau',
      description: 'PC portable professionnel robuste pour les entreprises',
      price: 1299,
      imageUrl: 'https://www.tunisianet.com.tn/387786-large/pc-portable-lenovo-thinkpad-l14-gen-5-ryzen-5-pro-7535u-8-go-ddr5-512-go-ssd-windows-11-pro-noir.jpg',
      stock: 25,
      rating: 4.7,
      specs: [
        { label: 'Écran', value: '14" FHD IPS' },
        { label: 'Processeur', value: 'Intel Core i7-1365U' },
        { label: 'RAM', value: '16GB DDR5' },
        { label: 'Stockage', value: '512GB SSD' },
        { label: 'Sécurité', value: 'Lecteur Biométrique' }
      ],
      features: ['MIL-STD-810H', 'Sécurité Entreprise', 'Durée Batterie 15h', 'Clavier Iconic', 'Support 24/7']
    },
    {
      id: 4,
      name: 'Ryzen Gaming Build RTX 4070 Ti',
      category: 'Gaming',
      description: 'Configuration high-end pour gaming 1440p et 4K gaming',
      price: 2299,
      imageUrl: 'https://megapc.tn/_next/image?url=https%3A%2F%2Fstatic.gi-ga.tech%2F%2Fuploads%2Fgallerie%2F1734348544105.webp&w=1200&q=75',
      stock: 15,
      rating: 4.9,
      specs: [
        { label: 'Processeur', value: 'AMD Ryzen 7 7700X' },
        { label: 'Carte Graphique', value: 'NVIDIA RTX 4070 Ti' },
        { label: 'RAM', value: '32GB DDR5 6000MHz' },
        { label: 'Stockage', value: '1TB NVMe + 2TB HDD' },
        { label: 'Refroidissement', value: 'AIO 360mm' }
      ],
      features: ['1440p Ultra', '4K High', 'Overclocking', 'Stream Capable', 'RGB Ecosystem']
    },
    {
      id: 5,
      name: 'MacBook Pro 16" M3 Max',
      category: 'Portable',
      description: 'Laptop premium pour développeurs et créatifs',
      price: 3999,
      imageUrl: 'https://techland.tn/_next/image?url=https%3A%2F%2Fapi-storage.techland.tn%2Ftechland%2Fproducts%2Fduu7yptrwxmdhgul9tadzvfl86jgdwbq8tplpoz3.avif&w=1920&q=75',
      stock: 10,
      rating: 4.9,
      specs: [
        { label: 'Écran', value: '16" Liquid Retina XDR' },
        { label: 'Processeur', value: 'Apple M3 Max' },
        { label: 'RAM', value: '36GB Unified' },
        { label: 'Stockage', value: '1TB SSD' },
        { label: 'Batterie', value: '100Wh (20h autonomie)' }
      ],
      features: ['ProMotion 120Hz', 'Thunderbolt 4', 'Pro Apps Optimized', 'Space Black', 'Premium Build']
    },
    {
      id: 6,
      name: 'Intel Creator Workstation',
      category: 'Bureau',
      description: 'Station de travail pour création 3D et montage vidéo 8K',
      price: 4799,
      imageUrl: 'https://computerlounge.co.nz/cdn/shop/files/7f8a71d3f8579088a0294fdb6f9bca820de4be7b_77792_1.jpg?v=1752629905&width=640',
      stock: 5,
      rating: 4.8,
      specs: [
        { label: 'Processeur', value: 'Intel Core i9-14900K' },
        { label: 'Carte Graphique', value: 'RTX 6000 Ada' },
        { label: 'RAM', value: '128GB DDR5' },
        { label: 'Stockage', value: '4TB SSD NVMe' },
        { label: 'Alimentation', value: '1600W Redundant' }
      ],
      features: ['8K Video', 'Ray Tracing', 'Extreme Stability', 'Professional Grade', 'Scalable Design']
    },
    {
      id: 7,
      name: 'HP Envy 14 Business',
      category: 'Portable',
      description: 'Portable compact et performant pour les entrepreneurs',
      price: 1599,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJsoS854DwJPvB1wGB7OcjIUg36D-eYU3Iw&s',
      stock: 20,
      rating: 4.6,
      specs: [
        { label: 'Écran', value: '14" FHD+ OLED' },
        { label: 'Processeur', value: 'Intel Core Ultra 7' },
        { label: 'Carte Graphique', value: 'Intel Arc' },
        { label: 'RAM', value: '16GB LPDDR5X' },
        { label: 'Batterie', value: '53Wh' }
      ],
      features: ['OLED Display', 'Thin Design', 'All-day Battery', 'Premium Materials', 'Business Focus']
    },
    {
      id: 8,
      name: 'Streaming PC Build',
      category: 'Gaming',
      description: 'Configuration optimisée pour streaming 4K et gaming simultané',
      price: 1899,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOTrFApQhERo0RgeWZ-uZPfn_Fho2wDrldQ&s',
      stock: 18,
      rating: 4.8,
      specs: [
        { label: 'Processeur', value: 'Intel Core i7-14700K' },
        { label: 'Carte Graphique', value: 'RTX 4070' },
        { label: 'RAM', value: '32GB DDR5' },
        { label: 'Stockage', value: '2TB NVMe' },
        { label: 'Refroidissement', value: 'AIO 360mm' }
      ],
      features: ['Streaming 4K 60fps', 'Dual Encoding', 'Low Latency', 'Quiet Operation', 'Future Proof']
    },
    {
      id: 9,
      name: 'ASUS VivoBook 15',
      category: 'Portable',
      description: 'Laptop abordable et léger pour usage polyvalent',
      price: 599,
      imageUrl: 'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/p/c/pc-portable-asus-vivobook-15-x1504va-i3-13eme-gen-12g-512g-ssd-silver.png',
      stock: 35,
      rating: 4.5,
      specs: [
        { label: 'Écran', value: '15.6" FHD IPS' },
        { label: 'Processeur', value: 'AMD Ryzen 5 5500' },
        { label: 'RAM', value: '8GB DDR4' },
        { label: 'Stockage', value: '256GB SSD' },
        { label: 'Poids', value: '1.8kg' }
      ],
      features: ['Budget Friendly', 'Portable', 'Good Battery', 'NumberPad', 'Warranty 2 years']
    },
    {
      id: 10,
      name: 'Custom Mining Rig RTX 4060',
      category: 'Spécialisé',
      description: 'Système optimisé pour minage de crypto-monnaies',
      price: 1299,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0D8xVjTAA_x8fadRa1loaA54L0De7nff5fg&s',
      stock: 6,
      rating: 4.3,
      specs: [
        { label: 'Processeur', value: 'Intel Core i5' },
        { label: 'Carte Graphique', value: 'RTX 4060 x6' },
        { label: 'RAM', value: '16GB DDR4' },
        { label: 'Alimentation', value: '3000W' },
        { label: 'Rack', value: 'Metal Frame' }
      ],
      features: ['Multi-GPU', 'High Hash Rate', 'Efficient Power', 'Cooling System', 'Remote Management']
    }
  ];

  private articles: Article[] = [
    {
      id: 1,
      title: 'Guide d\'achat : Quel PC Gaming en 2025 ?',
      excerpt: 'Découvrez notre sélection des meilleurs PCs gaming selon votre budget et vos besoins...',
      content: 'Les PCs gaming en 2025 offrent des performances incroyables. Que vous cherchiez un PC haut de gamme avec RTX 4090 ou un budget gaming, nous avons ce qu\'il vous faut...',
      author: 'Youssef NOUIRA',
      date: new Date('2025-02-15'),
      category: 'Guide',
      imageUrl: 'https://images.unsplash.com/photo-1587829212624-fd3afb60cb71?w=800&h=400&fit=crop',
      readTime: 8
    },
    {
      id: 2,
      title: 'Comparatif : Gaming vs Streaming Build',
      excerpt: 'Quelle configuration choisir pour vos besoins ? Gaming pur ou avec streaming...',
      content: 'Dans cet article, nous comparons les deux approches principales pour construire votre PC idéal...',
      author: 'Youssef NOUIRA',
      date: new Date('2025-02-10'),
      category: 'Comparatif',
      imageUrl: 'https://images.unsplash.com/photo-1618411738327-d5476b94d6d2?w=800&h=400&fit=crop',
      readTime: 12
    },
    {
      id: 3,
      title: 'RTX 4090 vs RTX 4080 : Qui gagne ?',
      excerpt: 'Analyse détaillée des performances et du rapport qualité-prix...',
      content: 'La dernière génération de cartes graphiques NVIDIA offre des performances exceptionnelles...',
      author: 'Youssef NOUIRA',
      date: new Date('2025-02-05'),
      category: 'Tech News',
      imageUrl: 'https://images.unsplash.com/photo-1606933248051-5ce98bebdd33?w=800&h=400&fit=crop',
      readTime: 10
    },
    {
      id: 4,
      title: 'Optimization: Maximiser votre FPS',
      excerpt: 'Conseils pour obtenir les meilleures performances gaming...',
      content: 'Découvrez comment configurer votre PC gaming pour maximiser les performances...',
      author: 'Youssef NOUIRA',
      date: new Date('2025-01-28'),
      category: 'Tutoriel',
      imageUrl: 'https://images.unsplash.com/photo-1616763355603-9755a6a6ccca?w=800&h=400&fit=crop',
      readTime: 15
    },
    {
      id: 5,
      title: 'AMD Ryzen vs Intel Core : 2025 Edition',
      excerpt: 'Lequel est vraiment meilleur ? Guide complet de comparaison...',
      content: 'Après des années de concurrence féroce, AMD et Intel offrent des solutions très compétitives...',
      author: 'Youssef NOUIRA',
      date: new Date('2025-01-20'),
      category: 'Comparatif',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
      readTime: 13
    },
    {
      id: 6,
      title: 'Les meilleurs laptops pour les développeurs',
      excerpt: 'Top 5 des portables pour coder en 2025...',
      content: 'Les développeurs ont des besoins spécifiques en termes de performance et de confort...',
      author: 'Youssef NOUIRA',
      date: new Date('2025-01-15'),
      category: 'Guide',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
      readTime: 9
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter(p => p.category === category));
  }

  getCategories(): Observable<string[]> {
    const categories = [...new Set(this.products.map(p => p.category))];
    return of(categories.sort());
  }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  getArticleById(id: number): Observable<Article | undefined> {
    return of(this.articles.find(a => a.id === id));
  }

  getDashboardStats(): Observable<any> {
    return of({
      totalProducts: this.products.length,
      totalValue: this.products.reduce((sum, p) => sum + (p.price * p.stock), 0),
      avgRating: (this.products.reduce((sum, p) => sum + p.rating, 0) / this.products.length).toFixed(1),
      totalStock: this.products.reduce((sum, p) => sum + p.stock, 0),
      categories: [...new Set(this.products.map(p => p.category))].length,
      articles: this.articles.length
    });
  }
}