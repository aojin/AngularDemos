import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //custom event
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //custom event
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; // type = ElementRef

  constructor() { }

  ngOnInit() { //lifecycle hook
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value, // local ref
      serverContent: this.serverContentInput.nativeElement.value; //local ref fetched through viewChild
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value
      serverContent: this.serverContentInput.nativeElement.value;
    });
  }
}
