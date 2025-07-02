import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Item {
  value: string;
  label: string;
  icon: string;
  children?: Item[];
  isLeaf?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items = new BehaviorSubject<Item[]>([]);

  constructor() { }

  getItems(): Observable<Item[]> {
    return this.items.asObservable();
  }

  addItem(item: Item): void {
    const currentItems = this.items.getValue();
    this.items.next([...currentItems, item]);
  }

  updateItem(index: number, item: Item): void {
    const currentItems = this.items.getValue();
    currentItems[index] = item;
    this.items.next([...currentItems]);
  }

  deleteItem(index: number): void {
    const currentItems = this.items.getValue();
    currentItems.splice(index, 1);
    this.items.next([...currentItems]);
  }
} 