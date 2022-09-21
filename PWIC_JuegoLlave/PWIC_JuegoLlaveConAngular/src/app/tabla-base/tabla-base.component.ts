import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-base',
  templateUrl: './tabla-base.component.html',
  styleUrls: ['./tabla-base.component.css'],
})
export class TablaBaseComponent implements OnInit {
  victoria: number = 0;
  derrota: number = 0;
  ubiPelota: number = 0;

  // DEFINES DE IMAGENES
  private manocerrada: string =
    'https://img.freepik.com/free-photo/man-hand-clenched-fist-isolated-white_103324-216.jpg?size=338&ext=jpg';
  private manoabierta: string =
    'https://image.freepik.com/free-photo/open-hand-isolated-white-background_58409-11407.jpg';
  private manobola: string =
    'https://www.ayudasdinamicas.com/img/bloguploads/1498476583_hand_exerciser_-_red_-_in_use_tiff.jpg';
  //

  srcIz: string = this.manocerrada;
  srcDe: string = this.manocerrada;

  constructor() {}
  ngOnInit() {}

  onReset() {
    this.clearMar();
    this.resImg();
  }

  onPista() {
    //diria donde esta la pelota
    alert(
      'La pelota esta en la ' + (this.ubiPelota == 0 ? 'Izquierda' : 'Derecha')
    );
  }

  clearMar() {
    //limpia el marcador
    this.victoria = 0;
    this.derrota = 0;
  }
  newRandom() {
    this.ubiPelota = Math.floor(Math.random() * 2);
  }
  onIzquierda() {
    if (this.ubiPelota == 0) {
      this.victoria++;
      this.srcIz = this.manobola;
      alert("Has Ganado");
    } else {
      this.derrota++;
      this.srcIz = this.manoabierta;
      alert("Has Perdido");

    }
    setTimeout(() => {
      this.resImg();
      this.newRandom();
    }, 500);
  }
  onDerecha() {
    if (this.ubiPelota == 1) {
      this.victoria++;
      this.srcDe = this.manobola;
      alert("Has Ganado");
    } else {
      this.derrota++;
      this.srcDe = this.manoabierta;
      alert("Has Perdido");
    }
    
    setTimeout(() => {
      this.resImg();
      this.newRandom();
    }, 500);
  }

  resImg() {
    this.srcIz = this.manocerrada;
    this.srcDe = this.manocerrada;
  }
}
