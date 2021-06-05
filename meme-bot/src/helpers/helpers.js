module.exports = function joinUserChannel(msg) {
  return new Promise((resolve, error) => {
    let channel = msg.member.voice.channel;
    if (channel && channel.type === "voice") {
      channel.join().then((connection) => {
        resolve(connection);
      });
    } else error(`User isn't on a voice channel!`);
  });
};
