// Discord.js bot
const Discord = require('discord.js');

const client = new Discord.Client();
const responseObject = require("./rep.json");
const activities_list = [
    "with My Broken 💔",
    "With Tomato🍅 Sauce ",
    "with my friends here",
    "With My Taumatheu🍅",
    "with My Frosty",
    "with My Rotten Taumatheu🍅",
    "With My Lil PuP",
    "With My Narancia"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 20000); // Runs this every 10 seconds.
});

client.on("message", (message) => {
    	
     if (message.author.id !== '400359111834861568') { 
		return;
	 } 
		
	   if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
		
    
  if(message.content === "hug me kurumi") {
    message.channel.send("*hugs you*");
  }
});
 
client.login(process.env.TOKEN);
