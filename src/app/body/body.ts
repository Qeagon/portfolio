import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-body',
  imports: [AvatarModule, CardModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {
  @Input() avatar: string = '';
}