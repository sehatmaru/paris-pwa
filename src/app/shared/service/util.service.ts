import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  showSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, { duration: 5000, panelClass: 'red-snackbar' })
  }
}
