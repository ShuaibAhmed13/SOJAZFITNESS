import {Component, Input, OnInit} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {Video} from "../interfaces/Video";
import {VideoService} from "../services/video.service";
import { DomSanitizer } from '@angular/platform-browser';
import {themeColor} from "../user-profile/user-profile.component";


@Component({
  selector: 'app-videosearch',
  templateUrl: './videosearch.component.html',
  styleUrls: ['./videosearch.component.scss']
})
export class VideosearchComponent implements OnInit {

  themeColor = themeColor;

  constructor(public videoService: VideoService, public sanitizer: DomSanitizer) {
  }

  @Input() video = <Video>{};
  ngOnInit(): void {
    this.getVideos();
  }

  filterVideos(filterData: any) {
    this.videoService.getFilteredData(filterData.value.filterName);
  }

  getVideos() {
    return this.videoService.getVideos();
  }
}
