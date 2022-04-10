import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Muscle} from "../interfaces/Muscle";
import {Video} from "../interfaces/Video";
import {Observable} from "rxjs";

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

  getAllVideos():Observable<Video[]> {
    return this.httpClient.get<Video[]>('api/video/getVideos');
  }


  getFilteredData(video: String) {
    this.httpClient.get<Video[]>(`api/video/getVideos/${video}`).subscribe(data => {
      console.log("FILTERDATA = " + data)
      this.video = data;
    })
  }

  // admin stuff
  createVideo(video: Video): Observable<string> {
    return this.httpClient.post<string>('api/video/crud/createvideo', video);
  }

  updateVideo(videoId: number, video: Video): Observable<string> {
    return this.httpClient.put<string>('api/video/crud/updatevideo/' + videoId, video);
  }

  deleteVideo(videoId: number): Observable<string> {
    return this.httpClient.delete<string>('api/video/crud/deletevideo/' + videoId);
  }
}
