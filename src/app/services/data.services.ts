import { Item } from './../models/itens.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable ({
  providedIn: 'root'
})

export class DataService {

  public api: string = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) { }

  getItem(id: number) {
    return this.http.get<Item>(`${this.api}item/${id}.json`);
  }

  getNewsList() {
    return this.http.get<number[]>(`${this.api}topstories.json`);
  }
}