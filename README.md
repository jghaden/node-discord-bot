
# Node Discord Bot

Discord bot written with [discord.js](https://discord.js.org/)

# Overview

1. [Requirements](#requirements)
2. [Configuration](#configuration)
3. [Installation](#installation)
4. [Running](#running)

# Requirements

This application requires installation of [**NodeJS**](https://nodejs.org/) prior to running.

# Configuration

Create the directory "**config**" at the project root directory and add the following files:

### **config/discord.json**
```json
{
    "clientId": "DISCORD_CLIENT_ID",
    "guildId": "DISCORD_GUILD_ID",
    "token": "DISCORD_TOKEN"
}
```

### **config/openai.json**
```json
{
    "OPENAI_API_KEY": "OPENAI_API_KEY"
}
```

# Installation
```
$ npm install
```

# Running

## Start server

If you wish to have [**nodemon**](https://www.npmjs.com/package/nodemon) watch your code changes, run:

```
$ npm dev
```

or you wish to start the server only with Node:

```
$ npm start
```

## Deploy commands

You only need to run [**deploy-command.js**](deploy-commands.js) when you make changes to the command name or its options (also known as the command definition). Edits within the "**execute**" function does not require you to deploy updates to Discord.

***NOTE:** Discord has a daily limit on the number of slash command registrations. Please refer to [Discord's documentation](https://discord.com/developers/docs/interactions/application-commands#registering-a-command) for the latest information*