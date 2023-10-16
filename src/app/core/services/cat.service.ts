import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CatBreed, CatImageData } from '../models/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  public getCats(): Observable<CatBreed[]>{
    return this.http.get<CatBreed[]>(`${environment.API}/breeds`)
  }

  public getCatImages(referenceImageId: string): Observable<CatImageData>{
    return this.http.get<CatImageData>(`${environment.API}/images/${referenceImageId}`)
  }
}
