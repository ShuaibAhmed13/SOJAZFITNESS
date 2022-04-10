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


    public String createVideo(Video video) {
        try {
            videoRepository.save(video);
            return "Video successfully created.";
        } catch (Exception ex) {
            return "Video could not be created.";
        }
    }

    public String updateVideo(Long videoId, Video video) {
        try {
            video.setId(videoId);
            videoRepository.save(video);
            return "Video successfully updated.";
        } catch (Exception ex) {
            return "Video could not be updated.";
        }
    }

    public String deleteVideo(Long videoId) {
        try {
            videoRepository.deleteById(videoId);
            return "Video successfully deleted.";
        } catch (Exception ex) {
            return "Video could not be deleted.";
        }
    }
}
