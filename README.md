# discord-bot
A simple Discord Bot to use among friends and as a way to practice the use of JS, Node, Discord.js among others. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Node.js
* discord.js
* Discord Application (and subsequently Bot)
* ytdl-core
* opusscript


### Installing

* Node.js:

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

* discord.js:

```
npm install discord.js
```

* Discord Application:

[In this page](https://discordapp.com/developers/docs/intro)
go to 'My apps', and click on the "New App" button and fill out the form. From there you will have the App Details (ID & Secret) and a button "Create a Bot User" (with a token, that you should use in your code).

* ytdl-core:

```
npm install --save ytdl-core
```

* opusscript:

```
npm install --save opusscript
```

## Deployment

```
node index.js
```

## New features

Do you have cool new features to add? Open a issue with a description and functioality that you would like to see in this bot.

## Disclaimer

This is just a fun way to learn and keep your skills sharp, do not expect anything over the top. 
Project inspired by the discord.js guide. The setup and built was made on Ubuntu, as such installation commands can be different in other OS.
