import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  element : any
  // src = localStorage.getItem('src')

  @Input() nav= ''
  // @Output() modeChange: EventEmitter<string> = new EventEmitter();
  
  // darkMode(){
  //   if(this.element.nativeElement.querySelector('#mode').querySelector('img').getAttribute('src') == 'nocturne.svg'){
  //     this.src = 'sun.svg'
  //     localStorage.setItem('src','nocturne.svg')
  //     this.modeChange.emit('clair')
  //   }
  //   else{
  //     this.modeChange.emit('nocturne')
  //     this.src = 'nocturne.svg'
  //     localStorage.setItem('src','sun.svg')
  //   }
  // }


  constructor(el: ElementRef){
    this.element = el
  }

  revealApropos(){
    if(this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.contains('translate-x-[60px]')){
      this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.remove('translate-x-[60px]')
    }
  }

  hideApropos(){
    if(this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.contains('translate-x-[60px]')){
      this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.add('translate-x-[60px]')
    }
  }

  revealProjets(){
    this.element.nativeElement.querySelector('#projets').querySelector('.item').classList.remove('translate-x-[60px]')
  }

  hideProjets(){
    this.element.nativeElement.querySelector('#projets').querySelector('.item').classList.add('translate-x-[60px]')
  }

  revealArticles(){
    this.element.nativeElement.querySelector('#articles').querySelector('.item').classList.remove('translate-x-[60px]')
  }

  hideArticles(){
    this.element.nativeElement.querySelector('#articles').querySelector('.item').classList.add('translate-x-[60px]')
  }

  droplist(){
    if(this.element.nativeElement.querySelector('#drop').classList.contains('translate-x-full')){
      this.element.nativeElement.querySelector('#drop').classList.remove('translate-x-full')
      this.element.nativeElement.querySelector('#dropList').classList.remove('translate-x-full')

    }else{
      this.element.nativeElement.querySelector('#drop').classList.add('translate-x-full')
      this.element.nativeElement.querySelector('#dropList').classList.add('translate-x-full')
    }
  }
}
