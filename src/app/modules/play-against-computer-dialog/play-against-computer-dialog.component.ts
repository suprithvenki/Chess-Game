import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { StockfishService } from '../computer-mode/stockfish.service';
import { Color } from '../../chess-logic/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-against-computer-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './play-against-computer-dialog.component.html',
  styleUrl: './play-against-computer-dialog.component.css'
})
export class PlayAgainstComputerDialogComponent {
  public stockfishLevels: readonly number[] = [9, 10, 11, 12, 13];
  public stockfishLevelIndex: number = 0;

  private stockfishService: StockfishService = inject(StockfishService);
  private dialog: MatDialog = inject(MatDialog);
  private router: Router = inject(Router);

  public selectStockfishLevel(level: number): void {
    this.stockfishLevelIndex = level;
  }

  public play(color: 'w' | 'b'): void {
    this.dialog.closeAll();
    this.stockfishService.computerConfiguration$.next({
      color: color === 'w' ? Color.Black : Color.White,
      level: this.stockfishLevels[this.stockfishLevelIndex]
    });
    this.router.navigate(['against-computer']);
  }

  public closeDialog(): void {
    this.router.navigate(['against-friend']);
  }
}
