import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Menu, MenuData, Category, MenuItem } from '../../services/menu';

@Component({
  selector: 'app-preview',
  imports: [CommonModule, FormsModule],
  templateUrl: './preview.html',
  styleUrl: './preview.scss',
})
export class Preview implements OnInit {
  menu = signal<MenuData | null>(null);
  searchQuery = signal('');
  selectedCategoryId = signal<string | null>(null);

  filteredCategories = computed(() => {
    const menu = this.menu();
    const query = this.searchQuery().toLowerCase();
    const selectedId = this.selectedCategoryId();

    if (!menu) return [];

    let categories = menu.categories;

    // Filter by selected category
    if (selectedId) {
      categories = categories.filter(cat => cat.id === selectedId);
    }

    // Filter by search query
    if (query) {
      categories = categories.map(cat => ({
        ...cat,
        items: cat.items.filter(
          item =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        ),
      })).filter(cat => cat.items.length > 0);
    }

    return categories;
  });

  constructor(private menuService: Menu) { }

  ngOnInit() {
    this.menuService.menu$.subscribe(menu => {
      this.menu.set(menu);
      if (menu.categories.length === 0) {
        this.menuService.loadSampleData();
      }
    });
  }

  selectCategory(categoryId: string | null) {
    this.selectedCategoryId.set(categoryId);
  }

  clearSearch() {
    this.searchQuery.set('');
  }
}
