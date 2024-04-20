import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Corrigido para styleUrls
})
export class NavbarComponent {

 
  constructor(private renderer: Renderer2) {}

  @ViewChild('navbarToggler', { static: false }) navbarToggler!: ElementRef;

  toggleNavbar() {
    const navbarCollapse = this.navbarToggler.nativeElement.nextElementSibling;
    const isOpen = navbarCollapse.classList.contains('show');
  
    if (isOpen) {
      navbarCollapse.classList.remove('show'); // Fecha a barra de navegação se estiver aberta
    } else {
      navbarCollapse.classList.add('show'); // Abre a barra de navegação se estiver fechada
    }
  }
 
  secoes = ['home', 'about', 'skills', 'projects', 'contact'];


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosicao = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const metadeJanela = windowHeight / 4;

    this.secoes.forEach((id) => {
      const secao = document.getElementById(id);
      const itemNavbar = document.querySelector(`.nav-link[href="#${id}"]`);

      if (secao && itemNavbar) {
        const secaoTop = secao.offsetTop;
        const secaoAltura = secao.offsetHeight;

        if (scrollPosicao + metadeJanela >= secaoTop && scrollPosicao + metadeJanela < secaoTop + secaoAltura) {
          this.renderer.addClass(itemNavbar, 'active');
        } else {
          this.renderer.removeClass(itemNavbar, 'active');
        }
      }
    });
  }

  navigateTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const itemNavbar = document.querySelector(`.nav-link[href="#${elementId}"]`);
      if (itemNavbar) {
        // Remover classe 'active' de todos os itens de navegação
        document.querySelectorAll('.nav-link').forEach((item) => {
          item.classList.remove('active');
        });
        // Adicionar classe 'active' ao item de navegação clicado
        itemNavbar.classList.add('active');
      }
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollBy(0, -30); // Adiciona um deslocamento adicional para criar espaço
    }
  }
  @HostListener('click', ['$event'])
  public onLinkClick(event: MouseEvent): void {
    const target = event.target as HTMLAnchorElement;
    if (target.classList.contains('nav-link') && target.getAttribute('href') === '#home') {
      event.preventDefault();
      const navbarHeight = document.querySelector('.navbar')!.clientHeight;
      const homeSection = document.querySelector('#home');
      const extraSpace = 50; // Valor adicional para aumentar o espaço
      const position = homeSection!.getBoundingClientRect().top + window.scrollY - navbarHeight - extraSpace;
  
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  }
  }


