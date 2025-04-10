import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroment';
import { CatalogsResponseInterface } from '../interfaces/catalogs-response.interface';
@Injectable({
  providedIn: 'root',
})
export class CatalogsService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getCatalog(): Observable<CatalogsResponseInterface[]> {
    const url = `${this.apiUrl}people`;
    return this.httpClient
      .get<CatalogsResponseInterface[]>(url)
      .pipe((res) => res);
  }

  addCatalog(item: any): Observable<any> {
    const url = `${this.apiUrl}people`;
    return this.httpClient.post(url, item);
  }
}
