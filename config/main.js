const { GatewayIntentBits, Partials } = require('discord.js');
const presenceData = require('../JSON/presence.json');

module.exports = {
    // Client configuration:
    client: {
        // Constructor:
        constructor: {
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildBans,
                GatewayIntentBits.GuildEmojisAndStickers,
                GatewayIntentBits.GuildIntegrations,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildMessageTyping,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.DirectMessageTyping,
                GatewayIntentBits.MessageContent
            ],
            partials: [
                Partials.Channel,
                Partials.Message,
                Partials.User,
                Partials.GuildMember,
                Partials.Reaction
            ],
            presence: {
                activities: [
                    {
                        name: presenceData.activity,
                        type: presenceData.activity_type
                    }
                ],
                status: presenceData.status
            }
        },
        // Identification:
        token: "MTI4OTk2MDU5NTgwOTg5ODU2Nw.GUvqCd.xv1NAn7t_F0bynDQBLPI3LpRCvkHVbbtgiz1kw",
        id: "1289960595809898567"
    },

    // Database:
    database: {
        mongodb_uri: 'mongodb+srv://rlx:rlx@rlx1.qqf2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    },

    // APIs:
    apis: {
        
    },

    // Users:
    users: {
        developers: ["1122953244168159285"],
        owner: "1122953244168159285"
    }
};
