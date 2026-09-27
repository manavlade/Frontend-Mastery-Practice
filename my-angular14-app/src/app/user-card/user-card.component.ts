import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() name: string = '';
  @Input() role: string = '';
  @Input() isActive: boolean = true;

  @Output() cardClicked = new EventEmitter<string>();

  onClick() {
    this.cardClicked.emit(this.name);
  }

}
