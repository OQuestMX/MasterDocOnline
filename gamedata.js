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
   FACTIONS (6)
   ══════════════════════════════════════════════ */
factions: [
  {id:"cheran",name:"Teocracia de Cherán",color:"#9b2020",icon:"🔥",
   declaration:"Nuestro dios es el único. Él proveerá. Los infieles serán purificados.",
   question:"¿Tu fe es tu fuerza o tu cadena?",
   feats:[
    {response:"La fe es mi fuerza",name:"Convicción de Engar",attr:"Cuerpo",desc:"Ventaja cuando tu presencia física como portador de la fe debe imponerse."},
    {response:"La fe es mi cadena",name:"La Grieta en la Fe",attr:"Mente",desc:"Ventaja al persuadir, debatir o influenciar a quienes comparten o cuestionan una fe."},
    {response:"La fe es mi duda",name:"Herejía Necesaria",attr:"Echo",desc:"Ventaja al canalizar magia que contradice la doctrina establecida. Los hechizos no aprobados ganan poder."}
   ]},

  {id:"vorin",name:"Casa Vorin",color:"#1a5c7a",icon:"⚜️",
   declaration:"El juego es la vida. Los buscadores ganan. El débil se desmorona.",
   question:"¿Juegas para ganar o para aprender?",
   feats:[
    {response:"Para ganar",name:"Instinto Depredador",attr:"Cuerpo",desc:"Ventaja en ataques contra enemigos vulnerables o en inferioridad numérica."},
    {response:"Para aprender",name:"Mente de Ajedrez",attr:"Mente",desc:"Ventaja al predecir movimientos enemigos o planificar estrategia de grupo."},
    {response:"Para jugar",name:"Suerte del Tahur",attr:"Echo",desc:"Una vez por sesión, puedes relanzar cualquier dado que hayas tirado."}
   ]},

  {id:"escarlata",name:"La Orden Escarlata",color:"#c41e3a",icon:"🗡️",
   declaration:"La justicia es nuestra responsabilidad. Actuar es honor.",
   question:"¿La venganza es justicia?",
   feats:[
    {response:"Sí",name:"Vendetta Sagrada",attr:"Cuerpo",desc:"Ventaja en ataques contra aquellos que hayan lastimado a los tuyos."},
    {response:"No, pero la protección es",name:"Escudo de Inocentes",attr:"Mente",desc:"Ventaja al defender a civiles o aliados en peligro. Reducen condiciones negativas."},
    {response:"La venganza es ciclos",name:"Redención Imposible",attr:"Echo",desc:"Ventaja cuando intentes apaciguar conflictos o converter enemigos. Una vez por escena."}
   ]},

  {id:"aetharion",name:"Aetharion",color:"#8b4789",icon:"📖",
   declaration:"El conocimiento es vida eterna. El ignorante está condenado.",
   question:"¿El conocimiento se comparte o se posee?",
   feats:[
    {response:"Se posee",name:"Secretos Guardados",attr:"Mente",desc:"Ventaja al guardar información. Puedes mentir detectando mentiras en otros."},
    {response:"Se comparte",name:"Sabiduría Abierta",attr:"Mente",desc:"Ventaja cuando enseñas o transmites conocimiento. Los aliados aprenden habilidades más rápido."},
    {response:"Se consume",name:"Magia del Olvido",attr:"Echo",desc:"Ventaja en hechizos de Control. Puedes borrar recuerdos específicos una vez por sesión."}
   ]},

  {id:"urushan",name:"Urushan",color:"#2d5016",icon:"🏹",
   declaration:"La naturaleza es la ley. Equilibrio y ciclo son sagrados.",
   question:"¿Sacrificas lo individual por la tribu?",
   feats:[
    {response:"Siempre",name:"Deber Tribal",attr:"Cuerpo",desc:"Ventaja en acciones que beneficien al grupo incluso si te dañan."},
    {response:"Solo si es necesario",name:"Equilibrio de Fuerzas",attr:"Mente",desc:"Ventaja cuando reconcilias facciones opuestas o medias conflictos."},
    {response:"Nunca, soy libre",name:"Espíritu Salvaje",attr:"Echo",desc:"Ventaja en ataques cuando no hay aliados adyacentes. El lobo solitario es fuerte."}
   ]},

  {id:"pueblos",name:"Los Pueblos sin Techo",color:"#665544",icon:"🏕️",
   declaration:"No necesitamos reino. Necesitamos comunidad.",
   question:"¿Qué amas más: la libertad o la familia?",
   feats:[
    {response:"La libertad",name:"Nómada del Viento",attr:"Cuerpo",desc:"Ventaja en movimiento y exploración. Ignoras terreno difícil una vez por combate."},
    {response:"La familia",name:"Lazo de Sangre",attr:"Mente",desc:"Ventaja cuando luchas junto a tus hermanos de tribu. Compartes resistencias."},
    {response:"Necesito ambas",name:"Rebelde de Corazón",attr:"Echo",desc:"Ventaja en acciones que desafíen autoridad injusta. Una vez por sesión, ignora un fallo."}
   ]}
],

/* ══════════════════════════════════════════════
   CLASSES (10 + subclases)
   ══════════════════════════════════════════════ */
classes: [
  {id:"fury",name:"Fury",nameEs:"Furia",type:"Fuerza",resource:"FURY",
   abilities:[
    {name:"Golpe Salvaje",type:"Base",cost:"2 Aen",dmg:"5",desc:"Ataque cuerpo a cuerpo. Daño aumenta 1 por cada enemigo adyacente."},
    {name:"Aullido de Guerra",type:"Base",cost:"2 Aen",dmg:null,desc:"Todos los aliados en radio 4 ganan +2 daño por 1 turno."},
    {name:"Frenesí Berserker",type:"Heroica",cost:"3 Aen",dmg:"10",desc:"Atacas dos veces con ventaja. Ignoras condiciones de dolor. Drawback: pierdes 5 HP al terminar."}
   ],
   subclasses:[
    {id:"berserker_sub",name:"Berserker",desc:"Furia sin control. Daño puro.",
     abilities:[
      {name:"Destrucción Total",type:"Base",cost:"3 Aen",dmg:"8",desc:"Ataque AOE radio 2. Todos toman daño. Drawback: -1d4 Aen al terminar."},
      {name:"Apoteosis de Sangre",type:"Heroica",cost:"4 Aen",dmg:"15",desc:"Daño triple. Crítico automático. Duración: 1 turno. Drawback: -1d8 Aen al terminar."}
     ]},
    {id:"colossus",name:"Colossus",desc:"Furia canalizada en puro tamaño.",
     abilities:[
      {name:"Pisotón Sísmico",type:"Base",cost:"3 Aen",dmg:"7",desc:"Derriba a todos en radio 2. Daño adicional a derribados. Drawback: -1d4 Aen."},
      {name:"Forma Gigante",type:"Heroica",cost:"4 Aen",dmg:"12",desc:"Creces enormemente. Daño x1.5 por 2 turnos. Drawback: -1d8 HP al terminar."}
     ]},
    {id:"voivode",name:"Voivode",desc:"Guerrero-Príncipe. Autoridad en la batalla.",
     abilities:[
      {name:"Grito de Mando",type:"Base",cost:"3 Aen",dmg:"4",desc:"Tu ataque + todos los aliados en radio 3 atacan con ventaja. Drawback: -1d4 Aen."},
      {name:"Dominio Absoluto",type:"Heroica",cost:"4 Aen",dmg:"10",desc:"Controlas los movimientos de un enemigo por 1 turno. Drawback: -1d8 Vitalidad."}
     ]}
   ]},

  {id:"knight",name:"Knight",nameEs:"Caballero",type:"Fuerza",resource:"DEVOTION",
   abilities:[
    {name:"Protección Escudada",type:"Base",cost:"2 Aen",dmg:null,desc:"Reduces daño recibido en 2. Aliados adyacentes reciben -1 daño."},
    {name:"Golpe Justiciero",type:"Base",cost:"2 Aen",dmg:"6",desc:"Ataque que ignora 2 de defensa enemiga."},
    {name:"Último Aliento",type:"Heroica",cost:"3 Aen",dmg:"8",desc:"Si estás a menos de 25% HP, tu próximo ataque causa daño doble y no te cansa. Drawback: pierdes 1d8 HP al terminar."}
   ],
   subclasses:[
    {id:"inquisitor",name:"Inquisitor",desc:"Cazador de oscuridad. Enemigo de lo arcano.",
     abilities:[
      {name:"Destello Sagrado",type:"Base",cost:"3 Aen",dmg:"7",desc:"Ataque que desmorona hechizos. Cancela habilidades mágicas del enemigo por 1 turno. Drawback: -1d4 Aen."},
      {name:"Juicio Divino",type:"Heroica",cost:"4 Aen",dmg:"13",desc:"Ataque cuerpo a cuerpo contra objetivo mágico. Daño doble. Drawback: -1d8 Vitalidad."}
     ]},
    {id:"protector",name:"Protector",desc:"Escudo viviente. Absorbe daño.",
     abilities:[
      {name:"Escudo de Hermanos",type:"Base",cost:"3 Aen",dmg:null,desc:"Proteges a un aliado. Compartes su daño por 2 turnos. Drawback: -1d4 Aen."},
      {name:"Último Sacrificio",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Absorbes TODO el daño que un aliado recibiría por 1 turno. Drawback: -1d10 HP."}
     ]},
    {id:"martyr",name:"Martyr",desc:"El dolor es purificación. Sufrimiento = poder.",
     abilities:[
      {name:"Dolor Transformado",type:"Base",cost:"3 Aen",dmg:"6",desc:"Por cada 5 daño que hayas tomado hoy, +1 daño en este ataque. Drawback: -1d4 Aen."},
      {name:"Apoteosis de Sufrimiento",type:"Heroica",cost:"4 Aen",dmg:"16",desc:"Cuanto más herido estés, más fuerte golpeas. Daño = (mitad de HP perdido) + base. Drawback: -1d8 Vitalidad."}
     ]}
   ]},

  {id:"monk",name:"Monk",nameEs:"Monje",type:"Fuerza",resource:"CLARITY",
   abilities:[
    {name:"Golpe de Precisión",type:"Base",cost:"2 Aen",dmg:"4",desc:"Ataque cuerpo a cuerpo. Ignora 1 de resistencia."},
    {name:"Equilibrio Mental",type:"Base",cost:"2 Aen",dmg:null,desc:"Ganas +2 en defensa y +1 movimiento por 1 turno."},
    {name:"Éxtasis de Batalla",type:"Heroica",cost:"3 Aen",dmg:"7",desc:"Haces dos ataques con ventaja. Ignoras dolor. Drawback: -1d6 Aen al terminar."}
   ],
   subclasses:[
    {id:"martial_artist",name:"Martial Artist",desc:"Cuerpo como arma. Técnica pura.",
     abilities:[
      {name:"Combo Certero",type:"Base",cost:"3 Aen",dmg:"6",desc:"Tres ataques rápidos de 2 daño cada uno. Drawback: -1d4 Aen."},
      {name:"Transcendencia Marcial",type:"Heroica",cost:"4 Aen",dmg:"12",desc:"Atacas 4 veces. Cada golpe es crítico si el anterior golpeó. Drawback: -1d8 Aen."}
     ]},
    {id:"void_monk",name:"Void",desc:"El vacío interior. Destrucción silenciosa.",
     abilities:[
      {name:"Toque del Vacío",type:"Base",cost:"3 Aen",dmg:"8",desc:"Ignoras toda defensa y resistencia. El daño es verdadero. Drawback: -1d4 Aen."},
      {name:"Colapso de Realidad",type:"Heroica",cost:"4 Aen",dmg:"14",desc:"Ataque que deforma el espacio. Radio 3. Todos toman daño. Drawback: -1d8 HP."}
     ]}
   ]},

  {id:"shadow",name:"Shadow",nameEs:"Sombra",type:"Fuerza",resource:"AEN",
   abilities:[
    {name:"Puñalada de las Sombras",type:"Base",cost:"2 Aen",dmg:"6",desc:"Ataque desde Invisible o en oscuridad. Daño doble."},
    {name:"Desvanecimiento",type:"Base",cost:"2 Aen",dmg:null,desc:"Te vuelves Invisible por 1 turno si no atacas."},
    {name:"Danza Mortal",type:"Heroica",cost:"3 Aen",dmg:"9",desc:"Te mueves hasta 10 metros y atacas. Repetible si cada ataque golpea. Drawback: -1d6 Aen al terminar."}
   ],
   subclasses:[
    {id:"raven",name:"Raven",desc:"Mensajero oscuro. Muerte desde arriba.",
     abilities:[
      {name:"Ataque Aéreo",type:"Base",cost:"3 Aen",dmg:"7",desc:"Vuelas hasta 8 metros y atacas con ventaja. Drawback: -1d4 Aen."},
      {name:"Lluvia de Cuchillas",type:"Heroica",cost:"4 Aen",dmg:"11",desc:"Invocas cuchillas que golpean radio 4. Daño a todos. Drawback: -1d8 Aen."}
     ]},
    {id:"phantom",name:"Phantom",desc:"Ni vivo ni muerto. Entre planos.",
     abilities:[
      {name:"Fase Espectral",type:"Base",cost:"3 Aen",dmg:"6",desc:"Te vuelves intangible. Traspasas muros. Daño reducido 50%. Dura 1 turno. Drawback: -1d4 Aen."},
      {name:"Manifestación Fantasmal",type:"Heroica",cost:"4 Aen",dmg:"13",desc:"Atacas 2 veces. Un ataque es verdadero (daño normal), otro es espectral (daño reducido 50% pero ignora defensa). Drawback: -1d8 Aen."}
     ]}
   ]},

  {id:"archer",name:"Archer",nameEs:"Arquero",type:"Fuerza",resource:"FOCUS",
   abilities:[
    {name:"Disparo Preciso",type:"Base",cost:"2 Aen",dmg:"5",desc:"Ataque a distancia. Ventaja si el objetivo está Derribado."},
    {name:"Lluvia de Flechas",type:"Base",cost:"2 Aen",dmg:"3",desc:"Radio 3. Todos en el área toman 3 daño."},
    {name:"Tiro Mortal",type:"Heroica",cost:"3 Aen",dmg:"12",desc:"Apuntas durante 1 turno. Tu siguiente ataque es crítico automático. Drawback: no puedes atacar el turno previo."}
   ],
   subclasses:[
    {id:"sniper",name:"Sniper",desc:"Un tiro, una muerte.",
     abilities:[
      {name:"Disparo Silencioso",type:"Base",cost:"3 Aen",dmg:"9",desc:"A distancia larga. El enemigo no sabe de dónde vienes. Ventaja. Drawback: -1d4 Aen."},
      {name:"Eliminación Doble",type:"Heroica",cost:"4 Aen",dmg:"15",desc:"Disparas dos veces a dos objetivos distintos. Ambos son críticos. Drawback: -1d8 Aen."}
     ]},
    {id:"hunter",name:"Hunter",desc:"Rastreador. El bosque es su aliado.",
     abilities:[
      {name:"Disparo de Rastreo",type:"Base",cost:"3 Aen",dmg:"7",desc:"Rastreas a una presa. Obtienes su localización. Siguiente ataque tiene ventaja. Drawback: -1d4 Aen."},
      {name:"Emboscada Perfecta",type:"Heroica",cost:"4 Aen",dmg:"14",desc:"Atacas desde la naturaleza con daño triple. El enemigo no puede verte. Drawback: -1d8 Aen."}
     ]}
   ]},

  {id:"wizard",name:"Wizard",nameEs:"Mago",type:"Magia",resource:"RESONANCE",
   abilities:[
    {name:"Rayo Arcano",type:"Base",cost:"2 Aen",dmg:"6",desc:"Proyectil mágico a distancia. Ignora resistencia no-mágica."},
    {name:"Escudo Arcano",type:"Base",cost:"2 Aen",dmg:null,desc:"Reduces daño en 2 por 1 turno."},
    {name:"Explosión de Poder",type:"Heroica",cost:"3 Aen",dmg:"10",desc:"Radio 3. Todos toman daño. Terreno se convierte en difícil. Drawback: -1d8 Aen al terminar."}
   ],
   subclasses:[
    {id:"battle_mage",name:"Battle Mage",desc:"Hechicero en primera línea.",
     abilities:[
      {name:"Cuchilla de Energía",type:"Base",cost:"3 Aen",dmg:"8",desc:"Cuerpo a cuerpo mágico. Ignora armadura. Drawback: -1d4 Aen."},
      {name:"Implosión Mágica",type:"Heroica",cost:"4 Aen",dmg:"13",desc:"Ataque cuerpo a cuerpo que drena magia. Recuperas Aen = daño hecho / 2. Drawback: -1d8 Vitalidad."}
     ]},
    {id:"elementalist",name:"Elementalist",desc:"Control de fuerzas naturales.",
     abilities:[
      {name:"Ataque Elemental",type:"Base",cost:"3 Aen",dmg:"7",desc:"Elige: Fuego, Hielo o Rayo. Efecto especial (Ardiendo/Congelado/Paralizado). Drawback: -1d4 Aen."},
      {name:"Tormenta Elemental",type:"Heroica",cost:"4 Aen",dmg:"12",desc:"Radio 4. Todos toman daño mixto. Uno de cada tipo de condición ocurre. Drawback: -1d8 Aen."}
     ]},
    {id:"chrono",name:"Chrono",desc:"Dominio del tiempo.",
     abilities:[
      {name:"Retraso Temporal",type:"Base",cost:"3 Aen",dmg:"6",desc:"Un enemigo pierde su siguiente turno. Drawback: -1d4 Aen."},
      {name:"Colapso Temporal",type:"Heroica",cost:"4 Aen",dmg:"11",desc:"Todos los enemigos en radio 3 pierden acciones por 1 turno. Drawback: -1d8 HP."}
     ]}
   ]},

  {id:"druid",name:"Druid",nameEs:"Druida",type:"Magia",resource:"ESSENCE",
   abilities:[
    {name:"Proyectil Natural",type:"Base",cost:"2 Aen",dmg:"5",desc:"Espinas, piedras, fuego. Ataque a distancia."},
    {name:"Crecimiento Vital",type:"Base",cost:"2 Aen",dmg:null,desc:"Un aliado recupera 5 HP. Duración: instantáneo."},
    {name:"Colapso de Raíces",type:"Heroica",cost:"3 Aen",dmg:"8",desc:"Radio 3. Inmoviliza a todos. Daño por cada turno que no se muevan. Drawback: -1d8 Aen al terminar."}
   ],
   subclasses:[
    {id:"shaman",name:"Shaman",desc:"Chamán tribal. Espíritus y ancestros.",
     abilities:[
      {name:"Invocación de Espíritus",type:"Base",cost:"3 Aen",dmg:"6",desc:"Invocar espíritu que ataca por ti por 1 turno. Daño igual al tuyo. Drawback: -1d4 Aen."},
      {name:"Posesión Espiritual",type:"Heroica",cost:"4 Aen",dmg:"10",desc:"Entras en el cuerpo de un aliado por 1 turno. Atacas con su cuerpo. Daño aumentado. Drawback: -1d8 Vitalidad."}
     ]},
    {id:"beast_master",name:"Beast Master",desc:"Hermano de bestias.",
     abilities:[
      {name:"Llamada Bestial",type:"Base",cost:"3 Aen",dmg:"7",desc:"Invocas una bestia que lucha por 2 turnos. Ataque 1d6. Drawback: -1d4 Aen."},
      {name:"Fusión Animal",type:"Heroica",cost:"4 Aen",dmg:"12",desc:"Te transformas en bestia. Daño x1.5. 3 turnos. Drawback: -1d8 Vitalidad al terminar."}
     ]}
   ]},

  {id:"warlock",name:"Warlock",nameEs:"Brujo",type:"Magia",resource:"PACT",
   abilities:[
    {name:"Toque de Perdición",type:"Base",cost:"2 Aen",dmg:"6",desc:"Cuerpo a cuerpo mágico. Causa Envenenado."},
    {name:"Maldición de Debilidad",type:"Base",cost:"2 Aen",dmg:null,desc:"Enemigo pierde 2 daño en sus ataques por 1 turno."},
    {name:"Invocar Abismo",type:"Heroica",cost:"3 Aen",dmg:"9",desc:"Invocas poder oscuro. Radio 3. Todos Asustados y toman daño. Drawback: -1d10 Aen al terminar."}
   ],
   subclasses:[
    {id:"necromancer",name:"Necromancer",desc:"Maestro de muertos.",
     abilities:[
      {name:"Resurrección Menor",type:"Base",cost:"3 Aen",dmg:"5",desc:"Invocas esqueleto que lucha por 2 turnos. Daño 1d4. Drawback: -1d4 Aen."},
      {name:"Tormenta de Huesos",type:"Heroica",cost:"4 Aen",dmg:"11",desc:"Radio 4. Esqueletos atacan a todos. Daño total 3d6. Drawback: -1d8 Vitalidad."}
     ]},
    {id:"illrigger",name:"Illrigger",desc:"Hechicero de engaño.",
     abilities:[
      {name:"Ilusión de Tormento",type:"Base",cost:"3 Aen",dmg:"7",desc:"Enemigo Asustado. Tiene desventaja en ataques. Dura 1 turno. Drawback: -1d4 Aen."},
      {name:"Laberinto Mental",type:"Heroica",cost:"4 Aen",dmg:null,desc:"Radio 3. Todos se pierden en ilusiones. No pueden atacarte por 1 turno. Drawback: -1d8 Aen."}
     ]},
    {id:"heretic",name:"Heretic",desc:"Apostata mágico.",
     abilities:[
      {name:"Robo de Fe",type:"Base",cost:"3 Aen",dmg:"8",desc:"Robas magia del enemigo. Ganas 1 Aen adicional. Drawback: -1d4 Aen."},
      {name:"Impugnación Total",type:"Heroica",cost:"4 Aen",dmg:"12",desc:"Todos los hechizos enemigos en radio 4 se disipen. Ganas Aen de cada uno. Drawback: -1d8 Vitalidad."}
     ]}
   ]},

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
   KITS (15)
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
   ══════════════════════════════════════════════ */
GAMEDATA.baseBestiary = [
  /* ─── EXISTENTES ─── */
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
