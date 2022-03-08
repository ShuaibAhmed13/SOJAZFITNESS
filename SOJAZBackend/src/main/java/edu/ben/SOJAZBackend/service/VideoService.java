package edu.ben.SOJAZBackend.service;

import edu.ben.SOJAZBackend.model.Muscle;
import edu.ben.SOJAZBackend.model.Video;
import edu.ben.SOJAZBackend.model.dto.MuscleDTO;
import edu.ben.SOJAZBackend.model.dto.VideoDTO;
import edu.ben.SOJAZBackend.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VideoService {

    @Autowired
    VideoRepository videoRepository;

    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    public List<VideoDTO> getFilteredVideo(String videoName) {
        List<Video> videoFiltered= videoRepository.findByVideoName(videoName);
        List<VideoDTO> answer = new ArrayList<>();
        for (Video video: videoFiltered) {
            answer.add(new VideoDTO(video.getId(), video.getVideoName(), video.getAuthor(), video.getLink()));
        }
        return answer;
    }

}
