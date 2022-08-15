package com.developer.test;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "seenMovies")

public class SeenMovies {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)

    @Column(name = "id")
    private int id;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updateAt")
    private Date updateAt;
    @Column(name = "userId")
    private int userId;
    @Column(name = "movieId")
    private int movieId;

    public SeenMovies(int id, Date createdAt, Date updateAt, int userId, int movieId) {
        this.id = id;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.userId = userId;
        this.movieId = movieId;
    }

    public SeenMovies() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    @Override
    public String toString() {
        return "SeenMovies{" +
                "id=" + id +
                ", createdAt=" + createdAt +
                ", updateAt=" + updateAt +
                ", userId=" + userId +
                ", movieId=" + movieId +
                '}';
    }
}
