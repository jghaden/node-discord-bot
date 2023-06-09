
# Node Discord Bot

Discord bot written with [discord.js](https://discord.js.org/)

# Overview

1. [Requirements](#requirements)
2. [Configuration](#configuration)
3. [Installation](#installation)

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

## Start server

If you wish to have [**nodemon**](https://www.npmjs.com/package/nodemon) watch your code changes, run:

```
$ npm dev
```

or you wish to start the server only with Node:

```
$ npm start
```