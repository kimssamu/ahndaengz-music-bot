module.exports = {
    name: 'shutdown',
    aliases: ['sd', 'fsd'],
    category: 'Core',
    utilisation: '{prefix}shutdown',

    execute(client, message, args) {

        message.channel.send("Shutting down...").then(() => {
            client.destroy();
            };
          };
     });
);
