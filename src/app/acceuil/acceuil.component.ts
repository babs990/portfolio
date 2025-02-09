import { AfterViewInit, Component, computed, inject, OnInit, signal } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projets, projetsUi } from '../projet';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { outils } from '../projet';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NavComponent,NgOptimizedImage,FooterComponent,RouterLink],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements AfterViewInit,OnInit{

  readonly router = inject(Router)
  readonly projets = signal(projets)
  readonly design = signal(projetsUi)
  src = localStorage.getItem('src') || ''
  mode = signal(localStorage.getItem('mode') || 'nuit')
  skill = signal(localStorage.getItem('skill'))
  outils = signal(outils)
  techno = computed(()=>{
    return this.outils().filter((item)=> item.type == 'techno')
  })
  methode = computed(()=>{
    return this.outils().filter((item)=> item.type == 'ux')
  })
  Ui = computed(()=>{
    return this.design().filter((item) => item.numb <=2)
  })



  projets3 = computed(()=>{
    return this.projets().filter((item) => item.numb <=3)
  }) 

  modeDark(val :string){
    this.mode.set(val)
  }
  
  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.salut', {
      translateY : -7,
      duration : 1.5,
      delay: 0.3,
      stagger: 0.2
    })

    gsap.to('.passion',{
      translateY : 0,
      duration : 1.5,
      delay: 0.5,
      stagger: 0.2
    })

    gsap.from('.babs',{
      scale:0.6,
      duration: 5,
      opacity:0,
      ease: 'bounce'
    })

    gsap.from('.outils',{
      translateY : 100,
      opacity : 0,
      duration : 1.5,
      scrollTrigger:{
        trigger : '.outils',
        start : 'top 85%',
      }
    })

    gsap.from('.projets',{
      opacity : 0,
      duration : 1.5,
      scrollTrigger:{
        trigger : '.projets',
        start : 'top 90%',
      }
    })

    gsap.from('.carteProjets',{
      translateY : 100,
      opacity : 0,
      duration : 1.5,
      scrollTrigger:{
        trigger : '.projets',
        start : 'top 65%',
      }
    })

    gsap.from('.imgArticle',{
      translateX : -100,
      opacity : 0,
      duration : 2,
      ease: 'bounce',
      scrollTrigger:{
        trigger : '.article',
        start : 'top 95%',
      }
    })

    gsap.from('.descArticle',{
      translateX : 100,
      duration : 2,
      scrollTrigger:{
        trigger : '.article',
        start : 'top 95%',
      }
    })
  }

  contact(){
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
