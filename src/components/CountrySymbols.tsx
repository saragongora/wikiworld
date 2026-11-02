import {useEffect,useState} from 'react';
import {X,Image as ImageIcon} from 'lucide-react';

type SymbolKind='flag'|'coat';
const knownFlags=new Set(['BRA','JPN','FRA','USA','EGY']);
export default function CountrySymbols({code,name,emoji}:{code:string;name:string;emoji?:string}){
 const [available,setAvailable]=useState<Record<SymbolKind,string|null>>({flag:null,coat:null});
 const [active,setActive]=useState<SymbolKind|null>(null);
 useEffect(()=>{
  let live=true;
  setAvailable({flag:null,coat:null});setActive(null);
  const lower=code.toLowerCase();
  const probe=(src:string)=>new Promise<boolean>(resolve=>{const image=new Image();image.onload=()=>resolve(true);image.onerror=()=>resolve(false);image.src=src});
  Promise.all([probe(`/symbols/${lower}-flag.svg`),probe(`/symbols/${lower}-coat.svg`)]).then(async([flag,coat])=>{
   const svg=!flag&&knownFlags.has(code)&&await probe(`/flags/${lower}.svg`);
   if(live)setAvailable({flag:flag?`/symbols/${lower}-flag.svg`:svg?`/flags/${lower}.svg`:null,coat:coat?`/symbols/${lower}-coat.svg`:null});
  });
  return()=>{live=false};
 },[code]);
 useEffect(()=>{
  if(!active)return;
  const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setActive(null)};
  window.addEventListener('keydown',onKey);
  return()=>window.removeEventListener('keydown',onKey);
 },[active]);
 const images=[{kind:'flag' as const,title:'Bandeira',src:available.flag},{kind:'coat' as const,title:'Brasão',src:available.coat}];
 const selected=images.find(item=>item.kind===active);
 return <>
  <div className="fact symbols-fact"><ImageIcon size={23}/><span>Bandeira e brasão</span><div className="symbol-thumbnails">
   {images.map(item=><div className="symbol-item" key={item.kind}>{item.src?<button type="button" className="symbol-thumb" onClick={()=>setActive(item.kind)} aria-label={`Ampliar ${item.title.toLowerCase()} de ${name}`}><img src={item.src} alt={`${item.title} de ${name}`}/></button>:<div className="symbol-placeholder" aria-label={`${item.title} ainda não disponível`}>{item.kind==='flag'&&emoji?<span className="symbol-emoji">{emoji}</span>:<ImageIcon size={22}/>}</div>}<small>{item.title}</small></div>)}
  </div></div>
  {selected?.src&&<div className="symbol-modal-backdrop" onMouseDown={event=>{if(event.target===event.currentTarget)setActive(null)}}><div className="symbol-modal" role="dialog" aria-modal="true" aria-label={`${selected.title} de ${name}`}><div className="symbol-modal-header"><strong>{selected.title} de {name}</strong><button type="button" onClick={()=>setActive(null)} aria-label="Fechar imagem"><X size={22}/></button></div><img src={selected.src} alt={`${selected.title} de ${name}`}/></div></div>}
 </>;
}
