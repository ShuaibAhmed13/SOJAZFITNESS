package edu.ben.SOJAZBackend.repository;

import edu.ben.SOJAZBackend.model.userProfileModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userProfileRepository extends JpaRepository<userProfileModel, Long> {
    public userProfileModel getUserProfileByName(String userProfile_name);
}
