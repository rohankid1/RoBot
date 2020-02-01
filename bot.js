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
		send("Right Now the current commands are: r?help, r?say <text> and r?ping", msg.channel);
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
