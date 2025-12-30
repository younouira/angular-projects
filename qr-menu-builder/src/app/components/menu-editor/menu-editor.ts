import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu, MenuData, Category, MenuItem } from '../../services/menu';

@Component({
  selector: 'app-menu-editor',
  imports: [CommonModule, FormsModule],
  templateUrl: './menu-editor.html',
  styleUrl: './menu-editor.scss',
})
export class MenuEditor implements OnInit {
  menu = signal<MenuData | null>(null);
  selectedCategory = signal<Category | null>(null);
  editingItem = signal<MenuItem | null>(null);
  showCategoryForm = signal(false);
  showItemForm = signal(false);

  categoryForm = {
    name: '',
    description: '',
  };

  itemForm = {
    name: '',
    description: '',
    price: 0,
    available: true,
    allergens: '',
  };

  constructor(private menuService: Menu, private router: Router) { }

  ngOnInit() {
    this.menuService.menu$.subscribe(menu => {
      this.menu.set(menu);
      if (menu.categories.length === 0) {
        this.menuService.loadSampleData();
      }
    });
  }

  addCategory() {
    if (this.categoryForm.name) {
      this.menuService.addCategory(
        this.categoryForm.name,
        this.categoryForm.description
      );
      this.categoryForm = { name: '', description: '' };
      this.showCategoryForm.set(false);
    }
  }

  selectCategory(category: Category) {
    this.selectedCategory.set(category);
    this.editingItem.set(null);
  }

  deleteCategory(categoryId: string) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.menuService.deleteCategory(categoryId);
      if (this.selectedCategory()?.id === categoryId) {
        this.selectedCategory.set(null);
      }
    }
  }

  addItem() {
    const category = this.selectedCategory();
    if (category && this.itemForm.name) {
      const allergens = this.itemForm.allergens
        ? this.itemForm.allergens.split(',').map(a => a.trim())
        : [];

      if (this.editingItem()) {
        this.menuService.updateItem(category.id, this.editingItem()!.id, {
          name: this.itemForm.name,
          description: this.itemForm.description,
          price: this.itemForm.price,
          available: this.itemForm.available,
          allergens,
        });
        this.editingItem.set(null);
      } else {
        this.menuService.addItem(category.id, {
          name: this.itemForm.name,
          description: this.itemForm.description,
          price: this.itemForm.price,
          available: this.itemForm.available,
          allergens,
        });
      }

      this.resetItemForm();
      this.showItemForm.set(false);
    }
  }

  editItem(item: MenuItem) {
    this.editingItem.set(item);
    this.itemForm = {
      name: item.name,
      description: item.description,
      price: item.price,
      available: item.available,
      allergens: item.allergens?.join(', ') || '',
    };
    this.showItemForm.set(true);
  }

  deleteItem(itemId: string) {
    const category = this.selectedCategory();
    if (category && confirm('Are you sure you want to delete this item?')) {
      this.menuService.deleteItem(category.id, itemId);
    }
  }

  toggleItemAvailability(item: MenuItem) {
    const category = this.selectedCategory();
    if (category) {
      this.menuService.updateItem(category.id, item.id, {
        available: !item.available,
      });
    }
  }

  resetItemForm() {
    this.itemForm = {
      name: '',
      description: '',
      price: 0,
      available: true,
      allergens: '',
    };
    this.editingItem.set(null);
  }

  cancelItemEdit() {
    this.resetItemForm();
    this.showItemForm.set(false);
  }

  goToPreview() {
    this.router.navigate(['/preview']);
  }

  goToQRCode() {
    this.router.navigate(['/qr-code']);
  }
}
