import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:``,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  messageFromParent = 'Dados do componente pai';
  messageFromChild: string = '';

  handleMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
