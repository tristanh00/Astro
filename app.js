const planets = require('./modules/planets')
const spacex = require('./modules/spacex')
const iss = require('./modules/iss')
const config = require('./config.json')
const Discord = require('discord.js')
const fetch = require("node-fetch")

const client = new Discord.Client()
const prefix = '.'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Servers (${client.guilds.size}): \n${client.guilds.map((guild) => guild.name + '\n').join('') }`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'add') {
    msg.reply('here is the link to add me to your server :  https://discordapp.com/api/oauth2/authorize?client_id=618572493913063425&scope=bot&permissions=125693377' );
  }

  if (msg.content === 'mercury info') {
    planets.mercury(msg)
  }
  if (msg.content === 'venus info') {
    planets.venus(msg)
  }
  if (msg.content === 'earth info') {
    planets.earth(msg)
  }
  if (msg.content === 'mars info') {
    planets.mars(msg)
  }
  if (msg.content === 'jupiter info') {
    planets.jupiter(msg)
  }
  if (msg.content === 'saturn info') {
    planets.saturn(msg)
  }
  if (msg.content === 'uranus info') {
    planets.uranus(msg)
  }
  if (msg.content === 'neptune info') {
    planets.neptune(msg)
  }
  if (msg.content === 'pluto info') {
    planets.pluto(msg)
  }

  if (msg.content === 'iss crew') {
    iss.crew(msg)
  }

  if (msg.content === 'iss info') {
    iss.info(msg)
  }


  if (msg.content === 'spacex next') {
    spacex.next(msg)
  }

  if (msg.content === 'spacex info') {
    spacex.info(msg)
  }

  if (msg.content === 'spacex latest') {
    spacex.latest(msg)
  }

  if (msg.content === 'mars rover') {
    fetch('https://api.maas2.apollorion.com/')
    .then(response => response.json())
    .then(json => {
      const embed = new Discord.MessageEmbed()       
      .setColor('#C1440E')
      .setTitle('Mars - Curiosity Rover')
      .addField('Sols on Mars', json.sol)
      .addField('Temp. Low', json.min_temp + "C / " +  Math.round(((json.min_temp * 9/5) + 32)) + "F", true)
      .addField('Temp. High', json.max_temp + "C / " + Math.round(((json.max_temp * 9/5) + 32)) + "F", true)
      .addField('Atomospheric Visibility', json.atmo_opacity)
      .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Mars_%2816716283421%29_-_Transparent_background.png/1200px-Mars_%2816716283421%29_-_Transparent_background.png')
      
      msg.channel.send(embed);
    }

    )
  }

});

client.login(config.key);
