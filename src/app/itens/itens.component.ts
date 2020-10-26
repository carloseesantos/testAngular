import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  itens: any;
  currentItem = null;
  currentIndex = -1;
  title = '';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.retrieveitens();
  }

  retrieveitens(): void {
    this.itemService.getAll()
      .subscribe(
        data => {
          this.itens = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveitens();
    this.currentItem = null;
    this.currentIndex = -1;
  }

  setActiveItem(item, index): void {
    this.currentItem = item;
    this.currentIndex = index;
  }

  removeAllitens(): void {
    this.itemService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveitens();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.itemService.findByTitle(this.title)
      .subscribe(
        data => {
          this.itens = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}