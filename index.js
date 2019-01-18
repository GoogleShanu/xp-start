// Discord.js bot
const Discord = require('discord.js');

const client = new Discord.Client();
const responseObject = require("./rep.json");
const activities_list = [
    "with Karma🔥| ❄Yukimura",
    "with my friends here",
    "With My SkyLine",
    "with My Frosty",
    "with Errors of my life",
    "With My Lil PuP",
    "With My Kyoko",
    "With My Patrol"
	
    ]; // creates an arraylist containing phrases you want your bot to switch through.

 client.on('ready', () => {
   setInterval(() => {
       const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 20000); // Runs this every 10 seconds.
 // client.user.setActivity("Chill Vibes |Kyoko - Cold Life"{
    // type: "LISTENING",
    // url: "https://www.spotify.com" 
// )};
  // client.user.setGame('Chill Vibes |✔️Marin Hoxha x Annie Sollange - Falling For You [Lyrics]' , 'https://youtu.be/RfIx0GPKZZQ'); // https://www.twitch.tv/blitzifyyy
		       // client.user.setGame('Chill Vibes | ✔️Subscribe Now', 'https://www.youtube.com/channel/UCXO_N-qdU9F4SqI8J4s_43Q')
});


client.on("message", (message) => {
    	
     if (message.author.id !== '400359111834861568') { 
		return;
	 } 
		
	   if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  } 
	    if (message.content === "xp Boost") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
          message.channel.send("boosting XP!!")
           .catch(console.error); // add error handling here
       }, 1 * 2000); 
   }
		
    
  if(message.content === "hug me kurumi") {
    message.channel.send("*hugs you*");
  }
});
 
client.login(process.env.TOKEN);
