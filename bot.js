const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "r?";

//This will be ran when the bot is started.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ game: { name: prefix+"help", type: 0 } });
});

//This will be ran when someone send a message in one of the servers in which the bot is in.
client.on('message', msg => {
if(msg.content.includes(prefix)){
	
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
		send("Right Now the current commands are: r?help, r?say <text> and r?ping", msg.channel);
	}
	
}
});

function send(mes,ch){
	setTimeout(function(){ 
		ch.send(mes.replace(/@everyone/g,"**@every1**").replace(/@here/g,"**@h3r3**"));
	}, 50);
}

client.login(process.env.BOT_TOKEN);
