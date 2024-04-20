import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl:'./projects.component.html',
  styleUrl: './projects.component.css',
  
})
export class ProjectsComponent {

  projects = [

  {name: "Whather APP", 
  description: "A página de previsão do tempo utilizando a API do OpenWeatherMap oferece aos usuários informações meteorológicas precisas e atualizadas. Com um design intuitivo e amigável, os usuários podem acessar facilmente dados como temperatura atual, previsões de temperatura futura, condições climáticas, umidade, velocidade do vento e muito mais para sua localização atual ou qualquer outra cidade ao redor do mundo.", 
  projectImg:["weatherapp1.png", "weatherapp2.png", "weatherapp3.png"] , tools:["angular","Typescript", "java" ], link: "https://github.com/rbettarelli/Weather-APP", visualization: "https://rbettarelli.github.io/Weather-APP/"},
  {name: "Battle ship", 
  description: "Este é um projeto para criar o jogo de batalha naval em JavaScript, com três classes principais: Ship, Gameboard e Player. A classe Ship representa os navios, com métodos para registrar ataques e verificar se foram afundados. Gameboard gerencia o tabuleiro, colocando navios e registrando ataques. Player representa os jogadores, com opções para jogadores reais e computadorizados. A interação com o DOM é tratada em um módulo separado. O jogo é jogado em turnos até que todos os navios de um jogador sejam afundados. Há opções extras para melhorar o jogo, como arrastar e soltar navios e aprimorar a inteligência do jogador computadorizado.", 
  projectImg:["battleship1.png", "battleship2.png", "battleship3.png"] , tools:["Webpack","JavaScript", "CSS", "HTML" ], link: "https://github.com/rbettarelli/Battle-Ship", visualization: "https://rbettarelli.github.io/Battle-Ship/"},
  {name: "Movie DB", 
  description: "Projeto criado para mostar os filmes do dia, semana e é possivel escolher os filmes por gênero. O projeto utiliza a API do The Movie Data Base ", 
  projectImg:["mvdb1.png", "mvdb2.png", "mvdb3.png", "mvdb4.png"] , tools:["Angular","API Rest", "TypeScript" ], link: "https://github.com/rbettarelli/Movie-DB", visualization: "https://rbettarelli.github.io/Movie-DB/#/"},
  {name: "Admin Dashboard", 
  description: "Dentro da proposta do The Oddim Project para treinar uma página responsiva, o projeto consiste em desenvolver um site que se adapte a diferentes tamanhos de tela, proporcionando uma experiência de usuário consistente em dispositivos móveis, tablets e desktops. Isso envolve a utilização de técnicas como media queries, flexbox e grid layout para ajustar o layout e o design da página conforme necessário.", 
  projectImg:["admdash.png"] , tools:["HTML","CSS", "WEBPACK" ], link: "https://github.com/rbettarelli/Admin-Dashboard", visualization: "https://rbettarelli.github.io/Admin-Dashboard/"},
]

modalOpen = false;
selectedProject: any
selectedProjectIndex: number = -1;

openModal(index: number) {
  this.selectedProjectIndex = index;
  this.selectedProject = this.projects[index]; // Supondo que `todoList` seja o array de projetos
  this.modalOpen = true;
}
closeModal() {
  this.modalOpen = false;
  this.selectedProject = null;
}



}
