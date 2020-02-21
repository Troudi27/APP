import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Licence } from '../models/licence';

const BASE_URL = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})
export class LicenceService {

  constructor(private httpClient: HttpClient) { }
  getLicences(): Observable<Licence[]> {
return this.httpClient.get<Licence[]>(`${BASE_URL}/licences`);
  }
}
