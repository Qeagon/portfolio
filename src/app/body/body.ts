import { Component, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-body',
  imports: [AvatarModule, CardModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {
  avatar = input<string>('');
}
