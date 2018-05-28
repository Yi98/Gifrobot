import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _getUrl = "/api/trending";
  constructor(private _http: Http) { }

  getTrending() {  
    return this._http.get(this._getUrl).pipe(
      map((response: Response) => response.json())
    );
  }
}