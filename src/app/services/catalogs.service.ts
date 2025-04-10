import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroment';
import { CatalogsResponseInterface } from '../interfaces/catalogs-response.interface';
import { CatalogsPostInterface } from '../interfaces/catalogs.interface';
@Injectable({
  providedIn: 'root',
})
export class CatalogsService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getCatalog(): Observable<CatalogsResponseInterface[]> {
    const url = this.apiUrl;
    return this.httpClient
      .get<CatalogsResponseInterface[]>(url)
      .pipe((res) => res);
  }

  addCatalog(item: CatalogsPostInterface): Observable<CatalogsPostInterface> {
    const url = this.apiUrl;
    return this.httpClient.post<CatalogsPostInterface>(url, item);
  }
}
