import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { lastValueFrom, map, Observable } from 'rxjs';


interface ImageInfo{
  link:string;
}

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private url: string = 'https://api.imgur.com/3/image';
  private clientId: string = '19bea5a2308258a';
 

  constructor(private http:HttpClient) { }
  
   uploadImage(imageFile:File): Observable<string> {
    let formData = new FormData();
    formData.append('image', imageFile, imageFile.name);

    let header = new HttpHeaders({
      "authorization": 'Client-ID '+this.clientId
    });
   
    return this.http.post<{data:{link: string}}>(this.url, formData, {headers:header}).pipe(map(imageData => imageData.data.link));
  
  }
}