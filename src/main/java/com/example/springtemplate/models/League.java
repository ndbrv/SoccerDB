package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="leagues")
public class League {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="id")
  private Integer leagueID;
  private String leagueName;
  private String country;
  private Integer tier;
  @Column(name="league_worth")
  private Integer leagueWorth;

  @OneToMany(mappedBy = "league")
  @JsonIgnore
  private List<Team> teams;

  public Integer getID() {
    return leagueID;
  }
  public void setID(Integer id) {
    leagueID = id;
  }
  public String getLeagueName() {
    return leagueName;
  }
  public void setLeagueName(String name) {
    leagueName = name;
  }
  public String getCountry() {
    return country;
  }
  public void setCountry(String country) {
    this.country = country;
  }
  public Integer getTier() {
    return tier;
  }
  public void setTier(Integer tier) {
    this.tier = tier;
  }
  public Integer getLeagueWorth() {
    return leagueWorth;
  }
  public void setLeagueWorth(Integer worth) {
    this.leagueWorth = worth;
  }
  public List<Team> getTeams() {
    return this.teams;
  }
  public void setTeams(List<Team> teams) {
    this.teams = teams;
  }


  public League(Integer leagueID, String leagueName, String country,
                Integer tier, Integer leagueWorth, List<Team> teams) {
    this.leagueID = leagueID;
    this.leagueName = leagueName;
    this.country = country;
    this.tier = tier;
    this.leagueWorth = leagueWorth;
    this.teams = teams;

  }
  public League(){

  }

}
