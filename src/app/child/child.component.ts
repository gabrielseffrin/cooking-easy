import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() messageToParent = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageToParent.emit('Mensagem do componente filho para o pai');
  }
}