import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _: any = this;
  title = 'electron12App';
  electronApi: any = undefined;

  async test(): Promise<any> {
    console.log('test electron context-bride');
    this.electronApi = () => this._.electronApi ? this._.electronApi : undefined;
    if (this.electronApi) {
      console.log('exposed api available');
      const res = await this.electronApi.invoke();
    }
  }
}
