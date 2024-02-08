import { Component } from '@angular/core';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrl: './elementos.component.css'
})
export class ElementosComponent {
  public tenerHambre:boolean=false;
  public deshabilitarCheck:boolean=true;
  public textoHambre:string="";
  public textoAprobar:string="";
  public esteFinde:string="ver baloncesto";
  public miNombre:string="Salva Garcia Olmedo";
  heHechoClick():void{
    alert("PLIN");
  }

  verSitengohambre(evento:Event):void{
    //alert(evento.target);
    if((<HTMLInputElement>evento.target).checked){
      this.textoHambre="Tengo hambre viejo";
    }else{
      this.textoHambre="no viejo";
    }
  }

  versiApruebo(x:Event):void{
    
    if((<HTMLInputElement>x.target).value=="si"){
      this.textoAprobar="Enhorabuena";
    }else{
      this.textoAprobar="Dale tu puedes";
    }
  }

  planearFinde(ev:Event):void{
    this.esteFinde = (<HTMLInputElement>ev.target).value
  }

  nombre(b:Event):void{
    this.miNombre = (<HTMLInputElement>b.target).value
  }

}
