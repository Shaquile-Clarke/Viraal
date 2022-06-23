export const followedChannel = [
  {
    image:
      "https://images.unsplash.com/photo-1654443894922-25e624044aba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQwfHxsb2dvfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "SlappingHard",
    currentGame: "Battlefield 2042",
    viewCount: 224,
    isOnline: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1616037502269-72da0baf7d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    name: "RegiMec",
    currentGame: "Apex Legends",
    viewCount: 62,
    isOnline: true,
  },
];

export const recommendedChannel = [
  {
    image:
      "https://images.unsplash.com/photo-1635220035700-f2d881d763c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    name: "Scoppic",
    currentGame: "RuneScape",
    viewCount: 1952,
    isOnline: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1526489561696-1a5a2b82de4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    name: "Justyn",
    currentGame: "Escape From Tarkov",
    viewCount: 985,
    isOnline: true,
  },
];

export const liveChannels = [];

(function liveChannel() {
  for (let i = 0; i < 50; i++) {
    liveChannels.push({
      image:
        "https://images.unsplash.com/photo-1622038488881-88d94a073f4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80",
      profileImage:
        "https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      title: "Falling harder than an astroid ...",
      streamerName: `Jamers${i}`,
      game: "Fall Guys",
      viewCount: Math.floor(Math.random() * 15000) + 1,
      categories: ["Drops Enabled", "Co-op", "English"],
    });
  }
})();
