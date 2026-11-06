"use client";
import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Send } from "lucide-react";

const answers = [
  { test:/price|cost|budget|£|expensive/i, reply:"Our designer gowns begin at £500. Tell Limara your budget when requesting your private appointment so she can guide you." },
  { test:/where|location|address|find|parking/i, reply:"Lillia Bridal is at Netherton Business Centre, Kemnay, Aberdeenshire AB51 5LX. Arrival details are provided when your appointment is confirmed." },
  { test:/designer|dress|gown|collection|brand/i, reply:"Explore Étoile Élysée, Omélia Bridal, Love Enzoani and Élysée. You can save your favourite designers on our Designers page." },
  { test:/book|appointment|visit|availability|time|slot/i, reply:"Appointments are private and confirmed personally by Limara. You can send a request through our appointment page; available slots are not checked live yet." },
  { test:/deposit|return|refund|payment/i, reply:"The boutique FAQ describes a 50% non-refundable gown-order deposit and its returns policy. Please confirm the latest terms directly with Limara before purchasing." },
];
export function BridalAssistant() {
  const [open,setOpen]=useState(false);
  const [input,setInput]=useState("");
  const [messages,setMessages]=useState<{from:"visitor"|"assistant";text:string}[]>([{from:"assistant",text:"Welcome to Lillia Bridal. I can help with gowns, appointments, location and boutique policies. What would you like to know?"}]);
  function send(value:string) {
    const q=value.trim().slice(0,400);
    if(!q)return;
    const response=answers.find(item=>item.test.test(q))?.reply || "I can help with designer gowns, prices, appointments and our location. For anything else, Limara can help personally by email or phone.";
    setMessages(prev=>[...prev,{from:"visitor",text:q},{from:"assistant",text:response}].slice(-18));
    setInput("");
  }
  return <div style={{position:"fixed",bottom:22,right:22,zIndex:1000,fontFamily:"var(--sans)"}}>
    {open && <section role="dialog" aria-label="Lillia bridal assistant" style={{width:"min(370px,calc(100vw - 32px))",height:480,maxHeight:"70vh",background:"#fffafd",borderRadius:22,boxShadow:"0 24px 75px #30203135",display:"flex",flexDirection:"column",overflow:"hidden",marginBottom:12}}>
      <div style={{background:"#342633",color:"white",padding:"18px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><div><strong>Lillia Concierge</strong><div style={{fontSize:12,opacity:.8}}>Instant boutique guide · automated answers</div></div><button onClick={()=>setOpen(false)} aria-label="Close assistant" style={{background:"none",border:0,color:"white"}}><X size={21}/></button></div>
      <div aria-live="polite" style={{flex:1,overflowY:"auto",padding:18,display:"flex",flexDirection:"column",gap:12}}>{messages.map((m,i)=><div key={i} style={{alignSelf:m.from==="visitor"?"flex-end":"flex-start",background:m.from==="visitor"?"#eadde8":"#f4f0f2",borderRadius:16,padding:"10px 13px",maxWidth:"90%",fontSize:13,lineHeight:1.55}}>{m.text}</div>)}</div>
      <div style={{padding:"0 16px 12px",fontSize:12,display:"flex",gap:14}}><Link href="/appointment" onClick={()=>setOpen(false)}>Request appointment</Link><a href="mailto:Limara@LilliaBridal.com">Email boutique</a></div>
      <form onSubmit={e=>{e.preventDefault();send(input)}} style={{display:"flex",gap:8,padding:12,borderTop:"1px solid #eee"}}><input aria-label="Ask Lillia Concierge" value={input} onChange={e=>setInput(e.target.value)} maxLength={400} placeholder="Ask a question..." style={{flex:1,minWidth:0,border:"1px solid #e8dce7",borderRadius:14,padding:10,background:"white",fontSize:13}}/><button type="submit" aria-label="Send message" style={{border:0,borderRadius:12,background:"#81536e",color:"white",padding:10}}><Send size={18}/></button></form>
    </section>}
    <button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label={open?"Close bridal assistant":"Chat with Lillia Concierge"} style={{float:"right",border:0,borderRadius:100,background:"#81536e",color:"white",boxShadow:"0 10px 30px #35223644",padding:"15px 19px",display:"flex",gap:10,alignItems:"center",fontWeight:600}}>{open?<X size={21}/>:<MessageCircle size={21}/>} {open?"Close":"Ask Lillia"}</button>
  </div>;
}
