package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="teams")
public class Team {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="id")
  private Integer teamID;
  private String teamName;
  private String manager;
  @Column(name="home_field")
  private String homeField;
  @Column(name="team_worth")
  private Integer teamWorth;

  @ManyToOne
  @JsonIgnore
  private League league;

  @OneToMany(mappedBy = "team")
  @JsonIgnore
  private List<Player> players;

  //getters and setters
  public Integer getID() {
    return this.teamID;
  }
  public void setID(Integer id) {
    this.teamID = id;
  }

  public String getTeamName() {
    return this.teamName;
  }
  public void setTeamName(String name) {
    this.teamName = name;
  }

  public String getManager() {
    return this.manager;
  }
  public void setManager(String manager) {
    this.manager = manager;
  }

  public String getHomeField() {
    return this.homeField;
  }
  public void setHomeField(String field) {
    this.homeField = field;
  }

  public Integer getTeamWorth() {
    return this.teamWorth;
  }
  public void setTeamWorth(Integer worth) {
    this.teamWorth = worth;
  }

  public League getLeague() {
    return this.league;
  }
  public void setLeague(League league) {
    this.league = league;
  }

  public List<Player> getPlayers() {
    return this.players;
  }
  public void setPlayers(List<Player> players) {
    this.players = players;
  }

  Team(Integer team_id, String teamName, String manager, String home_field, Integer team_worth,
       League league, List<Player> players) {
    this.teamID = team_id;
    this.teamName = teamName;
    this.manager = manager;
    this.homeField = home_field;
    this.teamWorth = team_worth;
    this.league = league;
    this.players = players;

  }

  public Team() {

  }


}
