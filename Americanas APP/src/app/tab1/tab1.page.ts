import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public tipoComercio: any;
  constructor(public navCtrl: NavController,
    private route: ActivatedRoute) {
    this.tipoComercios();
  }

  tipoComercios() {

    this.tipoComercio = [
      { id: 1, nome: 'Supermercado', img: 'supermercado.jpg', descricao: '"Aqui você encontra todos os supermercados"' },
      { id: 2, nome: 'Loja', img: 'loja.jpg', descricao: '"Aqui você encontra todas as lojas"' },
      { id: 3, nome: 'Lanchonete', img: 'lanchonete.jpg', descricao: '"Aqui você encontra todas as lanchonetes"' },
      { id: 4, nome: 'Restaurante', img: 'resturante.jpg', descricao: '"Aqui você encontra todos os restaurantes"' },
      { id: 5, nome: 'Farmacia', img: 'farmacia.jpg', descricao: '"Aqui você encontra todos as farmacias"' }
    ]
  }
}
