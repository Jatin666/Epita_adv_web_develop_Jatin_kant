package com.developer.test;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "contacts")

public class Contact {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "gender")
    private String gender;
    @Column(name = "email")
    private String email;
    @Column(name = "birth_date")
    private Date birth_date;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updateAt")
    private Date updateAt;
    @Column(name = "userId")
    private int userId;

    public Contact(int id, String name, String gender, String email, Date birth_date, Date createdAt, Date updateAt, int userId) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.birth_date = birth_date;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.userId = userId;
    }

    public Contact() {

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

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
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

    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", birth_date=" + birth_date +
                ", createdAt=" + createdAt +
                ", updateAt=" + updateAt +
                ", userId=" + userId +
                '}';
    }
}
