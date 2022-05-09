const fs=require("fs");
const jsdom=require("jsdom");
const request=require("request")
const{JSDOM}=jsdom;
const xlsx = require("json-as-xlsx")
const link="https://www.thespike.gg/events/results/apac-challengers/1425";
request(link,cb);

let T1_Players = [];

let T2_Players = [];
function cb(error,response,html){
if(error){
    console.log(error);
}else{
    const dom=new JSDOM(html);
    const document= dom.window.document;
    let scoreCard=document.querySelectorAll('.single-match.main-colour-background a');
    for(let i=0;i<scoreCard.length;i++){
        let link=scoreCard[i].href;
        let link2= "https://www.thespike.gg/"+link;
        request(link2,cb2);        
    }
    }
function cb2(error,response,html){
if(error){
  console.log(error);
}else{
  const dom=new JSDOM(html);
  const document= dom.window.document;
  let t1=document.querySelectorAll('.match-stats #allMapsTotalTeamOne .table-body >div.single-row.main-area-default');
  let n=0,r=2,k=4,K=6,h=9;
  for(let i=0;i<t1.length;i++){
    let divT1name=document.querySelectorAll("body > div.main-site-content > div.wrapper > div.site-content > div.match-stats > div.map-wrapper.all_maps > div.stat-wrap.overview-wrapper.all_maps > div:nth-child(1) > div.team-stats-header.main-area-default > div > div.name");    let div=document.querySelectorAll('.match-stats #allMapsTotalTeamOne .table-body >div.single-row.main-area-default> div ');
    let name=div[n].textContent; 
    let T1name=divT1name[0].textContent;
   let rating=div[r].textContent;  // 3//rating
   let KdA=div[k].textContent;// 5//K|D|A
   let K_D=div[K].textContent;  // 7//K/D
   let HSp=div[h].textContent;  // 10//HS%
  //  console.log(T1name);
n+=13;
r+=13;
k+=13;
K+=13;
h+=13;
processPlayerT1(T1name,name,rating,KdA,K_D,HSp);
  }

  let t2=document.querySelectorAll('.match-stats #allMapsTotalTeamTwo .table-body >div.single-row.main-area-default');//.match-stats #allMapsTotalTeamTwo .table-body >div.single-row.main-area-default> div 
  let n1=0,r1=2,k1=4,K1=6,h1=9;
  for(let i=0;i<t2.length;i++){
    let divT2name=document.querySelectorAll("body > div.main-site-content > div.wrapper > div.site-content > div.match-stats > div.map-wrapper.all_maps > div.stat-wrap.overview-wrapper.all_maps > div:nth-child(2) > div.team-stats-header.main-area-default > div > div.name");
    let div=document.querySelectorAll('.match-stats #allMapsTotalTeamTwo .table-body >div.single-row.main-area-default> div ');
    // console.log(T2name);
    let T2name=divT2name[0].textContent;
    let name1=div[n1].textContent; 
   let rating1=div[r1].textContent;  // 3//rating
   let KdA1=div[k1].textContent;// 5//K|D|A
   let K_D1=div[K1].textContent;  // 7//K/D
   let HSp1=div[h1].textContent;  // 10//HS%
n1+=13;
r1+=13;
k1+=13;
K1+=13;
h1+=13;
processPlayerT2(T2name,name1,rating1,KdA1,K_D1,HSp1);
}    
}
// console.log("Team One");
//     console.log(T1_Players);
//     console.log("Team Two");
//     console.log(T2_Players);
let dataEXcel = [
  {
    sheet: "Team_One",

    columns: [
      { label: "TEAM", value: "Team"  }, 
      { label: "Name", value: "Name" }, // Top level data
      { label: "Rating", value:"Rating"  }, // Custom format
      { label: "K|D|A", value:"KdA"  }, // Run functions
      { label: "K/D", value:"KD" },
      { label: "HS%", value:"HS"  },
    ],
    content: T1_Players ,
  },
  {
    sheet: "Team_Two",
    columns: [
      { label: "TEAM", value: "Team" }, 
      { label: "Name", value: "Name" }, // Top level data
      { label: "Rating", value:"Rating"  }, // Custom format
      { label: "K|D|A", value:"KdA"  }, // Run functions
      { label: "K/D", value:"KD" },
      { label: "HS%", value:"HS"  },
    ],
    content:T2_Players,
  },
]

let settings = {
  fileName: "APEC_Challegers", // Name of the resulting spreadsheet
  extraLength: 3, // A bigger number means that columns will be wider
  writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
}

xlsx(dataEXcel, settings) // Will download the excel file

}
function processPlayerT1(T1name,name,rating,KdA,K_D,HSp){
         rating=Number(rating);
         KdA=KdA;
         K_D=Number(K_D);
         HSp=HSp;
    //     for(let i=0;i<T1_Players.length;i++){
    //       let playerObj=T1_Players[i];
    //       if (playerObj.Name == name) {
    //         playerObj.Rating==rating;
    //         playerObj.KdA==KdA;
    //         playerObj.KD== K_D;
    //         playerObj.HS==HSp;
    //         playerObj.T1_name=T1name;
    //         return;
    //     }
    // }

          let obj = {
            Team:T1name,
            Name: name,
            Rating: rating,
            KdA: KdA,
            KD:K_D ,
            HS:HSp,
            
        }
   
    T1_Players.push(obj);

}

function processPlayerT2(T2name,name1,rating1,KdA1,K_D1,HSp1){

  rating1=Number(rating1);
  KdA1=KdA1;
  K_D1=Number(K_D1);
  HSp1=HSp1;
//  for(let i=0;i<T2_Players.length;i++){
//    let playerObj=T2_Players[i];
//    if (playerObj.Name1 == name1) {
//      playerObj.Rating1==rating1;
//      playerObj.KdA1==KdA1;
//      playerObj.KD1== K_D1;
//      playerObj.HS1==HSp1;
//      playerObj.T2_name=T2name;
//      return;
//  }

   let obj = {
     Team:T2name,
     Name: name1,
     Rating: rating1,
     KdA: KdA1,
     KD:K_D1 ,
     HS:HSp1,
 }
 T2_Players.push(obj);



}
        }

