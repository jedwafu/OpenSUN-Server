import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/core/services/database.service';
import { Observable } from 'rxjs';
import { SUNDatabaseAction } from 'src/app/shared/models/sun-database-action';

@Component({
  selector: 'app-database-actions',
  templateUrl: './database-actions.component.html',
  styleUrls: ['./database-actions.component.scss']
})
export class DatabaseActionsComponent implements OnInit {

  databaseActions: Observable<SUNDatabaseAction[]>;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseActions = this.databaseService.getActionsList();
  }

}
