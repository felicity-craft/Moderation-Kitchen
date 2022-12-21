import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private baseUrl: string = 'https://localhost:7264'

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllTags(): Observable<string[]> {
    return this.httpClient.get<string[]>((`${this.baseUrl}/api/tags`))
  }
}
