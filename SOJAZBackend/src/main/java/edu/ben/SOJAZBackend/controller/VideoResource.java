package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.Video;
import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.model.dto.VideoDTO;
import edu.ben.SOJAZBackend.service.UserService;
import edu.ben.SOJAZBackend.service.VideoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/videos", produces = "application/json")
public class VideoResource {

    private final VideoService videoService;

    VideoResource(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping("/getVideos")
    public List<Video> getVideos() {
        return videoService.getAllVideos();
    }

    @GetMapping("/getVideos/{video}")
    public List<VideoDTO> getFilteredVideos(@PathVariable String videoName) {
        return this.videoService.getFilteredVideo(videoName);
    }
}
