import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Muscle} from "../interfaces/Muscle";
import {Video} from "../interfaces/Video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  video = <Video[]>[];

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getVideos() {
    this.httpClient.get<Video[]>('api/video/getVideos').subscribe(data => {
      console.log(data);
      this.video = data;
    })
  }

  getFilteredData(video: String) {
    this.httpClient.get<Video[]>(`api/video/getVideos/${video}`).subscribe(data => {
      console.log("FILTERDATA = " + data)
      this.video = data;
    })
  }

}
