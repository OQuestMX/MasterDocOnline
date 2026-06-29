/* ══════════════════════════════════════════════════════════════
   EPIC QUEST — GAME DATA (English)
   Loaded by index.html via <script src="gamedata.js">

   d12 TABLE SYSTEM:
   Abilities with tabla:true are resolved by rolling 1d12 after paying Aen.
   Bands: b1 (1-4) · b2 (5-8) · b3 (9-11) · b12 (12 = maximum effect)
   echoDC:true → on Heroics, the b12 effect requires beating d20+Echo vs DC 15.
   ══════════════════════════════════════════════════════════════ */

var GAMEDATA = {

rules: {
  "hpBase": 10,
  "aenPerTurn": 2,
  "actionsPerTurn": 2,
  "movementPerTurn": 1,
  "echoMaxPoints": 5,
  "kitAbilityCost": 3,
  "turnStructure": "1 Movement + 2 Actions per turn. Each action can be a normal attack or an ability.",
  "sinergiaRule": "Only the active player can start it. Calls allies who haven't taken their turn yet. They sacrifice their future turn.",
  "damageRule": "Damage ability: pay Aen → straight to the table → roll d12 for the result. d20+mod only for skill checks."
},

planes: [{"id":"avelir","name":"Avelir","dc":0,"extraDamage":null,"auto":true},{"id":"velo","name":"Velo","dc":15,"extraDamage":"2d6","auto":false},{"id":"cuenco","name":"Cuenco","dc":18,"extraDamage":"2d12","auto":false},{"id":"interplano","name":"Interplano","dc":20,"extraDamage":"2d20","auto":false}],

conditions: [
  {id:"blinded",name:"Blinded",effect:"Can't see. Fails checks requiring sight. Attacks against it have advantage; its attacks have disadvantage."},
  {id:"charmed",name:"Charmed",effect:"Can't attack the charmer. The charmer has advantage on social interactions."},
  {id:"deafened",name:"Deafened",effect:"Can't hear. Fails checks requiring hearing."},
  {id:"frightened",name:"Frightened",effect:"Disadvantage on attacks and checks while it can see the source of fear. Can't willingly move closer to it."},
  {id:"grappled",name:"Grappled",effect:"Speed reduced to 0. Ends if the grappler is incapacitated or forced out of reach."},
  {id:"incapacitated",name:"Incapacitated",effect:"Can't take actions or reactions."},
  {id:"invisible",name:"Invisible",effect:"Impossible to see without magic. Has advantage on attacks; attacks against it have disadvantage."},
  {id:"paralyzed",name:"Paralyzed",effect:"Incapacitated, can't move or speak. Fails Body saves. Attacks have advantage; melee hits are critical."},
  {id:"petrified",name:"Petrified",effect:"Turned to solid substance. Weight x10. Unconscious. Resistance to all damage. Immune to poison and disease."},
  {id:"poisoned",name:"Poisoned",effect:"Disadvantage on attacks and ability checks."},
  {id:"prone",name:"Prone",effect:"Can only crawl. Disadvantage on attacks. Melee attacks against it have advantage; ranged have disadvantage."},
  {id:"restrained",name:"Restrained",effect:"Speed 0. Attacks against it have advantage. Its attacks and Body saves have disadvantage."},
  {id:"stunned",name:"Stunned",effect:"Incapacitated, can't move, speaks haltingly. Fails Body saves. Attacks have advantage."},
  {id:"unconscious",name:"Unconscious",effect:"Incapacitated, falls prone, drops what it holds. Fails Body saves. Attacks have advantage; melee hits are critical."},
  {id:"burning",name:"Burning",effect:"Takes 1d4 fire damage at the start of each turn. Can use an action to put it out."},
  {id:"bleeding",name:"Bleeding",effect:"Loses 1 Vitality at the start of each turn for 2 turns."},
  {id:"frozen",name:"Frozen",effect:"Speed halved. Disadvantage on Body attacks. Lasts 1 turn."},
  {id:"slowed",name:"Slowed",effect:"Speed halved. -2 to AC and Body saves."}
],

creatureTypes: ["Beast","Undead","Construct","Elemental","Humanoid","Demon","Aberration","Plant","Dragon"],

difficulties: [
  {id:"easy",name:"Easy",desc:"Minor threat. 1-2 players can handle it."},
  {id:"medium",name:"Medium",desc:"Real challenge. Requires group coordination."},
  {id:"hard",name:"Hard",desc:"Serious danger. Casualties possible."},
  {id:"boss",name:"Boss",desc:"Climactic encounter. The whole group pushed to the limit."}
],

rarities: [
  {id:"common",name:"Common",color:"#666"},
  {id:"uncommon",name:"Uncommon",color:"#247038"},
  {id:"rare",name:"Rare",color:"#2858a0"},
  {id:"legendary",name:"Legendary",color:"#8a6f0a"}
],

defaultLairActions: [
  "The fog thickens — reduced visibility",
  "The ground collapses — difficult movement",
  "The fire spreads — area damage",
  "A tree / structure falls — blocks the path",
  "Enemy reinforcements arrive",
  "Arcane discharge — random damage",
  "The water rises — terrain changes",
  "The ground splits open — falling hazard",
  "Magical darkness — everyone blinded 1 turn",
  "Hurricane wind — pushes 2 tiles"
],

factions: [
  {id:"cheran",name:"Theocracy of Cherán",color:"#9b2020",icon:"🔥",
   declaration:"Our god is the only one. He will provide. The infidels will be purified.",
   question:"Is your faith your strength or your chain?",
   feats:[
    {response:"Faith is my strength",name:"Conviction of Engar",attr:"Body",desc:"Advantage when your physical presence as a bearer of the faith must impose itself."},
    {response:"Faith is my chain",name:"The Crack in Faith",attr:"Mind",desc:"Advantage when persuading, debating, or influencing those who share or question a faith."},
    {response:"Faith is my doubt",name:"Necessary Heresy",attr:"Echo",desc:"Advantage when channeling magic that contradicts established doctrine. Unsanctioned spells gain power."}
   ]},

  {id:"vorin",name:"House Vorin",color:"#1a4a7a",icon:"⚖️",
   declaration:"The game is life. The seekers win. The weak crumble.",
   question:"Do you play to win or to learn?",
   feats:[
    {response:"To win",name:"Predator's Instinct",attr:"Body",desc:"Advantage on attacks against vulnerable or outnumbered enemies."},
    {response:"To learn",name:"Chess Mind",attr:"Mind",desc:"Advantage when predicting enemy moves or planning group strategy."},
    {response:"To play",name:"Gambler's Luck",attr:"Echo",desc:"Once per session, you can reroll any die you've rolled."}
   ]},

  {id:"escarlata",name:"The Scarlet Order",color:"#8b1a1a",icon:"🛡️",
   declaration:"Justice is our responsibility. To act is honor.",
   question:"Is vengeance justice?",
   feats:[
    {response:"Yes",name:"Sacred Vendetta",attr:"Body",desc:"Advantage on attacks against those who have harmed your own."},
    {response:"No, but protection is",name:"Shield of the Innocent",attr:"Mind",desc:"Advantage when defending civilians or allies in danger. They reduce negative conditions."},
    {response:"Vengeance is cycles",name:"Impossible Redemption",attr:"Echo",desc:"Advantage when you try to calm conflicts or turn enemies. Once per scene."}
   ]},

  {id:"aetharion",name:"Aetharion",color:"#c9a84c",icon:"🦅",
   declaration:"Knowledge is eternal life. The ignorant are doomed.",
   question:"Is knowledge shared or possessed?",
   feats:[
    {response:"It is possessed",name:"Guarded Secrets",attr:"Mind",desc:"Advantage when keeping information. You can lie while detecting lies in others."},
    {response:"It is shared",name:"Open Wisdom",attr:"Mind",desc:"Advantage when you teach or pass on knowledge. Allies learn abilities faster."},
    {response:"It is consumed",name:"Magic of Oblivion",attr:"Echo",desc:"Advantage on Control spells. You can erase specific memories once per session."}
   ]},

  {id:"urushan",name:"Urushan",color:"#2a6a6a",icon:"⚓",
   declaration:"Nature is the law. Balance and cycle are sacred.",
   question:"Do you sacrifice the individual for the tribe?",
   feats:[
    {response:"Always",name:"Tribal Duty",attr:"Body",desc:"Advantage on actions that benefit the group even if they harm you."},
    {response:"Only when necessary",name:"Balance of Forces",attr:"Mind",desc:"Advantage when you reconcile opposing factions or mediate conflicts."},
    {response:"Never, I am free",name:"Wild Spirit",attr:"Echo",desc:"Advantage on attacks when no allies are adjacent. The lone wolf is strong."}
   ]},

  {id:"pueblos",name:"The Roofless Peoples",color:"#6a4a2a",icon:"🏕️",
   declaration:"We don't need a kingdom. We need community.",
   question:"What do you love more: freedom or family?",
   feats:[
    {response:"Freedom",name:"Nomad of the Wind",attr:"Body",desc:"Advantage on movement and exploration. You ignore difficult terrain once per combat."},
    {response:"Family",name:"Blood Bond",attr:"Mind",desc:"Advantage when you fight alongside your tribe-kin. You share resistances."},
    {response:"I need both",name:"Rebel at Heart",attr:"Echo",desc:"Advantage on actions that defy unjust authority. Once per session, ignore a failure."}
   ]}
],

classes: [
  {id:"fury",name:"Fury",nameEs:"Fury",type:"Might",resource:"FURY",
   abilities:[
    {name:"Unstoppable",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage on impact",b2:"7 damage, knocks down the target",b3:"9-11 damage, knocks down",b12:"12 damage to EVERYONE you touch in the line, all knocked down, and you become unstoppable (immune to knockdown) until your next turn"},desc:"Charge in a straight line crushing everything. Pierces 3 tiles, knocks down on impact."},
    {name:"Come At Me",type:"Base",cost:"2 Aen",dmg:null,desc:"Taunt all enemies within radius 2. You gain +1 Aen per attack received."},
    {name:"Still Standing",type:"Heroica",cost:"3 Aen",dmg:null,desc:"You refuse to fall. Recover 8 Vitality and a free counterattack. Drawback: -1d8 Vitality when it ends."}
   ],
   subclasses:[
    {id:"berserker",name:"Berserker",desc:"The more damage you take, the more dangerous you become.",
         abilities:[
          {name:"Blood Frenzy",type:"Base",cost:"3 Aen",dmg:null,desc:"+2 damage per wound taken, ignores armor. Drawback: -1d6 Vitality on activation."},
          {name:"Seeing Red",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Double damage 2 rounds. You attack the nearest, ally or enemy. Drawback: -1d10 Vitality when it ends."}
        ]},
    {id:"colossus",name:"Colossus",desc:"A walking storm. Unstoppable presence.",
         abilities:[
          {name:"Earthquake",type:"Base",cost:"4 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"2 damage to all in the area",b2:"5 damage to all, knocked down",b3:"8 damage to all, knocked down",b12:"10 damage to all, knocked down and immobilized 1 round, and the terrain becomes difficult permanently"},desc:"You strike the ground. Radius 3 area."},
          {name:"Eye of the Storm",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"4 damage to all",b2:"7 damage to all, knocked down",b3:"9 damage to all, knocked down + stunned 1 round",b12:"12 damage to all, knocked down and stunned 2 rounds; the terrain becomes electrified (anyone stepping on it takes damage)"},desc:"You become the eye of the storm. Radius 4."}
        ]},
    {id:"voivode",name:"Voivode",desc:"Aggressive leader. His fury spreads to the group.",
         abilities:[
          {name:"War Cry",type:"Base",cost:"3 Aen",dmg:null,desc:"Allies within radius 3 gain +4 damage and +1 Aen for 2 rounds. Drawback: -1d6 Vitality on activation."},
          {name:"To The Last",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"One ally recovers 6 Vitality",b2:"Allies within radius 3 recover 6 Vitality",b3:"Allies within radius 3 recover 10 Vitality, freed of conditions",b12:"All allies recover 10 Vitality, freed of conditions, and gain +4 damage for 1 round"},desc:"A roar that revitalizes allies."}
        ]}
   ]},

  {id:"knight",name:"Knight",nameEs:"Knight",type:"Might",resource:"DEVOTION",
   abilities:[
    {name:"Oathstrike",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage",b2:"7 damage, disarms the target",b3:"9-11 damage, disarms",b12:"12 damage, disarms, and the target is marked: the next ally to attack it deals double damage"},desc:"Precise strike guided by your oath. Ignores armor."},
    {name:"Hold the Line",type:"Base",cost:"2 Aen",dmg:null,desc:"You plant your position. Block enemy movement within radius 2, halve damage taken."},
    {name:"Sworn Duty",type:"Heroica",cost:"4 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"8 damage (one strike)",b2:"13 damage (two strikes)",b3:"15-17 damage (two strikes), ignores armor",b12:"18 damage, both strikes critical, and you swear protection to 1 companion: halve the damage they take until your next turn"},desc:"Guaranteed double attack."}
   ],
   subclasses:[
    {id:"inquisitor",name:"Inquisitor",desc:"Hunter of heretics. Judges and executes.",
         abilities:[
          {name:"Marked for Judgment",type:"Base",cost:"4 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"Mark: +2 cumulative damage per attack received",b2:"Mark: +3 cumulative damage",b3:"Mark: +4 cumulative damage",b12:"Sacred mark: +5 cumulative damage, can't be removed, and the target can't heal while it lasts"},desc:"You mark your target for judgment."},
          {name:"Final Verdict",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"8 damage",b2:"13 damage",b3:"15-17 damage",b12:"18 damage; if not a boss, instant execution; if a boss, Stunned 1 round and Bleeding"},desc:"Judgment falls. Double damage if the target is marked."}
        ]},
    {id:"protector",name:"Protector",desc:"Human shield. Gives his body for others.",
         abilities:[
          {name:"Take the Hit",type:"Base",cost:"3 Aen",dmg:null,desc:"You redirect damage from an ally within radius 3 to yourself, halved. Drawback: -1d6 Vitality on activation."},
          {name:"Aegis",type:"Heroica",cost:"4 Aen",dmg:null,desc:"All allies immune to damage 1 round. Drawback: -1d10 Vitality, immobilized 1 round."}
        ]},
    {id:"martyr",name:"Martyr",desc:"Self-sacrificing. Gives everything for the group.",
         abilities:[
          {name:"Blood Oath",type:"Base",cost:"3 Aen",dmg:null,desc:"Ally gains +5 damage and +2 Aen for 2 rounds. Drawback: -1d8 Vitality on activation."},
          {name:"Last Sacrifice",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"You sacrifice part of your life → one ally recovers 8 Vitality",b2:"You drop to 0 (total sacrifice) → all allies recover 8 Vitality",b3:"You drop to 0 → all recover 12 Vitality, freed of conditions",b12:"You're left with 1 life → all recover 12 Vitality + freed of conditions + 1 action on their next turn"},desc:"You always trade your life for theirs."}
        ]}
   ]},

  {id:"monk",name:"Monk",nameEs:"Monk",type:"Might",resource:"CLARITY",
   abilities:[
    {name:"Flowing Strike",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage",b2:"7 damage, you move 2 tiles",b3:"9-11 damage, you move 2 tiles",b12:"12 damage, you move 4 tiles, and your next attack this turn is free (no Aen)"},desc:"You strike and move 2 tiles without provoking reactions."},
    {name:"Deflect",type:"Base",cost:"2 Aen",dmg:null,desc:"You nullify an attack and return half the damage."},
    {name:"Inner Flow",type:"Heroica",cost:"3 Aen",dmg:"6",desc:"Extra action each round for 2 rounds, you dodge the first attack. Drawback: -1d8 Aen when it ends."}
   ],
   subclasses:[
    {id:"martial_artist",name:"Martial Artist",desc:"Pure fist. Perfect technique and combos.",
         abilities:[
          {name:"Perfect Form",type:"Base",cost:"3 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage",b2:"7 damage",b3:"9-11 damage, +2 to the next strike",b12:"12 damage, and your damage is copied to 1 extra adjacent enemy"},desc:"Building combo. Each consecutive hit on the same target adds up."},
          {name:"Thousand Strikes",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"8 damage",b2:"13 damage, reduces enemy armor",b3:"15-17 damage, reduces armor",b12:"18 damage in an unstoppable flurry, the target loses all its armor and is Stunned 1 round"},desc:"You strike up to 5 times, reducing armor."}
        ]},
    {id:"void",name:"Void",desc:"Inner emptiness. Corrupts and drains essence.",
         abilities:[
          {name:"Void Touch",type:"Base",cost:"3 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage, steal 1 Aen",b2:"7 damage, steal 2 Aen",b3:"9-11 damage, steal 2 Aen, break their focus",b12:"12 damage, steal 3 Aen, and the enemy generates no Aen on their next turn"},desc:"You touch with the void. You steal Aen."},
          {name:"The Empty",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"Steal 1 Aen from the target → 2 damage to 1 nearby enemy",b2:"Steal 2 Aen → 4 damage split among nearby enemies",b3:"Steal 3 Aen total from the group → 6 damage split among nearby",b12:"Drain ALL Aen from everyone in radius 3 → that total Aen becomes explosive damage (1 damage per Aen stolen) split among enemies, and all are incapacitated 1 round"},desc:"The void drains enemies' Aen and turns it into raw damage to those nearby. Radius 3."}
        ]}
   ]},

  {id:"shadow",name:"Shadow",nameEs:"Shadow",type:"Might",resource:"AEN",
   abilities:[
    {name:"Backstab",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage (7 if it doesn't see you)",b2:"7 damage (double if it doesn't see you)",b3:"9-11 damage (double if it doesn't see you)",b12:"12 damage, and you make a misty step (short teleport to a nearby tile)"},desc:"Double damage if the target doesn't see you."},
    {name:"Vanish",type:"Base",cost:"2 Aen",dmg:null,desc:"You become invisible 1 round, move 4 tiles."},
    {name:"Death Mark",type:"Heroica",cost:"4 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"8 damage",b2:"13 damage",b3:"15-17 damage",b12:"18 guaranteed damage; if the target drops below 50% HP, instant death (if not a boss)"},desc:"You teleport to the target + guaranteed strike."}
   ],
   subclasses:[
    {id:"raven",name:"Raven",desc:"Predator. Marks its prey and eliminates it.",
         abilities:[
          {name:"Mark the Prey",type:"Base",cost:"3 Aen",dmg:"4",desc:"Marked target takes +4 damage from everyone for 3 rounds. Drawback: -1d6 Aen on activation."},
          {name:"Eternal Night",type:"Heroica",cost:"4 Aen",dmg:"10",desc:"Invisible 3 rounds, each attack from invisibility deals double damage. Drawback: -1d10 Vitality when it ends."}
        ]},
    {id:"phantom",name:"Phantom",desc:"Deception, poison, and disappearance.",
         abilities:[
          {name:"Shadow Step",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"You move 3 tiles (through enemies) + 4 damage on arrival",b2:"You move 4 tiles + 6 damage, without provoking reactions",b3:"You move 5 tiles + 8 damage, the target can't react",b12:"You move to ANY visible tile + 10 damage, and become Invisible until your next turn"},desc:"Shadowy repositioning + a strike as you materialize."},
          {name:"Fade to Nothing",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Immune to all damage 2 rounds, you pass through enemies and walls. Drawback: -1d10 Vitality when it ends."}
        ]}
   ]},

  {id:"archer",name:"Archer",nameEs:"Archer",type:"Might",resource:"FOCUS",
   abilities:[
    {name:"Piercing Shot",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage to each in the line",b2:"7 damage to each",b3:"9-11 damage to each",b12:"12 damage to each, and the arrow ricochets hitting one more enemy outside the line"},desc:"Pierces all enemies in a straight line."},
    {name:"Suppressing Fire",type:"Base",cost:"2 Aen",dmg:"3",desc:"Radius 2 zone becomes difficult terrain, slows anyone who enters."},
    {name:"Arrow Storm",type:"Heroica",cost:"4 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"2 damage to all",b2:"5 damage to all",b3:"8 damage to all",b12:"10 damage to all visible enemies, and the arrows stick like thorns: the terrain becomes a great trap dealing 1d6 damage to anyone stepping on it (rest of combat)"},desc:"Rain of arrows over all visible enemies."}
   ],
   subclasses:[
    {id:"sniper",name:"Sniper",desc:"A single shot. Lethal patience.",
         abilities:[
          {name:"Steady Aim",type:"Base",cost:"3 Aen",dmg:"6",desc:"+5 damage per round without moving (max 3). Drawback: you can't move while charging."},
          {name:"One Shot",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"8 damage",b2:"13 damage",b3:"15-17 damage",b12:"Perfect shot to the vital point. Maximum damage ignoring everything; if not a boss, instant death; if a boss, Stunned 1 round"},desc:"Guaranteed hit, ignores armor."}
        ]},
    {id:"hunter",name:"Hunter",desc:"Traps and tracking. The field is its territory.",
         abilities:[
          {name:"Set the Trap",type:"Base",cost:"3 Aen",dmg:"5",desc:"Trap: immobilizes the first to enter for 2 rounds. Drawback: -1d6 Aen on activation."},
          {name:"The Hunt",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"1 enemy marked and immobilized 1 round",b2:"1 enemy marked and immobilized; YOU deal double damage against it",b3:"2 enemies marked and immobilized; YOU deal double damage against them",b12:"2 enemies marked and immobilized 2 rounds; YOU deal triple damage against them this turn, and they can't heal while the mark lasts"},desc:"You mark your prey; the double damage is yours alone."}
        ]}
   ]},

  {id:"wizard",name:"Wizard",nameEs:"Wizard",type:"Magic",resource:"RESONANCE",
   abilities:[
    {name:"Arcane Bolt",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage",b2:"7 damage",b3:"9-11 damage",b12:"12 damage, and the projectile splits hitting a second enemy for 6 damage"},desc:"Projectile of pure energy. Ignores armor."},
    {name:"Rune Trap",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"2 damage to all in the radius",b2:"5 damage to all",b3:"8 damage to all",b12:"10 damage to all, knocked down, and the rune leaves difficult terrain permanently"},desc:"Rune that explodes in radius 2 when stepped on."},
    {name:"Rewrite",type:"Heroica",cost:"3 Aen",dmg:null,desc:"Undo the last action of any creature, repeat your turn. Drawback: -1d8 Aen when it ends."}
   ],
   subclasses:[
    {id:"battle_mage",name:"Battle Mage",desc:"Magic and combat fused. Sword and spell.",
         abilities:[
          {name:"Spellblade",type:"Base",cost:"3 Aen",dmg:"7",desc:"Melee attacks deal +1d6 arcane damage for 3 rounds. Drawback: -1d6 Aen on activation."},
          {name:"Arcane Surge",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"4 damage to all",b2:"7 damage to all, knocked down",b3:"9 damage to all, knocked down",b12:"12 damage to all, knocked down, and you recover 2 Aen from the arcane overload"},desc:"Explosion of power in radius 3 around you."}
        ]},
    {id:"elementalist",name:"Elementalist",desc:"Mastery of the elements. Fire, ice, lightning.",
         abilities:[
          {name:"Elemental Burst",type:"Base",cost:"3 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage from the element",b2:"7 damage + condition (Burn / Freeze / Slow)",b3:"9-11 damage + condition",b12:"12 damage and the element unleashes fully: Fire = burns 3 rounds / Ice = Frozen 2 rounds / Lightning = Stunned and spreads to 1 nearby enemy"},desc:"Choose Fire, Ice, or Lightning when casting."},
          {name:"Cataclysm",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"4 damage to all",b2:"7 damage to all + one condition",b3:"9 damage to all + two conditions",b12:"12 damage to all, Burned + Frozen + Stunned at once, terrain difficult permanently"},desc:"Massive damage radius 4 with all elements."}
        ]},
    {id:"chronomancer",name:"Chronomancer",desc:"Manipulates time. Speeds up, stops, rewinds.",
         abilities:[
          {name:"Haste",type:"Base",cost:"3 Aen",dmg:null,desc:"Target gains an extra action for 2 rounds. Drawback: -1d6 Aen on activation."},
          {name:"Time Stop",type:"Heroica",cost:"4 Aen",dmg:null,desc:"2 full turns in a row, enemies frozen. Drawback: -1d12 Aen when it ends."}
        ]}
   ]},

  {id:"druid",name:"Druid",nameEs:"Druid",type:"Magic",resource:"ESSENCE",
   abilities:[
    {name:"Healing Bloom",type:"Base",cost:"2 Aen",dmg:null,desc:"Ally recovers 6 Vitality."},
    {name:"Entangle",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"1 enemy immobilized 1 round, 3 damage",b2:"2 enemies immobilized 2 rounds, 3 damage",b3:"3 enemies immobilized 2 rounds",b12:"ALL within radius 2 immobilized 2 rounds, and the roots drain 3 damage/round while they're trapped"},desc:"Roots sprout from the ground. Radius 2."},
    {name:"Wild Shape",type:"Heroica",cost:"3 Aen",dmg:"10",desc:"Beast form: +10 Vitality, increased melee damage for 3 rounds. Drawback: -1d8 Aen when it ends."}
   ],
   subclasses:[
    {id:"shaman",name:"Shaman",desc:"Healing and purification. The earth heals all.",
         abilities:[
          {name:"Purify",type:"Base",cost:"3 Aen",dmg:null,desc:"Ally is freed of all conditions and recovers 4 Vitality. Drawback: -1d6 Aen on activation."},
          {name:"Spirit Guardian",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Allies recover 8 Vitality per round for 3 rounds. Drawback: -1d10 Aen when it ends."}
        ]},
    {id:"beast_master",name:"Beast Master",desc:"Animal companion. Nature fights at its side.",
         abilities:[
          {name:"Call Companion",type:"Base",cost:"3 Aen",dmg:"5",desc:"Companion attacks separately, shares your turn. Drawback: -1d6 Aen on activation."},
          {name:"The Pack",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"1 beast of the chosen type, lasts 1 round",b2:"1 beast of the chosen type, lasts 2 rounds",b3:"1 beast, lasts 3 rounds",b12:"Up to 2 beasts of TWO different types (e.g. one damage + one protection), last 2 rounds"},desc:"On activation you CHOOSE the beast type. The d12 scales count + duration."}
        ]}
   ]},

  {id:"warlock",name:"Warlock",nameEs:"Warlock",type:"Magic",resource:"PACT",
   abilities:[
    {name:"Chaos Bolt",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"4 damage",b2:"7 damage, bounces to another enemy for 3",b3:"9-11 damage, bounces for 5",b12:"12 damage and chaos overflows: bounces among ALL nearby enemies for 4 each"},desc:"Chaotic damage that can bounce."},
    {name:"Hex",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"1 enemy: +2 damage taken 1 round",b2:"2 enemies: +4 damage taken, fail their next action",b3:"3 enemies: +4 damage taken, fail their next action",b12:"ALL within radius 3 (except the boss): +6 damage taken, fail their next action and become Frightened"},desc:"The curse spreads based on the roll."},
    {name:"Unleash the Pact",type:"Heroica",cost:"4 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"4 damage to all",b2:"7 damage to all, Frightened",b3:"9 damage to all, Frightened",b12:"12 damage to all, Frightened 2 rounds, and the pact rewards you: recover Vitality equal to total damage dealt"},desc:"You release the power of the pact. Radius 3, chaotic effects."}
   ],
   subclasses:[
    {id:"necromancer",name:"Necromancer",desc:"Death and the undead. The end is only the beginning.",
         abilities:[
          {name:"Raise Dead",type:"Base",cost:"3 Aen",dmg:"4",desc:"Summon a skeleton: 4 damage, lasts until it dies. Drawback: -1d6 Vitality on activation."},
          {name:"Army of the Dead",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"2 undead (3 damage each)",b2:"3 undead (3 damage each)",b3:"4 undead (3 damage each), surround",b12:"5 undead (3 damage each), surround, and when one falls it explodes for 4 damage to the nearby enemy"},desc:"You raise undead that overwhelm."}
        ]},
    {id:"illrigger",name:"Illrigger",desc:"Hexes and curses. Chaos made manifest.",
         abilities:[
          {name:"Doom Brand",type:"Base",cost:"3 Aen",dmg:"5",desc:"Curse: +2 damage per round, explodes on death. Drawback: -1d6 Aen on activation."},
          {name:"Chains of Chaos",type:"Heroica",cost:"4 Aen",dmg:"8",desc:"Enemies share damage taken for 3 rounds. Drawback: -1d10 Vitality when it ends."}
        ]},
    {id:"heretic",name:"Heretic",desc:"Rejects order. Embraces the forbidden.",
         abilities:[
          {name:"Forbidden Knowledge",type:"Base",cost:"3 Aen",dmg:"8",desc:"Copy the last ability used by any creature. Drawback: -1d8 Vitality on activation."},
          {name:"Unbound Chaos",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"8 damage to all (even nearby allies)",b2:"13 damage to all in the radius",b3:"15 damage to all",b12:"18 damage to all enemies, but it spares your allies (the chaos obeys you just this once); terrain razed"},desc:"Devastating chaos radius 5. Ignores everything."}
        ]}
   ]},

  {id:"inventor",name:"Inventor",nameEs:"Inventor",type:"Might",resource:"INGENUITY",
   abilities:[
    {name:"Turret",type:"Base",cost:"2 Aen",dmg:null,tabla:true,echoDC:false,bandas:{b1:"Turret: 4 damage/round, lasts 2 rounds",b2:"Turret: 4 damage/round, lasts 3 rounds",b3:"Turret: 6 damage/round, lasts 3 rounds",b12:"Overcharged turret: 6 damage/round, lasts 3 rounds, fires at 2 enemies at once"},desc:"You deploy a turret that fires on its own."},
    {name:"Upgrade",type:"Base",cost:"2 Aen",dmg:null,desc:"Ally gains +3 damage and +5 Vitality for 3 rounds."},
    {name:"Masterwork",type:"Heroica",cost:"4 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"8 line damage",b2:"13 line damage, 1 ally +2 damage 1 round",b3:"15-17 line damage, 1 ally +3 damage",b12:"18 line damage, 2 allies gain +5 damage and +1 action on their next turn"},desc:"Ultimate artifact: line damage + buff."}
   ],
   subclasses:[
    {id:"sapper",name:"Sapper",desc:"Explosives and traps. Calculated destruction.",
         abilities:[
          {name:"Demolition Charge",type:"Base",cost:"4 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"4 damage to all, destroys cover",b2:"7 damage to all, destroys cover and terrain",b3:"9 damage to all, knocked down",b12:"12 damage to all, knocked down, and the chain explosion hits enemies adjacent outside the radius for 6"},desc:"Explosive charge radius 3. Destroys cover."},
          {name:"Carpet Bomb",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"2 damage to all, knocked down",b2:"5 damage to all, knocked down",b3:"8 damage to all, knocked down, difficult terrain",b12:"10 damage to all, knocked down, difficult terrain permanently and enemies Stunned 1 round"},desc:"Bombardment radius 5. Knocks down all."}
        ]},
    {id:"cyborg",name:"Cyborg",desc:"Modifies itself. Body as artifact.",
         abilities:[
          {name:"Augment",type:"Base",cost:"3 Aen",dmg:"5",desc:"+5 Vitality, +2 melee damage, +2 move for 3 rounds. Drawback: -1d6 Aen on activation."},
          {name:"Machine Mode",type:"Heroica",cost:"4 Aen",dmg:"12",desc:"Immune to conditions, extra action, melee damage x2 for 2 rounds. Drawback: -1d10 Vitality when it ends."}
        ]}
   ]},

  {id:"bard",name:"Bard",nameEs:"Bard",type:"Might",resource:"INSPIRATION",
   abilities:[
    {name:"Inspire",type:"Base",cost:"2 Aen",dmg:null,desc:"Ally gains +1d6 to next action and +3 damage."},
    {name:"Charm",type:"Base",cost:"2 Aen",dmg:null,desc:"Enemy can't attack you for 2 rounds. You break their focus."},
    {name:"Grand Finale",type:"Heroica",cost:"3 Aen",dmg:"6",desc:"Allies gain an extra action, enemies terrified. Drawback: -1d8 Aen when it ends."}
   ],
   subclasses:[
    {id:"skald",name:"Skald",desc:"War song. Fights on the front line.",
         abilities:[
          {name:"War Song",type:"Base",cost:"3 Aen",dmg:"4",desc:"Allies within radius 3: +4 damage, resist conditions for 3 rounds. Drawback: -1d6 Aen on activation."},
          {name:"Battle Hymn",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Allies: double damage and +1 action for 2 rounds. Drawback: -1d10 Vitality when it ends."}
        ]},
    {id:"spy",name:"Spy",desc:"Disguise, mimicry, manipulation. Never who they seem.",
         abilities:[
          {name:"Disguise",type:"Base",cost:"3 Aen",dmg:null,desc:"You pass as an enemy: they ignore your presence for 2 rounds. Drawback: -1d6 Aen on activation."},
          {name:"The Long Con",type:"Heroica",cost:"5 Aen",dmg:null,tabla:true,echoDC:true,bandas:{b1:"You control the enemy 1 round",b2:"You control 2 rounds, steal 1 of their abilities",b3:"You control 2 rounds, steal ALL their abilities while it lasts",b12:"You control 3 rounds, steal all their abilities and can keep using them even after the control ends"},desc:"The perfect con: you take control of the enemy and steal their arsenal."}
        ]}
   ]}
],

kits: [
  {id:"asalto",name:"Assault",fantasy:"Viking",archetype:"Aggressive tank",hpBonus:8,aenBonus:0,
   ability:{name:"Charge",cost:"3 Aen",desc:"You run 6 tiles in a straight line. 1d6 damage to each enemy in the path.",drawback:"The next attack against you has advantage."}},
  {id:"filo",name:"Edge",fantasy:"Samurai",archetype:"Balanced damage",hpBonus:5,aenBonus:1,
   ability:{name:"Triple Cut",cost:"3 Aen",desc:"Three 1d6 attacks against three different enemies.",drawback:"You lose all movement this turn."}},
  {id:"dagas",name:"Daggers",fantasy:"Ninja",archetype:"Stealth damage",hpBonus:2,aenBonus:2,
   ability:{name:"Strike from the Shadows",cost:"3 Aen",desc:"Only from outside line of sight. Advantage and double damage.",drawback:"You lose Echo for 1 turn."}},
  {id:"corsario",name:"Corsair",fantasy:"Pirate",archetype:"Balanced damage",hpBonus:5,aenBonus:1,
   ability:{name:"Opportunistic Shot",cost:"3 Aen",desc:"You interrupt enemy movement with a 1d6 ranged attack. They lose the rest of their movement.",drawback:"You can't attack at range next turn."}},
  {id:"bastion",name:"Bastion",fantasy:"Knight",archetype:"Extreme tank",hpBonus:10,aenBonus:0,
   ability:{name:"Shield Wall",cost:"3 Aen",desc:"You absorb all damage aimed at an adjacent ally for 1 round.",drawback:"You can't move. If forced, it's canceled."}},
  {id:"gladiador",name:"Gladiator",fantasy:"Gladiator",archetype:"Balanced damage",hpBonus:5,aenBonus:1,
   ability:{name:"Double Strike",cost:"3 Aen",desc:"Two 1d6 attacks against the same target or two adjacent ones.",drawback:"The second attack always has disadvantage."}},
  {id:"halcon",name:"Falcon",fantasy:"Hunter",archetype:"Field control",hpBonus:4,aenBonus:1,
   ability:{name:"Trap",cost:"3 Aen",desc:"Invisible trap on a visible tile. 1d6 damage + immobilizes 1 turn.",drawback:"You lose your full movement this turn."}},
  {id:"raiz",name:"Root",fantasy:"Druid",archetype:"Healing support",hpBonus:3,aenBonus:2,
   ability:{name:"Natural Healing",cost:"3 Aen",desc:"Restores d8 Vitality to an ally (d12 if below half HP).",drawback:"You take 1d4 damage while channeling."}},
  {id:"colmillo",name:"Fang",fantasy:"Werewolf",archetype:"Transformed tank",hpBonus:7,aenBonus:0,
   ability:{name:"Bestial Fury",cost:"3 Aen",desc:"1d6 to all adjacent. Each one takes Bleeding (1/turn, 2 turns).",drawback:"You can't use class abilities next turn."}},
  {id:"conducto",name:"Conduit",fantasy:"Arcane Mage",archetype:"Magic amplification",hpBonus:0,aenBonus:3,
   ability:{name:"Amplified Channeling",cost:"3 Aen",desc:"Your next ability rises one plane tier at no cost. You must use it this turn.",drawback:"Echo -1 for 2 turns."}},
  {id:"crisol",name:"Crucible",fantasy:"Alchemist",archetype:"Versatile support",hpBonus:2,aenBonus:2,
   ability:{name:"Potion",cost:"3 Aen",desc:"Choose: Heal (d6), Harm (d6), or Afflict (slowed/frightened/weakened 1 turn).",drawback:"Only works on adjacent targets."}},
  {id:"juramento",name:"Oath",fantasy:"Paladin",archetype:"Support tank",hpBonus:7,aenBonus:1,
   ability:{name:"Laying On Hands",cost:"3 Aen",desc:"Restores d6 Vitality + removes a negative condition. If at 0 HP, raises them with 1.",drawback:"You take half the damage of the condition removed."}},
  {id:"berserker_kit",name:"Berserker",fantasy:"Berserker",archetype:"Damage tank",hpBonus:6,aenBonus:0,
   ability:{name:"Frenzy",cost:"3 Aen",desc:"+2 damage per hit taken this round. With 3+ hits, your next attack knocks down.",drawback:"You can't use class abilities during the frenzy."}},
  {id:"cuervo",name:"Raven",fantasy:"Assassin",archetype:"Control/poison",hpBonus:2,aenBonus:2,
   ability:{name:"Poison",cost:"3 Aen",desc:"Target Poisoned: loses 1 Aen/turn for 2 turns. With no Aen, 1 damage/turn.",drawback:"You lose movement this turn."}},
  {id:"zen",name:"Zen",fantasy:"Monk",archetype:"Precise control",hpBonus:4,aenBonus:1,
   ability:{name:"Paralyzing Strike",cost:"3 Aen",desc:"Target loses 1 of 2 actions next turn. On 17+ on the d20, loses both.",drawback:"Only works with no weapons equipped."}}
]

};

GAMEDATA.baseBestiary = [
  {id:"base-sombra",name:"Mark Shade",type:"Undead",difficulty:"medium",role:"Bruiser",hp:15,dmg:"4-8",resist:"Physical",terrain:["Forest","Ruins","Night"],description:"A humanoid silhouette wrapped in black smoke. Eyes of violet light. It does not speak, it growls.",abilities:[{name:"Shadow Claw",type:"Action",desc:"Melee 4-8."},{name:"Corrupt Touch",type:"Action",desc:"On hit, the target loses 1 extra Aen."},{name:"Reform",type:"Passive",desc:"Without fire/light damage, it reappears in 2 turns with HP/2."}],lairSuggestions:["Dark fog thickens","A shade emerges from a corpse"]},
  {id:"base-arana",name:"Veil Spider",type:"Beast",difficulty:"easy",role:"Controller",hp:8,dmg:"2-5",resist:"None",terrain:["Cave","Ruins"],description:"A dog-sized spider. Translucent legs that flicker between planes.",abilities:[{name:"Venomous Bite",type:"Action",desc:"2-5 damage. Poisoned 1 turn."},{name:"Web",type:"Action",desc:"Immobilizes 1 turn. Range 3."}],lairSuggestions:["Webs block the paths"]},
  {id:"base-golem",name:"Rune Golem",type:"Construct",difficulty:"hard",role:"Tank",hp:40,dmg:"8-14",resist:"Magic",terrain:["Ruins","Temple"],description:"A humanoid stone figure with glowing runes. Silent and relentless.",abilities:[{name:"Stone Fist",type:"Action",desc:"8-14 damage. Knocks down."},{name:"Absorb Aen",type:"Passive",desc:"Immune to magic abilities. Absorbs the Aen spent against it."},{name:"Runic Explosion",type:"Action",desc:"On death, explodes in radius 2 for 10 damage."}],lairSuggestions:["Runes on the ground glow — difficult terrain"]},
  {id:"base-lobo",name:"Spectral Wolf",type:"Undead",difficulty:"easy",role:"Skirmisher",hp:10,dmg:"3-6",resist:"Physical",terrain:["Forest","Night"],description:"A translucent wolf with blue eyes. It moves without making a sound.",abilities:[{name:"Ghostly Bite",type:"Action",desc:"3-6 damage. Ignores armor."},{name:"Howl",type:"Action",desc:"All within radius 3: Frightened 1 turn."}],lairSuggestions:["Distant howls — low morale"]},
  {id:"base-heraldo",name:"The Herald",type:"Elemental",difficulty:"boss",role:"Controller",hp:80,dmg:"12-20",resist:"Physical, Fire",terrain:["Any"],description:"A figure of light and shadow that constantly shifts form. It has no face.",abilities:[{name:"Planar Discharge",type:"Action",desc:"12-20 damage radius 3. All knocked down."},{name:"Rift",type:"Action",desc:"Opens a rift. Difficult terrain permanently."},{name:"Shield of Planes",type:"Passive",desc:"Reduces all damage by 5. Immune to conditions."},{name:"Summon Fragments",type:"Action",desc:"Summons 2 Mark Shades."}],lairSuggestions:["Reality distorts","The sky changes color","Rifts emit light"]},
  {id:"base-capitan",name:"Mark Captain",type:"Undead",difficulty:"hard",role:"Bruiser",hp:30,dmg:"6-12",resist:"Mind control",terrain:["Any"],description:"A corrupted soldier who keeps his military discipline. He leads the Shades.",abilities:[{name:"Shadow Sword",type:"Action",desc:"6-12 damage. Critical: blinds 1 turn."},{name:"Command Shout",type:"Action",desc:"Shades within radius 4 make a free attack."},{name:"Shield of Darkness",type:"Reaction",desc:"Reduces damage by 4. Once per round."}],lairSuggestions:["Shade reinforcements arrive"]},
  {id:"minion-goblin",name:"Goblin Underling",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1-2",resist:"None",terrain:["Lair","Camp"],description:"A small goblin with a rusty weapon. Shouts orders no one obeys.",abilities:[{name:"Jab",type:"Action",desc:"1-2 damage."},{name:"Coward",type:"Passive",desc:"If it loses 50% HP in a turn, it flees."}],lairSuggestions:[]},
  {id:"minion-esqueleto",name:"Lesser Skeleton",type:"Undead",difficulty:"easy",role:"Minion",hp:1,dmg:"1-3",resist:"Physical",terrain:["Graveyard","Ruins"],description:"Disjointed bones held together by dark magic.",abilities:[{name:"Bone Fist",type:"Action",desc:"1-3 damage. Physical damage reduced by 1."}],lairSuggestions:[]},
  {id:"minion-sapo",name:"Giant Toad",type:"Beast",difficulty:"easy",role:"Minion",hp:1,dmg:"1-2",resist:"None",terrain:["Swamp","Wet Cave"],description:"A dog-sized toad with slimy skin.",abilities:[{name:"Tongue Lash",type:"Action",desc:"Ranged attack. 1-2 damage. Grappled 1 turn."},{name:"Erratic Hop",type:"Passive",desc:"30% chance to dodge attacks."}],lairSuggestions:[]},
  {id:"minion-espectro",name:"Weak Specter",type:"Undead",difficulty:"easy",role:"Minion",hp:1,dmg:"1-2",resist:"Magic",terrain:["Ruins","Tomb"],description:"A barely perceptible translucent apparition.",abilities:[{name:"Frozen Touch",type:"Action",desc:"1-2 damage. Frozen 1 turn."},{name:"Immaterial",type:"Passive",desc:"Only damageable by magic. Ignores normal physical damage."}],lairSuggestions:[]},
  {id:"tank-ogro",name:"Ogre Warrior",type:"Humanoid",difficulty:"medium",role:"Bruiser",hp:28,dmg:"6-9",resist:"Physical",terrain:["Mountain","Fortress"],description:"A huge greenish-gray creature. Muscles like rocks. Giant club.",abilities:[{name:"Club Smash",type:"Action",desc:"6-9 damage. Knocks down."},{name:"Thick Skin",type:"Passive",desc:"Reduces damage by 2. Immune to Frightened."},{name:"Charging Roar",type:"Reaction",desc:"When wounded, charges +3 on its next attack."}],lairSuggestions:["The ground cracks","Summons other ogres"]},
  {id:"tank-tortuga",name:"Ancestral Turtle",type:"Beast",difficulty:"hard",role:"Tank",hp:45,dmg:"5-7",resist:"Physical",terrain:["Ancient Forest","Island"],description:"A house-sized turtle. Shell covered in ancient moss.",abilities:[{name:"Slow Bite",type:"Action",desc:"5-7 damage. Reduces speed by half for 2 turns."},{name:"Shell",type:"Passive",desc:"Tucked in: reduces damage by 4. Can't attack."},{name:"Retraction",type:"Reaction",desc:"If it takes >10 damage, it retracts until its next turn."},{name:"Regeneration",type:"Passive",desc:"Recovers 2 HP/turn."}],lairSuggestions:["Swampy terrain","Turtle hatchlings fight"]},
  {id:"tank-escultura",name:"Living Sculpture",type:"Construct",difficulty:"medium",role:"Controller",hp:32,dmg:"4-6",resist:"Physical, Magic",terrain:["Gallery","Temple"],description:"A marble statue that came to life. Elegant, silent movements.",abilities:[{name:"Marble Strike",type:"Action",desc:"4-6 damage. Paralyzed 1 turn on failed save."},{name:"Stone Form",type:"Passive",desc:"Reduces magic by 3. Immune to falls."},{name:"Hardening",type:"Reaction",desc:"Next attack has disadvantage."}],lairSuggestions:["Other statues awaken"]},
  {id:"tank-trol",name:"Regenerating Troll",type:"Humanoid",difficulty:"hard",role:"Tank",hp:50,dmg:"7-10",resist:"Physical",terrain:["Dense Forest","Cavern"],description:"A muscular green creature. Scars that regenerate. Smell of rot.",abilities:[{name:"Claw",type:"Action",desc:"7-10 damage. Two hits = Bleeding."},{name:"Regeneration",type:"Passive",desc:"Recovers 4 HP/turn. Fire weakens it."},{name:"Frenzy",type:"Reaction",desc:"At 50% HP: attacks 2x/turn. Ignores pain."}],lairSuggestions:["Remains of victims","Bonfires to damage it"]},
  {id:"ranger-arquero",name:"Fierce Archer",type:"Humanoid",difficulty:"medium",role:"Caster",hp:14,dmg:"6-8",resist:"None",terrain:["Forest","Cliff"],description:"A muscular hunter with a bow and quiver. Eyes sharp as a hawk.",abilities:[{name:"Precise Shot",type:"Action",desc:"6-8 damage. Advantage if Prone."},{name:"Acrobatic Dodge",type:"Passive",desc:"Movement action for advantage on a save."},{name:"Arrow Rain",type:"Action",desc:"Radius 6. All save or 2d6 damage. Spends 2 Aen."}],lairSuggestions:["Tall trees","Arrow traps"]},
  {id:"ranger-serpiente",name:"Winged Serpent",type:"Beast",difficulty:"easy",role:"Skirmisher",hp:10,dmg:"5-7",resist:"None",terrain:["Sky","Mountain"],description:"A crocodile-sized serpent with membranous wings.",abilities:[{name:"Venomous Strike",type:"Action",desc:"5-7 damage. Poisoned 2 turns."},{name:"Swift Flight",type:"Passive",desc:"Flight + movement +2. Dodges projectiles."}],lairSuggestions:[]},
  {id:"ranger-centauro",name:"Centaur Hunter",type:"Humanoid",difficulty:"medium",role:"Skirmisher",hp:18,dmg:"7-9",resist:"None",terrain:["Meadow","Plains"],description:"Half muscular man, half warhorse. Longbow and spear.",abilities:[{name:"Charge",type:"Action",desc:"Move 10m + attack. 7-9 damage. Pushes 3m."},{name:"Galloping Charge",type:"Passive",desc:"Double speed in the open. +2 mounted."},{name:"Double Attack",type:"Action",desc:"Spear + Bow in the same turn."}],lairSuggestions:["Open terrain","Herd of centaurs"]},
  {id:"ranger-tirador",name:"Shadowy Marksman",type:"Humanoid",difficulty:"medium",role:"Skirmisher",hp:13,dmg:"5-8",resist:"None",terrain:["Dark City","Night"],description:"An ambushing assassin with crossbows and poisoned darts.",abilities:[{name:"Poisoned Dart",type:"Action",desc:"15m. 5-8 damage. Poisoned 1 turn."},{name:"Ambush",type:"Passive",desc:"Advantage if unseen. Surprise = double damage."},{name:"Invisibility",type:"Reaction",desc:"Detected: action to become Invisible 1 turn."}],lairSuggestions:[]},
  {id:"mago-brujo",name:"Flame Warlock",type:"Humanoid",difficulty:"medium",role:"Caster",hp:12,dmg:"3-5",resist:"Magic",terrain:["Magic Tower","Volcano"],description:"A mage in a red robe that flickers. Skin glows with heat.",abilities:[{name:"Fireball",type:"Action",desc:"Radius 6. Save or 2d6 fire. Spends 2 Aen."},{name:"Flame Shield",type:"Passive",desc:"Reduces fire by 3. Recoil 1d4."},{name:"Inferno",type:"Action",desc:"Radius 10 burns. 3d6/turn if in the area. Spends 3 Aen."}],lairSuggestions:["Ground in flames","Fuel explodes"]},
  {id:"mago-hielo",name:"Ice Sage",type:"Humanoid",difficulty:"medium",role:"Caster",hp:11,dmg:"2-4",resist:"Cold",terrain:["Snowy Mountain","Tundra"],description:"An old man wrapped in ice robes that never melt.",abilities:[{name:"Ice Bolt",type:"Action",desc:"15m. 2-4 damage. Frozen 1 turn."},{name:"Snowstorm",type:"Action",desc:"Radius 8. Save or 2d6 cold + Frozen. Spends 2 Aen."},{name:"Aura of Cold",type:"Passive",desc:"Radius 5 very cold. Disadvantage on cold saves."}],lairSuggestions:["Slippery terrain","Ice shards fall"]},
  {id:"mago-oscuro",name:"Dark Conjurer",type:"Humanoid",difficulty:"hard",role:"Caster",hp:16,dmg:"4-7",resist:"Magic",terrain:["Necropolis","Tomb"],description:"A mage in a deep hood with floating magic symbols.",abilities:[{name:"Weakness Bolt",type:"Action",desc:"12m. 4-7 damage. Reduces enemy damage by 2 for 2 turns."},{name:"Curse of Darkness",type:"Action",desc:"Radius 6. Blinded 1 turn. Spends 2 Aen."},{name:"Power Burst",type:"Action",desc:"Radius 8. 3d6 damage. The conjurer takes 5. Spends 3 Aen."},{name:"Magic Armor",type:"Passive",desc:"Reduces damage by 2. Immune to Frightened."}],lairSuggestions:["Symbols channel","Lesser spirits"]},
  {id:"mago-tormenta",name:"Storm Druid",type:"Humanoid",difficulty:"medium",role:"Caster",hp:13,dmg:"3-6",resist:"Lightning",terrain:["Stormy Sky","High Hill"],description:"A druid with eyes that glow with lightning. Hair floats.",abilities:[{name:"Directed Bolt",type:"Action",desc:"20m. 3-6 damage. Stunned 1 turn on failed save."},{name:"Electric Storm",type:"Action",desc:"Radius 8. Save or 2d6 lightning. Spends 2 Aen."},{name:"Planar Connection",type:"Passive",desc:"Advantage on lightning saves."}],lairSuggestions:["Storm clouds","Lightning strikes"]},
  {id:"controller-hechicero",name:"Mind Sorcerer",type:"Humanoid",difficulty:"hard",role:"Controller",hp:14,dmg:"2-3",resist:"Psychic",terrain:["Mind Temple","Library"],description:"A humanoid with a glowing third eye. Its gaze hypnotizes.",abilities:[{name:"Mind Wave",type:"Action",desc:"Radius 8. Save or Charmed 1 turn. Spends 2 Aen."},{name:"Psychic Control",type:"Action",desc:"Save or control 1 turn. Spends 3 Aen."},{name:"Mental Shield",type:"Passive",desc:"Immune to Charmed. Reduces psychic by 3."},{name:"Expanded Sight",type:"Passive",desc:"Sees invisible within 10m."}],lairSuggestions:["Illusions cover","Mental obstacles"]},
  {id:"controller-gorgona",name:"Petrifying Gorgon",type:"Beast",difficulty:"hard",role:"Controller",hp:20,dmg:"5-8",resist:"Magic",terrain:["Ancient Ruins","Temple"],description:"A woman with snakes for hair. Skin of polished stone.",abilities:[{name:"Stone Gaze",type:"Action",desc:"15m line of sight. Save or Petrified 2 turns."},{name:"Snake Claw",type:"Action",desc:"5-8 damage. Bleeding 2 turns."},{name:"Stone Skin",type:"Passive",desc:"Reduces physical by 3. Slow (half speed)."}],lairSuggestions:["Petrified victims","Mirrors break the gaze"]},
  {id:"controller-sirena",name:"Charming Siren",type:"Humanoid",difficulty:"medium",role:"Controller",hp:12,dmg:"3-5",resist:"None",terrain:["Water","Lagoon"],description:"A beautiful woman from the waist up, with a glowing fish tail below.",abilities:[{name:"Charming Song",type:"Action",desc:"Radius 10. Save or Charmed 2 turns. Spends 2 Aen."},{name:"Surprise Attack",type:"Passive",desc:"Advantage vs Charmed."},{name:"Submersion",type:"Reaction",desc:"Quick action underwater. Cover."}],lairSuggestions:["Water is its territory","Sharp rocks are dangerous"]},
  {id:"controller-arana-ancestral",name:"Ancestral Weaver Spider",type:"Beast",difficulty:"hard",role:"Controller",hp:24,dmg:"6-9",resist:"None",terrain:["Deep Forest","Cavern"],description:"A giant intelligent spider. Eight eyes gleam with malice.",abilities:[{name:"Paralyzing Bite",type:"Action",desc:"6-9 damage. Paralyzed 1 turn on failed save."},{name:"Sticky Web",type:"Action",desc:"Radius 6. Grappled 2 turns. Spends 1 Aen."},{name:"Trap Weave",type:"Passive",desc:"Webs give cover. Alerts when they move."},{name:"Regeneration",type:"Passive",desc:"Recovers 2 HP/turn."}],lairSuggestions:["Webs cover","Lesser spiders"]},
  {id:"assassin-ninja",name:"Shadow Ninja",type:"Humanoid",difficulty:"hard",role:"Skirmisher",hp:16,dmg:"8-12",resist:"None",terrain:["Night","Sewer"],description:"A silent warrior dressed entirely in black. Moves without sound.",abilities:[{name:"Deadly Stab",type:"Action",desc:"Surprise. 8-12 damage. Unseen = double damage. Spends 1 Aen."},{name:"Ambush",type:"Passive",desc:"Advantage vs Invisible. Ambush = triple damage."},{name:"Ninja Evasion",type:"Reaction",desc:"Attacked: spends 2 Aen to dodge + counterattack."},{name:"Shadow Invisibility",type:"Passive",desc:"In darkness: naturally Invisible."}],lairSuggestions:["Dark zone","Multiple ninjas"]},
  {id:"assassin-basilisco",name:"Deadly-Gaze Basilisk",type:"Beast",difficulty:"hard",role:"Controller",hp:22,dmg:"7-11",resist:"Poison",terrain:["Dry Cave","Desert"],description:"A large serpent with eyes that gleam with death. Supreme predator.",abilities:[{name:"Lethal Gaze",type:"Action",desc:"Line of sight. Save or 3d8 damage. Fails by >5: dies."},{name:"Venomous Fang",type:"Action",desc:"7-11 damage. Poisoned: loses 1d4 HP/turn for 4 turns."},{name:"Condition Immune",type:"Passive",desc:"Can't be Charmed, Frightened, or Controlled."}],lairSuggestions:["Practically invisible","Petrified victims"]},
  {id:"assassin-demonio",name:"Blade Demon",type:"Demon",difficulty:"hard",role:"Bruiser",hp:18,dmg:"9-14",resist:"Fire",terrain:["Infernal","Volcano"],description:"A humanoid demon with four arms. Burning blades. Wings of fear.",abilities:[{name:"Multi-Attack",type:"Action",desc:"Up to 3 times/turn. 9-14 damage. Each hit = Burning."},{name:"Fire Blades",type:"Passive",desc:"Fire damage. Recoil 1d6 when attacking it."},{name:"Burning Flight",type:"Passive",desc:"Can fly. Trail of fire."},{name:"Infernal Frenzy",type:"Reaction",desc:"Wounded: 4 attacks, double damage, no defense. Spends 2 Aen."}],lairSuggestions:["Terrain burns","Flames block the exits"]},
  {id:"assassin-vampiro",name:"Ancient Vampire",type:"Undead",difficulty:"boss",role:"Tank",hp:55,dmg:"10-16",resist:"None",terrain:["Dark Castle","Crypt"],description:"An undead noble of centuries. Unsettling elegance. Fangs drip blood.",abilities:[{name:"Blood Bite",type:"Action",desc:"10-16 damage. The vampire recovers half as HP."},{name:"Domination",type:"Action",desc:"Save or control 1 turn. Spends 2 Aen."},{name:"Bat Form",type:"Passive",desc:"Transforms. Hard to reach."},{name:"Vampiric Regeneration",type:"Passive",desc:"Recovers 5 HP/turn. Only silver/magic."},{name:"Summon Servants",type:"Reaction",desc:"Danger: summons 2d4 lesser vampires."}],lairSuggestions:["Crypt full of treasure","Ancient blood strengthens","Servants come"]},
  {id:"assassin-rey-insectos",name:"King of Insects",type:"Beast",difficulty:"hard",role:"Bruiser",hp:26,dmg:"7-10",resist:"Poison, Cold",terrain:["Hive","Nest"],description:"A buffalo-sized giant insect. Chitin armor. Long stinger.",abilities:[{name:"Venomous Stinger",type:"Action",desc:"7-10 damage. Poisoned 3 turns."},{name:"Swarm Summon",type:"Action",desc:"Summons 3d6 insects. 2 turns. Spends 1 Aen."},{name:"Hive Coordination",type:"Passive",desc:"Nearby insects +2 attacks."},{name:"Chitinous Resistance",type:"Passive",desc:"Reduces physical by 2. Piercing x1.5."}],lairSuggestions:["Walls collapse","Insects emerge"]},
  {id:"minion-veil-whisper",name:"Veil Whisper",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1-3",resist:"None",terrain:["Cave","Ruins","Temple"],description:"Gaunt humans with glowing cracks in their skin who murmur incessantly.",abilities:[{name:"Corrupt Touch",type:"Action",desc:"1-3 damage."},{name:"Unsettling Coordination",type:"Passive",desc:"When this creature dies, nearby allies gain +1 damage until the end of the turn."}],lairSuggestions:["Constant murmurs","Cracks that glow when they die"]},
  {id:"minion-rift-thrall",name:"Rift Thrall",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1-2",resist:"Physical",terrain:["Any plane","Ruins"],description:"Humans with fully black or white eyes who move with spasmodic motions.",abilities:[{name:"Desperate Blow",type:"Action",desc:"1-2 damage."},{name:"Ignore Pain",type:"Passive",desc:"Keeps acting even with grievous wounds."}],lairSuggestions:["Eyes that glow in the dark"]},
  {id:"minion-echo-drainer",name:"Echo Drainer",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1-3",resist:"None",terrain:["Forest","Ruins","Cave"],description:"Pale humans with black veins who seem to feed on something invisible.",abilities:[{name:"Draining Touch",type:"Action",desc:"1-3 damage. Steals 1 Aen from the target (if any)."},{name:"Hunger",type:"Passive",desc:"Grows more aggressive when few allies are near."}],lairSuggestions:["Aura of emptiness"]},
  {id:"minion-shattered",name:"The Shattered",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1-2",resist:"None",terrain:["Mountain","Ruins","City"],description:"Humans whose skin cracks and flakes like crystal or dried clay.",abilities:[{name:"Cutting Blow",type:"Action",desc:"1-2 damage."},{name:"Final Burst",type:"Passive",desc:"On death, deals 1 damage to all adjacent."}],lairSuggestions:["Crystalline remains on the ground"]},
  {id:"tank-veil-bulwark",name:"Veil Bulwark",type:"Humanoid",difficulty:"medium",role:"Tank",hp:28,dmg:"6-9",resist:"Physical",terrain:["Ruins","Fortress","Temple"],description:"Large, heavy humans with plates of hardened skin and crystalline growths.",abilities:[{name:"Heavy Blow",type:"Action",desc:"6-9 damage. Knocks down the target."},{name:"Living Wall",type:"Passive",desc:"Reduces damage taken by 2. Hard to move or knock down."},{name:"Corrupt Terrain",type:"Reaction",desc:"When wounded, creates difficult terrain in radius 1."}],lairSuggestions:["The ground hardens around it"]},
  {id:"tank-corrupted-brute",name:"Corrupted Brute",type:"Humanoid",difficulty:"medium",role:"Bruiser",hp:32,dmg:"7-11",resist:"Physical",terrain:["Mountain","Forest","Ruins"],description:"Deformed humans with elongated limbs and skin stretched or burned in strange patterns.",abilities:[{name:"Brutal Blow",type:"Action",desc:"7-11 damage."},{name:"Corrupt Grip",type:"Action",desc:"Grappled to the target. Only freed by force."},{name:"Persistent Fury",type:"Passive",desc:"On taking damage, gains +1 damage on its next attack."}],lairSuggestions:["Deep footprints in the ground"]},
  {id:"tank-hollowed",name:"The Hollowed",type:"Humanoid",difficulty:"hard",role:"Tank",hp:35,dmg:"6-10",resist:"Mind control",terrain:["Cave","Ruins","Temple"],description:"Tall, gaunt humans with sunken chests and glowing cracks running across their bodies.",abilities:[{name:"Hollow Blow",type:"Action",desc:"6-10 damage. Ignores light armor."},{name:"Inner Void",type:"Passive",desc:"Immune to mental conditions and reduces psychic damage."},{name:"Absorb Impact",type:"Reaction",desc:"Reduces damage taken by 3 once per round."}],lairSuggestions:["Aura of cold and silence"]},
  {id:"tank-veil-guardian",name:"Veil-Forged Guardian",type:"Humanoid",difficulty:"medium",role:"Tank",hp:30,dmg:"5-8",resist:"Physical, Magic",terrain:["Ruins","Temple","Fortress"],description:"Humans partially fused with strange armor and weapons. They look like living weapons.",abilities:[{name:"Guard Strike",type:"Action",desc:"5-8 damage. Reduces the target's movement."},{name:"Immovable Stance",type:"Passive",desc:"Can't be easily pushed or knocked down."},{name:"Distortion Field",type:"Reaction",desc:"Ranged attacks against it have disadvantage."}],lairSuggestions:["Weapons and armor grow from the ground"]},
  {id:"skirmisher-veil-stalker",name:"Veil Stalker",type:"Humanoid",difficulty:"medium",role:"Skirmisher",hp:16,dmg:"6-9",resist:"None",terrain:["Forest","Night","Ruins"],description:"Slim, flexible humans with elongated fingers and movements too fluid.",abilities:[{name:"Stealth Strike",type:"Action",desc:"6-9 damage. Advantage if attacking from flank or invisibility."},{name:"Distorted Movement",type:"Passive",desc:"Can move through difficult terrain without penalty."},{name:"Vanish",type:"Reaction",desc:"Once per round, becomes harder to hit."}],lairSuggestions:["Footprints that disappear"]},
  {id:"skirmisher-rift-runner",name:"Rift Runner",type:"Humanoid",difficulty:"medium",role:"Skirmisher",hp:14,dmg:"5-8",resist:"None",terrain:["Any plane","Mountain","City"],description:"Humans who move in sudden bursts of speed with blurred outlines.",abilities:[{name:"Quick Charge",type:"Action",desc:"Moves + attacks in the same turn. 5-8 damage."},{name:"Step Between Planes",type:"Passive",desc:"Ignores opportunity reactions when moving."},{name:"Evasion",type:"Reaction",desc:"Reduces damage from an attack once per round."}],lairSuggestions:["Distortions in the air when it moves"]},
  {id:"skirmisher-shadow-blade",name:"Shadow Blade",type:"Humanoid",difficulty:"medium",role:"Skirmisher",hp:15,dmg:"6-9",resist:"Physical",terrain:["Night","Ruins","City"],description:"Humans with irregular weapons and shadows that cling abnormally to their bodies.",abilities:[{name:"Shadow Cut",type:"Action",desc:"6-9 damage. Can apply Bleeding."},{name:"Hit and Run",type:"Action",desc:"Attacks and moves immediately after."},{name:"Protective Shadows",type:"Passive",desc:"Has advantage on saves against control conditions."}],lairSuggestions:["Shadows that move on their own"]},
  {id:"skirmisher-whisper-assassin",name:"Whisper Assassin",type:"Humanoid",difficulty:"medium",role:"Skirmisher",hp:13,dmg:"5-8",resist:"None",terrain:["Forest","City","Temple"],description:"Hooded humans who move between cover with unnatural grace.",abilities:[{name:"Stab",type:"Action",desc:"5-8 damage. Advantage against distracted targets."},{name:"Disturbing Whisper",type:"Action",desc:"Target has disadvantage on its next attack."},{name:"Superior Mobility",type:"Passive",desc:"Can climb and move along low walls."}],lairSuggestions:["Whispers that seem to come from everywhere"]},
  {id:"miniboss-veilbound",name:"The Veilbound",type:"Humanoid",difficulty:"hard",role:"Bruiser",hp:45,dmg:"8-13",resist:"Physical, Mind control",terrain:["Ruins","Temple","Any plane"],description:"An ancient knight whose armor and body have been partially consumed by the Veil. He moves with a cold, unnatural authority.",abilities:[{name:"Veil Strike",type:"Action",desc:"8-13 damage. Marks the target: takes +2 damage from all corrupted humans while it lasts."},{name:"Veil Wall",type:"Action",desc:"Plants position. Enemies within radius 2 have reduced movement and can't easily disengage."},{name:"Distorted Oath",type:"Action",desc:"Forces nearby enemies to attack it or suffer disadvantage on their actions."},{name:"Echo of the Oath",type:"Reaction",desc:"Once per combat, repeats its last attack with increased damage."}],lairSuggestions:["Cracks of light and shadow open around it","The air feels heavy and cold"]},
  {id:"cheran-burning-acolyte",name:"Burning Acolyte",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1d4+1",resist:"Fire",terrain:["Temple","Ruins","City"],description:"Young fanatics marked with burning symbols who fight with painful, desperate faith.",abilities:[{name:"Faith Strike",type:"Action",desc:"Deals 1d4+1 fire damage."},{name:"Desperate Fervor",type:"Passive",desc:"When this creature dies, a nearby ally gains +1 damage until the end of the turn."}],lairSuggestions:["Smell of burnt incense","Symbols that glow when they die"]},
  {id:"cheran-faithful",name:"Faithful of Engar",type:"Humanoid",difficulty:"medium",role:"Bruiser",hp:22,dmg:"2d6",resist:"Fire",terrain:["Temple","Ruins","Mountain"],description:"Templar warriors wreathed in sacred flames. Their faith burns literally.",abilities:[{name:"Sacred Strike",type:"Action",desc:"Deals 2d6 damage and marks the target as a heretic."},{name:"Flame of Faith",type:"Passive",desc:"Reduces fire damage taken by 2. Gains +2 damage against marked targets."},{name:"Heretic's Punishment",type:"Reaction",desc:"When a marked enemy attacks it, deals 1d6 fire damage back."}],lairSuggestions:["The ground heats up","Blue flames surround them"]},
  {id:"cheran-veil-purifier",name:"Veil Purifier",type:"Humanoid",difficulty:"medium",role:"Controller",hp:18,dmg:"2d6",resist:"Fire",terrain:["Temple","Ruins","Cave"],description:"Warrior-priests who purify with sacred fire and judgment.",abilities:[{name:"Purifying Flame",type:"Action",desc:"Deals 2d6 fire damage in a radius 3 area (only to marked enemies)."},{name:"Mark of the Heretic",type:"Action",desc:"Marks an enemy. They take an extra 1d4 fire damage while marked."},{name:"Aura of Judgment",type:"Passive",desc:"Unmarked enemies have disadvantage on saving throws against fire damage."}],lairSuggestions:["Fire that doesn't burn wood","Voices that judge"]},
  {id:"vorin-debt-collector",name:"Vorin Debt Collector",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1d4+1",resist:"None",terrain:["City","Road","Fortress"],description:"Debt collectors with light armor and cold smiles.",abilities:[{name:"Debt Strike",type:"Action",desc:"Deals 1d4+1 damage."},{name:"Mark Weakness",type:"Passive",desc:"When it hits, marks a weakness. The next attack against that target has advantage."}],lairSuggestions:["Open ledgers","Bloodstained coins"]},
  {id:"vorin-enforcer",name:"Vorin Enforcer",type:"Humanoid",difficulty:"medium",role:"Skirmisher",hp:16,dmg:"2d6",resist:"None",terrain:["City","Fortress","Ruins"],description:"Cold, efficient professionals who collect debts with steel.",abilities:[{name:"Precise Strike",type:"Action",desc:"Deals 2d6 damage and ignores 2 points of armor."},{name:"Exploit Weakness",type:"Passive",desc:"Deals an extra 1d6 damage against targets below half health."},{name:"Tactical Movement",type:"Reaction",desc:"After attacking, can move up to 2 spaces without provoking reactions."}],lairSuggestions:["Broken contracts","Corpses marked as 'paid'"]},
  {id:"vorin-shadow-negotiator",name:"Shadow Negotiator",type:"Humanoid",difficulty:"medium",role:"Controller",hp:15,dmg:"4-7",resist:"None",terrain:["City","Temple","Fortress"],description:"Specialists in breaking wills before bones.",abilities:[{name:"Offer You Can't Refuse",type:"Action",desc:"The target must choose between surrendering this turn or suffering disadvantage on their next action."},{name:"Information as Weapon",type:"Passive",desc:"At the start of combat, reveals a major weakness of the strongest enemy."},{name:"Manipulation",type:"Action",desc:"Forces an enemy to make a saving throw or temporarily switch sides for 1 turn."}],lairSuggestions:["Compromising documents","Listening shadows"]},
  {id:"escarlata-recruit",name:"Scarlet Recruit",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1d4+1",resist:"Physical",terrain:["Fortress","Road","Ruins"],description:"Professional soldiers who still wear the red with pride.",abilities:[{name:"Training Strike",type:"Action",desc:"Deals 1d4+1 damage."},{name:"Basic Formation",type:"Passive",desc:"Gains +1 AC while near another Scarlet Order member."}],lairSuggestions:["Red banners","Corpses left in formation"]},
  {id:"escarlata-soldier",name:"Scarlet Soldier",type:"Humanoid",difficulty:"medium",role:"Tank",hp:24,dmg:"2d6",resist:"Physical",terrain:["Fortress","City","Ruins"],description:"Disciplined veterans who live by the code. Tough and reliable.",abilities:[{name:"Order Strike",type:"Action",desc:"Deals 2d6 damage. Can choose to protect an adjacent ally this turn."},{name:"Hold the Line",type:"Passive",desc:"Reduces all damage taken by 2 as long as it doesn't move."},{name:"Counterattack",type:"Reaction",desc:"When attacked in melee, immediately counters with 1d6+2 damage."}],lairSuggestions:["Perfect formations","Banners that never fall"]},
  {id:"escarlata-veteran",name:"Scarlet Veteran",type:"Humanoid",difficulty:"medium",role:"Bruiser",hp:20,dmg:"2d6+2",resist:"Physical",terrain:["Fortress","Mountain","Ruins"],description:"Old soldiers who no longer follow blind orders — only the code.",abilities:[{name:"Veteran Strike",type:"Action",desc:"Deals 2d6+2 damage and ignores light armor."},{name:"Read the Field",type:"Passive",desc:"Automatically identifies the most dangerous enemy at the start of combat."},{name:"Final Lesson",type:"Reaction",desc:"When reduced to 0 HP, makes one final attack dealing 2d6 damage before dying."}],lairSuggestions:["Old battle scars","Well-maintained weapons"]},
  {id:"aetharion-recruit",name:"Eagle Recruit",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1d4+1",resist:"Physical",terrain:["Fortress","Mountain","City"],description:"Young soldiers who dream of carrying the eagle with honor.",abilities:[{name:"Loyal Strike",type:"Action",desc:"Deals 1d4+1 damage."},{name:"Presence of the Eagle",type:"Passive",desc:"Allies within 2 spaces gain +1 to saving throws while this creature is alive."}],lairSuggestions:["Eagle banners","Orderly formations"]},
  {id:"aetharion-guard",name:"Eagle Guard",type:"Humanoid",difficulty:"medium",role:"Tank",hp:26,dmg:"2d6",resist:"Physical",terrain:["Fortress","Mountain","Ruins"],description:"Protectors of the institution. Strong, disciplined, and willing to die for the eagle.",abilities:[{name:"Protective Strike",type:"Action",desc:"Deals 2d6 damage. Can redirect an attack targeting an adjacent ally to itself."},{name:"Eagle's Wall",type:"Passive",desc:"Allies within 2 spaces take half damage while the Guard is standing."},{name:"Authority",type:"Action",desc:"Forces an enemy to attack it (saving throw to resist)."}],lairSuggestions:["Unbreakable formations","The eagle never falls"]},
  {id:"aetharion-captain",name:"Eagle Captain",type:"Humanoid",difficulty:"medium",role:"Bruiser",hp:22,dmg:"2d6+2",resist:"Physical",terrain:["Fortress","Mountain","City"],description:"Leaders who inspire absolute loyalty. Their presence elevates those around them.",abilities:[{name:"Commanding Strike",type:"Action",desc:"Deals 2d6+2 damage. Allies within 3 spaces gain +2 damage this turn."},{name:"Inspire Loyalty",type:"Passive",desc:"Allies within 3 spaces cannot be mentally controlled while the Captain is alive."},{name:"Final Order",type:"Reaction",desc:"When a nearby ally drops to 0 HP, that ally makes one free attack before dying."}],lairSuggestions:["Banners that wave on their own","Voices singing the anthem"]},
  {id:"urushan-recruit",name:"Urushan Recruit",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1d6",resist:"None",terrain:["Coast","Ship","City"],description:"Young sailors still learning the harshness of the sea.",abilities:[{name:"Harpoon Strike",type:"Action",desc:"Deals 1d6 damage at range."},{name:"Sea Step",type:"Passive",desc:"Moves without penalty on slippery or aquatic terrain."}],lairSuggestions:["Ropes and nets","Smell of salt and blood"]},
  {id:"urushan-mariner",name:"Urushan Mariner",type:"Humanoid",difficulty:"medium",role:"Skirmisher",hp:17,dmg:"2d6",resist:"None",terrain:["Coast","Ship","Ruins"],description:"Agile sea fighters. Opportunistic and lethal when the terrain favors them.",abilities:[{name:"Tide Strike",type:"Action",desc:"Deals 2d6 damage and pushes the target 2 spaces."},{name:"Marine Mobility",type:"Passive",desc:"Can move through allies and difficult terrain at no cost."},{name:"Returning Harpoon",type:"Reaction",desc:"When an enemy moves away, can attack it with 1d6+2 damage."}],lairSuggestions:["Wet and slippery ground","Hanging nets"]},
  {id:"urushan-justiciar",name:"Tide Justiciar",type:"Humanoid",difficulty:"medium",role:"Controller",hp:16,dmg:"5-8",resist:"None",terrain:["Coast","Ship","Cave"],description:"Guardians of Urushan's justice. Calculated and merciless toward those who break the balance.",abilities:[{name:"Net of Justice",type:"Action",desc:"Immobilizes an enemy for 1 turn."},{name:"Eye of the Storm",type:"Passive",desc:"Automatically detects the enemy that has dealt the most damage this combat."},{name:"Forced Balance",type:"Action",desc:"Two enemies must attack each other or suffer heavy penalties."}],lairSuggestions:["Strange currents","The sea itself responds"]},
  {id:"pueblos-wanderer",name:"Free Wanderer",type:"Humanoid",difficulty:"easy",role:"Minion",hp:1,dmg:"1d4+2",resist:"None",terrain:["Forest","Road","Mountain"],description:"Hardened nomads who have nothing left to lose.",abilities:[{name:"Path Strike",type:"Action",desc:"Deals 1d4+2 damage."},{name:"Always Moving",type:"Passive",desc:"Very difficult to immobilize or grapple."}],lairSuggestions:["Footprints that disappear","Abandoned camps"]},
  {id:"pueblos-pathwalker",name:"Path Walker",type:"Humanoid",difficulty:"medium",role:"Skirmisher",hp:15,dmg:"2d6",resist:"None",terrain:["Forest","Mountain","Ruins"],description:"Nomadic explorers who know paths no one else sees. Hard to catch.",abilities:[{name:"Path Strike",type:"Action",desc:"Deals 2d6 damage. Can move before and after the attack."},{name:"Favored Terrain",type:"Passive",desc:"Moves at full speed even through difficult terrain."},{name:"Fade into the Path",type:"Reaction",desc:"Once per round, can become briefly invisible after attacking."}],lairSuggestions:["Paths that seem to lead nowhere","False trails"]},
  {id:"pueblos-guide",name:"Guide of the Lost Path",type:"Humanoid",difficulty:"medium",role:"Controller",hp:14,dmg:"4-7",resist:"None",terrain:["Forest","Mountain","Cave"],description:"Those who know the paths no one else sees. They can make the terrain itself fight for them.",abilities:[{name:"Treacherous Path",type:"Action",desc:"Creates difficult terrain in an area. Anyone who enters takes 1d6 damage."},{name:"Terrain Knowledge",type:"Passive",desc:"Always knows the position of enemies in a wide radius."},{name:"Path Ambush",type:"Action",desc:"Allies can emerge from any point within the difficult terrain created."}],lairSuggestions:["The terrain seems to change","Paths that close behind"]}
];

GAMEDATA.combatRoles = [
  {id:"Minion",name:"Minion",desc:"Weak, comes in groups. Falls fast."},
  {id:"Tank",name:"Tank",desc:"High HP, holds the front line."},
  {id:"Caster",name:"Caster",desc:"Ranged or magic damage."},
  {id:"Bruiser",name:"Bruiser",desc:"Heavy melee damage."},
  {id:"Controller",name:"Controller",desc:"Applies conditions, controls the field."},
  {id:"Skirmisher",name:"Skirmisher",desc:"Fast and mobile. Hit and run."}
];
