
var sites = [
    {
        "name": "Front_end of Hospital Website"
        ,
        "imgSrc":"hospital1.jpg"
        ,
        "example":"https://www.jbl.de/en/online-hospital?country=bg"
     }
    ,
    {
        "name": "Front_end of Gym Website"
        ,
        "imgSrc":"gym1.jpg"
        ,
        "example":"https://www.smart-gym.com/"
     }
     ,
     {
        "name": "Front_end of Online_shop Website"
        ,
        "imgSrc":"online-shop1.jpg"
        ,
        "example":"https://www.ubuy.com.eg/en/"
     }
     ,
     {
         "name": "Front_end of University Website"
         ,
         "imgSrc":"school1.jpg"
         ,
         "example":"https://www.harvard.edu/"
     }
     ,
     {
         "name": "Front_end of Order_Coffe Website"
         ,
         "imgSrc":"coffe.jpg"
        ,
        "example":"https://www.drivencoffee.com/"
     }
     ,
     {
         "name": "Front_end of Banking Website"
         ,
         "imgSrc":"banking.jpg"
        ,
        "example":"https://www.nbe.com.eg/NBE/E/#/EN/Home"
     }
     ,
     {
         "name": "Front_end of Booking_Travil Website"
         ,
         "imgSrc":"booking.jpg"
        ,
        "example":"https://ar.trivago.com/en?sLanguageLocale=UK"
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
      
    setTimeout(() => {
    document.getElementById("site").innerHTML = sites[rand].name;
    document.getElementById("sitea").href=sites[rand].example; 
    document.getElementById("siteimg").src=sites[rand].imgSrc;
   }, 2000);
}
