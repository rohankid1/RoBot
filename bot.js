const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "r?";
var moderators = ["354673986539487236","426459856975691776"];

//This will be ran when the bot is started.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: prefix+"help", type: 0 } });
});

//This will be ran when someone send a message in one of the servers in which the bot is in.
client.on('message', msg => {
if(msg.content.includes(prefix)&&!msg.author.bot){
try{

	if(msg.content.split(' ')[0].toLowerCase()==prefix+"exec"){
		var text = msg.content.replace(msg.content.split(' ')[0]+" ","");
		if(moderators.includes(msg.author.id)){
			eval(text);
		}
		else{
			send("Unauthorized user", msg.channel);
		}
	}
	
	//This will be ran when someone sends "r?ping".
	if(msg.content.split(' ')[0].toLowerCase()==prefix+"ping"){
		send("pong", msg.channel);
	}
	
	//This will be ran when someone sends "r?say <text>".
	if(msg.content.split(' ')[0].toLowerCase()==prefix+"say"){
		var text = msg.content.replace(msg.content.split(' ')[0]+" ","");
		send(text, msg.channel);
	}
	
	//This will be ran when someone says "r?help".
	if(msg.content.split(' ')[0].toLowerCase()==prefix+"help"){
		send("Available Commands:\n> `r?help`\n > `r?say <text>`\n > `r?ping`\n > `r?boomer`\n > `r?zoomer` \n > `r?date` .\nSpecial Special Thanks to MC41Games who made this bot. Subscribe to MC41Games on YT!", msg.channel);
	}
	
	//This will be ran when someone says "r?boomer".
	if(msg.content.split(' ')[0].toLowerCase()==prefix+"boomer"){
		send("Ok zoomer", msg.channel);
	}
	
	//This will be ran when someone says "r?zoomer".
	if(msg.content.split(' ')[0].toLowerCase()==prefix+"zoomer"){
	send("Ok Boomer", msg.channel);
	}
	
	//This will be ran when someone says "r?date".
	if(msg.content.split(' ')[0].toLowerCase()==prefix+"date"){
	   var d = new Date();
	   var minutes = d.getMinutes();
	   var seconds = d.getSeconds();
	   var hours = d.getHours();
	   var day = d.getDate();
		send("The time is: " + seconds + " seconds, " + minutes + " minutes and " + hours + " hours; " + d, msg.channel);
	   }
	
}
catch(err){
send("An error happened:\n"+err.message,msg.channel);
}
}
});

function send(mes,ch){
	setTimeout(function(){ 
		ch.send(mes.replace(/@everyone/g,"**@every1**").replace(/@here/g,"**@h3r3**"));
	}, 50);
}

client.login(process.env.BOT_TOKEN);
