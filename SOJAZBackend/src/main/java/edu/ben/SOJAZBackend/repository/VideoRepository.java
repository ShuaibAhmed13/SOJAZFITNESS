package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VideoRepository extends JpaRepository <Video, Long> {

    public List<Video> findByVideoName(String video);
}
