
var sites = [
    {
        "name": "ahmed"
        ,
        "imgSrc":""
        ,
        "example":""
     }
    ,
    {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }
     ,
     {
        "name": ""
        ,
        "imgSrc":""
        ,
        "example":""
     }

]

console.log(ahmed[0]);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
function GenrateRandomSite()
{
    
        
    var rand = getRandomInt(0,sites.length);


    document.getElementById("site").innerHTML = sites[rand].name;
    document.getElementById("sitea").href=sites[rand].example; 
    document.getElementById("siteimg").src=sites[rand].imgSrc;
}
