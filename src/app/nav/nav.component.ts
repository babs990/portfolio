import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  element : any

  constructor(el: ElementRef){
    this.element = el
  }

  revealApropos(){
    this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.remove('translate-x-[60px]')
  }

  hideApropos(){
    this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.add('translate-x-[60px]')
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
