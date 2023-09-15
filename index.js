const mineflayer = require('mineflayer');
const Discord = require('discord.js');
const prompt = require('prompt-sync')();
const antiafk = require("mineflayer-antiafk");
const mineflayerViewer = require('prismarine-viewer').mineflayer
const inventoryViewer = require('mineflayer-web-inventory')

menu2()

function menu2(){
  console.clear()
console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
console.log("[1] Login")
console.log("\n")
console.log("[2] Credits")
console.log("\n")
console.log("[3] Exit")

let nm2 = prompt(console.log(""))

if(nm2 == 1){
  menu1()
}

if(nm2 == 2){
   credits()
}

if(nm2 == 3){
  process.exit
}

}



function credits(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
  console.log("Owner - AdiKan")
  console.log("\n")
  console.log("Author - AdiKan, Rattles")
  console.log("\n")
  console.log("Beta Testers - HitmanAssasian")
  console.log("\n")
  console.log("[1] Go Back To Menu")
  
  let nmj = prompt(console.log(""))

  if(nmj == 1){
    menu2()
  }


}



function menu1(){
console.clear()
console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
console.log("Which Mode Do You Want To Use [?]")
console.log("\n")
console.log("[1] AFK BOT")
console.log("\n")
console.log("[2] SPAM BOT")
console.log("\n")
console.log("[3] ADVANCE BOT (Lets You Customize More)")
console.log("\n")
console.log("[4] CHAT BOT")
console.log("\n")
console.log("[5] Discord and Minecraft Interconnected Bot")
console.log("\n")
console.log("[6] Back to Menu")


let q1 = prompt(console.log(""))
if(q1 == 6){
  menu2()
}
if(q1 == 1){
  w1()
}



if(q1 == 2){
  e12()
}
if(q1 == 3){
  p1()
}

if(q1 == 4){
  wq1()
}



if(q1 == 5){
  jj7()
}


}

function jj7(){
  
    console.clear()
    console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
  console.log("\n")
      console.log("\033[0;35m[1] Normal Discord and Minecraft Interconnected Bot")
      console.log("\n")
      console.log("[2] Advance Discord and Minecraft Interconnected Bot")
      console.log("\n")
console.log("[3] Back to Menu")
      let l1 = prompt(console.log(""))
  
      if(l1 == 1){
          dm1()
  
      }
      if(l1 == 3){
        menu2()

    }
  
      if(l1 == 2){
          dm2()
  
      }
  
  }


function dm1(){
  
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
let token = prompt(console.log("Enter Bot Token: "));
let chatChannelID = prompt(console.log("Enter Channel Id: "));
let prfx = prompt(console.log("\033[0;35mWhat Should the Prefix of the minecraft bot Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))

        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));
   

const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Discord bot has started as : ${client.user.tag}`);
  });

  const bot = mineflayer.createBot({
    host: `${ip}`,
    username: `${usr}`,
  });

client.on("message", message => {
  if(message.author.bot || !message.guild || message.channel.id !== `${chatChannelID}`) return;
  bot.chat(`Discord [${message.author.tag}]-> ${message.content}`)
})



bot.on('chat', (username, message) => {
  if(username == bot.username) return;
  client.channels.cache.get(`${chatChannelID}`).send(`${username} ${message}`);
  });

  client.login(`${token}`)
}


function dm2(){
  
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
let token = prompt(console.log("Enter Bot Token: "));
let chatChannelID = prompt(console.log("Enter Channel Id: "));
let prfx = prompt(console.log("\033[0;35mWhat Should the Prefix of the minecraft bot Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))
        let inv = prompt(console.log("Inventory Slot[?]: "))
        let win = prompt(console.log("Window Slot[?]: "))
        let pas = prompt(console.log("Password for bot(/reg (password))[?]: "))
        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));
   

const client = new Discord.Client();

  client.on('ready', () => {
    console.log(`Discord bot has started as : ${client.user.tag}`);
  });

  const bot = mineflayer.createBot({
    host: `${ip}`,
    username: `${usr}`,
  });

  bot.on('login', function() {
    bot.chat(`/register ${pas}`)
    bot.chat(`/login ${pas}`)
    console.log("Login Sucessful")
  });
  bot.once('spawn',function(){
    bot.setQuickBarSlot(`${inv}`);
    bot.activateItem();
  });
  bot.on('windowOpen', (window) => {
    setTimeout(() => {
      bot.clickWindow(`${win}`, 1, 0);
      bot.closeWindow(window);
    }, 5 * 1000);
  });
  

client.on("message", message => {
  if(message.author.bot || !message.guild || message.channel.id !== `${chatChannelID}`) return;
  bot.chat(`Discord [${message.author.tag}]-> ${message.content}`)
})



bot.on('chat', (username, message) => {
  if(username == bot.username) return;
  client.channels.cache.get(`${chatChannelID}`).send(`${username} ${message}`);
  });

  client.login(`${token}`)
}



function wq1(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
    console.log("\033[0;35m[1] Normal Chat Bot")
    console.log("\n")
    console.log("[2] Advance Chat Bot")
    console.log("\n")
console.log("[3] Back to Menu")
    let l1 = prompt(console.log(""))

    if(l1 == 1){
        cht3()

    }
    if(l1 == 3){
      menu2()

  }

    if(l1 == 2){
        cht2()

    }

}

function cht3(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
  let prfx = prompt(console.log("\033[0;35mWhat Should the Prefix Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))

        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));
    const bot = mineflayer.createBot({
        host: `${ip}`,
        username: `${usr}`,
      });
      bot.on('message', (message) => {
        console.log(message.toAnsi())
      })
      


      bot.once('spawn',function(){
        let cht8 = "on"
        if(cht8 == "on"){
          cht3()
          setInterval(cht3, 8000)
        }
      });

      
      

      function cht3(){
        
          let jj = prompt(console.log(""))
          bot.chat(`${jj}`)
        
      }
}




function cht2(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
  let prfx = prompt(console.log("\033[0;35mWhat Should the Prefix Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))
        let inv = prompt(console.log("Inventory Slot[?]: "))
        let win = prompt(console.log("Window Slot[?]: "))
        let pas = prompt(console.log("Password for bot(/reg (password))[?]: "))
        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));
    const bot = mineflayer.createBot({
        host: `${ip}`,
        username: `${usr}`,
      });
      bot.on('message', (message) => {
        console.log(message.toAnsi())
      })
      bot.on('login', function() {
        bot.chat(`/register ${pas}`)
        bot.chat(`/login ${pas}`)
        console.log("Login Sucessful")
      });
      bot.once('spawn',function(){
        bot.setQuickBarSlot(`${inv}`);
        bot.activateItem();
      });
      bot.on('windowOpen', (window) => {
        setTimeout(() => {
          bot.clickWindow(`${win}`, 1, 0);
          bot.closeWindow(window);
        }, 5 * 1000);
      });

      let ch9 = "yes"
      if(ch9 == "yes"){
        jk9()
      }

      function jk9(){
        const myutiome = setTimeout(mom2, 10000)

      }      

function mom2(){
      bot.once('spawn',function(){
        let cht8 = "on"
        if(cht8 == "on"){
          cht3()
          setInterval(cht3, 8000)
        }
      });
    }

      
      

      function cht3(){
        
          let jj = prompt(console.log(""))
          bot.chat(`${jj}`)
        
      }
}

function w1(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
    console.log("\033[0;35m[1] Normal Afk Bot (Just AFKS On the Server)")
    console.log("\n")
    console.log("[2] Advance Afk Bot")
    console.log("\n")
console.log("[3] Back to Menu")
    let l1 = prompt(console.log(""))

    if(l1 == 1){
        w12()

    }
    if(l1 == 3){
      menu2()

  }

    if(l1 == 2){
        w21()

    }

    function w21(){
      console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
        let prfx = prompt(console.log("\033[0;35mWhat Should the Prefix Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))
        let inv = prompt(console.log("Inventory Slot[?]: "))
        let win = prompt(console.log("Window Slot[?]: "))
        let pas = prompt(console.log("Password for bot(/reg (password))[?]: "))
        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));
    const bot = mineflayer.createBot({
        host: `${ip}`,
        username: `${usr}`,
      });
      console.log("Bot -",`${usr}`)
      bot.on('login', function() {
        bot.chat(`/register ${pas}`)
        bot.chat(`/login ${pas}`)
        console.log("Login Sucessful")
      });
      bot.once('spawn',function(){
        bot.setQuickBarSlot(`${inv}`);
        bot.activateItem();
      });
      bot.on('windowOpen', (window) => {
        setTimeout(() => {
          bot.clickWindow(`${win}`, 1, 0);
          bot.closeWindow(window);
        }, 5 * 1000);
      });
      bot.loadPlugin(antiafk);
bot.on("spawn", () => {
  bot.afk.start();
});
    }

    
    
   

    function w12(){
      console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
       
        let prfx = prompt(console.log("\033[0;35mWhat Should the Prefix Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))
        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));
    const bot = mineflayer.createBot({
        host: `${ip}`,
        username: `${usr}`,
      });
      console.log("Bot -",`${usr}`)
      bot.loadPlugin(antiafk);
      bot.on("spawn", () => {
        bot.afk.start();
      });
      




    }
      
}

function e12(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
    console.log("\033[0;35m[1] Normal Spam Bot (Just Spams On the Server)")
    console.log("\n")
    console.log("[2] Advance Spam Bot")
    console.log("\n")
console.log("[3] Back to Menu")
    let spm2 = prompt(console.log(""))
    
    if(spm2 == 1){
      e1()
    }
    if(spm2 == 3){
      menu2()
    }
    if(spm2 == 2){
      e21()
    }
}

function e1(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
  let prfx = prompt(console.log("\033[0;35mmWhat Should the Prefix Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))
        let msg = prompt(console.log("What do you want the bot to spam[?]: "))
        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));
    const bot = mineflayer.createBot({
        host: `${ip}`,
        username: `${usr}`,
      });
      console.log("Bot -",`${usr}`)
      function spam(){
        bot.chat(`${msg}`);
    }
    setInterval(spam, 2750)
      
      

}

function e21(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
  let prfx = prompt(console.log("\033[0;35mWhat Should the Prefix Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))
        let inv = prompt(console.log("Inventory Slot[?]: "))
        let win = prompt(console.log("Window Slot[?]: "))
        let pas = prompt(console.log("Password for the bot(/reg (password))[?]: "))
        let msg = prompt(console.log("What do you want the bot to spam[?]: "))
        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));
    const bot = mineflayer.createBot({
        host: `${ip}`,
        username: `${usr}`,
      });
      console.log("Bot -",`${usr}`)
      bot.on('login', function() {
        bot.chat(`/register ${pas}`)
        bot.chat(`/login ${pas}`)
        bot.chat(`/register ${pas} ${pas}`)
        bot.chat(`/login ${pas} ${pas}`)
        console.log("Login Sucessful")
      });
      bot.once('spawn',function(){
        bot.setQuickBarSlot(`${inv}`);
        bot.activateItem();
      });
      bot.on('windowOpen', (window) => {
        setTimeout(() => {
          bot.clickWindow(`${win}`, 1, 0);
          bot.closeWindow(window);
        }, 5 * 1000);
      });
      
      function spam(){
        bot.chat(`${msg}`);
    }
    setInterval(spam, 2750)
      
}














function r12(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
  let prfx = prompt(console.log("\033[0;35mWhat Should the Prefix Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))
        let inv = prompt(console.log("Inventory Slot[?]: "))
        let win = prompt(console.log("Window Slot[?]: "))
        let pas = prompt(console.log("Password for the bot(/reg (password))[?]: "))
        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));
    const bot = mineflayer.createBot({
        host: `${ip}`,
        username: `${usr}`,
      });
      console.log("Bot -",`${usr}`)

      bot.on('login', function() {
        bot.chat(`/register ${pas}`)
        bot.chat(`/login ${pas}`)
        console.log("Login Sucessful")
      });
      bot.once('spawn',function(){
        bot.setQuickBarSlot(`${inv}`);
        bot.activateItem();
      });
      bot.on('windowOpen', (window) => {
        setTimeout(() => {
          bot.clickWindow(`${win}`, 1, 0);
          bot.closeWindow(window);
        }, 5 * 1000);
      });

     
       



    
}


function p1(){
  console.clear()
  console.log("\033[0;35m██╗░█████╗░██████╗░██╗███╗░░██╗███████╗\n██║██╔══██╗██╔══██╗██║████╗░██║██╔════╝\n██║██║░░██║██║░░██║██║██╔██╗██║█████╗░░\n██║██║░░██║██║░░██║██║██║╚████║██╔══╝░░\n██║╚█████╔╝██████╔╝██║██║░╚███║███████╗\n╚═╝░╚════╝░╚═════╝░╚═╝╚═╝░░╚══╝╚══════╝")
console.log("\n")
  let prfx = prompt(console.log("\033[0;35mWhat Should the Prefix Be[?]: "))
        let ip = prompt(console.log("What is The Ip Adress of the Server[?]: "))
        let inv = prompt(console.log("Inventory Slot[?]: "))
        let win = prompt(console.log("Window Slot[?]: "))
        let pas = prompt(console.log("Password for the bot(/reg (password))[?]: "))
        let msg2 = prompt(console.log("Do you want the bot to spam[?](yes/no): "))
        let msg3 = prompt(console.log("Do you to enable chat bot[?](yes/no): "))

        
        let usr = (`${prfx}`+"_" +(Math.random() + 1).toString(36).substring(2));

    const bot = mineflayer.createBot({
        host: `${ip}`,
        username: `${usr}`,
      });
      bot.on('message', (message) => {
        console.log(message.toAnsi())
      })
      
      if(msg2 == "yes"){
        h2()
      }
      if(msg3 == "yes"){
        jk9()
       
      }
      
      function h2(){
        let spmmsg1 = prompt(console.log("What Do you want the bot to spam[?]:"))
        let dly = prompt(console.log("Delay of the message to be sent[?](suggested-2750): "))
        function h3(){
          bot.chat(`${spmmsg1}`);
        }
        setInterval(h3, `${dly}`)
      }
      
      console.log("Bot -",`${usr}`)
      bot.on('login', function() {
        bot.chat(`/register ${pas}`)
        bot.chat(`/login ${pas}`)
        console.log("Login Sucessful")
      });
      bot.once('spawn',function(){
        bot.setQuickBarSlot(`${inv}`);
        bot.activateItem();
      });
      bot.on('windowOpen', (window) => {
        setTimeout(() => {
          bot.clickWindow(`${win}`, 1, 0);
          bot.closeWindow(window);
        }, 5 * 1000);
      });


      let ch9 = "yes"
      if(ch9 == "yes"){
        jk9()
      }

      function jk9(){
        const myutiome = setTimeout(mom2, 10000)

      }      

function mom2(){
      bot.once('spawn',function(){
        let cht8 = "on"
        if(cht8 == "on"){
          cht3()
          setInterval(cht3, 8000)
        }
      });
    }

      
      

      function cht3(){
        
          let jj = prompt(console.log(""))
          bot.chat(`${jj}`)
        
      }




    

    }

     

    
      
      



