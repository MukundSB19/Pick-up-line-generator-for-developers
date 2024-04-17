function recommendlines (){
 
    let type =document.getElementById("input").value
;

let pickuplines1;

if (type === "Full stack Developer"){
    pickuplines1 = "Are you a bug in my code? Because I just can’t stop thinking about you" 
    pickuplines2 = "Are you a CSS file? Because without you, my life would be unstyled'" ;
} else if (type === "FrontEnd Developer"){
    pickuplines1 = "Are you a div? Because you're the #container to my heart" 
    pickuplines2 = "Are you a CSS animation? Because whenever I see you, my heart beats faster" ;
} else if (type === "BackEnd Developer"){
    pickuplines1 = "Are you a server? Because my heart sends a request to you and your presence sends back a 200 OK response"
    pickuplines2 = "Are you a Python script? Because I can’t resist your charm";
} else if (type === "AI/ML Developer"){
    pickuplines1 = "Are you a decision tree? Because I’m falling for you leaf, root, and branch"
    pickuplines2 = "Are you a neural network? Because you’ve got deep learning and I’ve got deep feelings";
} else if (type === "BlockChain Developer"){
    pickuplines1 = "Are you a blockchain? Because I’m feeling a strong connection that’s hard to break"
    pickuplines2 = "Are you a cryptocurrency? Because my interest in you just keeps growing";
} else if (type === "App Developer"){
    pickuplines1 = "Are you a push notification? Because you’ve got my attention"
    pickuplines2 = "Are you a bug fix? Because you just made my heart stop crashing";
} else if (type === "Data scientist"){
    pickuplines1 = "Are you a data set? Because I want to take you home and analyze you"
    pickuplines2 = "“Are you a scatter plot? Because I can see a positive correlation between us";
} else if (type === "Game Developer"){
    pickuplines1 = "Are you a game engine? Because my heart races every time I see you"
    pickuplines2 = "Are you a game bug? Because I can’t get you out of my system";
} else if (type === "Security Developer"){
    pickuplines1 = "Are you an encryption algorithm? Because you’ve encoded love in my heart"
    pickuplines2 = "Are you a two-factor authentication? Because my heart is asking for your verification";
} else if (type === "AR/VR Developer"){
    pickuplines1 = "Are you a virtual reality headset? Because when I’m with you, I’m in a different world"
    pickuplines2 = "Are you a mixed reality experience? Because with you, I can’t tell where reality ends and fantasy begins";
} else {
    pickuplines1 = "You're not an developer or just write again and if it still not showing "
    pickuplines2 = "Get the fuck out of here 🖕🏻 ";
}
document.getElementById ("pickuplines1").innerText = pickuplines1;
document.getElementById ("pickuplines2").innerText = pickuplines2;

}