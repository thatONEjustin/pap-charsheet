export type Player = {
  name: String,
  character_name: String,
  character_alias: String,
  team: String,
  motivation: String,
  power_level: String,
  hero_points: String,
}

export type Ability = {
  name: String,
  rank: number,
}

export type Talent = {
  name: String,
  rank: number,
  page?: Number
}

export type Character = {
  abilities: Array<Ability>,
  talents: Array<Talent>
}

export type Superpower = {
  [name: string] : string,
  source?: string,
  rank?: number,
  desc?: string,
  cost?: number,
  rules?: string,
  page?: number
}

export type Powers = Array<Superpower>

export type Perk = {
  name: String,
  hero_point_cost: Number,
  description: String,
  page?: Number
}

export type Perks = Array<Perk>