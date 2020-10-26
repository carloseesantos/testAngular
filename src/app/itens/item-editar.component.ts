import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service'

@Component({
  selector: 'app-item-editar',
  templateUrl: './item-editar.component.html',
  styleUrls: ['./item-editar.component.css']
})
export class ItemEditarComponent implements OnInit {

  item = {
    nome: '',
    descricao: '',
    publicado: false
  };

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  saveItem(): void {
    const data = {
      nome: this.item.nome,
      descricao: this.item.descricao
    };

    this.itemService.create(data)
      .subscribe(
        response => {
          console.log(response);
          // this.submitted = true;
        }, 
        error => {
          console.log(error);
        });
  }

  novoItem(): void {
    // this.submitted = false;
    this.item = {
      nome: '',
      descricao: '',
      publicado: false
    };
  }
}
