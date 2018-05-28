import { Component, OnInit } from '@angular/core';
import { GifService } from '../../gif.service';
import { Gif } from 'server/models/Gif';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  gifs: Array<Gif>;
  gif: Gif;
  current: number = 0;
  limit: number;

  constructor(private _gifService: GifService) { }

  ngOnInit() {
    this._gifService.getGifs()
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
