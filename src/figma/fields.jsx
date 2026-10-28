import React from 'react';
import {Input} from '@/components/ui/input';
import assets from './assets.json';
const specs={
 '35:26757':{placeholder:'Search everything...',search:true},
 '35:28939':{placeholder:'Search reference...',search:true},
 '35:33295':{label:'SMS threshold',helper:'Top-up SMS account at or below this balance.',default:'100.00'},
 '35:33298':{label:'Top-up amount',helper:'Top-up SMS account with this amount',default:'500.00'},
 '35:33301':{label:'Funding account',helper:'Configured by Administrator',default:'GamePark wallet · •• 4208',readOnly:true}
};
export function DesignField({nodeId,className,value,onValueChange=()=>{}}){const s=specs[nodeId]||{placeholder:'Search reference...',search:true};const id='field-'+nodeId.replace(':','-');return <div className={className} data-node-id={nodeId}>
 {s.label&&<label htmlFor={id} className="design-field-label">{s.label}</label>}
 <div className={`design-input-box ${s.search?'is-search':''} ${s.readOnly?'is-readonly':''}`}>
 {s.search?<img src={assets.DesignNavbar.imgMagnifyingGlass} alt=""/>:!s.readOnly?<span>GHS</span>:null}
 <Input id={id} aria-label={s.label||s.placeholder} type={s.search?'search':s.readOnly?'text':'number'} min={s.search||s.readOnly?undefined:'0'} step={s.search||s.readOnly?undefined:'0.01'} readOnly={s.readOnly} placeholder={s.placeholder} value={value??s.default??''} onChange={e=>onValueChange(nodeId,e.target.value)} className="design-input"/>
 </div>{s.helper&&<p className="design-field-helper">{s.helper}</p>}
 </div>}
