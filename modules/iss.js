const Discord = require('discord.js');
const fetch = require("node-fetch")



const crew = (msg) => {
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
    })
}

const info = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#005288')
    .setTitle('International Space Station')
    .addField('Year Built', '1998',)
    .addField('Orbits around Earth', '16 times per day')
    .addField('Number of Spacewalks', '205 to date', true)
    .addField('Number of Visitors', '230 people have been aboard the ISS', true)
    .addField('Currently Over', 'CORDINATES')

    msg.channel.send(embed);
    
}

module.exports = { info, crew }