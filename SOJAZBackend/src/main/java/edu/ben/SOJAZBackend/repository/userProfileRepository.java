package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.Exercise;
import edu.ben.SOJAZBackend.model.userProfileModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface userProfileRepository extends JpaRepository<userProfileModel, Long> {

    public userProfileModel findUserProfileById(Long userProfile_id);

    public userProfileModel finduserProfileModelByUser(Long user_id);
}
