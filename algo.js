
var sites = [
    {
        "name": "  Hospital Website"
        ,
        "imgSrc":"hospital1.jpg"
        ,
        "example":"https://www.jbl.de/en/online-hospital?country=bg"
        ,
        "color" : "rgba(100, 105, 151,0.8)"
     }
    ,
    {
        "name": "  Gym Website"
        ,
        "imgSrc":"gym1.jpg"
        ,
        "example":"https://www.smart-gym.com/"
        ,
        "color":"rgba(71, 39, 88,0.8)"
     }
     ,
     {
        "name": "  Online shop Website"
        ,
        "imgSrc":"online-shop1.jpg"
        ,
        "example":"https://www.ubuy.com.eg/en/"
        ,
        "color":"rgba(5, 55, 147,0.7)"
     }
     ,
     {
         "name": "  University Website"
         ,
         "imgSrc":"school1.jpg"
         ,
         "example":"https://www.harvard.edu/"
         ,
         "color":"rgba(5, 56, 147,0.7)"
     }
     ,
     {
         "name": "  Order Coffe Website"
         ,
         "imgSrc":"coffe.jpg"
        ,
        "example":"https://www.drivencoffee.com/"
        ,
        "color":"rgba(250, 222, 198,0.7)"
     }
     ,
     {
         "name": "  Banking Website"
         ,
         "imgSrc":"banking.jpg"
        ,
        "example":"https://www.nbe.com.eg/NBE/E/#/EN/Home"
        ,
        "color":"rgba(92, 62, 171,0.7)"
     }
     ,
     {
         "name": "  Booking Travil Website"
         ,
         "imgSrc":"booking.jpg"
        ,
        "example":"https://ar.trivago.com/en?sLanguageLocale=UK"
        ,
        "color":"rgba(138, 1, 147,0.7)"
     }
     
     

]


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
function GenrateRandomSite()
{
    
  
      
   
    var rand = getRandomInt(0,sites.length);

    
    document.getElementById("siteimg").src= "giphy.gif";
    document.getElementById("site").innerHTML = "Random site";

      
    setTimeout(() => {
        document.getElementById('randomContainer').style.backgroundColor = sites[rand].color ; 
    document.getElementById("site").innerHTML = sites[rand].name;
    document.getElementById("sitea").href=sites[rand].example; 
    document.getElementById("siteimg").src=sites[rand].imgSrc;
   }, 2000);
}
