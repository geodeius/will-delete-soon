import React,{useEffect,useMemo,useState} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource-variable/hanken-grotesk';
import '@fontsource-variable/inter';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Checkbox} from '@/components/ui/checkbox';
import {Table,TableHeader,TableBody,TableRow,TableHead,TableCell} from '@/components/ui/table';
import {Tabs,TabsList,TabsTrigger} from '@/components/ui/tabs';
import {Select,SelectTrigger,SelectValue,SelectContent,SelectItem} from '@/components/ui/select';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
import {Sheet,SheetContent,SheetTitle,SheetDescription} from '@/components/ui/sheet';
import {SidebarProvider,Sidebar,SidebarContent,useSidebar} from '@/components/ui/sidebar';
import DesignNavbar from './figma/DesignNavbar';
import DesignNav from './figma/DesignNav';
import DesignSmsNav from './figma/DesignSmsNav';
import DesignSummary from './figma/DesignSummary';
import DesignChart from './figma/DesignChart';
import DesignBalance from './figma/DesignBalance';
import DesignSmsCards from './figma/DesignSmsCards';
import DesignTransactionDetail from './figma/DesignTransactionDetail';
import DesignSmsDetail from './figma/DesignSmsDetail';
import DesignProfile from './figma/DesignProfile';
import DesignNotifications from './figma/DesignNotifications';
import DesignConfiguration from './figma/DesignConfiguration';
import {DesignField} from './figma/fields';
import assets from './figma/assets.json';
import './styles.css';

if(import.meta.env.DEV) document.documentElement.dataset.compare=String(new URLSearchParams(location.search).has('compare'));
const records=[
 ['DS-213-313','024*****3241',50,'Failed','17 Jan 2025 - 12:23 PM','Disbursement'],
 ['CS-213-313','024*****3242',125,'Successful','18 Jan 2025 - 1:45 PM','Collections'],
 ['DS-213-313','024*****3245',200,'Failed','20 Jan 2025 - 10:00 AM','Disbursement'],
 ['CS-214-314','024*****3241',100,'Successful','19 Jan 2025 - 3:30 PM','Collections'],
 ['DS-213-313','024*****3246',150,'Pending','21 Jan 2025 - 11:15 AM','Disbursement'],
 ['CS-215-315','024*****3244',175,'Successful','22 Jan 2025 - 2:05 PM','Collections'],
 ['CS-213-313','024*****3247',225,'Pending','23 Jan 2025 - 4:50 PM','Collections'],
 ['DS-213-313','024*****3243',50,'Successful','24 Jan 2025 - 9:30 AM','Disbursement'],
 ['DS-213-313','024*****3248',75,'Successful','25 Jan 2025 - 5:45 PM','Disbursement']
].map(([id,phone,amount,status,date,category],index)=>({id,phone,amount,status,date,category,key:index}));
const currency=n=>'GH₵'+Number(n).toFixed(2);
const defaultProfile={email:'janice.mills@gamepark.com',name:'Kwame Nkrumah',role:'Manager'};
const readLocal=(key,fallback)=>{try{return {...fallback,...JSON.parse(localStorage.getItem(key)||'{}')}}catch{return fallback}};
function Icon({src,className='',...props}){return <img src={src} alt="" className={'design-icon '+className} {...props}/>}
function Status({status}){const src=status==='Failed'?assets['35-29672'].imgX:status==='Pending'?assets['35-29680'].imgHourglassLow:assets['35-29674'].imgSealCheck;return <span className={'table-status status-'+status.toLowerCase()}><Icon src={src}/>{status}</span>}
function Filter({label,value,onChange,options,icon,small=false}){return <Select value={value} onValueChange={onChange}><SelectTrigger aria-label={label} className={'figma-filter '+(small?'status-filter':'date-filter')}>{icon&&<Icon src={icon}/>}<SelectValue/><Icon src={assets.DesignFilters.imgCaretDown}/></SelectTrigger><SelectContent position="popper" align="start">{options.map(item=><SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent></Select>}
function App(){
 const {toggleSidebar,setOpenMobile}=useSidebar();
 const [page,setPage]=useState(()=>new URLSearchParams(location.search).get('screen')||'Overview');
 const [settingsTab,setSettingsTab]=useState(()=>new URLSearchParams(location.search).get('tab')||'General');
 const [selected,setSelected]=useState(()=>new URLSearchParams(location.search).has('detail')?{kind:new URLSearchParams(location.search).get('detail'),record:null}:null),[tab,setTab]=useState('All transactions'),[status,setStatus]=useState('All statuses'),[date,setDate]=useState('Select date'),[search,setSearch]=useState(''),[globalSearch,setGlobalSearch]=useState(''),[current,setCurrent]=useState(1),[checked,setChecked]=useState([]),[notice,setNotice]=useState(''),[accountMenu,setAccountMenu]=useState(false),[notificationMenu,setNotificationMenu]=useState(false),[editor,setEditor]=useState(null),[profile,setProfile]=useState(()=>readLocal('gamepark-design-profile',defaultProfile)),[config,setConfig]=useState(()=>readLocal('gamepark-design-config',{'35:33295':'100.00','35:33298':'500.00'}));
 const notify=message=>{setNotice(message);setTimeout(()=>setNotice(''),3500)};
 const navigate=name=>{setPage(name);setOpenMobile(false);setTab('All transactions');setSearch('');setStatus('All statuses');setDate('Select date');setCurrent(1);setChecked([]);setSelected(null);setAccountMenu(false);setNotificationMenu(false);const url=new URL(location.href);url.search='';url.searchParams.set('screen',name);history.replaceState(null,'',url);window.scrollTo(0,0)};
 const rows=useMemo(()=>records.filter(r=>(tab==='All transactions'||r.category===tab)&&(status==='All statuses'||r.status===status)&&(!search||`${r.id} ${r.phone}`.toLowerCase().includes(search.toLowerCase()))&&(date==='Select date'||date==='All dates'||date==='January 2025'||(date==='17 Jan 2025'&&r.date.startsWith('17 Jan')))),[tab,status,search,date]);
 const sms=page==='SMS and Top-ups',settings=page==='Settings',overview=page==='Overview';
 const nav=(id,label)=>navigate(label);
 function csv(selectedOnly=false){const result=selectedOnly?rows.filter(r=>checked.includes(r.key)):rows;const lines=[['Transaction ID',sms?'Account':'Phone number','Amount','Status','Date and time',...(sms?[]:['Category'])],...result.map(r=>[r.id,sms?'GamePark wallet · •• 4208':r.phone,currency(r.amount),r.status,r.date,...(sms?[]:[r.category])])];const url=URL.createObjectURL(new Blob([lines.map(row=>row.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\r\n')],{type:'text/csv;charset=utf-8;'}));const a=document.createElement('a');a.href=url;a.download=sms?'gamepark-top-ups.csv':'gamepark-transactions.csv';a.click();URL.revokeObjectURL(url);notify('CSV exported')}
 function details(r){window.scrollTo(0,0);setSelected({kind:sms?'sms':'transaction',record:r});}
 function detailAction(id,label){if(label==='Cancel'||label==='Close')setSelected(null);else if(label==='Export report'){const r=selected?.record||records[0];const blob=new Blob([JSON.stringify(selected?.kind==='sms'?{reference:'UOTP-123-124-124',amount:500,account:'GamePark wallet · •• 4208',status:'Complete',activity:['Low balance detected','Top-up initiated','Top-up confirmed']}:{...r},null,2)],{type:'application/json'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='gamepark-report.json';link.click();URL.revokeObjectURL(link.href);notify('Report exported')}}
 const profileValues={'janice.mills@gamepark.com':profile.email,'Kwame Nkrumah':profile.name,'Manager':profile.role};
 function editProfile(id,label){const key=label==='Update email'?'email':id==='35:32937'||id==='35:32963'?'role':'name';setEditor({key,value:profile[key]})}
 function changeConfig(id,value){setConfig(previous=>({...previous,[id]:value}))}
 const dateOptions=['Select date','All dates','January 2025','17 Jan 2025'];
 function dateControl(){return <Filter label="Date range" value={date} onChange={value=>{setDate(value);setCurrent(1)}} options={dateOptions} icon={assets.DesignHeading.imgCalendarDots}/>}
 function exportButton(){return <Button variant="outline" className="figma-button export-csv" onClick={()=>csv(checked.length>0)}><Icon src={assets['35-28923'].imgDownloadSimple}/>Export CSV</Button>}
 function transactionTable(isOverview=false){const list=isOverview?records:rows;return <section className={`design-table-shell ${isOverview?'overview-table':''} ${sms?'sms-table':''}`} aria-label={sms?'Top-up history':'Transactions'}>
 <Table className="design-table"><colgroup>{(sms?[66,166,256,158,199,205,72]:[66,155.8,155.8,155.8,155.8,205,155.8,72]).map((w,i)=><col key={i} style={{width:w/1124*100+'%'}}/>)}</colgroup><TableHeader><TableRow><TableHead><Checkbox aria-label="Select all records" checked={list.length>0&&checked.length===list.length?true:checked.length?'indeterminate':false} onCheckedChange={v=>setChecked(v?list.map(r=>r.key):[])}/></TableHead><TableHead>Transaction ID</TableHead><TableHead>{sms?'Account':isOverview?'Customer phone number':'Phone number'}</TableHead><TableHead>Amount</TableHead><TableHead>Status</TableHead><TableHead>Date and time</TableHead>{!sms&&<TableHead>Category</TableHead>}<TableHead/></TableRow></TableHeader><TableBody>{list.map(r=><TableRow key={r.key} onClick={()=>details(r)}><TableCell onClick={e=>e.stopPropagation()}><Checkbox aria-label={`Select record ${r.key+1}`} checked={checked.includes(r.key)} onCheckedChange={value=>setChecked(value?[...checked,r.key]:checked.filter(k=>k!==r.key))}/></TableCell><TableCell><button className="reference-link" onClick={e=>{e.stopPropagation();details(r)}}>{current===1?r.id:r.id+'-'+current}</button></TableCell><TableCell>{sms?'GamePark wallet · •• 4208':r.phone}</TableCell><TableCell>{currency(r.amount)}</TableCell><TableCell><Status status={r.status}/></TableCell><TableCell>{r.date}</TableCell>{!sms&&<TableCell>{r.category}</TableCell>}<TableCell><button className="row-open" aria-label={`View ${sms?'top-up':'transaction'} ${r.key+1}`} onClick={e=>{e.stopPropagation();details(r)}}>{sms?<Icon src="/figma/sms-caret-right.svg"/>:<Icon src={assets['35-30429'].imgFrame}/>}</button></TableCell></TableRow>)}</TableBody></Table>
 {!list.length&&<div className="design-empty">No matching transactions.<Button variant="outline" onClick={()=>{setSearch('');setStatus('All statuses');setDate('Select date');setTab('All transactions')}}>Clear filters</Button></div>}
 {!isOverview&&<div className="design-pagination"><span>{rows.length===9&&search===''&&status==='All statuses'&&tab==='All transactions'&&date==='Select date'?'Showing 13 out of 100':`Showing ${rows.length} out of ${rows.length}`}</span><div className="pagination-controls"><Button variant="outline" disabled={current===1} onClick={()=>setCurrent(current-1)}>Prev</Button>{[1,2,3,4,5].map(n=><Button key={n} variant="ghost" className={current===n?'page-selected':''} onClick={()=>setCurrent(n)}>{n}</Button>)}<Button variant="outline" disabled={current===5} onClick={()=>setCurrent(current+1)}>Next</Button></div></div>}
 </section>}
 const onHeaderAction=(id)=>{if(id==='35:26755')toggleSidebar();else if(id==='35:26774')setNotificationMenu(!notificationMenu);else if(id==='35:26775')setAccountMenu(!accountMenu)};
 return <div className={'gamepark-app '+(selected?.kind==='transaction'?'has-transaction-detail ':'')+(overview?'overview-page':sms?'sms-page':settings?'settings-page'+(settingsTab==='SMS Configurations'?' sms-configuration':''):'transactions-page')}>
 <Sidebar className="design-sidebar"><SidebarContent><div className={'sidebar-logo '+(sms||settings?'logo-inset':'')}><img src={assets['35-26483'].imgImage121} width="83" height="42" alt="Unify by Rancard"/></div><nav className="design-navigation" aria-label="Main navigation">{sms||settings?<DesignSmsNav onAction={nav}/>:<DesignNav onAction={nav}/>}</nav></SidebarContent></Sidebar>
 <div className="design-main"><header className="design-header"><DesignNavbar onAction={onHeaderAction} values={{Overview:settings?'SMS and Top-ups':page,'35:26757':globalSearch}} onValueChange={(id,value)=>{setGlobalSearch(value);if(value){setPage('Transactions');setSearch(value)}}}/>{accountMenu&&<div className="header-popover"><Button variant="ghost" onClick={()=>navigate('Settings')}>Account Settings</Button></div>}{notificationMenu&&<div className="header-popover"><p>No new notifications</p></div>}</header>
 <main className="design-content">
 <section className="design-page-heading"><div><h1>{overview?'Hello Kwame':page}</h1><p>{overview?'Your operations, at a glance. A clear view of your transactions and SMS activity.':sms?'Keep customer conversations going, automatically.':settings?'Manage your workspace and replenishment preferences':'Track collections and disbursements in one place.'}</p></div>{overview?dateControl():!settings?exportButton():null}</section>
 {overview&&<><div className="summary-section"><DesignSummary/></div><div className="overview-panels"><div className="activity-panel"><DesignChart/></div><div className="balance-panel"><DesignBalance onAction={()=>navigate('SMS and Top-ups')}/></div></div><section className="recent-section"><div className="recent-heading"><h2>Recent transactions</h2><Button variant="outline" className="figma-button" onClick={()=>navigate('Transactions')}>View all transactions<Icon src={assets['35-26958'].imgArrowUpRight}/></Button></div>{transactionTable(true)}</section></>}
 {!overview&&!settings&&!sms&&<Tabs value={tab} onValueChange={value=>{setTab(value);setCurrent(1)}} className="transaction-tabs"><TabsList className="design-tabs" aria-label="Transaction category">{['All transactions','Collections','Disbursements'].map(value=><TabsTrigger key={value} value={value}>{value}</TabsTrigger>)}</TabsList></Tabs>}
 {sms&&<div className="sms-panels" onClick={e=>{if(e.target.closest('[data-node-id="35:30950"]')){navigate('Settings');setSettingsTab('SMS Configurations')}}}><DesignSmsCards onAction={()=>{navigate('Settings');setSettingsTab('SMS Configurations')}}/></div>}
 {!overview&&!settings&&<section className="transaction-section">{sms&&<h2 className="topup-heading">Top-up history</h2>}<div className="design-filters"><div className="reference-search"><DesignField nodeId="35:28939" className="w-full" value={search} onValueChange={(id,value)=>{setSearch(value);setCurrent(1)}}/></div><Filter label="Transaction status" value={status} onChange={value=>{setStatus(value);setCurrent(1)}} options={['All statuses','Successful','Failed','Pending']} small/>{dateControl()}</div>{transactionTable()}</section>}
 {settings&&<><Tabs value={settingsTab} onValueChange={setSettingsTab} className="settings-tabs"><TabsList className="design-tabs" aria-label="Settings section"><TabsTrigger value="General">General</TabsTrigger><TabsTrigger value="SMS Configurations">SMS Configurations</TabsTrigger></TabsList></Tabs>{settingsTab==='General'?<div className="general-settings"><div className="profile-section"><DesignProfile values={profileValues} onAction={editProfile}/></div><div className="notification-section"><DesignNotifications values={profileValues} onAction={editProfile}/></div></div>:<div className="configuration-section"><DesignConfiguration values={config} onValueChange={changeConfig} onAction={(id,label)=>{if(label==='Save changes'){localStorage.setItem('gamepark-design-config',JSON.stringify(config));notify('Configuration saved')}else editProfile(id,label)}}/></div>}</>}
 </main></div>
 <Dialog open={selected?.kind==='transaction'} onOpenChange={open=>!open&&setSelected(null)}><DialogContent className="transaction-dialog" showCloseButton={false}><DialogTitle className="sr-only">Transaction details</DialogTitle><DialogDescription className="sr-only">View the details of the selected transaction.</DialogDescription><DesignTransactionDetail onAction={detailAction} values={selected?.record?{'GH₵50.00':currency(selected.record.amount),'Collection':selected.record.category==='Collections'?'Collection':'Disbursement','CS-212-121':selected.record.id===records[0].id?'CS-212-121':selected.record.id,'17 Jan 2025 - 12:23 PM':selected.record.date}:{}}/></DialogContent></Dialog>
 <Sheet open={selected?.kind==='sms'} onOpenChange={open=>!open&&setSelected(null)}><SheetContent className="sms-detail-sheet" showCloseButton={false}><SheetTitle className="sr-only">Transaction details</SheetTitle><SheetDescription className="sr-only">View the details of SMS top-up</SheetDescription><DesignSmsDetail onAction={detailAction}/></SheetContent></Sheet>
 <Dialog open={!!editor} onOpenChange={open=>!open&&setEditor(null)}><DialogContent><DialogTitle>Update {editor?.key}</DialogTitle><DialogDescription>Changes are saved locally in this prototype.</DialogDescription><form className="edit-form" onSubmit={e=>{e.preventDefault();const next={...profile,[editor.key]:editor.value};setProfile(next);localStorage.setItem('gamepark-design-profile',JSON.stringify(next));setEditor(null);notify('Profile updated')}}><Input required type={editor?.key==='email'?'email':'text'} aria-label={editor?.key||'Profile value'} value={editor?.value||''} onChange={e=>setEditor({...editor,value:e.target.value})}/><Button type="submit">Save changes</Button></form></DialogContent></Dialog>
 {notice&&<div className="design-toast" role="status">{notice}</div>}
 </div>
}
createRoot(document.getElementById('root')).render(<SidebarProvider className="design-provider" style={{'--sidebar-width':'248px','--sidebar-width-mobile':'248px'}}><App/></SidebarProvider>);
