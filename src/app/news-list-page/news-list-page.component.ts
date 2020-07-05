import { Item } from './../models/itens.models';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.services';


@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.css']
})
export class NewsListPageComponent implements OnInit {
  public itens$: Item[] = [];

  constructor(private data: DataService) { }

  getHostName(url: String) {
	  return url.replace('http://','').replace('https://','').replace('www.', '').split(/[/?#]/)[0];
  }

  ngOnInit(): void {

    this.data.getNewsList().subscribe((res) => {
      for (let i = 0; i <10; i++) {
        this.data.getItem(res[i]).subscribe((item) =>{
      this.itens$.push(item);
    });
  }
});
}

}
