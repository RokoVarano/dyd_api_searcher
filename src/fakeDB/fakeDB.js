const main = {
  'ability-scores': '/api/ability-scores', alignments: '/api/alignments', backgrounds: '/api/backgrounds', classes: '/api/classes', conditions: '/api/conditions', 'damage-types': '/api/damage-types', 'equipment-categories': '/api/equipment-categories', equipment: '/api/equipment', feats: '/api/feats', features: '/api/features', languages: '/api/languages', 'magic-items': '/api/magic-items', 'magic-schools': '/api/magic-schools', monsters: '/api/monsters', proficiencies: '/api/proficiencies', races: '/api/races', rules: '/api/rules', 'rule-sections': '/api/rule-sections', skills: '/api/skills', spells: '/api/spells', subclasses: '/api/subclasses', subraces: '/api/subraces', traits: '/api/traits', 'weapon-properties': '/api/weapon-properties',
};

const dragon = {
  index: 'adult-black-dragon',
  name: 'Adult Black Dragon',
  size: 'Huge',
  type: 'dragon',
  subtype: null,
  alignment: 'chaotic evil',
  armor_class: 19,
  hit_points: 195,
  hit_dice: '17d12',
  speed: {
    walk: '40 ft.',
    fly: '80 ft.',
    swim: '40 ft.',
  },
  strength: 23,
  dexterity: 14,
  constitution: 21,
  intelligence: 14,
  wisdom: 13,
  charisma: 17,
  proficiencies: [
    {
      proficiency: {
        index: 'saving-throw-dex',
        name: 'Saving Throw: DEX',
        url: '/api/proficiencies/saving-throw-dex',
      },
      value: 7,
    },
    {
      proficiency: {
        index: 'saving-throw-con',
        name: 'Saving Throw: CON',
        url: '/api/proficiencies/saving-throw-con',
      },
      value: 10,
    },
    {
      proficiency: {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
      value: 6,
    },
    {
      proficiency: {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
      value: 8,
    },
    {
      proficiency: {
        index: 'skill-perception',
        name: 'Skill: Perception',
        url: '/api/proficiencies/skill-perception',
      },
      value: 11,
    },
    {
      proficiency: {
        index: 'skill-stealth',
        name: 'Skill: Stealth',
        url: '/api/proficiencies/skill-stealth',
      },
      value: 7,
    },
  ],
  damage_vulnerabilities: [],
  damage_resistances: [],
  damage_immunities: [
    'acid',
  ],
  condition_immunities: [],
  senses: {
    blindsight: '60 ft.',
    darkvision: '120 ft.',
    passive_perception: 21,
  },
  languages: 'Common, Draconic',
  challenge_rating: 14,
  xp: 11500,
  special_abilities: [
    {
      name: 'Amphibious',
      desc: 'The dragon can breathe air and water.',
    },
    {
      name: 'Legendary Resistance',
      desc: 'If the dragon fails a saving throw, it can choose to succeed instead.',
      usage: {
        type: 'per day',
        times: 3,
      },
    },
  ],
  actions: [
    {
      name: 'Multiattack',
      desc: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.',
      options: {
        choose: 1,
        from: [
          [
            {
              name: 'Frightful Presence',
              count: 1,
              type: 'ability',
            },
            {
              name: 'Bite',
              count: 1,
              type: 'melee',
            },
            {
              name: 'Claw',
              count: 2,
              type: 'melee',
            },
          ],
        ],
      },
      damage: [],
    },
    {
      name: 'Bite',
      desc: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.',
      attack_bonus: 11,
      damage: [
        {
          damage_type: {
            index: 'piercing',
            name: 'Piercing',
            url: '/api/damage-types/piercing',
          },
          damage_dice: '2d10+6',
        },
        {
          damage_type: {
            index: 'acid',
            name: 'Acid',
            url: '/api/damage-types/acid',
          },
          damage_dice: '1d8',
        },
      ],
    },
    {
      name: 'Claw',
      desc: 'Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.',
      attack_bonus: 11,
      damage: [
        {
          damage_type: {
            index: 'slashing',
            name: 'Slashing',
            url: '/api/damage-types/slashing',
          },
          damage_dice: '2d6+6',
        },
      ],
    },
    {
      name: 'Tail',
      desc: 'Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.',
      attack_bonus: 11,
      damage: [
        {
          damage_type: {
            index: 'bludgeoning',
            name: 'Bludgeoning',
            url: '/api/damage-types/bludgeoning',
          },
          damage_dice: '2d8+6',
        },
      ],
    },
    {
      name: 'Frightful Presence',
      desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
      dc: {
        dc_type: {
          index: 'wis',
          name: 'WIS',
          url: '/api/ability-scores/wis',
        },
        dc_value: 16,
        success_type: 'none',
      },
      damage: [],
    },
    {
      name: 'Acid Breath',
      desc: 'The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.',
      usage: {
        type: 'recharge on roll',
        dice: '1d6',
        min_value: 5,
      },
      dc: {
        dc_type: {
          index: 'dex',
          name: 'DEX',
          url: '/api/ability-scores/dex',
        },
        dc_value: 18,
        success_type: 'half',
      },
      damage: [
        {
          damage_type: {
            index: 'acid',
            name: 'Acid',
            url: '/api/damage-types/acid',
          },
          damage_dice: '12d8',
        },
      ],
    },
  ],
  legendary_actions: [
    {
      name: 'Detect',
      desc: 'The dragon makes a Wisdom (Perception) check.',
    },
    {
      name: 'Tail Attack',
      desc: 'The dragon makes a tail attack.',
    },
    {
      name: 'Wing Attack (Costs 2 Actions)',
      desc: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.',
      dc: {
        dc_type: {
          index: 'dex',
          name: 'DEX',
          url: '/api/ability-scores/dex',
        },
        dc_value: 19,
        success_type: 'none',
      },
      damage: [
        {
          damage_type: {
            index: 'bludgeoning',
            name: 'Bludgeoning',
            url: '/api/damage-types/bludgeoning',
          },
          damage_dice: '2d6+6',
        },
      ],
    },
  ],
  url: '/api/monsters/adult-black-dragon',
};

const mockGetCategories = (filter) => Object.entries(main)
  .filter((pair) => (filter ? pair[0].includes(filter) : true))
  .map((pair) => ({ key: pair[0] }));

export default mockGetCategories;
export { dragon };
