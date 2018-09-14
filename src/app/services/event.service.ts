import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/events`)
      .pipe(map((res) => res.json()));
  }

  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/events/${id}`)
      .pipe(map((res) => res.json()));
  }

  edit(event) {
    return this.http.put(`${environment.BASE_URL}/api/events/${event.id}`, event)
      .pipe(map((res) => res.json()));
  }

  remove(id) {
    return this.http.delete(`${environment.BASE_URL}/api/events/${id}`)
      .pipe(map((res) => res.json()));
  }
}