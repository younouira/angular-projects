export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    stock: number;
    rating: number;
    specs: ProductSpec[];
    features: string[];
}

export interface ProductSpec {
    label: string;
    value: string;
}

export interface Article {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: Date;
    category: string;
    imageUrl: string;
    readTime: number;
}