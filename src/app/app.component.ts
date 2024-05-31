import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { IframeComponent } from './dialog/iframe/iframe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  documento: string = ''

  openDialog(): void {
    const dialogRef = this.dialog.open(IframeComponent, {
      width: '100%',
      height: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.documento = result
    });
  }

  downloadFile(base64:any){
    const src = `data:application/pdf;base64,${base64}`;
    const link = document.createElement("a")
    link.href = src
    link.download = "demo.pdf"
    link.click()
    
    link.remove()
  }

}
