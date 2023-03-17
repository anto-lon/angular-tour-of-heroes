import { Component } from '@angular/core';
// import { PrinterServiceComponent } from './printer-service/printer-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  constructor(){}

  print(){
    let text = 'hello world';
    let paperFormat = 'a4';
    let position = '25';

    // this.printerService.sendPrinterCommand(text, paperFormat, position)
  }
}
