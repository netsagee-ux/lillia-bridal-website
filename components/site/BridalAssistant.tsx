"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Heart, MessageCircle, Send, Sparkles, X } from "lucide-react";
import "./BridalAssistant.css";

type Message = { from: "visitor" | "assistant"; text: string };
const topics = [
  { label: "Book a visit", query: "How can I book an appointment?" },
  { label: "Gown prices", query: "What are your gown prices?" },
  { label: "Our designers", query: "Which designers do you stock?" },
  { label: "Find us", query: "Where is the boutique?" },
];
const answers = [
  { test:/price|cost|budget|£|expensive/i, reply:"Our designer gowns begin at £500. Share your budget in your appointment request and Limara can guide you towards a considered selection." },
  { test:/where|location|address|find|parking/i, reply:"You'll find Lillia Bridal at Netherton Business Centre, Kemnay, Aberdeenshire AB51 5LX. Arrival details are shared when your visit is confirmed." },
  { test:/designer|dress|gown|collection|brand/i, reply:"Our edit includes Étoile Élysée, Omélia Bridal, Love Enzoani and Élysée. Explore the collections and save your favourite designers." },
  { test:/book|appointment|visit|availability|time|slot/i, reply:"We offer private appointments with Limara. Please send an appointment request; visits are confirmed personally and we don't show live availability here yet." },
  { test:/deposit|return|refund|payment/i, reply:"Our FAQ explains the 50% non-refundable gown-order deposit and returns terms. Please confirm current terms with Limara before placing an order." },
  { test:/contact|email|phone|call/i, reply:"You can reach Limara at Limara@LilliaBridal.com or call 07581 385143." },
];
const welcome: Message = { from:"assistant", text:"Welcome to Lillia Bridal. I'm your virtual boutique guide. Ask me about our designers, private appointments or finding your perfect gown." };

export function BridalAssistant() {
  const [open,setOpen]=useState(false);
  const [input,setInput]=useState("");
  const [journeyStep,setJourneyStep]=useState(0);
  const [preferences,setPreferences]=useState<string[]>([]);
  const [messages,setMessages]=useState<Message[]>([welcome]);
  const endRef=useRef<HTMLDivElement>(null);
  const inputRef=useRef<HTMLInputElement>(null);
  useEffect(()=>{ if(open) inputRef.current?.focus(); },[open]);
  useEffect(()=>{ if(open) endRef.current?.scrollIntoView({block:"nearest",behavior:"smooth"}); },[messages,open]);
  useEffect(()=>{
    if(!open)return;
    const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};
    window.addEventListener("keydown",onKey);
    return ()=>window.removeEventListener("keydown",onKey);
  },[open]);
  function send(value:string) {
    const question=value.trim().slice(0,400);
    if(!question)return;
    const answer=answers.find(item=>item.test.test(question))?.reply ??
      "For that question, Limara can offer the most accurate personal guidance. You can email the boutique or request an appointment below.";
    setMessages(previous=>[...previous,{from:"visitor" as const,text:question},{from:"assistant" as const,text:answer}].slice(-24));
    setInput("");
  }
  const questions = [
    { title:"What feels most like you?", options:["Modern & minimal","Romantic & detailed","Timeless & classic","Still exploring"] },
    { title:"What gown budget feels comfortable?", options:["£500–£1,000","£1,000–£1,500","£1,500–£2,000","£2,000+","Not sure yet"] },
    { title:"When is your wedding?", options:["Within 6 months","6–12 months","Over a year away","Date not set"] },
  ];
  function choosePreference(choice:string) {
    const next=[...preferences,choice];
    setPreferences(next);
    setJourneyStep(step=>step+1);
  }
  const journeyEmail = `mailto:Limara@LilliaBridal.com?subject=${encodeURIComponent("My bridal styling consultation")}&body=${encodeURIComponent("Hello Limara, I'd love to arrange a private appointment.\\n\\nStyle: "+(preferences[0]||"Not selected")+"\\nBudget: "+(preferences[1]||"Not selected")+"\\nWedding timing: "+(preferences[2]||"Not selected")+"\\n\\nPlease let me know the next steps.")}`;
  return <div className="concierge-root">
    {open && <section className="concierge-panel" role="dialog" aria-label="Lillia virtual concierge">
      <header className="concierge-head">
        <div className="concierge-monogram" aria-hidden="true">L</div>
        <div className="concierge-head-copy"><span className="concierge-kicker">A LITTLE HELP, BEAUTIFULLY GIVEN</span><strong>Lillia Concierge</strong><span className="concierge-status"><i/> Virtual boutique guide</span></div>
        <button type="button" className="concierge-close" onClick={()=>setOpen(false)} aria-label="Close concierge"><X size={20}/></button>
      </header>
      <div className="concierge-journey">
        <div className="concierge-journey-heading"><span>YOUR PRIVATE BRIDAL EDIT</span><button type="button" onClick={()=>{setJourneyStep(0);setPreferences([])}}>Start again</button></div>
        {journeyStep<questions.length ? <div className="concierge-journey-content">
          <p>{questions[journeyStep].title}</p>
          <div className="concierge-journey-options">{questions[journeyStep].options.map(choice=><button type="button" key={choice} onClick={()=>choosePreference(choice)}>{choice}<ArrowUpRight size={13}/></button>)}</div>
          <small>Step {journeyStep+1} of {questions.length} · Your choices stay in this session</small>
        </div> : <div className="concierge-journey-content"><p>Your bridal edit is ready.</p><span className="concierge-journey-summary">{preferences.join(" · ")}</span><a className="concierge-journey-email" href={journeyEmail}>Email my preferences to Limara <ArrowUpRight size={15}/></a><small>Your email app opens a draft; nothing is sent automatically.</small></div>}
      </div>
      <div className="concierge-conversation" aria-live="polite" aria-relevant="additions">
        <div className="concierge-intro"><Sparkles size={15}/> YOUR BRIDAL JOURNEY STARTS HERE</div>
        {messages.map((message,index)=><div className={`concierge-bubble concierge-bubble--${message.from}`} key={index}>{message.text}</div>)}
        <div ref={endRef}/>
      </div>
      {messages.length===1 && <div className="concierge-topics" aria-label="Popular questions">{topics.map(topic=><button type="button" key={topic.label} onClick={()=>send(topic.query)}>{topic.label}<ArrowUpRight size={13}/></button>)}</div>}
      <div className="concierge-actions"><Link href="/appointment" onClick={()=>setOpen(false)}><Heart size={15}/> Request an appointment <ArrowUpRight size={15}/></Link><a href="mailto:Limara@LilliaBridal.com">Speak to Limara</a></div>
      <form className="concierge-compose" onSubmit={event=>{event.preventDefault();send(input)}}>
        <input ref={inputRef} value={input} onChange={event=>setInput(event.target.value)} maxLength={400} aria-label="Your message" placeholder="Ask us anything about your visit…"/>
        <button type="submit" disabled={!input.trim()} aria-label="Send message"><Send size={18}/></button>
      </form>
      <p className="concierge-disclaimer">Automated answers · No live availability or booking confirmation</p>
    </section>}
    <button type="button" className="concierge-launcher" aria-label={open?"Close Lillia Concierge":"Open Lillia Concierge"} aria-expanded={open} onClick={()=>setOpen(value=>!value)}>
      <span className="concierge-launcher-icon">{open?<X size={21}/>:<MessageCircle size={21}/>}</span><span>{open?"Close concierge":"How can we help?"}</span>
    </button>
  </div>;
}
