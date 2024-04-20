import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrl: './skill-box.component.css'
})
export class SkillBoxComponent {

  @Input() title!: string;
  @Input() skills!: { name: string, icon: string }[];

  constructor() { }
}
