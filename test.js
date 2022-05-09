const fs=require("fs");
const jsdom=require("jsdom");
const request=require("request")
const{JSDOM}=jsdom;

request("https://www.thespike.gg/match/Bleed-eSports-xerxia/61155",cb2);
request("https://www.thespike.gg/match/Paper-Rex-xerxia/61147",cb2);
request("https://www.thespike.gg/match/Paper-Rex-bleed-esports/61148",cb2);

let T2_Players = [];
function cb2(error,response,html){
if(error){
  console.log(error);
}else{
  const dom=new JSDOM(html);
  const document= dom.window.document;
  

  function cb2(error,response,html){
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
console.log(T2_Players)
var Highrating=0;
  function processPlayerT2(T2name,name1,rating1,KdA1,K_D1,HSp1){

    rating1=Number(rating1);
    KdA1=KdA1;
    K_D1=Number(K_D1);
    HSp1=HSp1;
   for(let i=0;i<T2_Players.length;i++){
     let playerObj=T2_Players[i];
     if (playerObj.Name == name1) {
      if( Highrating <rating1){
       Highrating==rating1;
      } if(  playerObj.KdA1<KdA1){
        playerObj.KdA1==KdA1
      } if( playerObj.KD1< K_D1){
        playerObj.KD1== K_D1
     } if(  playerObj.HS1<HSp1){
      playerObj.HS1==HSp1
     }
     return;
    }
      
      
   }
  
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
         
}
}
// console.log("Team One");
//     console.log(T1_Players);
//     console.log("Team Two");



