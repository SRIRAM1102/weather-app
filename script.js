let body=document.body;
body.style.backgroundColor="#22404b";
let row=document.createElement("div");
row.setAttribute("class","row");
let data=fetch("https://restcountries.com/v3.1/all");
data.then((response)=> response.json())
.then(result=>
    {
        result.forEach((item)=> {
            let name=item.name.common;
            let capital=item.capital;
            let region=item.region;
            let latlng=item.latlng.join(",");
            let flag=item.flags.png;
            let population=item.population;
            let col=document.createElement("div");
            col.classList.add("col-lg-4","col-sm-12","col-12","col-md-4");
            let card=document.createElement("div");
            card.setAttribute("class","card");
            let cardheader=document.createElement("div");
            cardheader.setAttribute("class","card-header");
            cardheader.innerText=name;
            cardheader.style.backgroundColor="black";
            cardheader.style.color="white";
            let cardbody=document.createElement("div");
            cardbody.setAttribute("class","card-body");      
            let flagdiv=document.createElement("img");
            flagdiv.setAttribute("src",flag); 
            let capitaldiv=document.createElement("div");
            capitaldiv.setAttribute("class","capital-div")
            capitaldiv.innerText="Capital: "+capital; 
            let regiondiv=document.createElement("div");
            regiondiv.setAttribute("class","region-div")
            regiondiv.innerText="Region: "+region; 
            let countrycodediv=document.createElement("div");
            countrycodediv.setAttribute("class","countrycode-div");
            countrycodediv.innerText="population: "+population; 
            let buttondiv=document.createElement("button");
            buttondiv.setAttribute("id",latlng);
            buttondiv.classList.add("btn","btn-primary","button-div");
            buttondiv.innerText="Click for Weather";
            buttondiv.addEventListener("click",function()
            {
                displayTemp(latlng);
            });
            cardbody.append(flagdiv,capitaldiv,regiondiv,countrycodediv,buttondiv);
            card.append(cardheader,cardbody);
            col.appendChild(card);
            row.appendChild(col);
        })
    });
body.appendChild(row);
function displayTemp(latlng)
{
    let lat=latlng.split(",")[0];
    let lng=latlng.split(",")[1];
    let apikey="7a4fd6060613a0904a2e615f34975075 ";
    let data1=fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&exclude=alert&appid="+apikey);
    data1.then((response)=> response.json())
    .then(result=>alert("The temperature here is "+result.main.temp));
}  
  