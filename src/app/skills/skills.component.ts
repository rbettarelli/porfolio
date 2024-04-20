import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  backendSkills = [
    { name: 'Java', icon: 'assets/img/java.svg' },
    { name: 'PHP', icon: 'assets/img/php.svg' },
    { name: 'Node.js', icon: 'assets/img/node-js.svg' },
    { name: 'TypeScript', icon: 'assets/img/typescript.svg' }
  ];
  frontSkills = [
    { name: 'HTML', icon: 'assets/img/html.svg' },
    { name: 'CSS', icon: 'assets/img/css.svg' },
    { name: 'Bootstrap', icon: 'assets/img/bootstrap.svg' },
    { name: 'JavaScript', icon: 'assets/img/javascript.svg' }
  ];
 
  frameworks = [
    { name: 'Angular', icon: 'assets/img/angular.svg' },
    { name: 'React', icon: 'assets/img/react-native.svg' },
    { name: 'SpringBoot', icon: 'assets/img/spring-boot.svg' },
    { name: 'Next.JS', icon: 'assets/img/next-js.svg' },
    { name: 'Express js', icon:'assets/img/express-js.svg'}
  ];
  others = [
    { name: 'Docker', icon: 'assets/img/docker.svg' },
    { name: 'Git', icon: 'assets/img/git.svg' },
    { name: 'Nginx', icon: 'assets/img/nginx.svg' },
    { name: 'Linux', icon: 'assets/img/tux.svg' }
  ];
 
 
 

}
