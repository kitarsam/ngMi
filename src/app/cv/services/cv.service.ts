import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API } from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private selectItemSubject = new Subject<Cv>();
  /* J'ai préparé l'observable */
  selectItem$ = this.selectItemSubject.asObservable();
  private cvs: Cv[] = [
    new Cv(1, 39, 'aymen', 'sellaouti', 'teacher', '              ', '1234'),
    new Cv(
      2,
      3,
      'skander',
      'sellaouti',
      'tgangin',
      'rotating_card_profile3.png',
      '7'
    ),
    new Cv(3, 3, 'skander', 'sellaouti', 'tgangin', '', '7'),
  ];
  constructor(private http: HttpClient) {}

  // Récupérer les cvs de l'api
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  deleteCv(id: number): Observable<any> {
    /*     const params = new HttpParams().set(
      'access_token', localStorage.getItem('token') ?? ''
      );
 */ return this.http.delete<any>(API.cv + id /* {params} */);
  }

  addCv(cv: Cv): Observable<Cv> {
    /*     const headers = new HttpHeaders().set(
      'Authorization', localStorage.getItem('token') ?? ''
      ); */
    return this.http.post<Cv>(API.cv, cv /* , {headers} */);
  }

  deleteFakeCv(cv: Cv): void {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
    }
  }
  addFakeCv(cv: Cv) {
    if (this.cvs.length) {
      cv.id = this.cvs[this.cvs.length - 1].id + 1;
    } else {
      cv.id = 1;
    }
    this.cvs.push(cv);
  }

  selectItem(cv: Cv) {
    this.selectItemSubject.next(cv);
  }
}
