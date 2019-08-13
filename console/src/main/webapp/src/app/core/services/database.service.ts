import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SUNDatabaseAction } from 'src/app/shared/models/sun-database-action';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  public getActionsList(): Observable<SUNDatabaseAction[]> {
    //return this.http.get<SUNServer[]>('/api/secure/server').pipe();
    const actions: SUNDatabaseAction[] = [
      {
        id: 0,
        name: "Dodaj użytkownika",
        methodName: "",
        description: "",
        parameters: [
          "username", "password"
        ]
      },
      {
        id: 1,
        name: "Usuń użytkownika",
        methodName: "",
        description: "",
        parameters: [
          "username"
        ]
      },
    ];

    return of(actions);
  }
}
