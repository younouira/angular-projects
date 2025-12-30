import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  available: boolean;
  allergens?: string[];
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuData {
  restaurantName: string;
  description: string;
  categories: Category[];
  logo?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Menu {
  private menuSubject = new BehaviorSubject<MenuData>({
    restaurantName: 'My Restaurant',
    description: 'Delicious food made with love',
    categories: [],
  });

  menu$ = this.menuSubject.asObservable();

  getMenu(): MenuData {
    return this.menuSubject.value;
  }

  updateRestaurantInfo(name: string, description: string, logo?: string) {
    const current = this.menuSubject.value;
    this.menuSubject.next({
      ...current,
      restaurantName: name,
      description,
      logo,
    });
  }

  addCategory(name: string, description?: string) {
    const current = this.menuSubject.value;
    const newCategory: Category = {
      id: Date.now().toString(),
      name,
      description,
      items: [],
    };
    this.menuSubject.next({
      ...current,
      categories: [...current.categories, newCategory],
    });
  }

  updateCategory(categoryId: string, name: string, description?: string) {
    const current = this.menuSubject.value;
    const categories = current.categories.map(cat =>
      cat.id === categoryId ? { ...cat, name, description } : cat
    );
    this.menuSubject.next({ ...current, categories });
  }

  deleteCategory(categoryId: string) {
    const current = this.menuSubject.value;
    const categories = current.categories.filter(cat => cat.id !== categoryId);
    this.menuSubject.next({ ...current, categories });
  }

  addItem(categoryId: string, item: Omit<MenuItem, 'id'>) {
    const current = this.menuSubject.value;
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString(),
    };
    const categories = current.categories.map(cat =>
      cat.id === categoryId
        ? { ...cat, items: [...cat.items, newItem] }
        : cat
    );
    this.menuSubject.next({ ...current, categories });
  }

  updateItem(categoryId: string, itemId: string, item: Partial<MenuItem>) {
    const current = this.menuSubject.value;
    const categories = current.categories.map(cat =>
      cat.id === categoryId
        ? {
          ...cat,
          items: cat.items.map(i =>
            i.id === itemId ? { ...i, ...item } : i
          ),
        }
        : cat
    );
    this.menuSubject.next({ ...current, categories });
  }

  deleteItem(categoryId: string, itemId: string) {
    const current = this.menuSubject.value;
    const categories = current.categories.map(cat =>
      cat.id === categoryId
        ? { ...cat, items: cat.items.filter(i => i.id !== itemId) }
        : cat
    );
    this.menuSubject.next({ ...current, categories });
  }

  moveItem(fromCategoryId: string, toCategoryId: string, itemId: string) {
    const current = this.menuSubject.value;
    let itemToMove: MenuItem | undefined;

    const categories = current.categories.map(cat => {
      if (cat.id === fromCategoryId) {
        const item = cat.items.find(i => i.id === itemId);
        if (item) {
          itemToMove = item;
          return { ...cat, items: cat.items.filter(i => i.id !== itemId) };
        }
      }
      return cat;
    });

    if (itemToMove) {
      const finalCategories = categories.map(cat =>
        cat.id === toCategoryId
          ? { ...cat, items: [...cat.items, itemToMove!] }
          : cat
      );
      this.menuSubject.next({ ...current, categories: finalCategories });
    }
  }

  loadSampleData() {
    const sampleMenu: MenuData = {
      restaurantName: 'La Bella Italia',
      description: 'Authentic Italian cuisine in the heart of the city',
      categories: [
        {
          id: '1',
          name: 'Appetizers',
          description: 'Start your meal right',
          items: [
            {
              id: '1-1',
              name: 'Bruschetta',
              description: 'Toasted bread with tomatoes, garlic, and basil',
              price: 8.99,
              available: true,
            },
            {
              id: '1-2',
              name: 'Caprese Salad',
              description: 'Fresh mozzarella, tomatoes, and basil',
              price: 10.99,
              available: true,
              allergens: ['dairy'],
            },
          ],
        },
        {
          id: '2',
          name: 'Main Courses',
          description: 'Our signature dishes',
          items: [
            {
              id: '2-1',
              name: 'Spaghetti Carbonara',
              description: 'Classic Roman pasta with eggs, cheese, and pancetta',
              price: 16.99,
              available: true,
              allergens: ['gluten', 'dairy', 'eggs'],
            },
            {
              id: '2-2',
              name: 'Margherita Pizza',
              description: 'Tomato sauce, mozzarella, and fresh basil',
              price: 14.99,
              available: true,
              allergens: ['gluten', 'dairy'],
            },
          ],
        },
        {
          id: '3',
          name: 'Desserts',
          description: 'Sweet endings',
          items: [
            {
              id: '3-1',
              name: 'Tiramisu',
              description: 'Classic Italian dessert with coffee and mascarpone',
              price: 7.99,
              available: true,
              allergens: ['dairy', 'eggs', 'gluten'],
            },
          ],
        },
      ],
    };
    this.menuSubject.next(sampleMenu);
  }
}
