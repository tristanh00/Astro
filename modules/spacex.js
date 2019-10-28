const Discord = require('discord.js')
const fetch = require("node-fetch")

const spacex_logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/1280px-SpaceX-Logo-Xonly.svg.png'

const latest = (msg) => {
    fetch('https://api.spacexdata.com/v3/launches/latest')
    .then(response => response.json())
    .then(json => {
      const embed = new Discord.MessageEmbed()       
      .setColor('#005288')
      .addField('Mission Name', json.mission_name, true)
      .addField('Rocket Name', json.rocket.rocket_name, true)
      .addField('Mission Status', json.launch_success ? "The mission was successful" : "The mission was unsuccessful")
      .addField('Launch Site', json.launch_site.site_name_long)
      .addField('Mission Info', json.details)
      .setThumbnail(json.links.mission_patch ? json.links.mission_patch : spacex_logo)
      .setTimestamp(json.launch_date_utc)
      .setFooter('Mission date', json.links.mission_patch ? json.links.mission_patch : spacex_logo)
    
      msg.channel.send(embed);
    })
}

const next = (msg) => {
    fetch('https://api.spacexdata.com/v3/launches/next')
    .then(response => response.json())
    .then(json => {
      const embed = new Discord.MessageEmbed()       
      .setColor('#005288')
      .addField('Mission Name', json.mission_name, true)
      .addField('Rocket Name', json.rocket.rocket_name, true)
      .addField('Mission Status', 'Planned')
      .addField('Launch Site', json.launch_site.site_name_long)
      .addField('Mission Info', json.details ? json.details : 'No info yet.')
      .setThumbnail(json.links.mission_patch ? json.links.mission_patch : spacex_logo)
      .setTimestamp(json.launch_date_utc)
      .setFooter('Mission date', json.links.mission_patch ? json.links.mission_patch : spacex_logo)

      msg.channel.send(embed);
    })
}

const info = (msg) => {
    fetch('https://api.spacexdata.com/v3/info')
    .then(response => response.json())
    .then(json => {
      const embed = new Discord.MessageEmbed()       
      .setColor('#005288')
      .addField('Founder', json.founder)
      .addField('Chief Executive Officer', json.ceo, true)
      .addField('Chief Technology Officer', json.cto, true)
      .addField('Chief Operating Officer', json.coo, true)
      .addField('Chief Propulsion Officer', json.cto_propulsion, true)
      .addField('Headquarters', json.headquarters.address + ',\n ' +  json.headquarters.city + ', ' +  json.headquarters.state , true)
      .addField('Employees', new Intl.NumberFormat('en-US').format(json.employees), true)
      .addField('About', json.summary)
      .addField('Valuation', new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(json.valuation))
      .setThumbnail(spacex_logo)
      .setFooter('spacex.com', spacex_logo)

      msg.channel.send(embed);
    })
}


module.exports = { latest, next, info }