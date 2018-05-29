import { Component, OnInit, DoCheck } from '@angular/core';
import { GifService } from '../gif.service';
import { Gif } from 'server/models/Gif';

@Component({
  selector: 'app-display',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit, DoCheck {

  gifs: Array<Gif>;
  gif: Gif;
  current: number = 0;
  limit: number;
  start: boolean = false;
  end: boolean = false;

  constructor(private _gifService: GifService) { }

  ngOnInit() {
    this._gifService.getTrending()
      .subscribe(resGifData => {
        for(let i=0; i<resGifData.gifs.length; i++) {
          if(resGifData.gifs[i].title === '') {
            resGifData.gifs[i].title = "Title not found";
          }
          var words = resGifData.gifs[i].title.split(' ');
          var newTitle = [];
          for(let j=0; j<words.length; j++) {
            if(words[j] !== 'GIF') {
              newTitle.push(words[j]);
            }
            else {
              break;
            }
          }
          resGifData.gifs[i].title = newTitle.join(' ').toUpperCase();
        }
        this.gifs = resGifData.gifs;
        this.gif = this.gifs[0];
        this.limit = resGifData.limit;
      });
  };

  ngDoCheck() {
    if(this.current === 0) {
      this.start = true;
    }
    else {
      this.start = false;
    }
    
    if(this.current === this.limit-1) {
      this.end = true;
    }
    else {
      this.end = false;
    }
  }

  showPrevious() {
    if(this.current !== 0) {
      this.current--;
      this.gif = this.gifs[this.current];
    }
  }

  showNext() {
    if(this.current < this.limit-1) {
      this.current++;
      this.gif = this.gifs[this.current];
    }
  }
}
