const Discord = require('discord.js');

const mercury = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#d5d2d1')
    .setTitle('Mercury')
    .addField('Moons', 0, true)
    .addField('Temperature', 'Varies from -171C to 427C', true)
    .setThumbnail('https://space-facts.com/wp/wp-content/uploads/mercury-transparent.png')

    msg.channel.send(embed);

}

const venus = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#E39E1C')
	.setTitle('Venus')    
    .addField('Moons', 0, true)
    .addField('Temperature', '462C', true)
    .setThumbnail('https://space-facts.com/wp/wp-content/uploads/venus-transparent.png')

    msg.channel.send(embed);
}

const earth = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#00578b')
	.setTitle('Earth')    
    .addField('Moons', 1, true)
    .addField('Temperature', 'Varies from -82C to 58C', true)
    .setThumbnail('https://space-facts.com/wp/wp-content/uploads/earth-transparent.png')

    msg.channel.send(embed);
}

const mars = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#C1440E')
	.setTitle('Mars')    
    .addField('Moons', 2, true)
    .addField('Temperature', 'Varies from -152C to 20C', true)
    .setThumbnail('https://space-facts.com/wp/wp-content/uploads/mars-transparent.png')

    msg.channel.send(embed);
}


const jupiter = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#f66438')
	.setTitle('Jupiter')    
    .addField('Moons', 79, true)
    .addField('Temperature', 'Varies from -145C to 25,000C', true)

    .setThumbnail('https://space-facts.com/wp/wp-content/uploads/jupiter-transparent.png')
    msg.channel.send(embed);
}

const saturn = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#e3e0c0')
	.setTitle('Saturn')    
    .addField('Moons', 83, true)
    .addField('Temperature', 'Varies from -174C to 11,700C', true)
    .setThumbnail('https://space-facts.com/wp/wp-content/uploads/saturn-transparent.png')

    msg.channel.send(embed);
}

const uranus = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#d1e7e7')
    .setTitle('Uranus')
    .addField('Moons', 27, true)
    .addField('Temperature', 'Varies from -224C to 8,540C', true)

    .setThumbnail('https://space-facts.com/wp/wp-content/uploads/uranus-transparent.png')
    msg.channel.send(embed);
}

const neptune = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#3f54ba')
    .setTitle('Neptune')
    .addField('Moons', 14, true)
    .addField('Temperature', 'Varies from -214C to 7,000C', true)
    .setThumbnail('https://space-facts.com/wp/wp-content/uploads/neptune-transparent.png')

    
    msg.channel.send(embed);
}


const pluto = (msg) => {
    const embed = new Discord.MessageEmbed()       
    .setColor('#9ca6b7')
	.setTitle('Pluto')    
    .addField('Moons', 5, true)
    .addField('Temperature', 'Varies from -233C to -223C', true)

    msg.channel.send(embed);
}

module.exports = { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto }