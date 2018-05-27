import { Component, OnInit } from '@angular/core';
import { GifService } from '../../../gif.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  gifs: any;

  constructor(private _gifService: GifService) { }

  ngOnInit() {
    this._gifService.getGifs()
      .subscribe(resGifData => this.gifs = resGifData.gifs);
  }

}
