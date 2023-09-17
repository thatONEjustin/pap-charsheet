import { writable } from "svelte/store";

type Player = {
  name: String,
  character_name: String,
  character_alias: String,
  team: String,
  motivation: String,
  power_level: String,
  hero_points: String,
}

type Ability = {
  name: String,
  rank: number,
}

type Talent = {
  name: String,
  rank: number,
  page?: Number
}

type Character = {
  abilities: Array<Ability>,
  talents: Array<Talent>
}

type Superpower = {
  name: String,
  source: String,
  rank: Number,
  description: String,
  hero_point_cost: Number,
  page?: Number
}

type Perk = {
  name: String,
  hero_point_cost: Number,
  description: String,
  page?: Number
}

type Powers = Array<Superpower>

type Perks = Array<Perk>

interface UserData {
  player: Player,
  character: Character, 
  powers: Powers,
  perks: Perks,
}

let data: UserData = {
  player: {
    name: '',
    character_name: '',
    character_alias: '',
    team: '',
    motivation: '',
    power_level: '',
    hero_points: '',
  },
  
  character: {
    abilities: [],
    talents: [],
  },

  powers: [],

  perks: []
}

export const userData = writable(data)


/* export const userData = writable({
  player: {
    name: '',
    character_name: '',
    character_alias: '',
  },

  character: {
    abilities: [],
    talents: [],
  },

  powers: [],

  perks: []
}) */

/* export const userData = writable({
  player: {
    name: '',
    character_name: '',
    character_alias: '',
  },

  character: {
    abilities: [],
    talents: [],
  },

  powers<Superpower>: [],

  perks: []
}) */