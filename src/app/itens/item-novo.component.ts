import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-novo',
  templateUrl: './item-novo.component.html',
  styleUrls: ['./item-novo.component.css']
})
export class ItemNovoComponent implements OnInit {
  item = {
    nome: '',
    descricao: '',
    published: false
  };
  submitted = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      title: this.item.nome,
      description: this.item.descricao
    };

    this.itemService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.item = {
      nome: '',
      descricao: '',
      published: false
    };
  }

}