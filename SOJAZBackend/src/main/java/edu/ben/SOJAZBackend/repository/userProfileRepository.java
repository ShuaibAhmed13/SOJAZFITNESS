package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.UserProfileModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userProfileRepository extends JpaRepository<UserProfileModel, Long> {

    public UserProfileModel findUserProfileById(Long userProfile_id);
    public UserProfileModel findUserProfileModelByUserId(Long user_id);
    public UserProfileModel findByUserId(Long user_id);
}
