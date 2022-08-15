package com.developer.test;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "addresses")

public class Address {



    //instance
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "country")
    private String country;
    @Column(name = "area")
    private String area;
    @Column(name = "city")
    private String city;
    @Column(name = "street")
    private String street;
    @Column(name = "number")
    private int number;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updateAt")
    private Date updateAt;
    @Column(name = "contact_id")
    private int contactId;
    //creating constructor


    public Address(int id, String country, String area, String city, String street, int number, Date createdAt, Date updateAt, int contactId) {
        this.id = id;
        this.country = country;
        this.area = area;
        this.city = city;
        this.street = street;
        this.number = number;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.contactId = contactId;
    }

    public Address() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
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

    public int getContactId() {
        return contactId;
    }

    public void setContactId(int contactId) {
        this.contactId = contactId;
    }

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", country='" + country + '\'' +
                ", area='" + area + '\'' +
                ", city='" + city + '\'' +
                ", street='" + street + '\'' +
                ", number=" + number +
                ", createdAt=" + createdAt +
                ", updateAt=" + updateAt +
                ", contactId=" + contactId +
                '}';
    }
}
