package com.developer.test;

import javax.persistence.*;
import java.sql.Date;


@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updateAt")
    private Date updateAt;
    @Column(name = "userId")
    private int userId;

    public Role(int id, String name, Date createdAt, Date updateAt, int userId) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.userId = userId;
    }

    public Role() {

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
        return "Role{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", createdAt=" + createdAt +
                ", updateAt=" + updateAt +
                ", userId=" + userId +
                '}';
    }
}
