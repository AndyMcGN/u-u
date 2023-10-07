const { Server, Origins } = require('boardgame.io/server');
const { UnstableUnicorns } = require('./Game');

const server = Server({
  games: [UnstableUnicorns],
  origins: [Origins.LOCALHOST],
});

server.run(8000);
