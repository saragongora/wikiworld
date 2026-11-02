import groups from '../data/geographicGroups.json';
import type {Country} from './countries';
export const continentOrder=['Americas','Europe','Asia','Africa','Oceania'];
export const continentLabels:Record<string,string>={Americas:'América',Europe:'Europa',Asia:'Ásia',Africa:'África',Oceania:'Oceania',Other:'Outros territórios'};
const assigned=groups as Record<string,{region:string;subregion:string}>;
export function category(c:Country){return assigned[c.cca3]??{region:'Other',subregion:'Territórios e outros registros'};}
export function continentOptions(countries:Country[]){return [...continentOrder.filter(r=>countries.some(c=>category(c).region===r)),...(countries.some(c=>category(c).region==='Other')?['Other']:[])];}
export function subregionOptions(countries:Country[],region:string){const values=new Set(countries.filter(c=>region==='Todos'||category(c).region===region).map(c=>category(c).subregion));return [...values].sort((a,b)=>a.localeCompare(b,'pt-BR'));}
export const localFlag=(c:Country)=>`/flags/catalog/${c.cca3.toLowerCase()}.png`;
