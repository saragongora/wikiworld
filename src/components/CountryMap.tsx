import {useEffect,useMemo,useState} from 'react';
import {geoMercator,geoPath} from 'd3-geo';
import {capitalCoordinates} from '../data/capitalCoordinates';
import type {Feature,FeatureCollection,Geometry} from 'geojson';

type GeoFeature = Feature<Geometry,{iso_a3?:string;name?:string}>;
export default function CountryMap({code,capital}:{code:string;capital?:string}){
 const [features,setFeatures]=useState<GeoFeature[]>([]);
 useEffect(()=>{let live=true;fetch('/maps/world.geojson').then(r=>r.json()).then((g:FeatureCollection<Geometry,{iso_a3?:string;name?:string}>)=>{if(live)setFeatures(g.features)}).catch(()=>{});return()=>{live=false}},[]);
 const feature=features.find(f=>f.properties?.iso_a3===code);
 const drawing=useMemo(()=>{if(!feature)return null;
  const projection=geoMercator().fitExtent([[32,30],[728,405]],feature);
  const path=geoPath(projection);
  const point=capitalCoordinates[code];const position=point?projection(point):null;
  return {path:path(feature)||'',position};
 },[feature,code]);
 return <div className="country-map-panel" aria-label="Mapa do território do país">
 {drawing?<svg className="country-territory-svg" viewBox="0 0 760 450" role="img" aria-label={`Contorno geográfico de ${code}${drawing.position&&capital?', capital '+capital:''}`}><defs><linearGradient id="country-fill" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#1b918d"/><stop offset="1" stopColor="#15506d"/></linearGradient></defs><path d={drawing.path} fill="url(#country-fill)" stroke="#8be9dc" strokeWidth="1.7" strokeLinejoin="round"/>{drawing.position&&<g className="capital-marker" tabIndex={0} role="img" aria-label={`Capital: ${capital}`} transform={`translate(${drawing.position[0]},${drawing.position[1]})`}><title>{`Capital: ${capital}`}</title><circle r="14" fill="#60f4df" opacity=".18"/><circle r="5.5" fill="#fff" stroke="#0c777b" strokeWidth="2"/><text className="capital-tooltip" x="12" y="-12" fill="#fff" fontSize="16" fontWeight="700" paintOrder="stroke" stroke="#0b1728" strokeWidth="4">{capital}</text></g>}</svg>:<div className="country-map-empty">O contorno detalhado deste país ainda não está disponível na base local.</div>}
 </div>
}
