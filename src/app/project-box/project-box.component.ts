import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrl: './project-box.component.css'
})
export class ProjectBoxComponent {

  @Input() projectImg!: string [];
  @Input() description!: string;
  @Input() name!: string;
  @Input() imagePosition!: 'left' | 'right';
  @Input() projectId!: number;
  @Input() index!: number;
  @Input() carouselId!: string;
  @Input() carouselTarget!: string;
  @Input() visualization!: string

  @Output() openModal = new EventEmitter<number>();

  onClick() {
    this.openModal.emit(this.projectId);
  }
  

}


