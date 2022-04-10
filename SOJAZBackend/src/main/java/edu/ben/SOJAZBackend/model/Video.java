package edu.ben.SOJAZBackend.model;

import lombok.*;

import javax.persistence.*;

@Entity
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Table(name = "video")
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "video_name")
    String videoName;
    @Column(name = "author")
    String author;
    @Column(name = "link")
    String link;
}
