const planets = require('./modules/planets')
const spacex = require('./modules/spacex')
const Discord = require('discord.js');
const fetch = require("node-fetch");

const client = new Discord.Client();
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
    fetch('https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json')
    .then(response => response.json())
    .then(json => {
      const embed = new Discord.MessageEmbed()       
      .setColor('#2a2a2a')
      .setFooter(json.number + ' people are currently aboard the International Space Station') 
      json.people.forEach((astronaut) => {
        let flag = null
        switch(astronaut.country) {
          case 'usa':
            flag = ':flag_us:'
            break;
          case 'russia':
            flag = ':flag_ru:'
            break;
          case 'italy':
            flag = ':flag_it:'
            break;
          case 'france':
          flag = ':flag_fr:'
            break;
          default:
            flag = ':earth_americas:'
        } 
        embed.addField(flag + ' ' + astronaut.name, astronaut.bio)
      })
      msg.channel.send(embed)
    }

    )
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

client.login('NjE4NTcyNDkzOTEzMDYzNDI1.XbBdhQ.KxYFn3rQN0KqrHYw5Cp8u4y_vJU');
