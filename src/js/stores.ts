import { writable } from "svelte/store";

import type { Player, Character, Powers, Perks } from './types'

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