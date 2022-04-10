package edu.ben.SOJAZBackend.controller;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.Video;
import edu.ben.SOJAZBackend.model.dto.ExerciseDTO;
import edu.ben.SOJAZBackend.model.dto.VideoDTO;
import edu.ben.SOJAZBackend.service.UserService;
import edu.ben.SOJAZBackend.service.VideoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/video", produces = "application/json")
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
    public List<VideoDTO> getFilteredVideos(@PathVariable String video) {
        return this.videoService.getFilteredVideo(video);
    }

    // admin privileges
    @PostMapping(value = "/crud/createvideo")
    public ResponseEntity<String> createVideo(@RequestBody Video video) {
        return new ResponseEntity<String>(videoService.createVideo(video), HttpStatus.CREATED);
    }

    @PutMapping(value = "/crud/updatevideo/{videoId}")
    public ResponseEntity<String> updateVideo(@PathVariable Long videoId, @RequestBody Video video) {
        return new ResponseEntity<String>(videoService.updateVideo(videoId, video), HttpStatus.OK);
    }

    @DeleteMapping(value = "/crud/deletevideo/{videoId}")
    public ResponseEntity<String> deleteVideo(@PathVariable Long videoId) {
        return new ResponseEntity<String>(videoService.deleteVideo(videoId), HttpStatus.OK);
    }
}
