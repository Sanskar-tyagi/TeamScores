const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.icccricketschedule.com/ipl-2022-schedule-team-venue-time-table-pdf-point-table-ranking-winning-prediction/";

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document =  dom.window.document;
        let mostWicket = 0;
        let nameOfHighestWicketTacker = "";
        let bowlersTable = document.querySelectorAll(".table-responsive.wprt_style_display");
        for(let i=0;i<bowlersTable.length;i++){
            let rows = bowlersTable[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length;j++){
                let tds = rows[j].querySelectorAll("td");
                // if(tds.length>1){
                    let name = tds[1].textContent;
                    let wicket = tds[3].textContent;
                  console.log(name,wicket);
                  console.log("Name of Highest Wicket Taker : ",name);
                  console.log("Number of Wickets Taken      : ",wicket)
            }
        }
   
}
}