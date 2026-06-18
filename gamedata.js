/* ══════════════════════════════════════════════════════════════
   EPIC QUEST — GAME DATA
   Reference data for the Story Master Hub.
   This file is loaded by index.html via <script src="gamedata.js">
   ══════════════════════════════════════════════════════════════ */

var GAMEDATA = {

/* ── RULES ── */
rules: {
  hpBase: 10,
  aenPerTurn: 2,
  actionsPerTurn: 2,
  movementPerTurn: 1,
  echoMaxPoints: 5,
  kitAbilityCost: 3,
  turnStructure: "1 Movimiento + 2 Acciones por turno. Cada acción puede ser ataque normal o habilidad.",
  sinergiaRule: "Solo la inicia el jugador activo. Llama a aliados que aún no han pasado turno. Sacrifican su turno futuro.",
  damageRule: "Habilidad de daño: paga Aen → directo a la tabla → tira d12 para columna. d20+mod solo para skill checks."
},

/* ── PLANES ── */
planes: [
  {id:"avelir",name:"Avelir",dc:0,extraDamage:null,auto:true},
  {id:"velo",name:"Velo",dc:15,extraDamage:"2d6",auto:false},
  {id:"cuenco",name:"Cuenco",dc:18,extraDamage:"2d12",auto:false},
  {id:"interplano",name:"Interplano",dc:20,extraDamage:"2d20",auto:false}
],

/* ── CONDITIONS (D&D 5e adapted) ── */
conditions: [
  {id:"blinded",name:"Cegado",effect:"No puede ver. Falla pruebas que requieran vista. Ataques contra él tienen ventaja, sus ataques tienen desventaja."},
  {id:"charmed",name:"Hechizado",effect:"No puede atacar al que lo hechizó. El hechizador tiene ventaja en interacciones sociales."},
  {id:"deafened",name:"Ensordecido",effect:"No puede oír. Falla pruebas que requieran oído."},
  {id:"frightened",name:"Asustado",effect:"Desventaja en ataques y pruebas mientras pueda ver la fuente del miedo. No puede acercarse voluntariamente."},
  {id:"grappled",name:"Agarrado",effect:"Velocidad reducida a 0. Termina si el agarrador queda incapacitado o es forzado fuera de alcance."},
  {id:"incapacitated",name:"Incapacitado",effect:"No puede tomar acciones ni reacciones."},
  {id:"invisible",name:"Invisible",effect:"Imposible de ver sin magia. Tiene ventaja en ataques. Ataques contra él tienen desventaja."},
  {id:"paralyzed",name:"Paralizado",effect:"Incapacitado, no puede moverse ni hablar. Falla salvaciones de Cuerpo. Ataques tienen ventaja, golpes cuerpo a cuerpo son críticos."},
  {id:"petrified",name:"Petrificado",effect:"Transformado en sustancia sólida. Peso x10. Inconsciente. Resistencia a todo daño. Inmune a veneno y enfermedad."},
  {id:"poisoned",name:"Envenenado",effect:"Desventaja en ataques y pruebas de habilidad."},
  {id:"prone",name:"Derribado",effect:"Solo puede arrastrarse. Desventaja en ataques. Ataques cuerpo a cuerpo contra él tienen ventaja, a distancia tienen desventaja."},
  {id:"restrained",name:"Inmovilizado",effect:"Velocidad 0. Ataques contra él tienen ventaja. Sus ataques y salvaciones de Cuerpo tienen desventaja."},
  {id:"stunned",name:"Aturdido",effect:"Incapacitado, no puede moverse, habla vacilante. Falla salvaciones de Cuerpo. Ataques tienen ventaja."},
  {id:"unconscious",name:"Inconsciente",effect:"Incapacitado, cae derribado, suelta lo que sostiene. Falla salvaciones de Cuerpo. Ataques tienen ventaja, cuerpo a cuerpo son críticos."},
  {id:"burning",name:"Ardiendo",effect:"Recibe 1d4 de daño de fuego al inicio de cada turno. Puede usar una acción para apagarse."},
  {id:"bleeding",name:"Sangrado",effect:"Pierde 1 Vitalidad al inicio de cada turno durante 2 turnos."},
  {id:"frozen",name:"Congelado",effect:"Velocidad reducida a la mitad. Desventaja en ataques de Cuerpo. Dura 1 turno."},
  {id:"slowed",name:"Ralentizado",effect:"Velocidad reducida a la mitad. -2 a CA y salvaciones de Cuerpo."}
],

/* ── CREATURE TYPES ── */
creatureTypes: ["Bestia","No-muerto","Constructo","Elemental","Humanoide","Demonio","Aberración","Planta","Dragón"],

/* ── DIFFICULTIES ── */
difficulties: [
  {id:"easy",name:"Fácil",desc:"Amenaza menor. 1-2 jugadores pueden manejarla."},
  {id:"medium",name:"Medio",desc:"Desafío real. Requiere coordinación del grupo."},
  {id:"hard",name:"Duro",desc:"Peligro serio. Puede haber caídas."},
  {id:"boss",name:"Jefe",desc:"Encuentro climático. Todo el grupo al límite."}
],

/* ── LOOT RARITIES ── */
rarities: [
  {id:"common",name:"Común",color:"#666"},
  {id:"uncommon",name:"Poco común",color:"#247038"},
  {id:"rare",name:"Raro",color:"#2858a0"},
  {id:"legendary",name:"Legendario",color:"#8a6f0a"}
],

/* ── DEFAULT LAIR ACTIONS ── */
defaultLairActions: [
  "La niebla se espesa — visibilidad reducida",
  "El terreno colapsa — movimiento difícil",
  "El fuego se expande — daño por zona",
  "Cae un árbol / estructura — bloquea camino",
  "Refuerzos enemigos llegan",
  "Descarga arcana — daño aleatorio",
  "Sube el agua — terreno cambia",
  "Se abre el suelo — peligro de caída",
  "Oscuridad mágica — todos cegados 1 turno",
  "Viento huracanado — empuja 2 casillas"
],

/* ══════════════════════════════════════════════
   FACTIONS
   ══════════════════════════════════════════════ */
factions: [
  {id:"cheran",name:"Teocracia de Cherán",color:"#9b2020",icon:"🔥",
   declaration:"Nuestro dios es el único. Él proveerá. Los infieles serán purificados.",
   question:"¿Tu fe es tu fuerza o tu cadena?",
   feats:[
    {response:"La fe es mi fuerza",name:"Convicción de Engar",attr:"Cuerpo",desc:"Ventaja cuando tu presencia física como portador de la fe debe imponerse."},
    {response:"La fe es mi cadena",name:"La Grieta en la Fe",attr:"Mente",desc:"Ventaja al persuadir, debatir o influenciar a quienes comparten o cuestionan una fe."},
    {response:"Yo elijo en qué creer",name:"Ojo del Hereje",attr:"Echo",desc:"Detectas manipulación ideológica, creencias falsas o motivaciones ocultas bajo un manto de fe."}
  ]},
  {id:"vorin",name:"Casa Vorin",color:"#1a4a7a",icon:"⚖️",
   declaration:"El comercio es poder. La información es poder. Todo tiene precio — incluyendo tú.",
   question:"¿Qué estás dispuesto a sacrificar?",
   feats:[
    {response:"Todo tiene precio",name:"El Precio Exacto",attr:"Mente",desc:"Ventaja al negociar, proponer un trato o convencer del valor real de algo."},
    {response:"Hay cosas que no se venden",name:"Arquitectura del Poder",attr:"Echo",desc:"Percibes quién tiene el poder real — los flujos ocultos de influencia."},
    {response:"El precio lo pagan otros",name:"Sombra en el Salón",attr:"Cuerpo",desc:"Ventaja al navegar espacios de poder donde tu presencia abre puertas."}
  ]},
  {id:"escarlata",name:"La Orden Escarlata",color:"#8b1a1a",icon:"🛡️",
   declaration:"No servimos a ningún rey. Solo un código y la voluntad de morir por él.",
   question:"¿Defiendes hasta morir, negocias, o evalúas?",
   feats:[
    {response:"Defiendo hasta morir",name:"La Última Palabra",attr:"Cuerpo",desc:"Ventaja al imponerte físicamente para defender a alguien vulnerable."},
    {response:"Negocio",name:"La Mesa entre Espadas",attr:"Mente",desc:"Ventaja al proponer acuerdo o mediación en medio de un conflicto."},
    {response:"Evalúo si vale la pena",name:"La Pregunta del Veterano",attr:"Echo",desc:"Lees los riesgos reales y motivaciones profundas antes de actuar."}
  ]},
  {id:"aetharion",name:"Aetharion",color:"#c9a84c",icon:"🦅",
   declaration:"El águila no negocia. Protege. Y lo que protege, lo protege para siempre.",
   question:"¿A qué eres leal?",
   feats:[
    {response:"Leal a la institución",name:"El Peso del Águila",attr:"Cuerpo",desc:"Tu presencia como representante de Aetharion establece autoridad — tu porte habla antes que tú."},
    {response:"Leal al hombre",name:"Vínculo Inquebrantable",attr:"Mente",desc:"Ventaja al interceder verbalmente por alguien a quien debes lealtad."},
    {response:"Leal a la victoria",name:"Lectura del Campo",attr:"Echo",desc:"Identificas el punto de máxima tensión — el momento o persona que puede cambiar todo."}
  ]},
  {id:"urushan",name:"Urushan",color:"#2a6a6a",icon:"⚓",
   declaration:"El mar no perdona. Nosotros tampoco. Pero el mar es justo — y nosotros también.",
   question:"¿Cómo navegas el mundo?",
   feats:[
    {response:"Creo en algo",name:"La Apuesta Genuina",attr:"Cuerpo",desc:"Ventaja cuando te juegas todo por una convicción — tu compromiso físico es innegable."},
    {response:"Solo calculo",name:"La Lectura del Poder",attr:"Mente",desc:"Ventaja al analizar motivos ocultos y calcular el movimiento correcto."},
    {response:"Anticipo",name:"La Sombra que Anticipa",attr:"Echo",desc:"Percibes lo que está por suceder antes de que se manifieste."}
  ]},
  {id:"pueblos",name:"Los Pueblos sin Techo",color:"#6a4a2a",icon:"🏕️",
   declaration:"No tenemos tierra. No tenemos rey. Tenemos algo mejor: el camino.",
   question:"¿Por qué caminas?",
   feats:[
    {response:"Huyo de algo",name:"Los Caminos que Nadie Ve",attr:"Cuerpo",desc:"Ventaja al navegar entornos desconocidos buscando rutas, refugios o recursos que nadie encuentra."},
    {response:"Camino hacia algo",name:"El Propósito Claro",attr:"Echo",desc:"Tu determinación es palpable — los obstáculos humanos se apartan sin confrontación."},
    {response:"Solo camino",name:"El que No Tiene Dueño",attr:"Mente",desc:"Te mueves entre grupos hostiles — tu naturaleza no alineada hace que cada facción te vea como propio."}
  ]}
],

/* ══════════════════════════════════════════════
   CLASSES (10) + SUBCLASSES (24)
   ══════════════════════════════════════════════ */
classes: [
  /* ── FURY ── */
  {id:"fury",name:"Fury",nameEs:"Furia",type:"Fuerza",resource:"FURY",
   abilities:[
    {name:"Unstoppable",type:"Base",cost:"2 Aen",dmg:"6",desc:"Carga en línea recta arrasando todo. Atraviesa 3 casillas, derriba al impactar."},
    {name:"Come At Me",type:"Base",cost:"2 Aen",dmg:null,desc:"Provoca a todos los enemigos en radio 2. Ganas +1 Aen por ataque recibido."},
    {name:"Still Standing",type:"Heroica",cost:"3 Aen",dmg:null,desc:"Te niegas a caer. Recuperas 8 Vitalidad y contraataque gratis. Drawback: -1d8 Vitalidad al terminar."}
   ],
   subclasses:[
    {id:"berserker",name:"Berserker",desc:"Más daño recibes, más peligroso te vuelves.",
     abilities:[
      {name:"Blood Frenzy",type:"Base",cost:"3 Aen",dmg:null,desc:"+2 daño por herida recibida. Ignora armadura. Drawback: -1d6 Vitalidad al activar."},
      {name:"Seeing Red",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Daño doble 2 rondas. Atacas al más cercano, aliado o enemigo. Drawback: -1d10 Vitalidad al terminar."}
    ]},
    {id:"colossus",name:"Colossus",desc:"Tormenta que camina. Presencia imparable.",
     abilities:[
      {name:"Earthquake",type:"Base",cost:"3 Aen",dmg:"5",desc:"Área radio 3. Derriba e inmoviliza 1 ronda. Drawback: no puedes moverte siguiente turno."},
      {name:"Eye of the Storm",type:"Heroica",cost:"4 Aen",dmg:"10",desc:"Daño a todos en radio 4. Derribados + aturdidos 2 rondas. Drawback: -1d10 Vitalidad al activar."}
    ]},
    {id:"voivode",name:"Voivode",desc:"Líder agresivo. Su furia contagia al grupo.",
     abilities:[
      {name:"War Cry",type:"Base",cost:"3 Aen",dmg:null,desc:"Aliados radio 3 ganan +4 daño y +1 Aen 2 rondas. Drawback: -1d6 Vitalidad al activar."},
      {name:"To The Last",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Aliados recuperan 10 Vitalidad y se liberan de condiciones. Drawback: -1d10 Vitalidad, incapacitado 1 ronda."}
    ]}
  ]},

  /* ── KNIGHT ── */
  {id:"knight",name:"Knight",nameEs:"Caballero",type:"Fuerza",resource:"DEVOTION",
   abilities:[
    {name:"Oathstrike",type:"Base",cost:"2 Aen",dmg:"5",desc:"Golpe preciso guiado por tu juramento. Ignora armadura, desarma al impactar."},
    {name:"Hold the Line",type:"Base",cost:"2 Aen",dmg:null,desc:"Plantas posición. Bloqueas movimiento enemigo radio 2, reduces daño recibido a la mitad."},
    {name:"Sworn Duty",type:"Heroica",cost:"3 Aen",dmg:"8",desc:"Doble ataque garantizado 2 rondas. Drawback: -1d8 Vitalidad al terminar."}
   ],
   subclasses:[
    {id:"inquisitor",name:"Inquisitor",desc:"Cazador de herejes. Juzga y ejecuta.",
     abilities:[
      {name:"Marked for Judgment",type:"Base",cost:"3 Aen",dmg:"4",desc:"Marca al objetivo: +3 daño acumulativo por ataque. Drawback: -1d6 Aen al activar."},
      {name:"Final Verdict",type:"Heroica",cost:"4 Aen",dmg:"15",desc:"Si marcado: daño x2. Ejecuta si no es jefe. Drawback: -1d10 Vitalidad al terminar."}
    ]},
    {id:"protector",name:"Protector",desc:"Escudo humano. Da su cuerpo por los demás.",
     abilities:[
      {name:"Take the Hit",type:"Base",cost:"3 Aen",dmg:null,desc:"Rediriges daño de un aliado radio 3 hacia ti, reducido a la mitad. Drawback: -1d6 Vitalidad al activar."},
      {name:"Aegis",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Todos los aliados inmunes al daño 1 ronda. Drawback: -1d10 Vitalidad, inmovilizado 1 ronda."}
    ]},
    {id:"martyr",name:"Martyr",desc:"Se sacrifica. Da todo por el grupo.",
     abilities:[
      {name:"Blood Oath",type:"Base",cost:"3 Aen",dmg:null,desc:"Aliado gana +5 daño y +2 Aen 2 rondas. Drawback: -1d8 Vitalidad al activar."},
      {name:"Last Sacrifice",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Todos los aliados recuperan toda la Vitalidad y se liberan de condiciones. Drawback: -1d12 Vitalidad (puedes caer a 0)."}
    ]}
  ]},

  /* ── MONK ── */
  {id:"monk",name:"Monk",nameEs:"Monje",type:"Fuerza",resource:"CLARITY",
   abilities:[
    {name:"Flowing Strike",type:"Base",cost:"2 Aen",dmg:"4",desc:"Golpea y muévete 2 casillas sin provocar reacciones."},
    {name:"Deflect",type:"Base",cost:"2 Aen",dmg:null,desc:"Anulas un ataque y devuelves la mitad del daño."},
    {name:"Inner Flow",type:"Heroica",cost:"3 Aen",dmg:"6",desc:"Acción extra cada ronda 2 rondas. Esquivas primer ataque. Drawback: -1d8 Aen al terminar."}
   ],
   subclasses:[
    {id:"martial_artist",name:"Martial Artist",desc:"Puño puro. Técnica y combos perfectos.",
     abilities:[
      {name:"Perfect Form",type:"Base",cost:"3 Aen",dmg:"6",desc:"Cada golpe consecutivo al mismo objetivo +2 daño. Drawback: -1d6 Aen al activar."},
      {name:"Thousand Strikes",type:"Heroica",cost:"4 Aen",dmg:"12",desc:"Golpea hasta 5 veces. Cada impacto reduce armadura. Drawback: -1d10 Vitalidad al terminar."}
    ]},
    {id:"void",name:"Void",desc:"Vacío interior. Corrompe y drena esencia.",
     abilities:[
      {name:"Void Touch",type:"Base",cost:"3 Aen",dmg:"5",desc:"Robas 2 Aen al objetivo y lo desconcentras. Drawback: -1d6 Vitalidad al activar."},
      {name:"The Empty",type:"Heroica",cost:"4 Aen",dmg:"8",desc:"Drenas Aen de todos en radio 3. Incapacitas 1 ronda. Drawback: -1d10 Vitalidad al terminar."}
    ]}
  ]},

  /* ── SHADOW ── */
  {id:"shadow",name:"Shadow",nameEs:"Sombra",type:"Fuerza",resource:"AEN",
   abilities:[
    {name:"Backstab",type:"Base",cost:"2 Aen",dmg:"7",desc:"Si el objetivo no te ve, daño x2."},
    {name:"Vanish",type:"Base",cost:"2 Aen",dmg:null,desc:"Te vuelves invisible 1 ronda. Mueve 4 casillas."},
    {name:"Death Mark",type:"Heroica",cost:"3 Aen",dmg:"12",desc:"Teletransporte al objetivo + golpe garantizado. Drawback: -1d8 Aen al terminar."}
   ],
   subclasses:[
    {id:"raven",name:"Raven",desc:"Depredador. Marca a su presa y la elimina.",
     abilities:[
      {name:"Mark the Prey",type:"Base",cost:"3 Aen",dmg:"4",desc:"Objetivo marcado recibe +4 daño de todos 3 rondas. Drawback: -1d6 Aen al activar."},
      {name:"Eternal Night",type:"Heroica",cost:"4 Aen",dmg:"10",desc:"Invisible 3 rondas. Cada ataque desde invisibilidad daño x2. Drawback: -1d10 Vitalidad al terminar."}
    ]},
    {id:"phantom",name:"Phantom",desc:"Engaño, veneno y desaparición.",
     abilities:[
      {name:"Ghost Step",type:"Base",cost:"3 Aen",dmg:"3",desc:"Veneno: 3 daño por ronda 3 rondas. Ignora armadura. Drawback: -1d6 Aen al activar."},
      {name:"Fade to Nothing",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Inmune a todo daño 2 rondas. Atraviesas enemigos y muros. Drawback: -1d10 Vitalidad al terminar."}
    ]}
  ]},

  /* ── ARCHER ── */
  {id:"archer",name:"Archer",nameEs:"Arquero",type:"Fuerza",resource:"FOCUS",
   abilities:[
    {name:"Piercing Shot",type:"Base",cost:"2 Aen",dmg:"5",desc:"Atraviesa todos los enemigos en línea recta."},
    {name:"Suppressing Fire",type:"Base",cost:"2 Aen",dmg:"3",desc:"Zona radio 2 vuelve terreno difícil. Ralentiza a quien entre."},
    {name:"Arrow Storm",type:"Heroica",cost:"3 Aen",dmg:"8",desc:"Daño a todos los enemigos visibles 2 rondas. Drawback: -1d8 Aen al terminar."}
   ],
   subclasses:[
    {id:"sniper",name:"Sniper",desc:"Un solo tiro. Paciencia letal.",
     abilities:[
      {name:"Steady Aim",type:"Base",cost:"3 Aen",dmg:"6",desc:"+5 daño por ronda sin moverte (máx 3). Drawback: no puedes moverte mientras cargas."},
      {name:"One Shot",type:"Heroica",cost:"4 Aen",dmg:"20",desc:"Impacto garantizado. Ignora armadura. Ejecuta si no es jefe. Drawback: -1d10 Aen al terminar."}
    ]},
    {id:"hunter",name:"Hunter",desc:"Trampas y rastreo. El campo es su territorio.",
     abilities:[
      {name:"Set the Trap",type:"Base",cost:"3 Aen",dmg:"5",desc:"Trampa: inmoviliza 2 rondas al primero que entre. Drawback: -1d6 Aen al activar."},
      {name:"The Hunt",type:"Heroica",cost:"4 Aen",dmg:"10",desc:"Todos marcados e inmovilizados 1 ronda. +5 daño contra ellos. Drawback: -1d10 Vitalidad al terminar."}
    ]}
  ]},

  /* ── WIZARD ── */
  {id:"wizard",name:"Wizard",nameEs:"Mago",type:"Magia",resource:"RESONANCE",
   abilities:[
    {name:"Arcane Bolt",type:"Base",cost:"2 Aen",dmg:"6",desc:"Proyectil de energía pura. Ignora armadura. Alcance ilimitado."},
    {name:"Rune Trap",type:"Base",cost:"2 Aen",dmg:"5",desc:"Runa que explota en radio 2 al ser pisada."},
    {name:"Rewrite",type:"Heroica",cost:"3 Aen",dmg:null,desc:"Deshaz la última acción de cualquier criatura. Repite tu turno. Drawback: -1d8 Aen al terminar."}
   ],
   subclasses:[
    {id:"battle_mage",name:"Battle Mage",desc:"Magia y combate fusionados. Espada y hechizo.",
     abilities:[
      {name:"Spellblade",type:"Base",cost:"3 Aen",dmg:"7",desc:"Ataques cuerpo a cuerpo +1d6 daño arcano 3 rondas. Drawback: -1d6 Aen al activar."},
      {name:"Arcane Surge",type:"Heroica",cost:"4 Aen",dmg:"14",desc:"Daño en radio 3 alrededor tuyo. Derriba. Drawback: -1d10 Vitalidad al terminar."}
    ]},
    {id:"elementalist",name:"Elementalist",desc:"Dominio de los elementos. Fuego, hielo, rayo.",
     abilities:[
      {name:"Elemental Burst",type:"Base",cost:"3 Aen",dmg:"6",desc:"Elige: Fuego (quema 2 rondas), hielo (congela), o rayo (atraviesa). Drawback: -1d6 Aen al activar."},
      {name:"Cataclysm",type:"Heroica",cost:"4 Aen",dmg:"16",desc:"Daño masivo radio 4. Quema + congela + aturde. Drawback: -1d10 Aen al terminar."}
    ]},
    {id:"chronomancer",name:"Chronomancer",desc:"Manipula el tiempo. Acelera, detiene, retrocede.",
     abilities:[
      {name:"Haste",type:"Base",cost:"3 Aen",dmg:null,desc:"Objetivo gana acción extra 2 rondas. Drawback: -1d6 Aen al activar."},
      {name:"Time Stop",type:"Heroica",cost:"4 Aen",dmg:null,desc:"2 turnos completos seguidos. Enemigos congelados. Drawback: -1d12 Aen al terminar."}
    ]}
  ]},

  /* ── DRUID ── */
  {id:"druid",name:"Druid",nameEs:"Druida",type:"Magia",resource:"ESSENCE",
   abilities:[
    {name:"Healing Bloom",type:"Base",cost:"2 Aen",dmg:null,desc:"Aliado recupera 6 Vitalidad."},
    {name:"Entangle",type:"Base",cost:"2 Aen",dmg:"3",desc:"Raíces inmovilizan a todos en radio 2 por 2 rondas."},
    {name:"Wild Shape",type:"Heroica",cost:"3 Aen",dmg:"10",desc:"Forma bestia: +10 Vitalidad, daño melee aumentado 3 rondas. Drawback: -1d8 Aen al terminar."}
   ],
   subclasses:[
    {id:"shaman",name:"Shaman",desc:"Sanación y purificación. La tierra lo cura todo.",
     abilities:[
      {name:"Purify",type:"Base",cost:"3 Aen",dmg:null,desc:"Aliado se libera de todas las condiciones y recupera 4 Vitalidad. Drawback: -1d6 Aen al activar."},
      {name:"Spirit Guardian",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Aliados recuperan 8 Vitalidad por ronda 3 rondas. Drawback: -1d10 Aen al terminar."}
    ]},
    {id:"beast_master",name:"Beast Master",desc:"Compañero animal. La naturaleza pelea a su lado.",
     abilities:[
      {name:"Call Companion",type:"Base",cost:"3 Aen",dmg:"5",desc:"Compañero ataca por separado, comparte tu turno. Drawback: -1d6 Aen al activar."},
      {name:"The Pack",type:"Heroica",cost:"4 Aen",dmg:"4x3",desc:"3 bestias atacan 4 daño cada una. Rodean y derriban. Drawback: -1d10 Aen al terminar."}
    ]}
  ]},

  /* ── WARLOCK ── */
  {id:"warlock",name:"Warlock",nameEs:"Brujo",type:"Magia",resource:"PACT",
   abilities:[
    {name:"Chaos Bolt",type:"Base",cost:"2 Aen",dmg:"7",desc:"Daño aleatorio +1d6. Puede rebotar a otro enemigo."},
    {name:"Hex",type:"Base",cost:"2 Aen",dmg:null,desc:"Objetivo recibe +3 daño de todo y falla su próxima acción."},
    {name:"Unleash the Pact",type:"Heroica",cost:"3 Aen",dmg:"14",desc:"Daño masivo radio 3. Caos: efectos aleatorios. Drawback: -1d10 Vitalidad al terminar."}
   ],
   subclasses:[
    {id:"necromancer",name:"Necromancer",desc:"Muerte y no-muertos. El fin es solo el principio.",
     abilities:[
      {name:"Raise Dead",type:"Base",cost:"3 Aen",dmg:"4",desc:"Invoca esqueleto: 4 daño, dura hasta morir. Drawback: -1d6 Vitalidad al activar."},
      {name:"Army of the Dead",type:"Heroica",cost:"4 Aen",dmg:"3x4",desc:"4 no-muertos, cada uno 3 daño. Abruman al enemigo. Drawback: -1d10 Vitalidad al terminar."}
    ]},
    {id:"illrigger",name:"Illrigger",desc:"Hex y maldiciones. Caos hecho manifiesto.",
     abilities:[
      {name:"Doom Brand",type:"Base",cost:"3 Aen",dmg:"5",desc:"Maldición: +2 daño por ronda. Explota al morir. Drawback: -1d6 Aen al activar."},
      {name:"Chains of Chaos",type:"Heroica",cost:"4 Aen",dmg:"8",desc:"Enemigos comparten daño recibido 3 rondas. Drawback: -1d10 Vitalidad al terminar."}
    ]},
    {id:"heretic",name:"Heretic",desc:"Rechaza el orden. Abraza lo prohibido.",
     abilities:[
      {name:"Forbidden Knowledge",type:"Base",cost:"3 Aen",dmg:"8",desc:"Copia la última habilidad usada por cualquier criatura. Drawback: -1d8 Vitalidad al activar."},
      {name:"Unbound Chaos",type:"Heroica",cost:"4 Aen",dmg:"18",desc:"Daño devastador radio 5. Ignora todo. Incontrolable. Drawback: -1d12 Vitalidad (afecta aliados cercanos)."}
    ]}
  ]},

  /* ── INVENTOR ── */
  {id:"inventor",name:"Inventor",nameEs:"Inventor",type:"Fuerza",resource:"INGENUITY",
   abilities:[
    {name:"Turret",type:"Base",cost:"2 Aen",dmg:"4",desc:"Torreta dispara 4 daño por ronda. Dura 3 rondas."},
    {name:"Upgrade",type:"Base",cost:"2 Aen",dmg:null,desc:"Aliado gana +3 daño y +5 Vitalidad 3 rondas."},
    {name:"Masterwork",type:"Heroica",cost:"3 Aen",dmg:"12",desc:"Artefacto definitivo: daño en línea + buff a todo el grupo. Drawback: -1d8 Aen al terminar."}
   ],
   subclasses:[
    {id:"sapper",name:"Sapper",desc:"Explosivos y trampas. Destrucción calculada.",
     abilities:[
      {name:"Demolition Charge",type:"Base",cost:"3 Aen",dmg:"8",desc:"Explota radio 3. Destruye coberturas y terreno. Drawback: -1d6 Aen al activar."},
      {name:"Carpet Bomb",type:"Heroica",cost:"4 Aen",dmg:"16",desc:"Daño radio 5. Derriba a todos. Terreno difícil permanente. Drawback: -1d10 Vitalidad al terminar."}
    ]},
    {id:"cyborg",name:"Cyborg",desc:"Se modifica a sí mismo. Cuerpo como artefacto.",
     abilities:[
      {name:"Augment",type:"Base",cost:"3 Aen",dmg:"5",desc:"+5 Vitalidad, +2 daño melee, +2 mov 3 rondas. Drawback: -1d6 Aen al activar."},
      {name:"Machine Mode",type:"Heroica",cost:"4 Aen",dmg:"12",desc:"Inmune a condiciones. Acción extra. Daño melee x2 2 rondas. Drawback: -1d10 Vitalidad al terminar."}
    ]}
  ]},

  /* ── BARD ── */
  {id:"bard",name:"Bard",nameEs:"Bardo",type:"Fuerza",resource:"INSPIRATION",
   abilities:[
    {name:"Inspire",type:"Base",cost:"2 Aen",dmg:null,desc:"Aliado gana +1d6 a próxima acción y +3 daño."},
    {name:"Charm",type:"Base",cost:"2 Aen",dmg:null,desc:"Enemigo no puede atacarte 2 rondas. Lo desconcentras."},
    {name:"Grand Finale",type:"Heroica",cost:"3 Aen",dmg:"6",desc:"Aliados ganan acción extra. Enemigos aterrorizados. Drawback: -1d8 Aen al terminar."}
   ],
   subclasses:[
    {id:"skald",name:"Skald",desc:"Canción de guerra. Combate en primera línea.",
     abilities:[
      {name:"War Song",type:"Base",cost:"3 Aen",dmg:"4",desc:"Aliados radio 3: +4 daño, resisten condiciones 3 rondas. Drawback: -1d6 Aen al activar."},
      {name:"Battle Hymn",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Aliados: daño x2 y +1 acción 2 rondas. Drawback: -1d10 Vitalidad al terminar."}
    ]},
    {id:"spy",name:"Spy",desc:"Disfraz, imitación, manipulación. Nunca es quien parece.",
     abilities:[
      {name:"Disguise",type:"Base",cost:"3 Aen",dmg:null,desc:"Te haces pasar por enemigo: ignoran tu presencia 2 rondas. Drawback: -1d6 Aen al activar."},
      {name:"The Long Con",type:"Heroica",cost:"4 Aen",dmg:"10",desc:"Controlas a un enemigo 2 rondas. Robas sus habilidades. Drawback: -1d10 Vitalidad al terminar."}
    ]}
  ]}
],

/* ══════════════════════════════════════════════
   KITS (15 Avelir)
   ══════════════════════════════════════════════ */
kits: [
  {id:"asalto",name:"Asalto",fantasy:"Vikingo",archetype:"Tanque agresivo",hpBonus:8,aenBonus:0,
   ability:{name:"Carga",cost:"3 Aen",desc:"Corres 6 casillas en línea recta. 1d6 daño a cada enemigo en el camino.",drawback:"Siguiente ataque contra ti tiene ventaja."}},
  {id:"filo",name:"Filo",fantasy:"Samurái",archetype:"Daño equilibrado",hpBonus:5,aenBonus:1,
   ability:{name:"Triple Corte",cost:"3 Aen",desc:"Tres ataques de 1d6 a tres enemigos distintos.",drawback:"Pierdes todo el movimiento este turno."}},
  {id:"dagas",name:"Dagas",fantasy:"Ninja",archetype:"Daño sigiloso",hpBonus:2,aenBonus:2,
   ability:{name:"Golpe desde las Sombras",cost:"3 Aen",desc:"Solo fuera de línea de visión. Ventaja y daño doble.",drawback:"Pierdes Echo por 1 turno."}},
  {id:"corsario",name:"Corsario",fantasy:"Pirata",archetype:"Daño equilibrado",hpBonus:5,aenBonus:1,
   ability:{name:"Disparo Oportunista",cost:"3 Aen",desc:"Interrumpes movimiento enemigo con ataque a distancia 1d6. Pierde resto de movimiento.",drawback:"No puedes atacar a distancia siguiente turno."}},
  {id:"bastion",name:"Bastión",fantasy:"Caballero",archetype:"Tanque extremo",hpBonus:10,aenBonus:0,
   ability:{name:"Muro de Escudo",cost:"3 Aen",desc:"Absorbes todo daño dirigido a aliado adyacente 1 ronda.",drawback:"No puedes moverte. Si te fuerzan, se cancela."}},
  {id:"gladiador",name:"Gladiador",fantasy:"Gladiador",archetype:"Daño equilibrado",hpBonus:5,aenBonus:1,
   ability:{name:"Golpe Doble",cost:"3 Aen",desc:"Dos ataques 1d6 al mismo objetivo o a dos adyacentes.",drawback:"Segundo ataque siempre tiene desventaja."}},
  {id:"halcon",name:"Halcón",fantasy:"Cazador",archetype:"Control de campo",hpBonus:4,aenBonus:1,
   ability:{name:"Trampa",cost:"3 Aen",desc:"Trampa invisible en casilla visible. 1d6 daño + inmoviliza 1 turno.",drawback:"Pierdes movimiento completo este turno."}},
  {id:"raiz",name:"Raíz",fantasy:"Druida",archetype:"Soporte curativo",hpBonus:3,aenBonus:2,
   ability:{name:"Curación Natural",cost:"3 Aen",desc:"Restaura d8 Vitalidad a aliado (d12 si bajo mitad HP).",drawback:"Recibes 1d4 daño al canalizar."}},
  {id:"colmillo",name:"Colmillo",fantasy:"Hombre Lobo",archetype:"Tanque transformado",hpBonus:7,aenBonus:0,
   ability:{name:"Furia Bestial",cost:"3 Aen",desc:"1d6 a todos adyacentes. Cada uno recibe Sangrado (1/turno, 2 turnos).",drawback:"No puedes usar habilidades de clase siguiente turno."}},
  {id:"conducto",name:"Conducto",fantasy:"Mago Arcano",archetype:"Amplificación mágica",hpBonus:0,aenBonus:3,
   ability:{name:"Canalización Amplificada",cost:"3 Aen",desc:"Siguiente habilidad sube un tier de plano sin costo. Debes usarla este turno.",drawback:"Echo -1 por 2 turnos."}},
  {id:"crisol",name:"Crisol",fantasy:"Alquimista",archetype:"Soporte versátil",hpBonus:2,aenBonus:2,
   ability:{name:"Poción",cost:"3 Aen",desc:"Elige: Curar (d6), Dañar (d6), o Condicionar (ralentizado/asustado/debilitado 1 turno).",drawback:"Solo funciona en objetivos adyacentes."}},
  {id:"juramento",name:"Juramento",fantasy:"Paladín",archetype:"Tanque soporte",hpBonus:7,aenBonus:1,
   ability:{name:"Imposición",cost:"3 Aen",desc:"Restaura d6 Vitalidad + elimina condición negativa. Si a 0 HP, lo levanta con 1.",drawback:"Recibes la mitad del daño de la condición eliminada."}},
  {id:"berserker_kit",name:"Berserker",fantasy:"Berserker",archetype:"Tanque dañero",hpBonus:6,aenBonus:0,
   ability:{name:"Frenesí",cost:"3 Aen",desc:"+2 daño por golpe recibido esta ronda. Con 3+ golpes, siguiente ataque derriba.",drawback:"No puedes usar habilidades de clase durante el frenesí."}},
  {id:"cuervo",name:"Cuervo",fantasy:"Asesino",archetype:"Control/veneno",hpBonus:2,aenBonus:2,
   ability:{name:"Veneno",cost:"3 Aen",desc:"Objetivo Envenenado: pierde 1 Aen/turno 2 turnos. Sin Aen, 1 daño/turno.",drawback:"Pierdes movimiento este turno."}},
  {id:"zen",name:"Zen",fantasy:"Monje",archetype:"Control preciso",hpBonus:4,aenBonus:1,
   ability:{name:"Golpe Paralizante",cost:"3 Aen",desc:"Objetivo pierde 1 de 2 acciones siguiente turno. En 17+ del d20, pierde ambas.",drawback:"Solo funciona sin armas equipadas."}}
]

};


/* ══════════════════════════════════════════════
   BESTIARIO BASE — 30 criaturas (6 existentes + 24 nuevas)
   Organizadas por roles tácticos
   ══════════════════════════════════════════════ */
GAMEDATA.baseBestiary = [
  /* ─── EXISTENTES (6) ─── */
  {id:"base-sombra",name:"Sombra de la Marca",type:"No-muerto",difficulty:"medium",hp:15,dmg:"4-8",resist:"Físico",terrain:["Bosque","Ruinas","Nocturno"],description:"Silueta humanoide envuelta en humo negro. Ojos de luz violeta. No habla, gruñe.",abilities:[{name:"Zarpazo Sombrío",type:"Acción",desc:"Cuerpo a cuerpo 4-8."},{name:"Toque Corrupto",type:"Acción",desc:"Al golpear, el objetivo pierde 1 Aen adicional."},{name:"Reformar",type:"Pasiva",desc:"Sin daño de fuego/luz, reaparece en 2 turnos con HP/2."}],lairSuggestions:["Niebla oscura se espesa","Sombra emerge de un cadáver"]},
  {id:"base-arana",name:"Araña del Velo",type:"Bestia",difficulty:"easy",hp:8,dmg:"2-5",resist:"Ninguno",terrain:["Cueva","Ruinas"],description:"Araña del tamaño de un perro. Patas translúcidas que parpadean entre planos.",abilities:[{name:"Mordisco Venenoso",type:"Acción",desc:"2-5 daño. Envenenado 1 turno."},{name:"Telaraña",type:"Acción",desc:"Inmoviliza 1 turno. Alcance 3."}],lairSuggestions:["Telarañas bloquean caminos"]},
  {id:"base-golem",name:"Golem de Runas",type:"Constructo",difficulty:"hard",hp:40,dmg:"8-14",resist:"Magia",terrain:["Ruinas","Templo"],description:"Figura humanoide de piedra con runas brillantes. Silencioso e implacable.",abilities:[{name:"Puño de Piedra",type:"Acción",desc:"8-14 daño. Derriba."},{name:"Absorber Aen",type:"Pasiva",desc:"Inmune a habilidades mágicas. Absorbe el Aen gastado contra él."},{name:"Explosión Rúnica",type:"Acción",desc:"Al morir, explota radio 2 por 10 daño."}],lairSuggestions:["Runas en el suelo brillan — terreno difícil"]},
  {id:"base-lobo",name:"Lobo Espectral",type:"No-muerto",difficulty:"easy",hp:10,dmg:"3-6",resist:"Físico",terrain:["Bosque","Nocturno"],description:"Lobo translúcido con ojos azules. Se mueve sin emitir sonido.",abilities:[{name:"Mordisco Fantasmal",type:"Acción",desc:"3-6 daño. Ignora armadura."},{name:"Aullido",type:"Acción",desc:"Todos en radio 3: Asustado 1 turno."}],lairSuggestions:["Aullidos lejanos — moral baja"]},
  {id:"base-heraldo",name:"El Heraldo",type:"Elemental",difficulty:"boss",hp:80,dmg:"12-20",resist:"Físico, Fuego",terrain:["Cualquiera"],description:"Figura de luz y sombra que cambia de forma constantemente. No tiene rostro.",abilities:[{name:"Descarga Planar",type:"Acción",desc:"12-20 daño radio 3. Todos derribados."},{name:"Fisura",type:"Acción",desc:"Abre grieta. Terreno difícil permanente."},{name:"Escudo de Planos",type:"Pasiva",desc:"Reduce todo daño en 5. Inmune a condiciones."},{name:"Invocar Fragmentos",type:"Acción",desc:"Invoca 2 Sombras de la Marca."}],lairSuggestions:["La realidad se distorsiona","El cielo cambia de color","Grietas emiten luz"]},
  {id:"base-capitan",name:"Capitán de la Marca",type:"No-muerto",difficulty:"hard",hp:30,dmg:"6-12",resist:"Control mental",terrain:["Cualquiera"],description:"Soldado corrupto que conserva su disciplina militar. Lidera a las Sombras.",abilities:[{name:"Espada de Sombra",type:"Acción",desc:"6-12 daño. Crítico: ciega 1 turno."},{name:"Grito de Mando",type:"Acción",desc:"Sombras en radio 4 hacen ataque libre."},{name:"Escudo de Oscuridad",type:"Reacción",desc:"Reduce daño en 4. 1/ronda."}],lairSuggestions:["Refuerzos de Sombras llegan"]},

  /* ─── MINIONS (1 HP) ─── */
  {id:"minion-goblin",name:"Goblin Esbirro",type:"Humanoide",difficulty:"easy",hp:1,dmg:"1-2",resist:"Ninguno",terrain:["Guarida","Campamento"],description:"Goblin pequeño con arma oxidada. Grita órdenes nadie obedece.",abilities:[{name:"Pinchazo",type:"Acción",desc:"1-2 daño."},{name:"Cobarde",type:"Pasiva",desc:"Si pierde 50% HP en un turno, huye."}],lairSuggestions:[]},
  {id:"minion-esqueleto",name:"Esqueleto Menor",type:"No-muerto",difficulty:"easy",hp:1,dmg:"1-3",resist:"Físico",terrain:["Cementerio","Ruinas"],description:"Huesos desarticulados sostenidos por magia oscura.",abilities:[{name:"Puño de Hueso",type:"Acción",desc:"1-3 daño. Daño físico reducido en 1."}],lairSuggestions:[]},
  {id:"minion-sapo",name:"Sapo Gigante",type:"Bestia",difficulty:"easy",hp:1,dmg:"1-2",resist:"Ninguno",terrain:["Pantano","Cueva Húmeda"],description:"Sapo del tamaño de un perro con piel viscosa.",abilities:[{name:"Lengüetazo",type:"Acción",desc:"Ataque a distancia. 1-2 daño. Agarrado 1 turno."},{name:"Salto Errático",type:"Pasiva",desc:"30% de probabilidad de esquivar ataques."}],lairSuggestions:[]},
  {id:"minion-espectro",name:"Espectro Débil",type:"No-muerto",difficulty:"easy",hp:1,dmg:"1-2",resist:"Mágico",terrain:["Ruinas","Tumba"],description:"Aparición translúcida apenas perceptible.",abilities:[{name:"Toque Helado",type:"Acción",desc:"1-2 daño. Congelado 1 turno."},{name:"Inmaterial",type:"Pasiva",desc:"Solo dañable por magia. Ignora daño físico normal."}],lairSuggestions:[]},

  /* ─── TANKS (Muchos HP) ─── */
  {id:"tank-ogro",name:"Ogro Guerrero",type:"Humanoide",difficulty:"medium",hp:28,dmg:"6-9",resist:"Físico",terrain:["Montaña","Fortaleza"],description:"Criatura enorme gris verdosa. Músculos como rocas. Garrote gigante.",abilities:[{name:"Golpe de Garrote",type:"Acción",desc:"6-9 daño. Derriba."},{name:"Piel Gruesa",type:"Pasiva",desc:"Reduce daño en 2. Inmune a Asustado."},{name:"Aullido de Carga",type:"Reacción",desc:"Cuando es herido, carga +3 en próximo ataque."}],lairSuggestions:["Suelo se quiebra","Invoca otros ogros"]},
  {id:"tank-tortuga",name:"Tortuga Ancestral",type:"Bestia",difficulty:"hard",hp:45,dmg:"5-7",resist:"Físico",terrain:["Bosque Antiguo","Isla"],description:"Tortuga del tamaño de una casa. Caparazón cubierto de musgo milenario.",abilities:[{name:"Mordida Lenta",type:"Acción",desc:"5-7 daño. Reduce velocidad 1/2 por 2 turnos."},{name:"Caparazón",type:"Pasiva",desc:"Encogida: reduce daño 4. No puede atacar."},{name:"Retracción",type:"Reacción",desc:"Si toma >10 daño, se retrae hasta siguiente turno."},{name:"Regeneración",type:"Pasiva",desc:"Recupera 2 HP/turno."}],lairSuggestions:["Terreno pantanoso","Crías de tortuga lucha"]},
  {id:"tank-escultura",name:"Escultura Viviente",type:"Constructo",difficulty:"medium",hp:32,dmg:"4-6",resist:"Físico, Mágico",terrain:["Galería","Templo"],description:"Estatua de mármol que cobró vida. Movimientos elegantes y silencios.",abilities:[{name:"Golpe de Mármol",type:"Acción",desc:"4-6 daño. Paralizado 1 turno si falla salvación."},{name:"Forma de Piedra",type:"Pasiva",desc:"Reduce magia 3. Inmune a caídas."},{name:"Endurecimiento",type:"Reacción",desc:"Siguiente ataque tiene desventaja."}],lairSuggestions:["Otras estatuas se despiertan"]},
  {id:"tank-trol",name:"Trol Regenerador",type:"Humanoide",difficulty:"hard",hp:50,dmg:"7-10",resist:"Físico",terrain:["Bosque Denso","Caverna"],description:"Criatura verde musculosa. Cicatrices que se regeneran. Olor a podredumbre.",abilities:[{name:"Zarpazo",type:"Acción",desc:"7-10 daño. Dos golpes = Sangrado."},{name:"Regeneración",type:"Pasiva",desc:"Recupera 4 HP/turno. Fuego lo debilita."},{name:"Frenesí",type:"Reacción",desc:"A 50% HP: ataca 2x/turno. Ignora dolor."}],lairSuggestions:["Restos de víctimas","Fogatas para dañarlo"]},

  /* ─── RANGERS (Daño a distancia) ─── */
  {id:"ranger-arquero",name:"Arquero Fiero",type:"Humanoide",difficulty:"medium",hp:14,dmg:"6-8",resist:"Ninguno",terrain:["Bosque","Acantilado"],description:"Cazador musculoso con arco y carcaj. Ojos afilados como halcón.",abilities:[{name:"Disparo Preciso",type:"Acción",desc:"6-8 daño. Ventaja si Derribado."},{name:"Esquiva Acrobática",type:"Pasiva",desc:"Acción de movimiento para ventaja en salvación."},{name:"Lluvia de Flechas",type:"Acción",desc:"Radio 6. Todos salvación o 2d6 daño. Gasta 2 Aen."}],lairSuggestions:["Árboles altos","Trampas de flechas"]},
  {id:"ranger-serpiente",name:"Serpiente Alada",type:"Bestia",difficulty:"easy",hp:10,dmg:"5-7",resist:"Ninguno",terrain:["Cielo","Montaña"],description:"Serpiente del tamaño de cocodrilo con alas membranosas.",abilities:[{name:"Picotazo Venenoso",type:"Acción",desc:"5-7 daño. Envenenado 2 turnos."},{name:"Vuelo Rápido",type:"Pasiva",desc:"Vuelo + movimiento +2. Esquiva proyectiles."}],lairSuggestions:[]},
  {id:"ranger-centauro",name:"Centauro Cazador",type:"Humanoide",difficulty:"medium",hp:18,dmg:"7-9",resist:"Ninguno",terrain:["Pradera","Llanura"],description:"Mitad hombre musculoso, mitad caballo de batalla. Arco largo y lanza.",abilities:[{name:"Embestida",type:"Acción",desc:"Mueve 10m + ataca. 7-9 daño. Empuja 3m."},{name:"Carga Galopante",type:"Pasiva",desc:"Doble velocidad en abierto. +2 montado."},{name:"Doble Ataque",type:"Acción",desc:"Lanza + Arco en mismo turno."}],lairSuggestions:["Terreno abierto","Manada de centauros"]},
  {id:"ranger-tirador",name:"Tirador Sombrío",type:"Humanoide",difficulty:"medium",hp:13,dmg:"5-8",resist:"Ninguno",terrain:["Ciudad Oscura","Noche"],description:"Asesino emboscador con ballestas y dardos envenenados.",abilities:[{name:"Dardo Envenenado",type:"Acción",desc:"15m. 5-8 daño. Envenenado 1 turno."},{name:"Emboscada",type:"Pasiva",desc:"Ventaja si no lo ven. Sorpresa = daño doble."},{name:"Invisibilidad",type:"Reacción",desc:"Detectado: acción para Invisible 1 turno."}],lairSuggestions:[]},

  /* ─── MAGOS (AOE) ─── */
  {id:"mago-brujo",name:"Brujo Llamarada",type:"Humanoide",difficulty:"medium",hp:12,dmg:"3-5",resist:"Mágico",terrain:["Torre Mágica","Volcán"],description:"Mago con túnica roja que destella. Piel brilla con calor.",abilities:[{name:"Bola de Fuego",type:"Acción",desc:"Radio 6. Salvación o 2d6 fuego. Gasta 2 Aen."},{name:"Escudo de Llamas",type:"Pasiva",desc:"Reduce fuego 3. Retroceso 1d4."},{name:"Inferno",type:"Acción",desc:"Radio 10 arde. 3d6/turno si están en área. Gasta 3 Aen."}],lairSuggestions:["Suelo en llamas","Combustible explota"]},
  {id:"mago-hielo",name:"Sabio de Hielo",type:"Humanoide",difficulty:"medium",hp:11,dmg:"2-4",resist:"Frío",terrain:["Montaña Nevada","Tundra"],description:"Anciano envuelto en ropas de hielo que nunca se derriten.",abilities:[{name:"Rayo de Hielo",type:"Acción",desc:"15m. 2-4 daño. Congelado 1 turno."},{name:"Tormenta de Nieve",type:"Acción",desc:"Radio 8. Salvación o 2d6 frío + Congelado. Gasta 2 Aen."},{name:"Aura de Frío",type:"Pasiva",desc:"Radio 5 muy frío. Desventaja a salvaciones frío."}],lairSuggestions:["Terreno resbaladizo","Témpanos caen"]},
  {id:"mago-oscuro",name:"Conjurador Oscuro",type:"Humanoide",difficulty:"hard",hp:16,dmg:"4-7",resist:"Mágico",terrain:["Necromancia","Tumba"],description:"Mago de capucha profunda con símbolos mágicos flotantes.",abilities:[{name:"Rayo Debilidad",type:"Acción",desc:"12m. 4-7 daño. Reduce daño enemigo 2 por 2 turnos."},{name:"Maldición Oscuridad",type:"Acción",desc:"Radio 6. Cegado 1 turno. Gasta 2 Aen."},{name:"Explosión Poder",type:"Acción",desc:"Radio 8. 3d6 daño. Conjurador toma 5. Gasta 3 Aen."},{name:"Armadura Mágica",type:"Pasiva",desc:"Reduce daño 2. Inmune Asustado."}],lairSuggestions:["Símbolos canalizan","Espíritus menores"]},
  {id:"mago-tormenta",name:"Druida de la Tormenta",type:"Humanoide",difficulty:"medium",hp:13,dmg:"3-6",resist:"Eléctrico",terrain:["Cielo Tormentoso","Colina Alta"],description:"Druid con ojos que resplandecen de rayos. Pelo flota.",abilities:[{name:"Rayo Dirigido",type:"Acción",desc:"20m. 3-6 daño. Aturdido 1 turno si falla."},{name:"Tormenta Eléctrica",type:"Acción",desc:"Radio 8. Salvación o 2d6 eléctrico. Gasta 2 Aen."},{name:"Conexión Planar",type:"Pasiva",desc:"Ventaja en salvaciones eléctrico."}],lairSuggestions:["Nubes de tormenta","Rayos caen"]},

  /* ─── CONTROLLERS (Condiciones) ─── */
  {id:"controller-hechicero",name:"Hechicero de la Mente",type:"Humanoide",difficulty:"hard",hp:14,dmg:"2-3",resist:"Psíquico",terrain:["Templo Mental","Biblioteca"],description:"Humanoide con tercer ojo brillante. Su mirada hipnotiza.",abilities:[{name:"Onda Mental",type:"Acción",desc:"Radio 8. Salvación o Hechizado 1 turno. Gasta 2 Aen."},{name:"Control Psíquico",type:"Acción",desc:"Salvación o control 1 turno. Gasta 3 Aen."},{name:"Escudo Mental",type:"Pasiva",desc:"Inmune Hechizado. Reduce psíquico 3."},{name:"Visión Expandida",type:"Pasiva",desc:"Ve invisibles en 10m."}],lairSuggestions:["Ilusiones cubren","Obstáculos mentales"]},
  {id:"controller-gorgona",name:"Gorgona de Petrificación",type:"Bestia",difficulty:"hard",hp:20,dmg:"5-8",resist:"Mágico",terrain:["Ruinas Antiguas","Templo"],description:"Mujer con serpientes por cabello. Piel de piedra pulida.",abilities:[{name:"Mirada de Piedra",type:"Acción",desc:"15m línea de vista. Salvación o Petrificado 2 turnos."},{name:"Zarpazo Serpiente",type:"Acción",desc:"5-8 daño. Sangrado 2 turnos."},{name:"Piel de Piedra",type:"Pasiva",desc:"Reduce físico 3. Lento (mitad velocidad)."}],lairSuggestions:["Víctimas petrificadas","Espejos rompen mirada"]},
  {id:"controller-sirena",name:"Sirena del Hechizo",type:"Humanoide",difficulty:"medium",hp:12,dmg:"3-5",resist:"Ninguno",terrain:["Agua","Laguna"],description:"Mujer hermosa cintura arriba, cola de pez brillante abajo.",abilities:[{name:"Canto Hechizador",type:"Acción",desc:"Radio 10. Salvación o Hechizado 2 turnos. Gasta 2 Aen."},{name:"Ataque Sorpresa",type:"Pasiva",desc:"Ventaja vs Hechizado."},{name:"Sumersión",type:"Reacción",desc:"Acción rápida bajo agua. Cobertura."}],lairSuggestions:["Agua es territorio","Rocas agudas peligrosas"]},
  {id:"controller-arana-ancestral",name:"Araña Tejedora Ancestral",type:"Bestia",difficulty:"hard",hp:24,dmg:"6-9",resist:"Ninguno",terrain:["Bosque Profundo","Caverna"],description:"Araña gigante inteligente. Ocho ojos brillan con maldad.",abilities:[{name:"Mordida Paralizante",type:"Acción",desc:"6-9 daño. Paralizado 1 turno si falla."},{name:"Telaraña Pegajosa",type:"Acción",desc:"Radio 6. Agarrado 2 turnos. Gasta 1 Aen."},{name:"Telar Trampa",type:"Pasiva",desc:"Telarañas dan cobertura. Alerta cuando se mueven."},{name:"Regeneración",type:"Pasiva",desc:"Recupera 2 HP/turno."}],lairSuggestions:["Telarañas cubren","Arañas menores"]},

  /* ─── ASESINOS (Burst damage) ─── */
  {id:"assassin-ninja",name:"Ninja de las Sombras",type:"Humanoide",difficulty:"hard",hp:16,dmg:"8-12",resist:"Ninguno",terrain:["Noche","Alcantarilla"],description:"Guerrero silencioso completamente de negro. Se mueve sin sonido.",abilities:[{name:"Puñalada Mortal",type:"Acción",desc:"Sorpresa. 8-12 daño. No visto = daño doble. Gasta 1 Aen."},{name:"Emboscada",type:"Pasiva",desc:"Ventaja vs Invisible. Emboscada = daño triple."},{name:"Evasión Ninja",type:"Reacción",desc:"Atacado: gasta 2 Aen para esquivar + contraataque."},{name:"Invisibilidad Sombras",type:"Pasiva",desc:"En oscuridad: Invisible naturalmente."}],lairSuggestions:["Zona oscura","Múltiples ninjas"]},
  {id:"assassin-basilisco",name:"Basilisco de Mirada Mortal",type:"Bestia",difficulty:"hard",hp:22,dmg:"7-11",resist:"Veneno",terrain:["Cueva Seca","Desierto"],description:"Serpiente grande con ojos que brillan de muerte. Depredador supremo.",abilities:[{name:"Mirada Letal",type:"Acción",desc:"Línea de vista. Salvación o 3d8 daño. Falla >5: muere."},{name:"Colmillo Venenoso",type:"Acción",desc:"7-11 daño. Envenenado: pierde 1d4 HP/turno 4 turnos."},{name:"Inmune Condiciones",type:"Pasiva",desc:"No puede ser Hechizado, Asustado, Controlado."}],lairSuggestions:["Prácticamente invisible","Víctimas petrificadas"]},
  {id:"assassin-demonio",name:"Demonio Cuchilla",type:"Demonio",difficulty:"hard",hp:18,dmg:"9-14",resist:"Fuego",terrain:["Infernal","Volcán"],description:"Demonio humanóide con cuatro brazos. Cuchillas ardientes. Alas de miedo.",abilities:[{name:"Ataque Múltiple",type:"Acción",desc:"Hasta 3 veces/turno. 9-14 daño. Cada golpe = Ardiendo."},{name:"Cuchillas de Fuego",type:"Pasiva",desc:"Daño fuego. Retroceso 1d6 al atacarlo."},{name:"Vuelo Ardiente",type:"Pasiva",desc:"Puede volar. Rastro de fuego."},{name:"Frenesí Infernal",type:"Reacción",desc:"Herido: 4 ataques, daño doble, sin defensa. Gasta 2 Aen."}],lairSuggestions:["Terreno arde","Llamas bloquean salidas"]},
  {id:"assassin-vampiro",name:"Vampiro Antiguo",type:"No-muerto",difficulty:"boss",hp:55,dmg:"10-16",resist:"Ninguno",terrain:["Castillo Oscuro","Cripta"],description:"Noble no-muerto de siglos. Elegancia inquietante. Colmillos gotean sangre.",abilities:[{name:"Mordida de Sangre",type:"Acción",desc:"10-16 daño. Vampiro recupera mitad como HP."},{name:"Dominación",type:"Acción",desc:"Salvación o control 1 turno. Gasta 2 Aen."},{name:"Forma Murciélago",type:"Pasiva",desc:"Se transforma. Difícil de alcanzar."},{name:"Regeneración Vampírica",type:"Pasiva",desc:"Recupera 5 HP/turno. Solo plata/magia."},{name:"Invocar Sirvientes",type:"Reacción",desc:"Peligro: invoca 2d4 vampiros menores."}],lairSuggestions:["Cripta llena de tesoros","Sangre antigua fortalece","Sirvientes acuden"]},
  {id:"assassin-rey-insectos",name:"Rey de los Insectos",type:"Bestia",difficulty:"hard",hp:26,dmg:"7-10",resist:"Veneno, Frío",terrain:["Colmena","Nido"],description:"Insecto gigante del tamaño de búfalo. Armadura de quitina. Aguijón largo.",abilities:[{name:"Aguijón Venenoso",type:"Acción",desc:"7-10 daño. Envenenado 3 turnos."},{name:"Invocación Enjambre",type:"Acción",desc:"Invoca 3d6 insectos. 2 turnos. Gasta 1 Aen."},{name:"Coordinación Colmena",type:"Pasiva",desc:"Insectos cercanos +2 ataques."},{name:"Resistencia Quitinosa",type:"Pasiva",desc:"Reduce físico 2. Perforante x1.5."}],lairSuggestions:["Paredes colapsan","Insectos emergen"]}
];
