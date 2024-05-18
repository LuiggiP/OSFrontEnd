import {Component, Input, numberAttribute} from '@angular/core';

@Component({
  selector: 'detail-label',
  standalone: true,
  imports: [],
  templateUrl: './detail-label.component.component.html',
  styleUrl: './detail-label.component.component.css'
})
export class DetailLabelComponent {
  @Input() label: string = "";
  @Input() information: string = "";
  @Input() outlineWidth: number = 0;
}
