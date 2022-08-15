package com.developer.test;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Movies")

public class Movies {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "trailer")
    private String trailer;
    @Column(name = "poster")
    private String poster;
    @Column(name = "release")
    private Date release;
    @Column(name = "description")
    private String description;
    @Column(name = "count")
    private int count;
    @Column(name ="rating")
    private Double rating;
    @Column(name = "createAt")
    private Date createdAt;
    @Column(name = "updateAt")
    private Date updateAt;


    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Movies(Double rating) {
        this.rating = rating;
    }

    public Movies(int id, String name, String trailer, String poster, String description, int count, Date release, Date createdAt, Date updateAt, Double rating) {
        this.id = id;
        this.name = name;
        this.trailer = trailer;
        this.poster = poster;
        this.description = description;
        this.count = count;
        this.release = release;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.rating = rating;
    }

    public Movies() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public Date getRelease() {
        return release;
    }

    public void setRelease(Date release) {
        this.release = release;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdateAt() {
        return updateAt;
    }

    public void setUpdateAt(Date updateAt) {
        this.updateAt = updateAt;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", trailer='" + trailer + '\'' +
                ", poster='" + poster + '\'' +
                ", description='" + description + '\'' +
                ", count=" + count +
                ", release=" + release +
                ", createdAt=" + createdAt +
                ", updateAt=" + updateAt +
                ", rating=" + rating +
                '}';
    }
}
