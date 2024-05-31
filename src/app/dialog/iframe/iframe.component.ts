import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit{

  constructor(
    public dialoRef: MatDialogRef<IframeComponent>,
  ){}
  data: string = 'http://localhost:4200/firma?M80K/HBkVjB+WEljpxkHbPTCCHMN/NCvAkxRLZpzo/rUBnAHZv9oMED4oNipqHgWIhj8PSUXv4xYZ6Fl0vPf2+THhP5PoJCB4Uetq5IsIJ1c41Mf9WqyytqiEq78wkEreF8xQnpxJQ7IK5skb3kht1GZlWZdkpmP5l4RjjzLGp0='

  success: boolean = false

  ngOnInit() {
    // Añadir el listener cuando el componente se inicializa
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  ngOnDestroy() {
    // Remover el listener cuando el componente se destruye
    window.removeEventListener('message', this.handleMessage.bind(this));
  }
 
  handleMessage(event: MessageEvent) {
    console.log(event.data);
    
    const data = event.data;

    if (data.status === 'succes') {
      // Manejar el éxito del proceso de firma
      
      this.success = false
      console.log('Firma exitosa:', data.data);
      this.dialoRef.close(data.documentBase64);
    }
  }

}
