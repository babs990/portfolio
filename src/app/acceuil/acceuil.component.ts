import { AfterViewInit, Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NavComponent,NgOptimizedImage],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements AfterViewInit{

   
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.salut', {
      translateY : -7,
      duration : 1,
      delay: 0.3,
      stagger: 0.2
    })

    gsap.to('.passion',{
      translateY : 0,
      duration : 1,
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
  }
}
