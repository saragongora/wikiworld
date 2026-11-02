export function earnedXp(visitedCount:number){return visitedCount*25}
export function getLevel(xp:number){return Math.floor(xp/250)+1}
export function levelProgress(xp:number){return xp%250/250*100}
export const achievements=[
 {id:'first',title:'Primeiro passo',description:'Descubra seu primeiro país',threshold:1,icon:'🌱'},
 {id:'five',title:'Explorador iniciante',description:'Descubra 5 países',threshold:5,icon:'🧭'},
 {id:'ten',title:'Viajante curioso',description:'Descubra 10 países',threshold:10,icon:'🎒'},
 {id:'twentyfive',title:'Globetrotter',description:'Descubra 25 países',threshold:25,icon:'🌍'},
 {id:'fifty',title:'Mestre dos mapas',description:'Descubra 50 países',threshold:50,icon:'🏆'},
];
