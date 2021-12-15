package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="players")
public class Player {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="id")
  private Integer playerID;
  @Column(name="first_name")
  private String firstName;
  @Column(name="last_name")
  private String lastName;
  private String username;
  private String password;
  private String email;
  @Column(name="date_of_birth")
  private Date dateOfBirth;
  @Column(columnDefinition = "ENUM('Forward','Midfielder','Defender','Goalkeeper')")
  @Enumerated(EnumType.STRING)
  private Position position;

  @ManyToOne
  private Team team;

  //getters and setters

  public Integer getID() {
    return this.playerID;
  }
  public void setID(Integer playerID) {
    this.playerID = playerID;
  }
  public String getFirstName() {
    return this.firstName;
  }
  public void setFirstName(String name) {
    this.firstName = name;
  }
  public String getLastName() {
    return this.lastName;
  }
  public void setLastName(String name) {
    this.lastName = name;
  }
  public String getUsername() {
    return this.username;
  }
  public void setUsername(String username) {
    this.username = username;
  }
  public String getPassword() {
    return this.password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getEmail() {
    return this.email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public Position getPosition() {
    return this.position;
  }
  public void setPosition(Position position) {
    this.position = position;
  }
  public Date getDateOfBirth() {
    return this.dateOfBirth;
  }
  public void setDateOfBirth(Date date) {
    this.dateOfBirth = date;
  }
  public Team getTeam() {
    return this.team;
  }
  public void setTeam(Team team) {
    this.team = team;
  }

  public Player(Integer playerID, String firstName, String lastName,
                String username, String password,String email, Date dateOfBirth,Position position, Team team) {
    this.playerID = playerID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.username = username;
    this.dateOfBirth = dateOfBirth;
    this.position = position;
    this.team = team;
  }


  public Player() {
  }
}
