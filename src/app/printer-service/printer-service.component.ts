import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printer-service',
  templateUrl: './printer-service.component.html',
  styleUrls: ['./printer-service.component.css']
})
export class PrinterServiceComponent {

  constructor() { }

  private printerAddress: string = '10.227.0.0'

  sendPrinterCommand(text: string, paperFormat: string, position: string):void {
     let connection = new WebSocket("ws://" + this.printerAddress + ':9000');


     connection.onopen = () => {

      let printCommand = String.fromCharCode(27) + String.fromCharCode(64) + 
      String.fromCharCode(27) + String.fromCharCode(107) + paperFormat + 
      String.fromCharCode(27) + String.fromCharCode(74) + position + 
      text + 
      String.fromCharCode(12);

      connection.send(printCommand);

      connection.close();
     }
  }

  print(){
    let text = 'hello world';
    let paperFormat = 'a4';
    let position = '25';

    this.sendPrinterCommand(text, paperFormat, position);
  }

}
