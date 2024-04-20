import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  @Input() projectImg!: string[];
  @Input() description!: string;
  @Input() name!: string;
  @Input() modalOpen!: boolean;
  @Input() tools!: string[]
  @Input() index!: number;
  @Input() carouselId!: string;
  @Input() link!: string;
  @Input() visualization!: string;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }
}
