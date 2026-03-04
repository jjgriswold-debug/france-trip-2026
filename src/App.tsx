import { useState } from "react";

const mq = (q: string) => `https://maps.google.com/?q=${encodeURIComponent(q)}`;
const wp = (slug: string) => `https://en.wikipedia.org/wiki/${slug}`;

const days = [
  { id:0, date:"Sat · Mar 7", shortDate:"Mar 7", city:"Paris", title:"Le Marais + Food Tour", emoji:"🥐",
    homeBase:{name:"Marais Chic Apartment",note:"16 Rue Charlemagne, 75004 · Your Paris home",url:"https://maps.google.com/?cid=14492819491611313292"},
    events:[
      {time:"Morning",label:"Place des Vosges",detail:"Paris's oldest planned square, built 1612 under Henri IV. Victor Hugo's house is free to visit.",type:"activity",mapUrl:mq("Place des Vosges, Paris"),infoUrl:wp("Place_des_Vosges")},
      {time:"12:00 PM",label:"No Diet Club Food Tour",detail:"Guided culinary walk through the Marais — charcuterie, cheese, pastries, wine. Highly rated.",type:"confirmed",tag:"Booked",mapUrl:"https://goo.gl/maps/WCoZcYmF5tdjZWMu7",infoUrl:"https://www.airbnb.com/experiences/148925"},
      {time:"5:45 PM",label:"Option A: Le Barav",detail:"Beloved Marais wine bar. Natural wine, zero pretension, warm neighborhood vibe.",type:"activity",mapUrl:"https://maps.app.goo.gl/KN6t1AQW9dzETtsJ6",infoUrl:"https://www.lebarav.fr/"},
      {time:"5:45 PM",label:"Option B: La Buvette",detail:"Tiny legendary cave à manger in the 11th — extraordinary bottles, cult following.",type:"activity",mapUrl:"https://maps.app.goo.gl/YLuYBPhN9wb2woNEA",infoUrl:"https://www.labuvette.paris/en"},
      {time:"7:30 PM",label:"Bistrot de l'Oulette",detail:"Classic southwestern French bistro — duck confit, foie gras, cassoulet.",type:"dinner",tag:"Confirmed",mapUrl:mq("Bistrot de l'Oulette, Paris"),infoUrl:"https://bistrot-de-l-oulette.fr/en/"},
    ]},
  { id:1, date:"Sun · Mar 8", shortDate:"Mar 8", city:"Paris", title:"Croissant Class + Left Bank + Seine Cruise", emoji:"🥐",
    homeBase:{name:"Marais Chic Apartment",note:"16 Rue Charlemagne, 75004 · Your Paris home",url:"https://maps.google.com/?cid=14492819491611313292"},
    events:[
      {time:"9:00–11:30 AM",label:"Maison Fleuret Croissant Class",detail:"Make croissants, pains au chocolat, and pains aux raisins with a pastry chef. Taught in English · up to 8 participants · you take home everything you bake.\n\n3 Rue des 3 Portes, 75005 Paris (Notre-Dame studio — 15 min walk from apartment).",type:"confirmed",tag:"Booked",mapUrl:"https://maps.app.goo.gl/Z82p7LXcjSyBYMnj8",infoUrl:"https://maisonfleuret.fr/products/apprenez-a-realiser-vos-croissants-pains-au-chocolat-a-paris"},
      {time:"1:30 PM",label:"Lunch: Bouillon Racine",detail:"Stunning 1906 Art Nouveau brasserie — mirrored walls, sculpted ceilings, listed monument. Confirmed reservation for 4.",type:"lunch",tag:"Confirmed",mapUrl:mq("Bouillon Racine, Paris"),infoUrl:"https://www.bouillonracine.com"},
      {time:"Afternoon",label:"Luxembourg Gardens + Panthéon",detail:"23 hectares of formal French gardens created in 1612 for Marie de' Medici. The Panthéon next door holds Voltaire, Rousseau, Hugo, Curie, and Zola.",type:"activity",mapUrl:mq("Jardin du Luxembourg, Paris"),infoUrl:wp("Luxembourg_Garden")},
      {time:"Afternoon",label:"Shakespeare & Company",detail:"Most famous English bookshop in the world. Opened 1951. Closes ~7:30 PM — go before the cruise.",type:"activity",mapUrl:mq("Shakespeare and Company, Paris"),infoUrl:wp("Shakespeare_and_Company_(bookshop)")},
      {time:"5:30–7:00 PM",label:"Private Seine Cruise",detail:"Passes Notre-Dame, Louvre, Eiffel Tower, Musée d'Orsay. Departs 2 Port de Javel Haut.",type:"confirmed",tag:"Confirmed",mapUrl:mq("2 Port de Javel Haut, Paris"),infoUrl:"https://www.viator.com/tours/Paris/Private-Boat-Trip-on-the-Seine-in-Paris/d479-318691P2"},
      {time:"8:30 PM",label:"SEMILLA",detail:"Celebrated neo-bistro. Seasonal market-driven cuisine, exceptional natural wine list.",type:"dinner",tag:"Confirmed",mapUrl:mq("Semilla restaurant, Paris"),infoUrl:"https://www.semillaparis.com"},
    ]},
  { id:2, date:"Mon · Mar 9", shortDate:"Mar 9", city:"Paris", title:"Louvre + Notre-Dame + Frenchie", emoji:"🏛️",
    homeBase:{name:"Marais Chic Apartment",note:"16 Rue Charlemagne, 75004 · Your Paris home",url:"https://maps.google.com/?cid=14492819491611313292"},
    events:[
      {time:"11:30 AM",label:"Musée du Louvre",detail:"World's largest art museum. 35,000+ works. Mona Lisa, Venus de Milo, Winged Victory. Allow 3+ hours.\n\nMeeting place: Paris, Île-de-France, 75001, France.",type:"confirmed",tag:"Booked",mapUrl:mq("Musée du Louvre, Paris"),infoUrl:wp("Louvre")},
      {time:"Afternoon",label:"Cathédrale Notre-Dame",detail:"French Gothic masterpiece built 1163–1345. Severely damaged 2019, reopened December 2024.",type:"confirmed",tag:"Booked",mapUrl:mq("Cathédrale Notre-Dame de Paris"),infoUrl:wp("Notre-Dame_de_Paris")},
      {time:"6:30 PM",label:"Frenchie Bar à Vins",detail:"No reservations — arrive RIGHT at 6:30 PM opening. Small plates, extraordinary grower Champagne.",type:"dinner",tag:"⚠️ No Resos",mapUrl:mq("Frenchie Bar a Vins, Paris"),infoUrl:"https://www.frenchie-bav.com/en/home/"},
    ]},
  { id:3, date:"Tue · Mar 10", shortDate:"Mar 10", city:"Paris", title:"Eiffel Tower + Arc + Uno", emoji:"🗼",
    homeBase:{name:"Marais Chic Apartment",note:"16 Rue Charlemagne, 75004 · Your Paris home",url:"https://maps.google.com/?cid=14492819491611313292"},
    events:[
      {time:"9:30 AM",label:"Eiffel Tower",detail:"Built by Gustave Eiffel for the 1889 World's Fair. Most visited paid monument in the world.\n\nEntry: Go to entrance 1 in the gardens, at the \"Official Guided Tours\" entrance — allow 15–20 minutes for security checks. On the esplanade, go to the \"Official Guided Tours\" meeting point at the West pillar near the Information Desk.",type:"confirmed",tag:"Booked",mapUrl:mq("Eiffel Tower, Paris"),infoUrl:wp("Eiffel_Tower")},
      {time:"~12:30 PM",label:"Lunch: Café du Marché / Rue Cler",detail:"Classic café on Rue Cler — pedestrian market street in the 7th, lined with fromageries and wine merchants.",type:"lunch",tag:"Suggested",mapUrl:"https://maps.app.goo.gl/gFnrmgsiY8jermyu9",infoUrl:"https://cafedumarche.shop/"},
      {time:"Afternoon",label:"Arc de Triomphe",detail:"Commissioned 1806 by Napoleon. 50m tall, 12 avenues radiating. Tomb of the Unknown Soldier.",type:"activity",mapUrl:mq("Arc de Triomphe, Paris"),infoUrl:wp("Arc_de_Triomphe")},
      {time:"7:30 PM",label:"Uno",detail:"Modern Paris bistro, creative seasonal cuisine, strong natural wine program.",type:"dinner",tag:"Confirmed",mapUrl:mq("Uno restaurant, Paris"),infoUrl:"https://unoparis.com/"},
    ]},
  { id:4, date:"Wed · Mar 11", shortDate:"Mar 11", city:"Paris", title:"Orsay + Montmartre + Le Chateaubriand", emoji:"🎨",
    homeBase:{name:"Marais Chic Apartment",note:"16 Rue Charlemagne, 75004 · Your Paris home",url:"https://maps.google.com/?cid=14492819491611313292"},
    events:[
      {time:"9:30 AM",label:"Musée d'Orsay",detail:"Former Beaux-Arts railway station (1900). World's greatest Impressionist collection — Monet, Van Gogh, Renoir, Degas.",type:"activity",mapUrl:mq("Musée d'Orsay, Paris"),infoUrl:wp("Musée_d'Orsay")},
      {time:"1:30 PM",label:"Café des Deux Moulins",detail:"The real café from the 2001 film Amélie. Still a working café in Montmartre.",type:"lunch",tag:"Confirmed",mapUrl:mq("Café des Deux Moulins, Montmartre, Paris"),infoUrl:"https://www.cafedesdeuxmoulins.com/"},
      {time:"Afternoon",label:"Montmartre & Sacré-Cœur",detail:"Hilltop neighborhood of Picasso, Modigliani, Toulouse-Lautrec. Sacré-Cœur (1914) has sweeping city views.",type:"activity",mapUrl:mq("Sacré-Cœur, Montmartre, Paris"),infoUrl:wp("Montmartre")},
      {time:"8:00 PM",label:"Le Chateaubriand",detail:"Chef Inaki Aizpitarte pioneered the Paris neo-bistro movement. World's 50 Best. Legendary natural wine list.",type:"dinner",tag:"Confirmed",mapUrl:mq("Le Chateaubriand restaurant, Paris"),infoUrl:"https://www.lechateaubriand.net/"},
    ]},
  { id:5, date:"Thu · Mar 12", shortDate:"Mar 12", city:"Champagne", title:"Drive to Épernay + Check-in", emoji:"🍾",
    homeBase:{name:"Royal Champagne Hotel & Spa",note:"9 Rue de la République, Champillon · Check-in day",url:"https://maps.google.com/?cid=2287634802391190921"},
    events:[
      {time:"7:30 AM",label:"Enterprise Rent-A-Car · Gare de Lyon",detail:"197 Rue de Bercy, 75012. Confirmation #1394634704. GPS Royal Champagne Hotel — 1h 30 min drive.",type:"confirmed",tag:"Confirmed",mapUrl:"https://maps.google.com/?cid=6320232270525159438",infoUrl:"https://www.enterprise.fr/"},
      {time:"10:00 AM",label:"Avenue de Champagne · Épernay",detail:"3.4 km lined with grand Champagne houses: Moët & Chandon, Perrier-Jouët, Pol Roger. 200M bottles below. UNESCO.",type:"activity",mapUrl:"https://maps.google.com/?cid=1961555216771445488",infoUrl:wp("Avenue_de_Champagne")},
      {time:"12:00 PM",label:"Lunch: La Cave à Champagne",detail:"Traditional French restaurant on the Avenue de Champagne. Good quality, extensive local list.",type:"lunch",tag:"Suggested",mapUrl:"https://maps.google.com/?cid=16866080734914171591",infoUrl:"https://www.cave-champagne.fr/"},
      {time:"~4:00 PM",label:"Check in · Royal Champagne Hotel",detail:"Built into a hillside above Champillon with panoramic vineyard views. Staff welcome with Champagne.",type:"confirmed",tag:"Confirmed",mapUrl:"https://maps.google.com/?cid=2287634802391190921",infoUrl:"https://royalchampagne.com/en/"},
      {time:"8:30 PM",label:"Le Royal · Michelin ★",detail:"Flagship restaurant, Michelin star. Chef Christophe Raoux — Meilleur Ouvrier de France. Dress smartly.",type:"dinner",tag:"Confirmed",mapUrl:"https://maps.google.com/?cid=2287634802391190921",infoUrl:"https://royalchampagne.com/en/le-royal-gourmet-restaurant.html"},
    ]},
  { id:6, date:"Fri · Mar 13", shortDate:"Mar 13", city:"Champagne", title:"Sparkling Tours Private Day", emoji:"🥂",
    homeBase:{name:"Royal Champagne Hotel & Spa",note:"9 Rue de la République, Champillon",url:"https://maps.google.com/?cid=2287634802391190921"},
    events:[
      {time:"9:30 AM",label:"Sparkling Tours Private Day",detail:"Pickup at Royal Champagne Hotel. Full day visiting grower producers, Grand Cru villages, and a major house cellar. All tastings included.\n\nAfternoon: Two small grower Champagne houses — producers TBA.",type:"confirmed",tag:"Confirmed",mapUrl:"https://maps.google.com/?cid=2287634802391190921",infoUrl:"https://www.sparkling-tour.com/en/home/"},
      {time:"~10:30 AM",label:"Piper-Heidsieck Cellar · Reims",detail:"Founded 1785. 8 km of cellars under Reims. Marie-Antoinette was a client. Try their Essentiel Blanc de Blancs.",type:"activity",tag:"On Tour",mapUrl:"https://maps.google.com/?cid=10998784899240441323",infoUrl:"https://www.piper-heidsieck.com/en"},
      {time:"Afternoon",label:"Village of Hautvillers",detail:"Dom Pierre Pérignon is buried in the village church. Vineyards surround on all sides. Spectacular views.",type:"activity",tag:"On Tour",mapUrl:mq("Hautvillers, France"),infoUrl:wp("Hautvillers")},
      {time:"Evening",label:"Option A: Clotaire · Hautvillers",detail:"Bistronomic restaurant in the heart of Hautvillers, built around the village's original 19th-century winepress (now the bar). Fresh, local, seasonal cuisine from a winemaking couple. Swordfish tartare, duck breast, pork belly are highlights. English-friendly staff. ~15 min drive from the hotel. Reservations recommended.\n\n29 Rue de la Croix de Fer, 51160 Hautvillers",type:"dinner",tag:"Suggested",mapUrl:mq("Clotaire restaurant Hautvillers France"),infoUrl:"https://clotairehautvillers.fr/"},
      {time:"Evening",label:"Option B: Au 36 · Hautvillers",detail:"Wine bar and casual restaurant right on Rue Dom Pérignon. Famous for Champagne tastings by the glass — including Dom Pérignon. Food is charcuterie boards, foie gras, duck rillette, and tapas-style plates. Better for a lighter, wine-focused evening than a full dinner. ~15 min drive from the hotel.\n\n36 Rue Dom Pérignon, 51160 Hautvillers",type:"dinner",tag:"Suggested",mapUrl:mq("Au 36 Hautvillers France"),infoUrl:"https://www.au36.net/"},
      {time:"Evening",label:"Option C: Abysse Bar or Le Bellevue",detail:"After a full day tasting, keep it relaxed at the hotel. Abysse bar serves exceptional Champagne by the glass with small plates. Le Bellevue offers a fuller dinner with vineyard views.",type:"dinner",tag:"Suggested",mapUrl:"https://maps.google.com/?cid=2287634802391190921",infoUrl:"https://royalchampagne.com/en/restaurants-and-bar.html"},
    ]},
  { id:7, date:"Sat · Mar 14", shortDate:"Mar 14", city:"Champagne", title:"Spa → Reims → CDG", emoji:"✈️",
    homeBase:{name:"Royal Champagne Hotel & Spa",note:"Departing today · Check-out by noon",url:"https://maps.google.com/?cid=2287634802391190921"},
    events:[
      {time:"10:00 AM",label:"Spa at Royal Champagne",detail:"Indoor & outdoor pool, hammam, 9 treatment rooms — many with vineyard views. Check-out noon.\n\nBookings:\n• Karen Griswold — Assemblage Royal (2 hrs)\n• Jamie Griswold — Assemblage Envolée (1.5 hrs)\n• Mary Griswold — Rebalancing Massage (1 hr)\n• Kristen Griswold — Relaxing Massage (1 hr)",type:"confirmed",tag:"Booked",mapUrl:"https://maps.google.com/?cid=2287634802391190921",infoUrl:"https://royalchampagne.com/en/spa.html"},
      {time:"1:00 PM",label:"Café du Palais · Reims",detail:"Reims institution since 1930. One of the most beautiful Art Deco stained glass interiors in France. Budget ~90 min.",type:"lunch",tag:"Confirmed",mapUrl:"https://maps.google.com/?cid=17127831561203738635",infoUrl:"https://www.cafedupalais.fr"},
      {time:"~2:30 PM",label:"Les Caves du Forum 🍾",detail:"Go HERE before the Cathedral. Best grower Champagne shop in Reims — small producers you won't find at home.",type:"activity",mapUrl:"https://maps.google.com/?cid=9636918212556419203",infoUrl:"https://www.lescavesduforum.com/"},
      {time:"~3:15 PM",label:"Cathédrale Notre-Dame de Reims",detail:"33 French kings crowned here. Badly damaged in WWI, meticulously restored. Extraordinary Chagall stained glass.",type:"activity",mapUrl:"https://maps.google.com/?cid=9171582378009471970",infoUrl:wp("Reims_Cathedral")},
      {time:"5:00 PM",label:"Hilton Paris CDG Airport",detail:"Connected to Terminal 2 by covered walkway — no shuttle needed. A comfortable final night before your flight home. Confirmation #3356331212.",type:"confirmed",tag:"Confirmed",mapUrl:"https://maps.google.com/?cid=13179949193602621012",infoUrl:"https://www.hilton.com/en/hotels/cdghitw-hilton-paris-charles-de-gaulle-airport/"},
    ]},
];

const restaurants = [
  {night:"Sat Mar 7",name:"Bistrot de l'Oulette",neighborhood:"Le Marais · 4th",status:"Confirmed",wine:"Light red — Beaujolais or Pinot",notes:"Classic southwestern French bistro. Duck, foie gras, cassoulet country.",mapUrl:mq("Bistrot de l'Oulette, Paris"),infoUrl:"https://bistrot-de-l-oulette.fr/en/"},
  {night:"Sun Mar 8",name:"Bouillon Racine",neighborhood:"Saint-Germain · 6th",status:"Confirmed",wine:"Loire white or Burgundy",notes:"Confirmed reservation for 4 at 1:30 PM. Stunning 1906 Art Nouveau brasserie — one of the most beautiful dining rooms in Paris.",mapUrl:mq("Bouillon Racine, Paris"),infoUrl:"https://www.bouillonracine.com"},
  {night:"Sun Mar 8",name:"SEMILLA",neighborhood:"Saint-Germain · 6th",status:"Confirmed",wine:"Loire white or Burgundy",notes:"Confirmed reservation at 8:30 PM. Market-driven neo-bistro. Open kitchen, exceptional natural wine list.",mapUrl:mq("Semilla restaurant, Paris"),infoUrl:"https://www.semillaparis.com"},
  {night:"Mon Mar 9",name:"Frenchie Bar à Vins",neighborhood:"Sentier · 2nd",status:"No Reservations",wine:"Grower Champagne + Jura",notes:"Arrive at 6:30 PM sharp when they open. No reservations. Fills in 20 min.",mapUrl:mq("Frenchie Bar a Vins, Paris"),infoUrl:"https://www.frenchie-bav.com/en/home/"},
  {night:"Tue Mar 10",name:"Uno",neighborhood:"Paris",status:"Confirmed",wine:"Chianti or Beaujolais",notes:"Modern Paris bistro, creative seasonal cuisine.",mapUrl:mq("Uno restaurant, Paris"),infoUrl:"https://unoparis.com/"},
  {night:"Wed Mar 11",name:"Le Chateaubriand",neighborhood:"Oberkampf · 11th",status:"Confirmed",wine:"Sommelier pairing or Jura / Loire",notes:"Pioneer of the Paris neo-bistro movement. Chef Inaki Aizpitarte. Legendary wine list.",mapUrl:mq("Le Chateaubriand restaurant, Paris"),infoUrl:"https://www.lechateaubriand.net/"},
  {night:"Thu Mar 12",name:"Le Royal",neighborhood:"Royal Champagne Hotel",status:"Confirmed",wine:"Serious Champagne — this is the night",notes:"Michelin-starred. Chef Christophe Raoux, Meilleur Ouvrier de France.",mapUrl:mq("Royal Champagne Hotel & Spa, Champillon, France"),infoUrl:"https://royalchampagne.com/en/le-royal-gourmet-restaurant.html"},
  {night:"Fri Mar 13",name:"Light / Hotel area",neighborhood:"Champagne",status:"Open",wine:"Hydrate — light pour only",notes:"Big day on Friday. Keep it easy — Abysse bar or Le Bellevue at the hotel.",mapUrl:null,infoUrl:"https://royalchampagne.com/en/restaurants-and-bar.html"},
  {night:"Sat Mar 14",name:"Café du Palais",neighborhood:"Reims city center",status:"Confirmed",wine:"One glass — celebrate!",notes:"Reims institution since 1930. Beautiful stained glass interior. Budget 90 min.",mapUrl:mq("Café du Palais, Reims, France"),infoUrl:"https://www.cafedupalais.fr"},
];

const typeStyles: Record<string, {dot:string}> = {confirmed:{dot:"#2E7D32"},dinner:{dot:"#E65100"},lunch:{dot:"#F57C00"},activity:{dot:"#546E7A"}};
const tagStyleMap: Record<string,{background:string;color:string;border:string}> = {
  "Confirmed":{background:"#E8F5E9",color:"#2E7D32",border:"1px solid #A5D6A7"},
  "Booked":{background:"#E8F5E9",color:"#2E7D32",border:"1px solid #A5D6A7"},
  "Suggested":{background:"#E3F2FD",color:"#1565C0",border:"1px solid #90CAF9"},
  "On Tour":{background:"#F3E5F5",color:"#6A1B9A",border:"1px solid #CE93D8"},
  "⚠️ No Resos":{background:"#FFF3E0",color:"#E65100",border:"1px solid #FFCC80"},
};
const statusColor: Record<string,{bg:string;color:string}> = {
  "Confirmed":{bg:"#E8F5E9",color:"#2E7D32"},
  "No Reservations":{bg:"#FFF3E0",color:"#E65100"},
  "Open":{bg:"#F3E5F5",color:"#6A1B9A"},
};



function MapTab() {
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#F4F1EB",padding:32,gap:20}}>
      <div style={{fontSize:48}}>🗺️</div>
      <div style={{textAlign:"center"}}>
        <div style={{fontSize:18,fontWeight:800,color:"#1B3A5C",marginBottom:6}}>Paris & Champagne Map</div>
        <div style={{fontSize:13,color:"#666",fontFamily:"sans-serif",lineHeight:1.6,maxWidth:280}}>
          All 8 days with every pin plotted. Toggle days on and off using the layer list in the sidebar.
        </div>
      </div>
      <a href="https://www.google.com/maps/d/viewer?mid=12XnsNnAno916LjzVFtBEXbUmnJpU76c&ll=48.85926490589825,2.360820400354924&z=15" target="_blank" rel="noopener noreferrer"
        style={{display:"flex",alignItems:"center",gap:10,background:"#1B3A5C",color:"white",padding:"14px 28px",borderRadius:12,textDecoration:"none",fontSize:15,fontWeight:700,fontFamily:"sans-serif",boxShadow:"0 4px 16px rgba(27,58,92,0.3)"}}>
        <span>Open Trip Map</span>
        <span style={{opacity:0.7}}>↗</span>
      </a>
      <div style={{fontSize:11,color:"#AAA",fontFamily:"sans-serif",textAlign:"center",maxWidth:260,lineHeight:1.5}}>
        Opens in Google Maps · All 8 days · Every pin in place
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("itinerary");
  const [activeDay, setActiveDay] = useState(0);
  const [expandedEvent, setExpandedEvent] = useState<string|null>(null);
  const today = days[activeDay];

  return (
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",background:"#FAFAF8",minHeight:"100vh",maxWidth:430,margin:"0 auto",display:"flex",flexDirection:"column",boxShadow:"0 0 40px rgba(0,0,0,0.08)"}}>

      {/* HEADER */}
      <div style={{background:"#1B3A5C",padding:"20px 20px 0",color:"white"}}>
        <div style={{fontSize:11,letterSpacing:3,opacity:0.6,marginBottom:4,fontFamily:"sans-serif",textTransform:"uppercase"}}>March 7–15, 2026 · 4 Travelers</div>
        <div style={{fontSize:24,fontWeight:"bold",letterSpacing:-0.5,marginBottom:2}}>Paris & Champagne</div>
        <div style={{fontSize:13,opacity:0.65,marginBottom:16,fontFamily:"sans-serif"}}>Your trip companion</div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.12)"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
            {[["itinerary","📅 Schedule"],["restaurants","🍽️ Dining"],["accommodations","🏨 Stay"]].map(([k,l])=>(
              <button key={k} onClick={()=>setTab(k)} style={{background:"none",border:"none",cursor:"pointer",padding:"10px 4px 8px",borderBottom:tab===k?"2px solid #C9A84C":"2px solid transparent",color:tab===k?"white":"rgba(255,255,255,0.5)",fontSize:11,fontFamily:"sans-serif",fontWeight:tab===k?600:400}}>{l}</button>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
            {[["coffee","☕ Coffee"],["champagne","🍾 Champ."],["map","🗺️ Map"],["essentials","🧭 Nav"]].map(([k,l])=>(
              <button key={k} onClick={()=>setTab(k)} style={{background:"none",border:"none",cursor:"pointer",padding:"9px 4px",borderBottom:tab===k?"2px solid #C9A84C":"2px solid transparent",color:tab===k?"white":"rgba(255,255,255,0.5)",fontSize:11,fontFamily:"sans-serif",fontWeight:tab===k?600:400,whiteSpace:"nowrap",textAlign:"center"}}>{l}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ITINERARY */}
      {tab==="itinerary"&&(
        <div style={{flex:1,overflowY:"auto"}}>
          {["Paris","Champagne"].map(city=>{
            const cd=days.filter(d=>d.city===city||(city==="Champagne"&&d.city!=="Paris"));
            return(
              <div key={city}>
                <div style={{padding:"14px 20px 6px",fontSize:10,letterSpacing:3,color:city==="Paris"?"#1B3A5C":"#8B6914",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",borderBottom:`2px solid ${city==="Paris"?"#1B3A5C":"#C9A84C"}`,marginBottom:2}}>
                  {city==="Paris"?"🗺️ Paris — Mar 7–11":"🍾 Champagne — Mar 12–15"}
                </div>
                <div style={{overflowX:"auto",display:"flex",gap:8,padding:"10px 20px",scrollbarWidth:"none"}}>
                  {cd.map(d=>(
                    <button key={d.id} onClick={()=>setActiveDay(d.id)} style={{flexShrink:0,padding:"8px 14px",borderRadius:20,border:activeDay===d.id?`2px solid ${city==="Paris"?"#1B3A5C":"#8B6914"}`:"2px solid #E0DDD5",background:activeDay===d.id?(city==="Paris"?"#1B3A5C":"#8B6914"):"white",color:activeDay===d.id?"white":"#555",fontSize:12,fontFamily:"sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}>{d.shortDate}</button>
                  ))}
                </div>
              </div>
            );
          })}
          <div style={{padding:"16px 20px 32px"}}>
            <div style={{marginBottom:16}}>
              <div style={{fontSize:11,letterSpacing:2,color:today.city==="Paris"?"#1B3A5C":"#8B6914",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:4}}>{today.date} · {today.city}</div>
              <div style={{fontSize:20,fontWeight:"bold",color:"#1A1A1A",lineHeight:1.2}}>{today.emoji} {today.title}</div>
            </div>
            {today.events.map((ev,i)=>{
              const dot=(typeStyles[ev.type]||typeStyles.activity).dot;
              const isExp=expandedEvent===`${today.id}-${i}`;
              return(
                <div key={i} onClick={()=>ev.detail&&setExpandedEvent(isExp?null:`${today.id}-${i}`)} style={{background:"white",border:"1px solid #ECEAE4",borderLeft:`3px solid ${dot}`,borderRadius:"0 10px 10px 0",marginBottom:10,padding:"12px 14px",cursor:ev.detail?"pointer":"default",boxShadow:isExp?"0 2px 12px rgba(0,0,0,0.08)":"none"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:11,color:"#999",fontFamily:"sans-serif",marginBottom:2}}>{ev.time}</div>
                      <div style={{fontSize:15,color:"#1A1A1A",fontWeight:600,lineHeight:1.3}}>{ev.label}</div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4}}>
                      {ev.tag&&<span style={{fontSize:10,padding:"2px 7px",borderRadius:10,fontFamily:"sans-serif",fontWeight:600,whiteSpace:"nowrap",...(tagStyleMap[ev.tag]||{})}}>{ev.tag}</span>}
                      {ev.detail&&<span style={{fontSize:12,color:"#BBB",fontFamily:"sans-serif"}}>{isExp?"▲":"▼"}</span>}
                    </div>
                  </div>
                  {isExp&&ev.detail&&<div style={{marginTop:10,paddingTop:10,borderTop:"1px solid #F0EDE6",fontSize:13,color:"#555",fontFamily:"sans-serif",lineHeight:1.55}}>{ev.detail}</div>}
                  {isExp&&(ev.mapUrl||ev.infoUrl)&&(
                    <div style={{marginTop:10,display:"flex",gap:8,flexWrap:"wrap"}}>
                      {ev.mapUrl&&<a href={ev.mapUrl} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontSize:12,fontFamily:"sans-serif",fontWeight:600,color:"#1B3A5C",background:"#EEF3FA",border:"1px solid #C5D3E8",borderRadius:8,padding:"5px 11px",textDecoration:"none"}}>📍 Google Maps</a>}
                      {ev.infoUrl&&<a href={ev.infoUrl} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{fontSize:12,fontFamily:"sans-serif",fontWeight:600,color:"#555",background:"#F4F4F2",border:"1px solid #DDD",borderRadius:8,padding:"5px 11px",textDecoration:"none"}}>ℹ️ Learn More</a>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* RESTAURANTS */}
      {tab==="restaurants"&&(
        <div style={{flex:1,overflowY:"auto",padding:"20px 20px 40px"}}>
          <div style={{fontSize:11,letterSpacing:2,color:"#999",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:16}}>All Dinners & Key Lunches</div>
          {restaurants.map((r,i)=>{
            const sc=statusColor[r.status]||statusColor["Open"];
            return(
              <div key={i} style={{background:"white",border:"1px solid #ECEAE4",borderRadius:12,marginBottom:12,overflow:"hidden"}}>
                <div style={{padding:"14px 16px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                    <div>
                      <div style={{fontSize:11,color:"#AAA",fontFamily:"sans-serif",marginBottom:2}}>{r.night}</div>
                      <div style={{fontSize:16,fontWeight:700,color:"#1A1A1A"}}>{r.name}</div>
                      <div style={{fontSize:12,color:"#888",fontFamily:"sans-serif",marginTop:2}}>{r.neighborhood}</div>
                    </div>
                    <span style={{fontSize:10,padding:"3px 9px",borderRadius:10,fontFamily:"sans-serif",fontWeight:600,background:sc.bg,color:sc.color,border:`1px solid ${sc.color}33`,whiteSpace:"nowrap",marginTop:2}}>{r.status}</span>
                  </div>
                </div>
                <div style={{borderTop:"1px solid #F5F3EE",padding:"10px 16px",background:"#FDFCFA"}}>
                  <div style={{fontSize:12,fontFamily:"sans-serif",marginBottom:6}}><span style={{color:"#C9A84C",fontWeight:700}}>🍷 </span><span style={{color:"#555"}}>{r.wine}</span></div>
                  <div style={{fontSize:12,color:"#777",fontFamily:"sans-serif",lineHeight:1.5,marginBottom:8}}>{r.notes}</div>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                    {r.mapUrl&&<a href={r.mapUrl} target="_blank" rel="noopener noreferrer" style={{fontSize:12,fontFamily:"sans-serif",fontWeight:600,color:"#1B3A5C",background:"#EEF3FA",border:"1px solid #C5D3E8",borderRadius:8,padding:"5px 11px",textDecoration:"none"}}>📍 Maps</a>}
                    {r.infoUrl&&<a href={r.infoUrl} target="_blank" rel="noopener noreferrer" style={{fontSize:12,fontFamily:"sans-serif",fontWeight:600,color:"#555",background:"#F4F4F2",border:"1px solid #DDD",borderRadius:8,padding:"5px 11px",textDecoration:"none"}}>ℹ️ Info</a>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ACCOMMODATIONS */}
      {tab==="accommodations"&&(
        <div style={{flex:1,overflowY:"auto",padding:"20px 20px 40px"}}>

          {/* PARIS */}
          <div style={{fontSize:11,letterSpacing:2,color:"#1B3A5C",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:4}}>Paris · Mar 7–12</div>
          <div style={{background:"white",border:"1px solid #ECEAE4",borderRadius:14,marginBottom:24,overflow:"hidden"}}>
            <div style={{background:"#1B3A5C",padding:"18px 18px 14px"}}>
              <div style={{fontSize:11,letterSpacing:2,color:"rgba(255,255,255,0.55)",fontFamily:"sans-serif",marginBottom:4,textTransform:"uppercase"}}>Apartment</div>
              <div style={{fontSize:20,fontWeight:700,color:"white",marginBottom:2}}>Marais Chic Apartment</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.65)",fontFamily:"sans-serif"}}>Le Marais, Paris 4th</div>
            </div>
            <div style={{padding:"14px 18px"}}>
              {[["📍 Address","16 Rue Charlemagne, 75004 Paris"],["🚇 Nearest Metro","Saint-Paul (Line 1) — 3–5 min walk"],["🗺️ Walkable","Place des Vosges · Seine · Île Saint-Louis"]].map(([label,value],i)=>(
                <div key={i} style={{display:"flex",gap:10,paddingBottom:10,marginBottom:10,borderBottom:i<2?"1px solid #F0EDE6":"none"}}>
                  <div style={{fontSize:13,fontWeight:700,color:"#444",fontFamily:"sans-serif",minWidth:130}}>{label}</div>
                  <div style={{fontSize:13,color:"#555",fontFamily:"sans-serif",lineHeight:1.5}}>
                    {i===1?<><a href="https://maps.app.goo.gl/zNX5CDPH2KfbE1Rp9" target="_blank" rel="noopener noreferrer" style={{color:"#1B3A5C",fontWeight:600,textDecoration:"underline"}}>Saint-Paul (Line 1)</a> — 3–5 min walk</>:value}
                  </div>
                </div>
              ))}
            </div>
            <div style={{borderTop:"1px solid #F0EDE6",padding:"12px 18px",display:"flex",gap:10,flexWrap:"wrap",background:"#FAFAF8"}}>
              <a href="https://maps.google.com/?cid=14492819491611313292" target="_blank" rel="noopener noreferrer" style={{fontSize:12,fontFamily:"sans-serif",fontWeight:600,color:"#1B3A5C",background:"#EEF3FA",border:"1px solid #C5D3E8",borderRadius:8,padding:"6px 12px",textDecoration:"none"}}>📍 Google Maps</a>
              <a href="https://www.dreams-apartments.com/paris-marais-chic-apartment.php" target="_blank" rel="noopener noreferrer" style={{fontSize:12,fontFamily:"sans-serif",fontWeight:600,color:"#555",background:"#F4F4F2",border:"1px solid #DDD",borderRadius:8,padding:"6px 12px",textDecoration:"none"}}>🔗 Apartment Listing</a>
            </div>
            <div style={{borderTop:"1px solid #F0EDE6",padding:"14px 18px",background:"#FDFCFA"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#1B3A5C",fontFamily:"sans-serif",marginBottom:10}}>Neighborhood at a Glance</div>
              {[
                ["Place des Vosges","Paris's oldest square — 5 min walk. Beautiful arcaded galleries, great for morning coffee.","https://maps.google.com/?cid=7266689551849442472"],
                ["Île Saint-Louis","Cross the bridge for one of the most peaceful streets in Paris. Berthillon ice cream is the move.","https://maps.google.com/?q=%C3%8Ele+Saint-Louis+Paris"],
                ["Shakespeare & Company","Legendary English-language bookshop across the Seine — 15 min walk.","https://maps.google.com/?cid=1385046964796084915"],
                ["Marché des Enfants Rouges","Best morning food market in the Marais. Open Tue–Sun.","https://maps.app.goo.gl/Ss11UvbbeFjadzWDA"],
              ].map(([place,desc,url],i)=>(
                <div key={i} style={{marginBottom:i<3?10:0,paddingBottom:i<3?10:0,borderBottom:i<3?"1px dashed #EEE":"none"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:2}}>
                    <div style={{fontSize:13,fontWeight:600,color:"#1A1A1A"}}>{place}</div>
                    <a href={url} target="_blank" rel="noopener noreferrer" style={{fontSize:11,fontFamily:"sans-serif",fontWeight:600,color:"#1B3A5C",background:"#EEF3FA",border:"1px solid #C5D3E8",borderRadius:6,padding:"2px 7px",textDecoration:"none",whiteSpace:"nowrap",marginLeft:8}}>📍</a>
                  </div>
                  <div style={{fontSize:12,color:"#777",fontFamily:"sans-serif",lineHeight:1.5}}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ROYAL CHAMPAGNE */}
          <div style={{fontSize:11,letterSpacing:2,color:"#8B6914",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:4}}>Champagne · Mar 12–14</div>
          <div style={{background:"white",border:"1px solid #E8C84A",borderRadius:14,overflow:"hidden"}}>
            <div style={{background:"#8B6914",padding:"18px 18px 14px"}}>
              <div style={{fontSize:11,letterSpacing:2,color:"rgba(255,255,255,0.6)",fontFamily:"sans-serif",marginBottom:4,textTransform:"uppercase"}}>5-Star Hotel · Champillon</div>
              <div style={{fontSize:20,fontWeight:700,color:"white",marginBottom:2}}>Royal Champagne Hotel & Spa</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",fontFamily:"sans-serif"}}>Overlooking the vineyards of the Champagne region</div>
            </div>
            <div style={{padding:"14px 18px"}}>
              {[["📍 Address","9 Rue de la République, 51160 Champillon, France"],["🚗 From Paris","~1.5 hrs by car · A4 east toward Reims"],["🚗 From Épernay","15 min drive from Épernay town center"],["📞 Phone","+33 3 26 52 87 11"]].map(([label,value],i)=>(
                <div key={i} style={{display:"flex",gap:10,paddingBottom:10,marginBottom:10,borderBottom:i<3?"1px solid #F0EDE6":"none"}}>
                  <div style={{fontSize:13,fontWeight:700,color:"#444",fontFamily:"sans-serif",minWidth:130}}>{label}</div>
                  <div style={{fontSize:13,color:"#555",fontFamily:"sans-serif",lineHeight:1.5}}>{value}</div>
                </div>
              ))}
            </div>
            <div style={{borderTop:"1px solid #F0EDE6",padding:"12px 18px",display:"flex",gap:10,flexWrap:"wrap",background:"#FAFAF8"}}>
              <a href="https://maps.google.com/?cid=2287634802391190921" target="_blank" rel="noopener noreferrer" style={{fontSize:12,fontFamily:"sans-serif",fontWeight:600,color:"#8B6914",background:"#FDF6E3",border:"1px solid #E8C84A",borderRadius:8,padding:"6px 12px",textDecoration:"none"}}>📍 Google Maps</a>
              <a href="https://royalchampagne.com/en/" target="_blank" rel="noopener noreferrer" style={{fontSize:12,fontFamily:"sans-serif",fontWeight:600,color:"#555",background:"#F4F4F2",border:"1px solid #DDD",borderRadius:8,padding:"6px 12px",textDecoration:"none"}}>🔗 Hotel Website</a>
            </div>
            <div style={{borderTop:"1px solid #F0EDE6",padding:"14px 18px",background:"#FDFCFA"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#8B6914",fontFamily:"sans-serif",marginBottom:8}}>What's There</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:14}}>
                {["🏊 Indoor & outdoor pool","💆 Spa (9 treatment rooms)","🧖 Hammam & sauna","💪 Fitness + yoga","🚲 E-bikes (€50/day)","🍾 Michelin-starred Le Royal","🍳 Le Bellevue (breakfast)","🍸 Abysse bar","📶 Free WiFi","🅿️ Free valet parking"].map((a,i)=>(
                  <span key={i} style={{fontSize:12,fontFamily:"sans-serif",color:"#555",background:"#FDF6E3",border:"1px solid #E8C84A",borderRadius:20,padding:"4px 10px"}}>{a}</span>
                ))}
              </div>
              <div style={{fontSize:12,fontWeight:700,color:"#8B6914",fontFamily:"sans-serif",marginBottom:8}}>Dining on Property</div>
              {[
                ["Le Royal (your reservation)","Michelin-starred. Chef Christophe Raoux, Meilleur Ouvrier de France. Dinner Tue–Sat, 7–9 PM.","#2E7D32"],
                ["Le Bellevue","Breakfast daily 7:30–10:30 AM · Lunch noon–1:30 PM · Dinner 7–9 PM. Vineyard views.","#555"],
                ["Abysse Bar","Champagne, cocktails, caviar blinis. Open 11 AM–11:30 PM. The terrace at apéro hour is unmissable.","#555"],
              ].map(([name,desc,col],i)=>(
                <div key={i} style={{marginBottom:i<2?10:0,paddingBottom:i<2?10:0,borderBottom:i<2?"1px dashed #EEE":"none"}}>
                  <div style={{fontSize:13,fontWeight:600,color:col,marginBottom:2}}>{name}</div>
                  <div style={{fontSize:12,color:"#777",fontFamily:"sans-serif",lineHeight:1.5}}>{desc}</div>
                </div>
              ))}
            </div>
            <div style={{borderTop:"1px solid #F0EDE6",padding:"14px 18px"}}>
              <div style={{fontSize:12,fontWeight:700,color:"#8B6914",fontFamily:"sans-serif",marginBottom:6}}>In Your Room</div>
              <div style={{fontSize:13,color:"#555",fontFamily:"sans-serif",lineHeight:1.6}}>47 rooms with vineyard views · Memory foam beds · Minibar · Illy coffee machine · Diptyque bath products · A/C · In-room safe · Free minibar soft drinks</div>
            </div>
            <div style={{borderTop:"1px solid #F0EDE6",padding:"12px 18px",background:"#FFFBF0"}}>
              <div style={{fontSize:12,color:"#7A5C00",fontFamily:"sans-serif",lineHeight:1.6}}><span style={{fontWeight:700}}>★ Tip: </span>Staff welcome guests with Champagne on arrival. Let the hotel know it's a special family trip — they're known for personalized touches.</div>
            </div>
          </div>
        </div>
      )}

      {/* COFFEE */}
      {tab==="coffee"&&(
        <div style={{flex:1,overflowY:"auto",padding:"20px 20px 40px"}}>
          <div style={{fontSize:11,letterSpacing:2,color:"#999",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:4}}>Paris Coffee Guide</div>
          <div style={{fontSize:13,color:"#888",fontFamily:"sans-serif",marginBottom:20,lineHeight:1.5}}>All near your apartment at 16 Rue Charlemagne, 75004</div>
          {[
            {name:"Café Abel",vibe:"Neighborhood classic",desc:"A proper French café for a morning espresso. No fuss, good croissant, local crowd.",distance:"~2 min walk",order:"Espresso or noisette",icon:"☕",mapUrl:mq("Café Abel, Paris 4")},
            {name:"ARTESANO",vibe:"Specialty coffee",desc:"Excellent third-wave coffee in the Marais. Good for pour-over and flat whites.",distance:"~5 min walk",order:"Flat white or filter",icon:"🫘",mapUrl:mq("Artesano café, Paris")},
            {name:"Terres de Café",vibe:"Specialty roaster",desc:"Paris institution for serious coffee lovers. Their own roastery.",distance:"~8 min walk",order:"Single origin espresso",icon:"🫘",mapUrl:"https://maps.app.goo.gl/hjECx7JN3gmSgxyd7"},
            {name:"% Arabica",vibe:"Japanese specialty chain",desc:"Known globally for beautiful lattes and clean, precise coffee.",distance:"~10 min walk",order:"Latte or cortado",icon:"🥛",mapUrl:"https://maps.app.goo.gl/uaJndXcCmULGhCuJA"},
            {name:"CORE Paris",vibe:"Design-forward specialty",desc:"Minimal, beautiful space. Excellent beans. One of the best cups in the Marais.",distance:"~6 min walk",order:"Espresso or cortado",icon:"🫘",mapUrl:mq("CORE Paris café")},
          ].map((c,i)=>(
            <div key={i} style={{background:"white",border:"1px solid #ECEAE4",borderRadius:12,marginBottom:10,overflow:"hidden"}}>
              <div style={{padding:"14px 16px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                  <div>
                    <div style={{fontSize:16,fontWeight:700,color:"#1A1A1A"}}>{c.icon} {c.name}</div>
                    <div style={{fontSize:12,color:"#888",fontFamily:"sans-serif",marginTop:2}}>{c.vibe} · {c.distance}</div>
                  </div>
                  <a href={c.mapUrl} target="_blank" rel="noopener noreferrer" style={{fontSize:11,fontFamily:"sans-serif",fontWeight:600,color:"#1B3A5C",background:"#EEF3FA",border:"1px solid #C5D3E8",borderRadius:8,padding:"4px 9px",textDecoration:"none"}}>📍</a>
                </div>
                <div style={{fontSize:13,color:"#555",fontFamily:"sans-serif",marginTop:8,lineHeight:1.5}}>{c.desc}</div>
              </div>
              <div style={{borderTop:"1px solid #F5F3EE",padding:"8px 16px",background:"#FDFCFA",display:"flex",gap:6}}>
                <span style={{fontSize:11,color:"#5C4B1B",fontFamily:"sans-serif",fontWeight:700}}>ORDER:</span>
                <span style={{fontSize:12,color:"#777",fontFamily:"sans-serif",fontStyle:"italic"}}>{c.order}</span>
              </div>
            </div>
          ))}
          <div style={{background:"#FFF8E7",border:"1px solid #F0D980",borderRadius:10,padding:"14px 16px"}}>
            <div style={{fontSize:13,fontWeight:700,color:"#7A5C00",marginBottom:6,fontFamily:"sans-serif"}}>☕ Quick Paris Coffee Tip</div>
            <div style={{fontSize:13,color:"#6B5500",fontFamily:"sans-serif",lineHeight:1.6}}>Un café = espresso. Un café crème = espresso with steamed milk. Stand at the bar — it's usually cheaper and more fun.</div>
          </div>
        </div>
      )}

      {/* CHAMPAGNE */}
      {tab==="champagne"&&(
        <div style={{flex:1,overflowY:"auto",padding:"20px 20px 40px"}}>
          <div style={{fontSize:11,letterSpacing:2,color:"#8B6914",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:16}}>Producer Shortlist</div>
          {[
            {name:"Pierre Peters",style:"Blanc de Blancs",notes:"Grand Cru Mesnil-sur-Oger. Laser-precise, mineral, age-worthy.",priority:false},
            {name:"Larmandier-Bernier",style:"Zero-dosage / Single vineyard",notes:"Ask for this specifically on the Sparkling Tours day. Pure expression of Côte des Blancs.",priority:true},
            {name:"Bérêche",style:"Complex blends",notes:"Ask for this on tour. Réserve and Reflet d'Antan are serious bottles.",priority:true},
            {name:"Agrapart",style:"Blanc de Blancs",notes:"Terroir-driven and biodynamic. Look for 7 Crus or Mineral.",priority:false},
            {name:"Vilmart",style:"Blanc de Noirs / Blends",notes:"Rich, barrel-influenced style. Grand Cellier is their calling card.",priority:false},
            {name:"Ulysse Collin",style:"Single vineyard",notes:"Extremely rare. If you see it at La Cave du Forum, buy it.",priority:false},
            {name:"Jacques Selosse",style:"Cult / oxidative",notes:"The most famous grower. Expect €150+. Substance or Initial if available.",priority:false},
            {name:"Gaston Chiquet",style:"Classic blend / BdB",notes:"Underrated and affordable. Blanc de Blancs d'Aÿ is a great carry-on bottle.",priority:false},
          ].map((p,i)=>(
            <div key={i} style={{background:p.priority?"#FFFBF0":"white",border:`1px solid ${p.priority?"#E8C84A":"#ECEAE4"}`,borderLeft:`4px solid ${p.priority?"#C9A84C":"#D0C9B8"}`,borderRadius:"0 10px 10px 0",marginBottom:10,padding:"12px 14px"}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
                <div style={{fontSize:15,fontWeight:700,color:"#1A1A1A"}}>{p.name}</div>
                {p.priority&&<span style={{fontSize:10,background:"#C9A84C",color:"white",padding:"2px 7px",borderRadius:10,fontFamily:"sans-serif",fontWeight:700}}>ASK FOR ON TOUR</span>}
              </div>
              <div style={{fontSize:12,color:"#8B6914",fontFamily:"sans-serif",marginBottom:4,fontWeight:600}}>{p.style}</div>
              <div style={{fontSize:12,color:"#666",fontFamily:"sans-serif",lineHeight:1.5}}>{p.notes}</div>
            </div>
          ))}
          <div style={{background:"#F0F4FA",border:"1px solid #C5D3E8",borderRadius:10,padding:"14px 16px",marginTop:24,marginBottom:16}}>
            <div style={{fontSize:13,fontWeight:700,color:"#1B3A5C",marginBottom:10,fontFamily:"sans-serif"}}>🍾 Quick Champagne Glossary</div>
            {[
              ["BdB","Blanc de Blancs — 100% Chardonnay, usually from the Côte des Blancs"],
              ["BdN","Blanc de Noirs — white wine made from Pinot Noir and/or Meunier"],
              ["RM","Récoltant-Manipulant — grower who makes their own wine (the good stuff)"],
              ["NM","Négociant-Manipulant — buys grapes to make wine (large houses like Moët, Veuve)"],
              ["Extra Brut","Very dry (0–6g/L sugar) — most grower wines"],
              ["Brut","The standard style (6–12g/L sugar)"],
              ["Disgorgement","Date the wine was finished — older = more developed flavor"],
            ].map(([term,def],i)=>(
              <div key={i} style={{marginBottom:i<6?8:0}}>
                <span style={{fontSize:12,fontWeight:700,color:"#1B3A5C",fontFamily:"sans-serif"}}>{term}: </span>
                <span style={{fontSize:12,color:"#555",fontFamily:"sans-serif"}}>{def}</span>
              </div>
            ))}
          </div>
          <div style={{paddingTop:8,borderTop:"2px solid #C9A84C"}}>
            <div style={{fontSize:11,letterSpacing:2,color:"#8B6914",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:16}}>Buying Worksheet</div>
            {[1,2,3,4].map(n=>(
              <div key={n} style={{background:"white",border:"1px solid #ECEAE4",borderRadius:10,marginBottom:12,overflow:"hidden"}}>
                <div style={{background:"#F9F5ED",padding:"8px 14px",borderBottom:"1px solid #EDE8DA",display:"flex",justifyContent:"space-between"}}>
                  <span style={{fontSize:13,fontWeight:700,color:"#8B6914",fontFamily:"sans-serif"}}>Bottle {n}</span>
                  <span style={{fontSize:11,color:"#BBB",fontFamily:"sans-serif"}}>fill in during tasting</span>
                </div>
                <div style={{padding:"12px 14px"}}>
                  {[["Producer","_______________"],["Cuvée","_______________"],["Style","BdB · BdN · Blend · Rosé"],["Dosage","Extra Brut · Brut · Demi-Sec"],["Price","€ _______"]].map(([label,placeholder],j)=>(
                    <div key={j} style={{display:"flex",justifyContent:"space-between",paddingBottom:6,marginBottom:6,borderBottom:j<4?"1px dashed #EEE":"none"}}>
                      <span style={{fontSize:12,color:"#555",fontFamily:"sans-serif",fontWeight:600}}>{label}</span>
                      <span style={{fontSize:12,color:"#CCC",fontFamily:"sans-serif",fontStyle:"italic"}}>{placeholder}</span>
                    </div>
                  ))}
                  <div style={{marginTop:10,display:"flex",gap:8}}>
                    {["□ Buy 1","□ Buy 2","□ Pass"].map(opt=>(
                      <span key={opt} style={{fontSize:12,padding:"4px 10px",border:"1px solid #DDD",borderRadius:6,color:"#888",fontFamily:"sans-serif"}}>{opt}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MAP */}
      {tab==="map"&&<MapTab />}

      {/* ESSENTIALS */}
      {tab==="essentials"&&(
        <div style={{flex:1,overflowY:"auto",padding:"20px 20px 40px"}}>
          <div style={{fontSize:11,letterSpacing:2,color:"#1B3A5C",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:12,paddingBottom:6,borderBottom:"2px solid #1B3A5C"}}>🗺️ Getting Around</div>
          {[
            {title:"🚇 Paris Métro",bg:"#1B3A5C",color:"#1B3A5C",items:[["Your station","Saint-Paul — Line 1 (yellow), 3–5 min walk from apartment","https://maps.app.goo.gl/zNX5CDPH2KfbE1Rp9"],["Tickets","Buy a carnet (10-pack) or use contactless bank card — tap directly on the turnstile"],["Key line","Line 1 runs east–west: Marais → Louvre → Champs-Élysées → Arc de Triomphe"],["Montmartre","Line 12 to Abbesses, or Line 2 to Anvers — both walkable to Sacré-Cœur"],["App to use","Google Maps works perfectly for Paris Metro routing — set Transit mode"]]},
            {title:"🚖 Taxis & Rideshare",bg:"#2C5282",color:"#2C5282",items:[["Uber","Works exactly like home. Usually faster to find than a taxi at night."],["G7 Taxi","Paris's most reliable taxi company. App: G7 Taxi. Or flag one on the street."],["To/from CDG","Flat rate €50–55 from central Paris. RER B train ~€11 but not great with luggage."],["Tip","For 4 people with bags, a taxi or UberXL will be far easier than the Metro."]]},
            {title:"🚗 Driving to Champagne",bg:"#8B6914",color:"#8B6914",items:[["Route","A4 autoroute east from Paris toward Reims. Exit for Épernay (~1h 20 min)."],["Toll","~€12–15 each way on A4. Keep euro coins or a credit card for toll booths."],["Parking","Free valet parking at Royal Champagne. No charge."],["Return","Drive A4 west back to Paris CDG (~1h 10 min from hotel). Return rental at CDG."]]},
          ].map(({title,bg,color,items},si)=>(
            <div key={si} style={{background:"white",border:"1px solid #ECEAE4",borderRadius:12,marginBottom:12,overflow:"hidden"}}>
              <div style={{background:bg,padding:"10px 16px"}}><div style={{fontSize:14,fontWeight:700,color:"white"}}>{title}</div></div>
              <div style={{padding:"14px 16px"}}>
                {items.map(([label,value,url],i,arr)=>(
                  <div key={i} style={{display:"flex",flexDirection:"column",paddingBottom:10,marginBottom:10,borderBottom:i<arr.length-1?"1px dashed #EEE":"none"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
                      <div style={{fontSize:11,fontWeight:700,color,fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:0.5}}>{label}</div>
                      {url&&<a href={url} target="_blank" rel="noopener noreferrer" style={{fontSize:11,fontFamily:"sans-serif",fontWeight:600,color:"#1B3A5C",background:"#EEF3FA",border:"1px solid #C5D3E8",borderRadius:8,padding:"2px 8px",textDecoration:"none",flexShrink:0}}>📍 Maps</a>}
                    </div>
                    <div style={{fontSize:13,color:"#555",fontFamily:"sans-serif",lineHeight:1.5}}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{fontSize:11,letterSpacing:2,color:"#C0392B",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:12,paddingBottom:6,borderBottom:"2px solid #C0392B"}}>🚨 Emergency Numbers</div>
          <div style={{background:"white",border:"1px solid #ECEAE4",borderRadius:12,marginBottom:12,overflow:"hidden"}}>
            <div style={{background:"#C0392B",padding:"10px 16px"}}><div style={{fontSize:14,fontWeight:700,color:"white"}}>Emergency Services — France</div></div>
            <div style={{padding:"8px 0"}}>
              {[["🚑 SAMU (Medical)","15"],["🚒 Fire Brigade","18"],["🚓 Police","17"],["🇪🇺 European Emergency","112"],["🏥 Nearest ER to Apartment","Hôtel-Dieu · 1 Parvis Notre-Dame · 4th arr."],["🏥 Hospital in Champagne","Centre Hospitalier d'Épernay · +33 3 26 58 70 70"]].map(([label,value],i,arr)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px",borderBottom:i<arr.length-1?"1px solid #F5F5F5":"none",background:i%2===0?"white":"#FAFAFA"}}>
                  <div style={{fontSize:13,color:"#333",fontFamily:"sans-serif"}}>{label}</div>
                  <div style={{fontSize:i<4?14:12,fontWeight:700,color:"#C0392B",fontFamily:"sans-serif",textAlign:"right",maxWidth:160}}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:"white",border:"1px solid #ECEAE4",borderRadius:12,marginBottom:12,overflow:"hidden"}}>
            <div style={{background:"#1B3A5C",padding:"10px 16px"}}><div style={{fontSize:14,fontWeight:700,color:"white"}}>🇺🇸 US Embassy Paris</div></div>
            <div style={{padding:"14px 16px"}}>
              {[["Address","2 Avenue Gabriel, 75008 Paris (near Place de la Concorde)"],["Emergency line","+1 202-501-4444 (24/7 for US citizens)"],["Local phone","+33 1 43 12 22 22"]].map(([label,value],i,arr)=>(
                <div key={i} style={{display:"flex",flexDirection:"column",paddingBottom:8,marginBottom:8,borderBottom:i<arr.length-1?"1px dashed #EEE":"none"}}>
                  <div style={{fontSize:11,fontWeight:700,color:"#1B3A5C",fontFamily:"sans-serif",textTransform:"uppercase",letterSpacing:0.5,marginBottom:2}}>{label}</div>
                  <div style={{fontSize:13,color:"#555",fontFamily:"sans-serif"}}>{value}</div>
                </div>
              ))}
            </div>
            <div style={{padding:"0 16px 14px"}}>
              <a href="https://maps.google.com/?q=2+Avenue+Gabriel+75008+Paris" target="_blank" rel="noopener noreferrer" style={{fontSize:12,fontFamily:"sans-serif",fontWeight:600,color:"#1B3A5C",background:"#EEF3FA",border:"1px solid #C5D3E8",borderRadius:8,padding:"6px 12px",textDecoration:"none"}}>📍 Google Maps</a>
            </div>
          </div>
          <div style={{background:"white",border:"1px solid #ECEAE4",borderRadius:12,marginBottom:12,overflow:"hidden"}}>
            <div style={{background:"#444",padding:"10px 16px"}}><div style={{fontSize:14,fontWeight:700,color:"white"}}>📞 Useful Contacts</div></div>
            <div style={{padding:"8px 0"}}>
              {[["Royal Champagne Hotel","+33 3 26 52 87 11"],["G7 Taxi Paris","+33 1 47 39 47 39"],["SNCF Rail (train info)","+33 9 70 60 99 70"],["Lost card — Visa Global","+1 800-847-2911"],["Lost card — Mastercard","+1 800-627-8372"]].map(([label,value],i,arr)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px",borderBottom:i<arr.length-1?"1px solid #F5F5F5":"none",background:i%2===0?"white":"#FAFAFA"}}>
                  <div style={{fontSize:13,color:"#333",fontFamily:"sans-serif"}}>{label}</div>
                  <div style={{fontSize:13,fontWeight:600,color:"#444",fontFamily:"sans-serif"}}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{background:"#FFF8F0",border:"1px solid #FFCC80",borderRadius:10,padding:"14px 16px",marginBottom:24}}>
            <div style={{fontSize:12,fontWeight:700,color:"#E65100",fontFamily:"sans-serif",marginBottom:6}}>💊 Health & Pharmacy</div>
            <div style={{fontSize:13,color:"#6D3B00",fontFamily:"sans-serif",lineHeight:1.6}}>French pharmacies (green cross ✚) are excellent for minor ailments — pharmacists can prescribe basic treatments. Several near your apartment in the Marais. Bring prescription medications in original labeled bottles.</div>
          </div>

          <div style={{fontSize:11,letterSpacing:2,color:"#1B3A5C",fontFamily:"sans-serif",fontWeight:700,textTransform:"uppercase",marginBottom:12,paddingBottom:6,borderBottom:"2px solid #1B3A5C"}}>🌤️ Weather</div>
          <div style={{background:"white",border:"1px solid #ECEAE4",borderRadius:12,marginBottom:12,overflow:"hidden"}}>
            <div style={{padding:"14px 16px"}}>
              <div style={{fontSize:13,fontWeight:700,color:"#1B3A5C",marginBottom:10,fontFamily:"sans-serif"}}>Early March in Paris & Champagne</div>
              <div style={{display:"flex",gap:10,marginBottom:14}}>
                {[["🌡️","4–11°C","39–52°F"],["🌧️","Frequent","light rain"],["☀️","Occasional","sunny spells"]].map(([icon,top,bot],i)=>(
                  <div key={i} style={{flex:1,background:"#F0F4FA",borderRadius:10,padding:"10px 8px",textAlign:"center"}}>
                    <div style={{fontSize:20}}>{icon}</div>
                    <div style={{fontSize:13,fontWeight:700,color:"#1B3A5C",fontFamily:"sans-serif"}}>{top}</div>
                    <div style={{fontSize:11,color:"#888",fontFamily:"sans-serif"}}>{bot}</div>
                  </div>
                ))}
              </div>
              <div style={{fontSize:13,color:"#555",fontFamily:"sans-serif",lineHeight:1.6}}>Paris in early March is cool and often overcast — not freezing, but you'll want a proper coat every day. Champagne will feel a few degrees colder and windier, especially out in the vineyards. Pack layers.</div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM BAR */}
      <div style={{background:"#1B3A5C",padding:"10px 20px",textAlign:"center",fontSize:11,color:"rgba(255,255,255,0.4)",fontFamily:"sans-serif",letterSpacing:0.5}}>
        Tap any event for details & 📍 Maps · Bon voyage! 🥂
      </div>
    </div>
  );
}
