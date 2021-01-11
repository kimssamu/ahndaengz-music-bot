const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });

module.exports = {
    emojis: {
        off: ':x:',
        error: ':warning:',
        queue: ':bar_chart:',
        music: ':musical_note:',
        success: ':white_check_mark:',
    },

    discord: {
        prefix: '*',
        activity: `with ${client.guilds.cache.size} servers!`,
    },

    filters: ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding'],
};
