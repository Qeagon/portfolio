import { Component, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-body',
  imports: [AvatarModule, CardModule, TranslateModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {
  avatar = input<string>('');
}
