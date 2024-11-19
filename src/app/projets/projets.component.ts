import { AfterViewInit, Component, computed, Signal, signal } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { projets } from '../projet';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [NavComponent,NgOptimizedImage,FooterComponent],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent implements AfterViewInit {

  readonly projets = signal(projets)

  src = localStorage.getItem('src') || ''
  mode = signal(localStorage.getItem('mode') || 'nuit')
  
  modeDark(val :string){
    this.mode.set(val)
  }

  
  ngAfterViewInit(): void {
   gsap.registerPlugin(ScrollTrigger);
 
   gsap.from('.projets', {
     opacity :0,
     duration : 3,
     delay: 0.3,
   })
 
   gsap.from('.description', {
     translateY : 50,
     opacity :0,
     duration : 2,
     delay: 0.3,
   })
 
   gsap.from('#MBI', {
     translateY : 50,
     opacity :0,
     duration : 2,
     delay: 0.3,
     scrollTrigger:{
       trigger :'#MBI',
       start :'top 75%',
     }
   })
 
   gsap.from('#Maodo', {
     translateY : 50,
     opacity :0,
     duration : 2,
     delay: 0.3,
     scrollTrigger:{
       trigger :'#Maodo',
       start :'top 75%',
     }
   })
 
   gsap.from('#B-WATCH', {
     translateY : 50,
     opacity :0,
     duration : 2,
     delay: 0.3,
     scrollTrigger:{
       trigger :'#B-WATCH',
       start :'top 75%',
     }
   })
 
   gsap.from('#e-plomb', {
     translateY : 50,
     opacity :0,
     duration : 2,
     delay: 0.3,
     scrollTrigger:{
       trigger :'#e-plomb',
       start :'top 75%',
     }
   })
 
   gsap.from('#Pokedex', {
     translateY : 50,
     opacity :0,
     duration : 2,
     delay: 0.3,
     scrollTrigger:{
       trigger :'#Pokedex',
       start :'top 75%',
     }
   })
  }

}
