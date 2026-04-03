import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {
@Input() avatar: string = '';
}
