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
  public tipoItem: any;
  constructor(public navCtrl: NavController,
    private route: ActivatedRoute) {
    this.tipoComercios();
    this.tipoItens();
  }

  tipoComercios() {

    this.tipoComercio = [
      { id: 1,  img: 'iphone.png'},
      // { id: 2,  img: 'iphone.png' },
      // { id: 3, nome: 'Lanchonete', img: 'lanchonete.jpg', descricao: '"Aqui você encontra todas as lanchonetes"' },
      // { id: 4, nome: 'Restaurante', img: 'resturante.jpg', descricao: '"Aqui você encontra todos os restaurantes"' },
      // { id: 5, nome: 'Farmacia', img: 'farmacia.jpg', descricao: '"Aqui você encontra todos as farmacias"' }
    ]
  }

  tipoItens(){
    this.tipoItem = [
      { id: 1, nome: 'Kit kat', img: 'kitkat.jpg', descricao: '"Chocolate Kitkat 4 Fingers Ao Leite 41,5g"' },
      { id: 2, nome: 'Prestigio Branco', img: 'prestigioB.jpg', descricao: '"Chocolate Prestigio Branco Nestlé 114g 6 Unidades' },
      { id: 3, nome: 'Hersheys', img: 'hersheys.jpg', descricao: '"Tablete De Chocolate Ao Leite Com Ovomaltine 87g - Hersheys"' }
    ]
  }
}
