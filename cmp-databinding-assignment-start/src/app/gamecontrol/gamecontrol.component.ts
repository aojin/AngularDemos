import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onStartGame() {
      this.interval = setInterval(() => {
        this.intervalFired.emit(this.lastNumber 1);
        this.lastNumber++;
      }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
