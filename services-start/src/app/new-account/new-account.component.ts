import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // Hierarchical Dependecy Injector

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService ){
                this.accountsService.statusUpdated.subscribe(
                  (status: string) => alert('New status: ' + status)
                );
              } //auto typescript accessor shortcut, type not optional


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
