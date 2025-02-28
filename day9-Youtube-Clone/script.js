// const getDataTrending = () => {
//   const res = fetch("https://youtube138.p.rapidapi.com/v2/trending", {
//     method: "GET",//optional :: default is "GET"
//     headers: {// for including headers
//       "x-rapidapi-host": "youtube138.p.rapidapi.com",
//       "x-rapidapi-key":"69153dd839msha76ccede3a8c8aap1d3966jsned16456981aa",
//     }
//   });
//   res.then((res) => {
//     const pr2 = res.json();
//     pr2.then((data) => {
//       console.log(data);
//     })
//   }).catch((err) => {
//     alert(err.message);
//   })
// }
//getDataTrending();

//-----------------------------------------------------------------------------------------------

// const getDataSearch = (text) => {
//   const res = fetch(`https://youtube138.p.rapidapi.com/search/?q=${text}&hl=en&gl=US`, {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "youtube138.p.rapidapi.com",
//       "x-rapidapi-key":"69153dd839msha76ccede3a8c8aap1d3966jsned16456981aa",
//     }
//   });
//   res.then((res) => {
//     const pr2 = res.json();
//     pr2.then((data) => {
//       //console.log(data);
//       showSuggestions(data);
//     })
//   }).catch((err) => {
//     alert(err.message);
//   })
// }

//-----------------------------------------------------------------------------------------------

const dummyData = [
  {
    type: "video",
    title: 'Beyoncé - Chapter 02 "POOL HALL" LEVIIS JEANS',
    videoId: "tqi42wWQ_po",
    author: "Beyoncé",
    authorId: "UCuHzBCaKmtaLcRAOoazhCPA",
    authorUrl: "/channel/UCuHzBCaKmtaLcRAOoazhCPA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/tqi42wWQ_po/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/tqi42wWQ_po/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/tqi42wWQ_po/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/tqi42wWQ_po/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/tqi42wWQ_po/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/tqi42wWQ_po/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/tqi42wWQ_po/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/tqi42wWQ_po/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description: "REIIMAGINED @LEVIS",
    descriptionHtml: "REIIMAGINED @LEVIS",
    viewCount: 166741,
    viewCountText: "166K views",
    published: 1740407851,
    publishedText: "19 hours ago",
    lengthSeconds: 16,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Trump reportedly plans to take control of USPS, dismiss board",
    videoId: "OpxlOuihWV8",
    author: "WTVR CBS 6",
    authorId: "UC9ha3sh4YTCSK83dH6OlWTw",
    authorUrl: "/channel/UC9ha3sh4YTCSK83dH6OlWTw",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/OpxlOuihWV8/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/OpxlOuihWV8/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/OpxlOuihWV8/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/OpxlOuihWV8/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/OpxlOuihWV8/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/OpxlOuihWV8/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/OpxlOuihWV8/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/OpxlOuihWV8/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "The plan as reported would dissolve the USPS board of directors by executive order and move control of the service under the Department of Commerce.",
    descriptionHtml:
      "The plan as reported would dissolve the USPS board of directors by executive order and move control of the service under the Department of Commerce.",
    viewCount: 159303,
    viewCountText: "159K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 19,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "HIT 3 Teaser : Sarkaar's Laathi | Nani | Sailesh Kolanu | Srinidhi Shetty | in Cinemas May 1st",
    videoId: "XhW3i2f54BQ",
    author: "Wall Poster Cinema",
    authorId: "UC-seBZmnGCMWm9aCHL2WcNQ",
    authorUrl: "/channel/UC-seBZmnGCMWm9aCHL2WcNQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/XhW3i2f54BQ/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/XhW3i2f54BQ/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/XhW3i2f54BQ/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/XhW3i2f54BQ/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/XhW3i2f54BQ/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/XhW3i2f54BQ/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/XhW3i2f54BQ/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/XhW3i2f54BQ/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Watch #HIT3Teaser : Sarkaar's Laathi on Wall Poster Cinema \n\nTaking charge worldwide from 01-May-2025.\n\nCast & Crew Details\n\nStarring 'Natural Star' as 'Arjun Sarkaar'.\nWriter & Director :...",
    descriptionHtml:
      "Watch #HIT3Teaser : Sarkaar&#39;s Laathi on Wall Poster Cinema <br><br>Taking charge worldwide from 01-May-2025.<br><br>Cast &amp; Crew Details<br><br>Starring &#39;Natural Star&#39; as &#39;Arjun Sarkaar&#39;.<br>Writer &amp; Director :...",
    viewCount: 17512365,
    viewCountText: "17M views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 105,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "IS THIS THE BEST BRAWLER EVER?!",
    videoId: "SD2UiX1jpd8",
    author: "Brawl Stars",
    authorId: "UCooVYzDxdwTtGYAkcPmOgOw",
    authorUrl: "/channel/UCooVYzDxdwTtGYAkcPmOgOw",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/SD2UiX1jpd8/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/SD2UiX1jpd8/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/SD2UiX1jpd8/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/SD2UiX1jpd8/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/SD2UiX1jpd8/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/SD2UiX1jpd8/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/SD2UiX1jpd8/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/SD2UiX1jpd8/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "IMPROVED REWARDS FOR F2P, A FULL RANKED REWORK, TWO NEW BRAWLERS, GADGET CHANGES, AND MORE!\nYOUTOOZ PRE-ORDER: https://youtooz.com/collections/brawl-stars\nFREE SPRAY: https://link.brawlstars.com/?a...",
    descriptionHtml:
      "IMPROVED REWARDS FOR F2P, A FULL RANKED REWORK, TWO NEW BRAWLERS, GADGET CHANGES, AND MORE!<br>YOUTOOZ PRE-ORDER: https://youtooz.com/collections/brawl-stars<br>FREE SPRAY: https://link.brawlstars.com/?a...",
    viewCount: 12922636,
    viewCountText: "12M views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 609,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Hearts2Hearts 하츠투하츠 'The Chase' MV",
    videoId: "kxUA2wwYiME",
    author: "SMTOWN",
    authorId: "UCEf_Bc-KVd7onSeifS3py9g",
    authorUrl: "/channel/UCEf_Bc-KVd7onSeifS3py9g",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/kxUA2wwYiME/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/kxUA2wwYiME/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/kxUA2wwYiME/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/kxUA2wwYiME/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/kxUA2wwYiME/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/kxUA2wwYiME/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/kxUA2wwYiME/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/kxUA2wwYiME/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      'Hearts2Hearts\' debut single "The Chase" is out!\nListen and download on your favorite plarform: https://Hearts2Hearts.lnk.to/TheChase\n\n[Tracklist] \n01 The Chase\n02 Butterflies\n\nSubscribe to...',
    descriptionHtml:
      "Hearts2Hearts&#39; debut single &quot;The Chase&quot; is out!<br>Listen and download on your favorite plarform: https://Hearts2Hearts.lnk.to/TheChase<br><br>[Tracklist] <br>01 The Chase<br>02 Butterflies<br><br>Subscribe to...",
    viewCount: 6741314,
    viewCountText: "6.7M views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 194,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Minecraft but I discover the AXES of PVP CIVILIZATION",
    videoId: "inSv48lf4E0",
    author: "Evbo",
    authorId: "UC1HL3TABt6QGd_P857BH_CA",
    authorUrl: "/channel/UC1HL3TABt6QGd_P857BH_CA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/inSv48lf4E0/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/inSv48lf4E0/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/inSv48lf4E0/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/inSv48lf4E0/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/inSv48lf4E0/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/inSv48lf4E0/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/inSv48lf4E0/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/inSv48lf4E0/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Minecraft but I discover the AXES of PVP CIVILIZATION...the second CRAZY episode of PVP CIVLIZATION CHAPTER 2.....\n\nVoice Actors: Evbo, Teddy, @seawattgaming , @PrinceZam , @wemmbumc , @TabiMC...",
    descriptionHtml:
      "Minecraft but I discover the AXES of PVP CIVILIZATION...the second CRAZY episode of PVP CIVLIZATION CHAPTER 2.....<br><br>Voice Actors: Evbo, Teddy, @seawattgaming , @PrinceZam , @wemmbumc , @TabiMC...",
    viewCount: 659847,
    viewCountText: "659K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 1174,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Squid Games, But I Feel REAL Pain!",
    videoId: "ZB5lkA8s_Pc",
    author: "Drew Dirksen",
    authorId: "UCZevH_tgMbrm6r-_OiU6Ubg",
    authorUrl: "/channel/UCZevH_tgMbrm6r-_OiU6Ubg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/ZB5lkA8s_Pc/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/ZB5lkA8s_Pc/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/ZB5lkA8s_Pc/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/ZB5lkA8s_Pc/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/ZB5lkA8s_Pc/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/ZB5lkA8s_Pc/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/ZB5lkA8s_Pc/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/ZB5lkA8s_Pc/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Watch More Drew Dirksen:\nMost Popular: https://www.youtube.com/watch?v=6MbAlUUO2Ek&list=PLotc2XcImsZOPtVQjHLA-kZ88Kh3aeRG7\n\nSubscribe: https://tinyurl.com/2hx9y473 | Make sure to enable ALL...",
    descriptionHtml:
      "Watch More Drew Dirksen:<br>Most Popular: https://www.youtube.com/watch?v=6MbAlUUO2Ek&amp;list=PLotc2XcImsZOPtVQjHLA-kZ88Kh3aeRG7<br><br>Subscribe: https://tinyurl.com/2hx9y473 | Make sure to enable ALL...",
    viewCount: 684919,
    viewCountText: "684K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 827,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Trinidad Killa — ESKIMO (Feat. Nicki Minaj) [Official Audio]",
    videoId: "TMer1kmK1Bg",
    author: "Trinidad Killa",
    authorId: "UChjQI_NimfUxlLTDSz4vpMg",
    authorUrl: "/channel/UChjQI_NimfUxlLTDSz4vpMg",
    authorVerified: false,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/TMer1kmK1Bg/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/TMer1kmK1Bg/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/TMer1kmK1Bg/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/TMer1kmK1Bg/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/TMer1kmK1Bg/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/TMer1kmK1Bg/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/TMer1kmK1Bg/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/TMer1kmK1Bg/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Official Lyrics\n\nTrini Where?\nTrini Trini Trini where?\nTrini eyes Trini nose\nTrini hair\nI'z the only muddacunt\nTrini here\n\nAyo he want his name in the snow\nSo I write it down\nI make these bitches...",
    descriptionHtml:
      "Official Lyrics<br><br>Trini Where?<br>Trini Trini Trini where?<br>Trini eyes Trini nose<br>Trini hair<br>I&#39;z the only muddacunt<br>Trini here<br><br>Ayo he want his name in the snow<br>So I write it down<br>I make these bitches...",
    viewCount: 308842,
    viewCountText: "308K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 182,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "NRL Match Highlights 2025 | Broncos v Bulldogs | Pre-Season, Week 3",
    videoId: "DfdvO_Vr8n0",
    author: "NRL - National Rugby League",
    authorId: "UC33-OkQ6VCYk8xtml8Pk4-g",
    authorUrl: "/channel/UC33-OkQ6VCYk8xtml8Pk4-g",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/DfdvO_Vr8n0/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/DfdvO_Vr8n0/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/DfdvO_Vr8n0/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/DfdvO_Vr8n0/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/DfdvO_Vr8n0/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/DfdvO_Vr8n0/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/DfdvO_Vr8n0/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/DfdvO_Vr8n0/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "The Brisbane Broncos and the Canterbury-Bankstown Bulldogs face off in Week 3 of the 2025 Witzer Pre-Season Challenge\n\n🏉 SUBSCRIBE FOR MORE NRL ACTION 🏉\nhttps://www.youtube.com/channel/UC33-O...",
    descriptionHtml:
      "The Brisbane Broncos and the Canterbury-Bankstown Bulldogs face off in Week 3 of the 2025 Witzer Pre-Season Challenge<br><br>🏉 SUBSCRIBE FOR MORE NRL ACTION 🏉<br>https://www.youtube.com/channel/UC33-O...",
    viewCount: 174885,
    viewCountText: "174K views",
    published: 1740217051,
    publishedText: "3 days ago",
    lengthSeconds: 290,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "LA Galaxy vs. San Diego FC | Full Match Highlights | History! San Diego Debut",
    videoId: "8xX2TJB-h-U",
    author: "Major League Soccer",
    authorId: "UCSZbXT5TLLW_i-5W8FZpFsg",
    authorUrl: "/channel/UCSZbXT5TLLW_i-5W8FZpFsg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/8xX2TJB-h-U/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/8xX2TJB-h-U/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/8xX2TJB-h-U/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/8xX2TJB-h-U/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/8xX2TJB-h-U/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/8xX2TJB-h-U/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/8xX2TJB-h-U/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/8xX2TJB-h-U/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "📺 Watch every match with MLS Season Pass on Apple TV: http://apple.co/MLS\n\nThe 🐐 plays here: https://www.mlssoccer.com/messi/\n\n➡️ Subscribe Now: https://www.youtube.com/c/mls\n\n➡️...",
    descriptionHtml:
      "📺 Watch every match with MLS Season Pass on Apple TV: http://apple.co/MLS<br><br>The 🐐 plays here: https://www.mlssoccer.com/messi/<br><br>➡️ Subscribe Now: https://www.youtube.com/c/mls<br><br>➡️...",
    viewCount: 112445,
    viewCountText: "112K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 424,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Valley high school coach arrested in trafficking investigation",
    videoId: "RRPMgqCElPw",
    author: "12 News",
    authorId: "UCu7G08TrwPx_0WH4M7OxjIQ",
    authorUrl: "/channel/UCu7G08TrwPx_0WH4M7OxjIQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/RRPMgqCElPw/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/RRPMgqCElPw/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/RRPMgqCElPw/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/RRPMgqCElPw/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/RRPMgqCElPw/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/RRPMgqCElPw/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/RRPMgqCElPw/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/RRPMgqCElPw/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Scottsdale police say Dobson High School Football coach Richard Godsil was one of 202 people arrested in a human trafficking investigation.",
    descriptionHtml:
      "Scottsdale police say Dobson High School Football coach Richard Godsil was one of 202 people arrested in a human trafficking investigation.",
    viewCount: 193030,
    viewCountText: "193K views",
    published: 1740130651,
    publishedText: "4 days ago",
    lengthSeconds: 20,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "Dave Chappelle Delivers Unforgettable Speech & Stands Strong for the People | NAACP Image Awards '25",
    videoId: "fgP_uEwLlZM",
    author: "BETNetworks",
    authorId: "UCcVqCJ_9owb1zM43vqswMNQ",
    authorUrl: "/channel/UCcVqCJ_9owb1zM43vqswMNQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/fgP_uEwLlZM/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/fgP_uEwLlZM/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/fgP_uEwLlZM/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/fgP_uEwLlZM/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/fgP_uEwLlZM/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/fgP_uEwLlZM/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/fgP_uEwLlZM/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/fgP_uEwLlZM/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Dave Chappelle is recognized as one of the greatest comedians of all time. He is the 2019 recipient of the prestigious Mark Twain Prize for American Humor. Chappelle’s work has earned him...",
    descriptionHtml:
      "Dave Chappelle is recognized as one of the greatest comedians of all time. He is the 2019 recipient of the prestigious Mark Twain Prize for American Humor. Chappelle’s work has earned him...",
    viewCount: 1525959,
    viewCountText: "1.5M views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 233,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "come with me to infamous 90210",
    videoId: "ArpXopO4Rfk",
    author: "PresLee Faith",
    authorId: "UC2hXOg5FxL_eHNm8041TyPQ",
    authorUrl: "/channel/UC2hXOg5FxL_eHNm8041TyPQ",
    authorVerified: false,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/ArpXopO4Rfk/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/ArpXopO4Rfk/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/ArpXopO4Rfk/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/ArpXopO4Rfk/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/ArpXopO4Rfk/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/ArpXopO4Rfk/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/ArpXopO4Rfk/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/ArpXopO4Rfk/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "congrats to Kenzie for hitting 1 million subscribers and also to lily for having such a successful launch with her pink palm puff pjs. I am so glad I got to experience this and can't wait to...",
    descriptionHtml:
      "congrats to Kenzie for hitting 1 million subscribers and also to lily for having such a successful launch with her pink palm puff pjs. I am so glad I got to experience this and can&#39;t wait to...",
    viewCount: 67408,
    viewCountText: "67K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 1051,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "every dorm room is a different OCCULT in the sims 4 | Part 2",
    videoId: "AlDzGFrvx3Y",
    author: "CarynandConnieGaming",
    authorId: "UCiGnwS3OVEuqbc78ELEFDeQ",
    authorUrl: "/channel/UCiGnwS3OVEuqbc78ELEFDeQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/AlDzGFrvx3Y/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/AlDzGFrvx3Y/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/AlDzGFrvx3Y/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/AlDzGFrvx3Y/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/AlDzGFrvx3Y/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/AlDzGFrvx3Y/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/AlDzGFrvx3Y/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/AlDzGFrvx3Y/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "head to https://squarespace.com/carynandconnie to save 10% off your first purchase of a website or domain using CARYNANDCONNIE\n\nwe tried to build a sorority house with a twist! every room has...",
    descriptionHtml:
      "head to https://squarespace.com/carynandconnie to save 10% off your first purchase of a website or domain using CARYNANDCONNIE<br><br>we tried to build a sorority house with a twist! every room has...",
    viewCount: 396087,
    viewCountText: "396K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 2099,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "Damon & Marlon Wayans Share Loving, Hilarious Speech at NAACP Image Awards '25 Hall of Fame",
    videoId: "zOenfGWodjc",
    author: "BETNetworks",
    authorId: "UCcVqCJ_9owb1zM43vqswMNQ",
    authorUrl: "/channel/UCcVqCJ_9owb1zM43vqswMNQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/zOenfGWodjc/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/zOenfGWodjc/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/zOenfGWodjc/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/zOenfGWodjc/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/zOenfGWodjc/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/zOenfGWodjc/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/zOenfGWodjc/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/zOenfGWodjc/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "The Wayans family has redefined comedy and entertainment for decades. Led by Keenen Ivory Wayans, creator of In Living Color, they broke barriers in film, TV, and stand-up comedy, launching...",
    descriptionHtml:
      "The Wayans family has redefined comedy and entertainment for decades. Led by Keenen Ivory Wayans, creator of In Living Color, they broke barriers in film, TV, and stand-up comedy, launching...",
    viewCount: 930557,
    viewCountText: "930K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 390,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Sleeping in the Most Dangerous Beds in the World",
    videoId: "YtMgIDxGHnk",
    author: "Socks",
    authorId: "UCv6RbK5kLN0hXKk8b8q62bA",
    authorUrl: "/channel/UCv6RbK5kLN0hXKk8b8q62bA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/YtMgIDxGHnk/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/YtMgIDxGHnk/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/YtMgIDxGHnk/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/YtMgIDxGHnk/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/YtMgIDxGHnk/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/YtMgIDxGHnk/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/YtMgIDxGHnk/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/YtMgIDxGHnk/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "I got a little bit bored so I decided to sleep in some of the most extreme beds around the world. One is a capsule hotel on the side of a cliff, another is the deepest bed in the world, and...",
    descriptionHtml:
      "I got a little bit bored so I decided to sleep in some of the most extreme beds around the world. One is a capsule hotel on the side of a cliff, another is the deepest bed in the world, and...",
    viewCount: 401031,
    viewCountText: "401K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 1248,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "I Hid In iShowSpeed's Live Stream",
    videoId: "qoC_jsAIxlQ",
    author: "Airrack",
    authorId: "UCyps-v4WNjWDnYRKmZ4BUGw",
    authorUrl: "/channel/UCyps-v4WNjWDnYRKmZ4BUGw",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/qoC_jsAIxlQ/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/qoC_jsAIxlQ/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/qoC_jsAIxlQ/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/qoC_jsAIxlQ/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/qoC_jsAIxlQ/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/qoC_jsAIxlQ/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/qoC_jsAIxlQ/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/qoC_jsAIxlQ/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "I will run it back at 20M subs, SUBSCRIBE 😈\n\nFollow me on Instagram!\nINSTAGRAM ▶️ https://urlgeni.us/instagram/jBHg\n\nI’m hiring! Apply for jobs here https://apply.workable.com/airrack...",
    descriptionHtml:
      "I will run it back at 20M subs, SUBSCRIBE 😈<br><br>Follow me on Instagram!<br>INSTAGRAM ▶️ https://urlgeni.us/instagram/jBHg<br><br>I’m hiring! Apply for jobs here https://apply.workable.com/airrack...",
    viewCount: 4050028,
    viewCountText: "4M views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 808,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "I Stayed in The World's Tiniest Airbnbs",
    videoId: "P2HzVlAwQ3g",
    author: "Alexa Rivera",
    authorId: "UCPpATKqmMV-CNRNWYaDUwiA",
    authorUrl: "/channel/UCPpATKqmMV-CNRNWYaDUwiA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/P2HzVlAwQ3g/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/P2HzVlAwQ3g/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/P2HzVlAwQ3g/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/P2HzVlAwQ3g/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/P2HzVlAwQ3g/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/P2HzVlAwQ3g/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/P2HzVlAwQ3g/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/P2HzVlAwQ3g/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "These tiny homes are crazy small! Thank you guys for watching and don't forget to LIKE the video and SUBSCRIBE!!\n\n@brentrivera \n@pierson \n@JeremyHutchins \n@BenAzelart \n@andrewdavila6696 \n@DominicBr...",
    descriptionHtml:
      "These tiny homes are crazy small! Thank you guys for watching and don&#39;t forget to LIKE the video and SUBSCRIBE!!<br><br>@brentrivera <br>@pierson <br>@JeremyHutchins <br>@BenAzelart <br>@andrewdavila6696 <br>@DominicBr...",
    viewCount: 830778,
    viewCountText: "830K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 1151,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "cLOUDs",
    videoId: "eUsQzDa7qyU",
    author: "J. Cole",
    authorId: "UCnc6db-y3IU7CkT_yeVXdVg",
    authorUrl: "/channel/UCnc6db-y3IU7CkT_yeVXdVg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/eUsQzDa7qyU/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/eUsQzDa7qyU/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/eUsQzDa7qyU/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/eUsQzDa7qyU/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/eUsQzDa7qyU/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/eUsQzDa7qyU/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/eUsQzDa7qyU/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/eUsQzDa7qyU/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Provided to YouTube by Universal Music Group\n\ncLOUDs · J. Cole\n\ncLOUDs\n\n℗ 2025 Cole World, Inc., under exclusive license to Interscope Records\n\nReleased on: 2025-02-21\n\nProducer: DZL\nProducer:...",
    descriptionHtml:
      "Provided to YouTube by Universal Music Group<br><br>cLOUDs · J. Cole<br><br>cLOUDs<br><br>℗ 2025 Cole World, Inc., under exclusive license to Interscope Records<br><br>Released on: 2025-02-21<br><br>Producer: DZL<br>Producer:...",
    viewCount: 1153775,
    viewCountText: "1.1M views",
    published: 1740217051,
    publishedText: "3 days ago",
    lengthSeconds: 243,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "love",
    videoId: "TRxb1AvrwX4",
    author: "SocksStudios",
    authorId: "UCXMwCQVey4PhdWFJ6WhAVhA",
    authorUrl: "/channel/UCXMwCQVey4PhdWFJ6WhAVhA",
    authorVerified: false,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/TRxb1AvrwX4/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/TRxb1AvrwX4/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/TRxb1AvrwX4/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/TRxb1AvrwX4/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/TRxb1AvrwX4/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/TRxb1AvrwX4/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/TRxb1AvrwX4/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/TRxb1AvrwX4/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "We got a little bit bored so we talked about our totally real love stories!\n\nNew Merch https://socks.store/\n\nSUBSCRIBE \n\n\n@Joocie \n@allievtuber \n@tuxy \n@oofistooshortt \n@BlazaPlays \n@Nadweyt...",
    descriptionHtml:
      "We got a little bit bored so we talked about our totally real love stories!<br><br>New Merch https://socks.store/<br><br>SUBSCRIBE <br><br><br>@Joocie <br>@allievtuber <br>@tuxy <br>@oofistooshortt <br>@BlazaPlays <br>@Nadweyt...",
    viewCount: 808880,
    viewCountText: "808K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 1020,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Initiating Eamon & Bec into my rainforest commune",
    videoId: "jgBBoPdq8qc",
    author: "Max & Occy",
    authorId: "UCsphzld6v6ghCl_RyvihNgA",
    authorUrl: "/channel/UCsphzld6v6ghCl_RyvihNgA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/jgBBoPdq8qc/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/jgBBoPdq8qc/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/jgBBoPdq8qc/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/jgBBoPdq8qc/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/jgBBoPdq8qc/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/jgBBoPdq8qc/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/jgBBoPdq8qc/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/jgBBoPdq8qc/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "This one hits hard. If you’re struggling, consider therapy with our paid partner. Click https://betterhelp.com/maxandoccy for a discount on your first month of therapy..\n\nIn this episode...",
    descriptionHtml:
      "This one hits hard. If you’re struggling, consider therapy with our paid partner. Click https://betterhelp.com/maxandoccy for a discount on your first month of therapy..<br><br>In this episode...",
    viewCount: 169530,
    viewCountText: "169K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 1880,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "FULL GUIDE To MARIANAS VEIL UPDATE In FISCH Roblox!",
    videoId: "9_VBn-XzpWg",
    author: "Carbon Meister Plays",
    authorId: "UCM2IZ0oXZRTFr5Dnw8IIy9g",
    authorUrl: "/channel/UCM2IZ0oXZRTFr5Dnw8IIy9g",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/9_VBn-XzpWg/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/9_VBn-XzpWg/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/9_VBn-XzpWg/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/9_VBn-XzpWg/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/9_VBn-XzpWg/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/9_VBn-XzpWg/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/9_VBn-XzpWg/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/9_VBn-XzpWg/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "FULL GUIDE To MARIANAS VEIL UPDATE In FISCH Roblox!\n\nJoin this channel to get access to perks:\nhttps://www.youtube.com/channel/UCM2IZ0oXZRTFr5Dnw8IIy9g/join\n\nJOIN THE DISCORD! discord.gg/carbonmeis...",
    descriptionHtml:
      "FULL GUIDE To MARIANAS VEIL UPDATE In FISCH Roblox!<br><br>Join this channel to get access to perks:<br>https://www.youtube.com/channel/UCM2IZ0oXZRTFr5Dnw8IIy9g/join<br><br>JOIN THE DISCORD! discord.gg/carbonmeis...",
    viewCount: 705937,
    viewCountText: "705K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 1301,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "Vinnie McKee gets Simon Cowell's GOLDEN BUZZER with stunning Proclaimers song | Auditions | BGT 2025",
    videoId: "w_1MSjk5Lss",
    author: "Britain's Got Talent",
    authorId: "UCUtZaxDF3hD5VK4xRYFBePQ",
    authorUrl: "/channel/UCUtZaxDF3hD5VK4xRYFBePQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/w_1MSjk5Lss/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/w_1MSjk5Lss/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/w_1MSjk5Lss/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/w_1MSjk5Lss/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/w_1MSjk5Lss/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/w_1MSjk5Lss/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/w_1MSjk5Lss/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/w_1MSjk5Lss/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "He's doing it for the Scots.\n\nBingo caller Vinnie McKee surprises everyone with a tender version of The Proclaimers' classic hit  'I'm Gonna Be (500 Miles)', bagging himself Simon Cowell's...",
    descriptionHtml:
      "He&#39;s doing it for the Scots.<br><br>Bingo caller Vinnie McKee surprises everyone with a tender version of The Proclaimers&#39; classic hit  &#39;I&#39;m Gonna Be (500 Miles)&#39;, bagging himself Simon Cowell&#39;s...",
    viewCount: 1582496,
    viewCountText: "1.5M views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 503,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "MY DAUGHTER SKIPPED SCHOOL!",
    videoId: "XGiv1gPrBtA",
    author: "Jordan Matter",
    authorId: "UCKaCalz5N5ienIbfPzEbYuA",
    authorUrl: "/channel/UCKaCalz5N5ienIbfPzEbYuA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/XGiv1gPrBtA/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/XGiv1gPrBtA/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/XGiv1gPrBtA/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/XGiv1gPrBtA/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/XGiv1gPrBtA/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/XGiv1gPrBtA/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/XGiv1gPrBtA/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/XGiv1gPrBtA/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Are you Team Salish or Team Jordan? If you want BTS photos and videos nobody else gets to see, send us a message on our texting platform (it's free): https://joinsubtext.com/teamsalish. \n\nThanks...",
    descriptionHtml:
      "Are you Team Salish or Team Jordan? If you want BTS photos and videos nobody else gets to see, send us a message on our texting platform (it&#39;s free): https://joinsubtext.com/teamsalish. <br><br>Thanks...",
    viewCount: 5214492,
    viewCountText: "5.2M views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 1639,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "NO TIMER Fortnite XP Map to LEVEL UP in Chapter 6 Season 2!",
    videoId: "xKHViBCHdxA",
    author: "Rajib",
    authorId: "UC-NHNPxSatoFzyrrvZIBuJg",
    authorUrl: "/channel/UC-NHNPxSatoFzyrrvZIBuJg",
    authorVerified: false,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/xKHViBCHdxA/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/xKHViBCHdxA/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/xKHViBCHdxA/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/xKHViBCHdxA/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/xKHViBCHdxA/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/xKHViBCHdxA/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/xKHViBCHdxA/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/xKHViBCHdxA/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "NO TIMER Fortnite XP Map to LEVEL UP in Chapter 6 Season 2!\n\nFirst map 4279-4533-4105\nSecond map 5972-3296-6967\n\n\n#fortnite  #chapter6 #battleroyale #howtolevelupfast #xpglitch\n\n My discord...",
    descriptionHtml:
      "NO TIMER Fortnite XP Map to LEVEL UP in Chapter 6 Season 2!<br><br>First map 4279-4533-4105<br>Second map 5972-3296-6967<br><br><br>#fortnite  #chapter6 #battleroyale #howtolevelupfast #xpglitch<br><br> My discord...",
    viewCount: 208709,
    viewCountText: "208K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 87,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "COME BACK (Studio Box Ep)",
    videoId: "zT4uqa_hsKM",
    author: "Saii Kay Music ",
    authorId: "UCv9wSO7Zc0iq9HSfY0Njqjg",
    authorUrl: "/channel/UCv9wSO7Zc0iq9HSfY0Njqjg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/zT4uqa_hsKM/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/zT4uqa_hsKM/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/zT4uqa_hsKM/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/zT4uqa_hsKM/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/zT4uqa_hsKM/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/zT4uqa_hsKM/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/zT4uqa_hsKM/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/zT4uqa_hsKM/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description: "Bucky x Saii Kay x Nate Nakikus x Jarahn",
    descriptionHtml: "Bucky x Saii Kay x Nate Nakikus x Jarahn",
    viewCount: 100275,
    viewCountText: "100K views",
    published: 1739266651,
    publishedText: "2 weeks ago",
    lengthSeconds: 269,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "SURVIVING THE WORLD'S TINIEST CAR FOR 24 HOURS!",
    videoId: "I-FAQd2rj2g",
    author: "HJ Evelyn",
    authorId: "UCSGoIq_tVESqNYF1Re-zn1Q",
    authorUrl: "/channel/UCSGoIq_tVESqNYF1Re-zn1Q",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/I-FAQd2rj2g/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/I-FAQd2rj2g/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/I-FAQd2rj2g/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/I-FAQd2rj2g/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/I-FAQd2rj2g/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/I-FAQd2rj2g/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/I-FAQd2rj2g/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/I-FAQd2rj2g/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "I can't believe we did that lol NEVER AGAIN.\n\nINSTAGRAM: https://www.instagram.com/HJEVELYN/\nSHOP OUR MERCH: https://hasisters.com\nMY LINKS: https://shopmy.us/hjevelyn\nFOR BUSINESS INQUIRY:...",
    descriptionHtml:
      "I can&#39;t believe we did that lol NEVER AGAIN.<br><br>INSTAGRAM: https://www.instagram.com/HJEVELYN/<br>SHOP OUR MERCH: https://hasisters.com<br>MY LINKS: https://shopmy.us/hjevelyn<br>FOR BUSINESS INQUIRY:...",
    viewCount: 871560,
    viewCountText: "871K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 2485,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Saying Goodbye",
    videoId: "IVp13kSwq9w",
    author: "penguinz0",
    authorId: "UCq6VFHwMzcMXbuKyG7SQYIg",
    authorUrl: "/channel/UCq6VFHwMzcMXbuKyG7SQYIg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/IVp13kSwq9w/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/IVp13kSwq9w/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/IVp13kSwq9w/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/IVp13kSwq9w/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/IVp13kSwq9w/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/IVp13kSwq9w/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/IVp13kSwq9w/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/IVp13kSwq9w/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Our new soap is here https://usecheeky.com/#starter-pack-offer\nCheck out the amazing orchestra here -\nHttps://instagram.com/best_in_brass\nGet Goof Juice https://gamersupps.gg/?ref=moist\nThis...",
    descriptionHtml:
      "Our new soap is here https://usecheeky.com/#starter-pack-offer<br>Check out the amazing orchestra here -<br>Https://instagram.com/best_in_brass<br>Get Goof Juice https://gamersupps.gg/?ref=moist<br>This...",
    viewCount: 5996528,
    viewCountText: "5.9M views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 747,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Game Theory: Poppy Playtime Will END Sooner Than You Think...",
    videoId: "JJWy08bvwQ4",
    author: "The Game Theorists",
    authorId: "UCo_IB5145EVNcf8hw1Kku7w",
    authorUrl: "/channel/UCo_IB5145EVNcf8hw1Kku7w",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/JJWy08bvwQ4/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/JJWy08bvwQ4/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/JJWy08bvwQ4/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/JJWy08bvwQ4/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/JJWy08bvwQ4/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/JJWy08bvwQ4/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/JJWy08bvwQ4/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/JJWy08bvwQ4/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "*Check Out LoreFi!*\nListen To Some Relaxing Beats While Finding LORE! ► https://www.youtube.com/live/exKFenU1KpY?si=41_v44rCzVtceF0c\n\nPoppy Playtime Chapter 4 was FULL of lore, and while...",
    descriptionHtml:
      "*Check Out LoreFi!*<br>Listen To Some Relaxing Beats While Finding LORE! ► https://www.youtube.com/live/exKFenU1KpY?si=41_v44rCzVtceF0c<br><br>Poppy Playtime Chapter 4 was FULL of lore, and while...",
    viewCount: 1309231,
    viewCountText: "1.3M views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 1365,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "The HEIST 4 CORNER Challenge!",
    videoId: "eu7lPERuas0",
    author: "Lachlan",
    authorId: "UCh7EqOZt7EvO2osuKbIlpGg",
    authorUrl: "/channel/UCh7EqOZt7EvO2osuKbIlpGg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/eu7lPERuas0/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/eu7lPERuas0/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/eu7lPERuas0/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/eu7lPERuas0/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/eu7lPERuas0/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/eu7lPERuas0/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/eu7lPERuas0/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/eu7lPERuas0/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Use #CodeLachy - Epic Partner: https://www.fortnite.com/item-shop?creator-code=lachy\n\n@LazarBeam \n@Vindooly \n@Chanzes \n\nJoin the PWR Discord: https://discord.gg/pwr \n🕹️ Red Bull Gaming...",
    descriptionHtml:
      "Use #CodeLachy - Epic Partner: https://www.fortnite.com/item-shop?creator-code=lachy<br><br>@LazarBeam <br>@Vindooly <br>@Chanzes <br><br>Join the PWR Discord: https://discord.gg/pwr <br>🕹️ Red Bull Gaming...",
    viewCount: 642583,
    viewCountText: "642K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 1062,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Valentines Day, Wedding Plans, Home Makeover & Baby 3?",
    videoId: "c-sT7H1BkEs",
    author: "Zoe Sugg",
    authorId: "UCrUbqTCagwsaP2Fmr0p1TsA",
    authorUrl: "/channel/UCrUbqTCagwsaP2Fmr0p1TsA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/c-sT7H1BkEs/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/c-sT7H1BkEs/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/c-sT7H1BkEs/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/c-sT7H1BkEs/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/c-sT7H1BkEs/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/c-sT7H1BkEs/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/c-sT7H1BkEs/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/c-sT7H1BkEs/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Valentines Day, Wedding Plans, Home Makeover & Baby 3?\nAD | Let BetterHelp connect you to a therapist who can support you - all from the comfort of your own home. Visit: https://betterhelp.com/zoes...",
    descriptionHtml:
      "Valentines Day, Wedding Plans, Home Makeover &amp; Baby 3?<br>AD | Let BetterHelp connect you to a therapist who can support you - all from the comfort of your own home. Visit: https://betterhelp.com/zoes...",
    viewCount: 472119,
    viewCountText: "472K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 2045,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Jorjiana - ILBB2 (feat. GloRilla) [Official Video]",
    videoId: "BwnSHGL8D3w",
    author: "Jorjiana ",
    authorId: "UCr2CFKKouASzNA-00QxXXgQ",
    authorUrl: "/channel/UCr2CFKKouASzNA-00QxXXgQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/BwnSHGL8D3w/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/BwnSHGL8D3w/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/BwnSHGL8D3w/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/BwnSHGL8D3w/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/BwnSHGL8D3w/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/BwnSHGL8D3w/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/BwnSHGL8D3w/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/BwnSHGL8D3w/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      'The official video for Jorjiana\'s "ILBB2" feat. @theofficialGloRilla out now!\n\nStream "ILBB2" here:\nhttps://jorjiana.lnk.to/ilbb2\n\nFollow Jorjiana:\nhttps://www.instagram.com/jorjiana219\nhttps://www...',
    descriptionHtml:
      "The official video for Jorjiana&#39;s &quot;ILBB2&quot; feat. @theofficialGloRilla out now!<br><br>Stream &quot;ILBB2&quot; here:<br>https://jorjiana.lnk.to/ilbb2<br><br>Follow Jorjiana:<br>https://www.instagram.com/jorjiana219<br>https://www...",
    viewCount: 530286,
    viewCountText: "530K views",
    published: 1740217051,
    publishedText: "3 days ago",
    lengthSeconds: 138,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "ESCAPE Evil STEPDAD Obby! (Roblox)",
    videoId: "-VASEkkjLF4",
    author: "Cutie The Bunny",
    authorId: "UCAy3SbSn9988JS8KCQreF9A",
    authorUrl: "/channel/UCAy3SbSn9988JS8KCQreF9A",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/-VASEkkjLF4/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/-VASEkkjLF4/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/-VASEkkjLF4/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/-VASEkkjLF4/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/-VASEkkjLF4/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/-VASEkkjLF4/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/-VASEkkjLF4/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/-VASEkkjLF4/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "🌼If you're reading this have an amazing day! :)🌼\n\n💕Make sure to subscribe and press the notification bell for more!💕\n\n🐰Socials: 🐰\n📷 Instagram: https://www.instagram.com/itscuti...",
    descriptionHtml:
      "🌼If you&#39;re reading this have an amazing day! :)🌼<br><br>💕Make sure to subscribe and press the notification bell for more!💕<br><br>🐰Socials: 🐰<br>📷 Instagram: https://www.instagram.com/itscuti...",
    viewCount: 343406,
    viewCountText: "343K views",
    published: 1739785051,
    publishedText: "1 week ago",
    lengthSeconds: 848,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "G Herbo - Still Dangerous (Official Video)",
    videoId: "WGdURQTAlt0",
    author: "G Herbo",
    authorId: "UCV0pIPt5HFfulonNog3cz1A",
    authorUrl: "/channel/UCV0pIPt5HFfulonNog3cz1A",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/WGdURQTAlt0/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/WGdURQTAlt0/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/WGdURQTAlt0/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/WGdURQTAlt0/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/WGdURQTAlt0/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/WGdURQTAlt0/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/WGdURQTAlt0/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/WGdURQTAlt0/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "STREAM 'BIG SWERV 2.0' 🌏♻️: https://gherbo.lnk.to/BigSwerv2.0\nSTREAM 'GREATEST RAPPER ALIVE' ON THE G HERBO APP: https://creators.myseat.com/gherbo\n\nSubscribe to G Herbo's official channel...",
    descriptionHtml:
      "STREAM &#39;BIG SWERV 2.0&#39; 🌏♻️: https://gherbo.lnk.to/BigSwerv2.0<br>STREAM &#39;GREATEST RAPPER ALIVE&#39; ON THE G HERBO APP: https://creators.myseat.com/gherbo<br><br>Subscribe to G Herbo&#39;s official channel...",
    viewCount: 901913,
    viewCountText: "901K views",
    published: 1740217051,
    publishedText: "3 days ago",
    lengthSeconds: 155,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "First Ever Trick Shot World Championship!",
    videoId: "jvUX3ocBSCk",
    author: "Dude Perfect",
    authorId: "UCRijo3ddMTht_IHyNSNXpNQ",
    authorUrl: "/channel/UCRijo3ddMTht_IHyNSNXpNQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/jvUX3ocBSCk/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/jvUX3ocBSCk/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/jvUX3ocBSCk/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/jvUX3ocBSCk/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/jvUX3ocBSCk/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/jvUX3ocBSCk/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/jvUX3ocBSCk/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/jvUX3ocBSCk/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Welcome to the 1st Annual TRICK SHOT WORLD CHAMPIONSHIP! We invited 8 of the world's best trick shot teams to a competition that gets harder and harder until only one is left standing. Who...",
    descriptionHtml:
      "Welcome to the 1st Annual TRICK SHOT WORLD CHAMPIONSHIP! We invited 8 of the world&#39;s best trick shot teams to a competition that gets harder and harder until only one is left standing. Who...",
    viewCount: 2587961,
    viewCountText: "2.5M views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 1798,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "AMP GOT TALENT",
    videoId: "Ojq81Rz00Og",
    author: "AMP",
    authorId: "UCJbYdyufHR-cxOuY96KIoqA",
    authorUrl: "/channel/UCJbYdyufHR-cxOuY96KIoqA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/Ojq81Rz00Og/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/Ojq81Rz00Og/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/Ojq81Rz00Og/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/Ojq81Rz00Og/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/Ojq81Rz00Og/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/Ojq81Rz00Og/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/Ojq81Rz00Og/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/Ojq81Rz00Og/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "TONE SHOP LIVE NOW ➡️  https://tone.shop  \n\nFOLLOW 🌐 TONE 🌐 ON SOCIALS\nhttps://www.instagram.com/toneexclusive/\nhttps://x.com/TONEexclusive\nhttps://www.tiktok.com/@toneexclusive?lang=en...",
    descriptionHtml:
      "TONE SHOP LIVE NOW ➡️  https://tone.shop  <br><br>FOLLOW 🌐 TONE 🌐 ON SOCIALS<br>https://www.instagram.com/toneexclusive/<br>https://x.com/TONEexclusive<br>https://www.tiktok.com/@toneexclusive?lang=en...",
    viewCount: 1617583,
    viewCountText: "1.6M views",
    published: 1740217051,
    publishedText: "3 days ago",
    lengthSeconds: 1359,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Season 2 is Cancelled",
    videoId: "05Os29dNfz0",
    author: "penguinz0",
    authorId: "UCq6VFHwMzcMXbuKyG7SQYIg",
    authorUrl: "/channel/UCq6VFHwMzcMXbuKyG7SQYIg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/05Os29dNfz0/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/05Os29dNfz0/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/05Os29dNfz0/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/05Os29dNfz0/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/05Os29dNfz0/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/05Os29dNfz0/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/05Os29dNfz0/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/05Os29dNfz0/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Our new soap is here https://usecheeky.com/#starter-pack-offer\nGet Goof Juice https://gamersupps.gg/?ref=moist\nThis is the greatest season 3 announcement of All Time\nGet a Starforge PC https://star...",
    descriptionHtml:
      "Our new soap is here https://usecheeky.com/#starter-pack-offer<br>Get Goof Juice https://gamersupps.gg/?ref=moist<br>This is the greatest season 3 announcement of All Time<br>Get a Starforge PC https://star...",
    viewCount: 3578374,
    viewCountText: "3.5M views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 558,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "Fisch Mariana's Veil Update Full Guide | How To Get Submarine & Crystal | Rod & Magma (Roblox Fisch)",
    videoId: "Ixj6pbyV_Ac",
    author: "DatBrian",
    authorId: "UCMvBbCUnlCeoaiQabtJ_sQQ",
    authorUrl: "/channel/UCMvBbCUnlCeoaiQabtJ_sQQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/Ixj6pbyV_Ac/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/Ixj6pbyV_Ac/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/Ixj6pbyV_Ac/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/Ixj6pbyV_Ac/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/Ixj6pbyV_Ac/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/Ixj6pbyV_Ac/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/Ixj6pbyV_Ac/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/Ixj6pbyV_Ac/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Complete Marian's Veil Quest Event! Magma Leviathan Secret Fish, New Rod of Zenith for 10,000,000, Crystal for Submarine Upgrade in Roblox Fisch with Quest of many stages.  Also Crowned Anglerfish...",
    descriptionHtml:
      "Complete Marian&#39;s Veil Quest Event! Magma Leviathan Secret Fish, New Rod of Zenith for 10,000,000, Crystal for Submarine Upgrade in Roblox Fisch with Quest of many stages.  Also Crowned Anglerfish...",
    viewCount: 444537,
    viewCountText: "444K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 1143,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Renovating The New Summer Garden",
    videoId: "Y5hetUv7tKE",
    author: "Alfie Deyes Vlogs",
    authorId: "UCnEn0EUV13IR-_TK7fiIp3g",
    authorUrl: "/channel/UCnEn0EUV13IR-_TK7fiIp3g",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/Y5hetUv7tKE/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/Y5hetUv7tKE/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/Y5hetUv7tKE/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/Y5hetUv7tKE/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/Y5hetUv7tKE/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/Y5hetUv7tKE/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/Y5hetUv7tKE/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/Y5hetUv7tKE/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "► Renovating The New Summer Garden\n• Ad • Subscribe now and get a FREE bottle of Vitamin D & 5 Free AG1 Travel Packs with your first subscription. Go to https://drinkag1.com/alfiedeyes...",
    descriptionHtml:
      "► Renovating The New Summer Garden<br>• Ad • Subscribe now and get a FREE bottle of Vitamin D &amp; 5 Free AG1 Travel Packs with your first subscription. Go to https://drinkag1.com/alfiedeyes...",
    viewCount: 183313,
    viewCountText: "183K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 1696,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "Is the title race all over? | Keane, Carra, Sturridge & Micah REACT to Liverpool win vs Man City",
    videoId: "j6_Jp1QjQto",
    author: "Sky Sports Premier League",
    authorId: "UCNAf1k0yIjyGu3k9BwAg3lg",
    authorUrl: "/channel/UCNAf1k0yIjyGu3k9BwAg3lg",
    authorVerified: false,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/j6_Jp1QjQto/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/j6_Jp1QjQto/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/j6_Jp1QjQto/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/j6_Jp1QjQto/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/j6_Jp1QjQto/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/j6_Jp1QjQto/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/j6_Jp1QjQto/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/j6_Jp1QjQto/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "► Subscribe to Sky Sports Premier League: https://bit.ly/SubscribeSkySportsPL\n► Watch Sky Sports: https://bit.ly/BuySkySports\n\nJamie Carragher, Roy Keane, Micah Richards and Daniel Sturridge...",
    descriptionHtml:
      "► Subscribe to Sky Sports Premier League: https://bit.ly/SubscribeSkySportsPL<br>► Watch Sky Sports: https://bit.ly/BuySkySports<br><br>Jamie Carragher, Roy Keane, Micah Richards and Daniel Sturridge...",
    viewCount: 950784,
    viewCountText: "950K views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 652,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Koenigsegg Jesko v Bugatti Chiron Super Sport: DRAG RACE",
    videoId: "5BBTghKXjDE",
    author: "carwow",
    authorId: "UCUhFaUpnq31m6TNX2VKVSVA",
    authorUrl: "/channel/UCUhFaUpnq31m6TNX2VKVSVA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/5BBTghKXjDE/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/5BBTghKXjDE/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/5BBTghKXjDE/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/5BBTghKXjDE/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/5BBTghKXjDE/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/5BBTghKXjDE/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/5BBTghKXjDE/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/5BBTghKXjDE/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "We'd like to say a huge thank you to the Al Ain Municipality (https://www.instagram.com/alainmun) and Tilal Swaihan (https://www.instagram.com/tilalswaihan) for providing the amazing drag strip,...",
    descriptionHtml:
      "We&#39;d like to say a huge thank you to the Al Ain Municipality (https://www.instagram.com/alainmun) and Tilal Swaihan (https://www.instagram.com/tilalswaihan) for providing the amazing drag strip,...",
    viewCount: 3452632,
    viewCountText: "3.4M views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 541,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "JENNIE, Doechii - ExtraL (Official Video)",
    videoId: "eWAdpUyzCkI",
    author: "JENNIE",
    authorId: "UCNYi_zGmR519r5gYdOKLTjQ",
    authorUrl: "/channel/UCNYi_zGmR519r5gYdOKLTjQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/eWAdpUyzCkI/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/eWAdpUyzCkI/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/eWAdpUyzCkI/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/eWAdpUyzCkI/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/eWAdpUyzCkI/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/eWAdpUyzCkI/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/eWAdpUyzCkI/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/eWAdpUyzCkI/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Official music video for “ExtraL” by JENNIE & Doechii out now: https://jennie.lnk.to/extral\n\n‘Ruby’ Album Pre-Order Now: https://jennie.lnk.to/ruby\nOut March 7th\n\nDirected by Cole Bennett...",
    descriptionHtml:
      "Official music video for “ExtraL” by JENNIE &amp; Doechii out now: https://jennie.lnk.to/extral<br><br>‘Ruby’ Album Pre-Order Now: https://jennie.lnk.to/ruby<br>Out March 7th<br><br>Directed by Cole Bennett...",
    viewCount: 14843113,
    viewCountText: "14M views",
    published: 1740130651,
    publishedText: "4 days ago",
    lengthSeconds: 221,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Alex Warren - Ordinary (Official Music Video)",
    videoId: "u2ah9tWTkmk",
    author: "Alex Warren",
    authorId: "UCX2Pm1JoWF3chsVOR9e1hbQ",
    authorUrl: "/channel/UCX2Pm1JoWF3chsVOR9e1hbQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/u2ah9tWTkmk/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/u2ah9tWTkmk/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/u2ah9tWTkmk/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/u2ah9tWTkmk/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/u2ah9tWTkmk/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/u2ah9tWTkmk/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/u2ah9tWTkmk/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/u2ah9tWTkmk/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      '"Ordinary" is out now! \n\nStream/Download: http://alexwarren.lnk.to/ordinary\n\nLyrics:\nVERSE 1\nThey say the holy waters watered down and this town\'s lost it faith\nOur colors will fade Eventually...',
    descriptionHtml:
      "&quot;Ordinary&quot; is out now! <br><br>Stream/Download: http://alexwarren.lnk.to/ordinary<br><br>Lyrics:<br>VERSE 1<br>They say the holy waters watered down and this town&#39;s lost it faith<br>Our colors will fade Eventually...",
    viewCount: 477322,
    viewCountText: "477K views",
    published: 1740217051,
    publishedText: "3 days ago",
    lengthSeconds: 187,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "BIG PARKER KO! 💥 Joseph Parker vs Martin Bakole | Heavyweight title bout HIGHLIGHTS!",
    videoId: "7S8obWDD-u4",
    author: "Sky Sports Boxing",
    authorId: "UC_JQGBtA7P0RwkRxd7xpJcA",
    authorUrl: "/channel/UC_JQGBtA7P0RwkRxd7xpJcA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/7S8obWDD-u4/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/7S8obWDD-u4/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/7S8obWDD-u4/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/7S8obWDD-u4/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/7S8obWDD-u4/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/7S8obWDD-u4/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/7S8obWDD-u4/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/7S8obWDD-u4/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "WATCH BETERBIEV VS BIVOL 2 ► https://bit.ly/BeterbievBivol-2\n► Subscribe to Sky Sports Boxing: http://bit.ly/SSBoxingSub\n\nWatch Joseph Parker take on Martin Bakole in Saudi Arabia for WBO...",
    descriptionHtml:
      "WATCH BETERBIEV VS BIVOL 2 ► https://bit.ly/BeterbievBivol-2<br>► Subscribe to Sky Sports Boxing: http://bit.ly/SSBoxingSub<br><br>Watch Joseph Parker take on Martin Bakole in Saudi Arabia for WBO...",
    viewCount: 579640,
    viewCountText: "579K views",
    published: 1740303451,
    publishedText: "2 days ago",
    lengthSeconds: 90,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Meeting Dale Earnhardt Jr. and Touring his Race Shop",
    videoId: "jeS13DXNxAU",
    author: "Cleetus2 McFarland",
    authorId: "UCMJbbWyIziiUamP5JKK9yAA",
    authorUrl: "/channel/UCMJbbWyIziiUamP5JKK9yAA",
    authorVerified: false,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/jeS13DXNxAU/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/jeS13DXNxAU/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/jeS13DXNxAU/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/jeS13DXNxAU/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/jeS13DXNxAU/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/jeS13DXNxAU/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/jeS13DXNxAU/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/jeS13DXNxAU/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description: "In today's video, we literally did it for Dale!",
    descriptionHtml: "In today&#39;s video, we literally did it for Dale!",
    viewCount: 893502,
    viewCountText: "893K views",
    published: 1740217051,
    publishedText: "3 days ago",
    lengthSeconds: 818,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Q&A with my baby daddy",
    videoId: "5w_FqCFbmEM",
    author: "Wendy Ortiz",
    authorId: "UCe17iPJ94iVHEUlcX6OGLsQ",
    authorUrl: "/channel/UCe17iPJ94iVHEUlcX6OGLsQ",
    authorVerified: false,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/5w_FqCFbmEM/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/5w_FqCFbmEM/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/5w_FqCFbmEM/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/5w_FqCFbmEM/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/5w_FqCFbmEM/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/5w_FqCFbmEM/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/5w_FqCFbmEM/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/5w_FqCFbmEM/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Thank you guys for watching\nFollow me on my socials!\nInsta: https://www.instagram.com/wendolynortizz?igsh=cWF3OGluYXVpejRp&utm_source=qr\nTik Tok: https://www.tiktok.com/@wendolynortiz...\n\n💌...",
    descriptionHtml:
      "Thank you guys for watching<br>Follow me on my socials!<br>Insta: https://www.instagram.com/wendolynortizz?igsh=cWF3OGluYXVpejRp&amp;utm_source=qr<br>Tik Tok: https://www.tiktok.com/@wendolynortiz...<br><br>💌...",
    viewCount: 468364,
    viewCountText: "468K views",
    published: 1740217051,
    publishedText: "3 days ago",
    lengthSeconds: 1302,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "THE FOOD CHALLENGE THAT ROY KEANE ATTEMPTED...IT MADE HIM ANGRY | BeardMeatsFood",
    videoId: "wkJqquhtSa8",
    author: "BeardMeatsFood",
    authorId: "UCc9CjaAjsMMvaSghZB7-Kog",
    authorUrl: "/channel/UCc9CjaAjsMMvaSghZB7-Kog",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/wkJqquhtSa8/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/wkJqquhtSa8/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/wkJqquhtSa8/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/wkJqquhtSa8/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/wkJqquhtSa8/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/wkJqquhtSa8/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/wkJqquhtSa8/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/wkJqquhtSa8/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "In this week's episode we're at the legendary British institution that is Harry Ramsden's...a fish and chip shop which has been in operation for almost an entire century...\n\nWe're here to take...",
    descriptionHtml:
      "In this week&#39;s episode we&#39;re at the legendary British institution that is Harry Ramsden&#39;s...a fish and chip shop which has been in operation for almost an entire century...<br><br>We&#39;re here to take...",
    viewCount: 2041169,
    viewCountText: "2M views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 556,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "HARRIS DICKINSON | CHICKEN SHOP DATE",
    videoId: "q2ob25kfLKs",
    author: "Amelia Dimoldenberg",
    authorId: "UCyQ-DUV6lZgoL8wiPusYiUg",
    authorUrl: "/channel/UCyQ-DUV6lZgoL8wiPusYiUg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/q2ob25kfLKs/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/q2ob25kfLKs/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/q2ob25kfLKs/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/q2ob25kfLKs/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/q2ob25kfLKs/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/q2ob25kfLKs/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/q2ob25kfLKs/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/q2ob25kfLKs/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Amelia meets Harris Dickinson for a date in a Chicken Shop.\n\nCreated and Written by Amelia Dimoldenberg\nDirector: Amelia Dimoldenberg\n\nCo-Written by Albie Swingler\n\nExecutive Producers: Liv...",
    descriptionHtml:
      "Amelia meets Harris Dickinson for a date in a Chicken Shop.<br><br>Created and Written by Amelia Dimoldenberg<br>Director: Amelia Dimoldenberg<br><br>Co-Written by Albie Swingler<br><br>Executive Producers: Liv...",
    viewCount: 1172873,
    viewCountText: "1.1M views",
    published: 1740217051,
    publishedText: "3 days ago",
    lengthSeconds: 562,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Kendrick Lamar's Apple Music Super Bowl Halftime Show",
    videoId: "KDorKy-13ak",
    author: "NFL",
    authorId: "UCDVYQ4Zhbm3S2dlz7P1GBDg",
    authorUrl: "/channel/UCDVYQ4Zhbm3S2dlz7P1GBDg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/KDorKy-13ak/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/KDorKy-13ak/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/KDorKy-13ak/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/KDorKy-13ak/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/KDorKy-13ak/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/KDorKy-13ak/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/KDorKy-13ak/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/KDorKy-13ak/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Watch hip-hop’s MVP put on an epic performance at the Apple Music Super Bowl LIX Halftime Show. Plus, get six months of Apple Music for only $2.99 and hear his latest tracks in Spatial Audio:...",
    descriptionHtml:
      "Watch hip-hop’s MVP put on an epic performance at the Apple Music Super Bowl LIX Halftime Show. Plus, get six months of Apple Music for only $2.99 and hear his latest tracks in Spatial Audio:...",
    viewCount: 85728940,
    viewCountText: "85M views",
    published: 1739266651,
    publishedText: "2 weeks ago",
    lengthSeconds: 805,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "I Survived Alone in Top 3 Haunted Prisons",
    videoId: "KXNOWJezRyY",
    author: "Sam and Colby",
    authorId: "UCg3gzldyhCHJjY7AWWTNPPA",
    authorUrl: "/channel/UCg3gzldyhCHJjY7AWWTNPPA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/KXNOWJezRyY/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/KXNOWJezRyY/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/KXNOWJezRyY/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/KXNOWJezRyY/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/KXNOWJezRyY/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/KXNOWJezRyY/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/KXNOWJezRyY/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/KXNOWJezRyY/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Our sponsor BetterHelp can connect you to a therapist who can support you from the comfort of your own home. Visit https://betterhelp.com/samandcolby for a special discount on your first month!...",
    descriptionHtml:
      "Our sponsor BetterHelp can connect you to a therapist who can support you from the comfort of your own home. Visit https://betterhelp.com/samandcolby for a special discount on your first month!...",
    viewCount: 5001152,
    viewCountText: "5M views",
    published: 1739785051,
    publishedText: "1 week ago",
    lengthSeconds: 5928,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Riley Green - Worst Way",
    videoId: "OkktfeAR-Rk",
    author: "Riley Green",
    authorId: "UCSaJ4_YK4luUvkc9lDrwfKg",
    authorUrl: "/channel/UCSaJ4_YK4luUvkc9lDrwfKg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/OkktfeAR-Rk/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/OkktfeAR-Rk/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/OkktfeAR-Rk/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/OkktfeAR-Rk/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/OkktfeAR-Rk/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/OkktfeAR-Rk/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/OkktfeAR-Rk/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/OkktfeAR-Rk/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Music video by Riley Green performing Worst Way.© 2025 Nashville Harbor Records & Entertainment, LLC, under exclusive license to Big Machine Label Group, LLC",
    descriptionHtml:
      "Music video by Riley Green performing Worst Way.© 2025 Nashville Harbor Records &amp; Entertainment, LLC, under exclusive license to Big Machine Label Group, LLC",
    viewCount: 3776996,
    viewCountText: "3.7M views",
    published: 1739439451,
    publishedText: "1 week ago",
    lengthSeconds: 225,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "The Chosen: Last Supper Official Trailer (Season 5)",
    videoId: "5CVj41dtkIA",
    author: "The Chosen",
    authorId: "UCBXOFnNTULFaAnj24PAeblg",
    authorUrl: "/channel/UCBXOFnNTULFaAnj24PAeblg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/5CVj41dtkIA/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/5CVj41dtkIA/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/5CVj41dtkIA/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/5CVj41dtkIA/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/5CVj41dtkIA/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/5CVj41dtkIA/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/5CVj41dtkIA/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/5CVj41dtkIA/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "The Chosen Season 5 in theaters March 28\n---\nI think I'm more excited to deliver this trailer than any we've done. Which isn't a coincidence because I feel the same way about Season Five as...",
    descriptionHtml:
      "The Chosen Season 5 in theaters March 28<br>---<br>I think I&#39;m more excited to deliver this trailer than any we&#39;ve done. Which isn&#39;t a coincidence because I feel the same way about Season Five as...",
    viewCount: 2231889,
    viewCountText: "2.2M views",
    published: 1740130651,
    publishedText: "4 days ago",
    lengthSeconds: 159,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "John Oliver: The 60 Minutes Interview",
    videoId: "Lzvxso_EBTM",
    author: "60 Minutes",
    authorId: "UCsN32BtMd0IoByjJRNF12cw",
    authorUrl: "/channel/UCsN32BtMd0IoByjJRNF12cw",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/Lzvxso_EBTM/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/Lzvxso_EBTM/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/Lzvxso_EBTM/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/Lzvxso_EBTM/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/Lzvxso_EBTM/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/Lzvxso_EBTM/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/Lzvxso_EBTM/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/Lzvxso_EBTM/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      'John Oliver has been unleashing his searing, satirical take on the U.S., his adopted homeland, for years. The comedian plans to continue for "as long as America has systemic problems."\n\n"60...',
    descriptionHtml:
      "John Oliver has been unleashing his searing, satirical take on the U.S., his adopted homeland, for years. The comedian plans to continue for &quot;as long as America has systemic problems.&quot;<br><br>&quot;60...",
    viewCount: 1076059,
    viewCountText: "1M views",
    published: 1740389851,
    publishedText: "1 day ago",
    lengthSeconds: 814,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Why Kendrick Lamar's Super Bowl Halftime Show Is America",
    videoId: "TgKsG6NZSIo",
    author: "Josh Johnson",
    authorId: "UCLuYADJ6hESLHX87JnsGbjA",
    authorUrl: "/channel/UCLuYADJ6hESLHX87JnsGbjA",
    authorVerified: false,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/TgKsG6NZSIo/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/TgKsG6NZSIo/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/TgKsG6NZSIo/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/TgKsG6NZSIo/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/TgKsG6NZSIo/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/TgKsG6NZSIo/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/TgKsG6NZSIo/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/TgKsG6NZSIo/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Just announced the first half of my 2025 tour! Check out https://joshjohnsoncomedy.com/tour for dates and to sign up for the waitlist to be notified when I'm performing in your city.\n\nHi Friends,...",
    descriptionHtml:
      "Just announced the first half of my 2025 tour! Check out https://joshjohnsoncomedy.com/tour for dates and to sign up for the waitlist to be notified when I&#39;m performing in your city.<br><br>Hi Friends,...",
    viewCount: 2164955,
    viewCountText: "2.1M views",
    published: 1739957851,
    publishedText: "6 days ago",
    lengthSeconds: 3039,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "kwn - worst behaviour (Official Video) ft. Kehlani",
    videoId: "VHsJCGh4gr4",
    author: "kwn",
    authorId: "UCYJZgZnRR_SjmdfaZEzIlgQ",
    authorUrl: "/channel/UCYJZgZnRR_SjmdfaZEzIlgQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/VHsJCGh4gr4/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/VHsJCGh4gr4/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/VHsJCGh4gr4/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/VHsJCGh4gr4/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/VHsJCGh4gr4/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/VHsJCGh4gr4/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/VHsJCGh4gr4/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/VHsJCGh4gr4/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      'stream "worst behaviour" here: https://kwn.lnk.to/wbr\n\nfollow me here:\ntiktok:https://www.tiktok.com/@kwnway\ninstagram:https://www.instagram.com/kwnway/\ntwitter:https://x.com/kwnway\nyoutube:https:/...',
    descriptionHtml:
      "stream &quot;worst behaviour&quot; here: https://kwn.lnk.to/wbr<br><br>follow me here:<br>tiktok:https://www.tiktok.com/@kwnway<br>instagram:https://www.instagram.com/kwnway/<br>twitter:https://x.com/kwnway<br>youtube:https:/...",
    viewCount: 3498537,
    viewCountText: "3.4M views",
    published: 1739612251,
    publishedText: "1 week ago",
    lengthSeconds: 232,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "Selena Gomez, benny blanco, Gracie Abrams - Call Me When You Break Up (Official Video)",
    videoId: "cFHElRaF19s",
    author: "Selena Gomez",
    authorId: "UCPNxhDvTcytIdvwXWAm43cA",
    authorUrl: "/channel/UCPNxhDvTcytIdvwXWAm43cA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/cFHElRaF19s/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/cFHElRaF19s/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/cFHElRaF19s/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/cFHElRaF19s/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/cFHElRaF19s/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/cFHElRaF19s/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/cFHElRaF19s/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/cFHElRaF19s/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Selena Gomez, benny blanco, Gracie Abrams - Call Me When You Break Up (Official Video) \n \nPre-order “I Said I Love You First”, out March 21: https://sgxbb.lnk.to/ISaidILoveYouFirst  \nShop...",
    descriptionHtml:
      "Selena Gomez, benny blanco, Gracie Abrams - Call Me When You Break Up (Official Video) <br> <br>Pre-order “I Said I Love You First”, out March 21: https://sgxbb.lnk.to/ISaidILoveYouFirst  <br>Shop...",
    viewCount: 2767262,
    viewCountText: "2.7M views",
    published: 1740130651,
    publishedText: "4 days ago",
    lengthSeconds: 129,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "FAILED LEGO ITEMS...",
    videoId: "B98H1DZwcBk",
    author: "TD BRICKS",
    authorId: "UCUU3GdGuQshZFRGnxAPBf_w",
    authorUrl: "/channel/UCUU3GdGuQshZFRGnxAPBf_w",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/B98H1DZwcBk/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/B98H1DZwcBk/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/B98H1DZwcBk/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/B98H1DZwcBk/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/B98H1DZwcBk/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/B98H1DZwcBk/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/B98H1DZwcBk/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/B98H1DZwcBk/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Submit a banger video idea here: https://forms.gle/GXK3uwLSuGKPEJzc9\n\nTo see what I do behind the scenes or outside my videos, follow me on Instagram\n\n📸 Channel Instagram: https://www.instagram....",
    descriptionHtml:
      "Submit a banger video idea here: https://forms.gle/GXK3uwLSuGKPEJzc9<br><br>To see what I do behind the scenes or outside my videos, follow me on Instagram<br><br>📸 Channel Instagram: https://www.instagram....",
    viewCount: 20128470,
    viewCountText: "20M views",
    published: 1739266651,
    publishedText: "2 weeks ago",
    lengthSeconds: 573,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Sabrina Carpenter - Please Please Please ft. Dolly Parton",
    videoId: "YiQ7qiL73aI",
    author: "Sabrina Carpenter",
    authorId: "UCPKWE1H6xhxwPlqUlKgHb_w",
    authorUrl: "/channel/UCPKWE1H6xhxwPlqUlKgHb_w",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/YiQ7qiL73aI/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/YiQ7qiL73aI/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/YiQ7qiL73aI/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/YiQ7qiL73aI/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/YiQ7qiL73aI/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/YiQ7qiL73aI/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/YiQ7qiL73aI/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/YiQ7qiL73aI/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Sabrina Carpenter - Please Please Please (feat. Dolly Parton)\n\nListen to Short n’ Sweet Deluxe, out now: https://sabrinacarpenter.lnk.to/ShortNSweetDeluxe\nWatch all Short n’ Sweet videos...",
    descriptionHtml:
      "Sabrina Carpenter - Please Please Please (feat. Dolly Parton)<br><br>Listen to Short n’ Sweet Deluxe, out now: https://sabrinacarpenter.lnk.to/ShortNSweetDeluxe<br>Watch all Short n’ Sweet videos...",
    viewCount: 9236076,
    viewCountText: "9.2M views",
    published: 1739525851,
    publishedText: "1 week ago",
    lengthSeconds: 188,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "Fortnite Battle Royale Chapter 6 Season 2 - LAWLESS | Cinematic Gameplay Trailer",
    videoId: "66eAN56g7D8",
    author: "Fortnite",
    authorId: "UClG8odDC8TS6Zpqk9CGVQiQ",
    authorUrl: "/channel/UClG8odDC8TS6Zpqk9CGVQiQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/66eAN56g7D8/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/66eAN56g7D8/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/66eAN56g7D8/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/66eAN56g7D8/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/66eAN56g7D8/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/66eAN56g7D8/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/66eAN56g7D8/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/66eAN56g7D8/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Big Dill just dropped his newest single, check out the C6S2 season launch trailer featuring 'Runamok'! \nRansack Fletcher Kane’s banks, pull off a train heist and make an explosive getaway...",
    descriptionHtml:
      "Big Dill just dropped his newest single, check out the C6S2 season launch trailer featuring &#39;Runamok&#39;! <br>Ransack Fletcher Kane’s banks, pull off a train heist and make an explosive getaway...",
    viewCount: 11589005,
    viewCountText: "11M views",
    published: 1739957851,
    publishedText: "6 days ago",
    lengthSeconds: 104,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Neton Vega, Peso Pluma - Morena (Video Oficial)",
    videoId: "O0DgxEW0vGQ",
    author: "Neton Vega",
    authorId: "UCjZH6k7eSRdcNOOUMTMWyBg",
    authorUrl: "/channel/UCjZH6k7eSRdcNOOUMTMWyBg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/O0DgxEW0vGQ/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/O0DgxEW0vGQ/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/O0DgxEW0vGQ/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/O0DgxEW0vGQ/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/O0DgxEW0vGQ/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/O0DgxEW0vGQ/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/O0DgxEW0vGQ/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/O0DgxEW0vGQ/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Provided to YouTube by JosaRecords\n\nMorena · Neton Vega Ft @pesopluma_oficial \n\n℗ 2025 JosaRecords\n\nReleased on: 2025-02-14\n\nProducer: Luis Ernesto Vega Carvajal \nProducer: Jesus Josafat...",
    descriptionHtml:
      "Provided to YouTube by JosaRecords<br><br>Morena · Neton Vega Ft @pesopluma_oficial <br><br>℗ 2025 JosaRecords<br><br>Released on: 2025-02-14<br><br>Producer: Luis Ernesto Vega Carvajal <br>Producer: Jesus Josafat...",
    viewCount: 7125993,
    viewCountText: "7.1M views",
    published: 1739612251,
    publishedText: "1 week ago",
    lengthSeconds: 196,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "Human Torch: Hottest Hero In Town | Character Reveal | Marvel Rivals",
    videoId: "6ORBFXYlQ3U",
    author: "Marvel Rivals",
    authorId: "UCWzmOSSiSPbVnVu3ZAyDx2w",
    authorUrl: "/channel/UCWzmOSSiSPbVnVu3ZAyDx2w",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/6ORBFXYlQ3U/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/6ORBFXYlQ3U/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/6ORBFXYlQ3U/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/6ORBFXYlQ3U/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/6ORBFXYlQ3U/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/6ORBFXYlQ3U/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/6ORBFXYlQ3U/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/6ORBFXYlQ3U/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Johnny Storm is the Fantastic Four's resident hothead heartthrob, always managing to look cool while turning up the heat! Johnny joined his sister on a wild experimental space mission in the...",
    descriptionHtml:
      "Johnny Storm is the Fantastic Four&#39;s resident hothead heartthrob, always managing to look cool while turning up the heat! Johnny joined his sister on a wild experimental space mission in the...",
    viewCount: 2895253,
    viewCountText: "2.8M views",
    published: 1739957851,
    publishedText: "6 days ago",
    lengthSeconds: 59,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "PARTYNEXTDOOR & DRAKE - CN TOWER",
    videoId: "0gI8phQgRss",
    author: "PARTYNEXTDOOR",
    authorId: "UCz9f4llEeQyb5F2_p9CirYw",
    authorUrl: "/channel/UCz9f4llEeQyb5F2_p9CirYw",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/0gI8phQgRss/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/0gI8phQgRss/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/0gI8phQgRss/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/0gI8phQgRss/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/0gI8phQgRss/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/0gI8phQgRss/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/0gI8phQgRss/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/0gI8phQgRss/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Listen to $ome $exy $ongs 4 U: https://ovo-partynextdoor.ffm.to/4u\n\nFOLLOW PARTYNEXTDOOR: \nWebsite: https://partyomo.com/\nTikTok: https://www.tiktok.com/@partynextdoor \nInstagram: https://www.insta...",
    descriptionHtml:
      "Listen to $ome $exy $ongs 4 U: https://ovo-partynextdoor.ffm.to/4u<br><br>FOLLOW PARTYNEXTDOOR: <br>Website: https://partyomo.com/<br>TikTok: https://www.tiktok.com/@partynextdoor <br>Instagram: https://www.insta...",
    viewCount: 3136805,
    viewCountText: "3.1M views",
    published: 1739525851,
    publishedText: "1 week ago",
    lengthSeconds: 242,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Leon Thomas: Tiny Desk Concert",
    videoId: "jNnsTNZR2bU",
    author: "NPR Music",
    authorId: "UC4eYXhJI4-7wSWc8UNRwD4A",
    authorUrl: "/channel/UC4eYXhJI4-7wSWc8UNRwD4A",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/jNnsTNZR2bU/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/jNnsTNZR2bU/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/jNnsTNZR2bU/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/jNnsTNZR2bU/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/jNnsTNZR2bU/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/jNnsTNZR2bU/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/jNnsTNZR2bU/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/jNnsTNZR2bU/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Bobby Carter | February 20, 2025\nOn the morning of Leon Thomas' Tiny Desk concert, many NPR staffers assumed the show was postponed due to a snowstorm in the D.C. area. Not only did he proactively...",
    descriptionHtml:
      "Bobby Carter | February 20, 2025<br>On the morning of Leon Thomas&#39; Tiny Desk concert, many NPR staffers assumed the show was postponed due to a snowstorm in the D.C. area. Not only did he proactively...",
    viewCount: 939541,
    viewCountText: "939K views",
    published: 1740130651,
    publishedText: "4 days ago",
    lengthSeconds: 1185,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Hurricane Wisdom - Drugs Callin (Official Music Video)",
    videoId: "Ky0-yViK-MU",
    author: "Hurricane Wisdom",
    authorId: "UC-tAx6tWF3x-7COrjnpV4Zg",
    authorUrl: "/channel/UC-tAx6tWF3x-7COrjnpV4Zg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/Ky0-yViK-MU/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/Ky0-yViK-MU/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/Ky0-yViK-MU/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/Ky0-yViK-MU/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/Ky0-yViK-MU/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/Ky0-yViK-MU/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/Ky0-yViK-MU/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/Ky0-yViK-MU/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      'Stream Hurricane Wisdom\'s "Perfect Storm" on All Platforms! \nhttps://openshift.vyd.co/PerfectStorm\nFollow on Instagram: http://www.instagram.com/hurricane.wisdom\nTikTok: https://www.tiktok.com/@hur...',
    descriptionHtml:
      "Stream Hurricane Wisdom&#39;s &quot;Perfect Storm&quot; on All Platforms! <br>https://openshift.vyd.co/PerfectStorm<br>Follow on Instagram: http://www.instagram.com/hurricane.wisdom<br>TikTok: https://www.tiktok.com/@hur...",
    viewCount: 2021473,
    viewCountText: "2M views",
    published: 1739439451,
    publishedText: "1 week ago",
    lengthSeconds: 147,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Open Thoughts With Druski",
    videoId: "fn_LO1NlKkk",
    author: "Open Thoughts",
    authorId: "UCNWHllkNIWv1MSvKcOzLsow",
    authorUrl: "/channel/UCNWHllkNIWv1MSvKcOzLsow",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/fn_LO1NlKkk/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/fn_LO1NlKkk/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/fn_LO1NlKkk/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/fn_LO1NlKkk/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/fn_LO1NlKkk/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/fn_LO1NlKkk/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/fn_LO1NlKkk/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/fn_LO1NlKkk/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "This video is brought to you by PrizePicks \nhttps://prizepicks.onelink.me/ivHR/FunnyMarco\n\nDragon Fire Sparkling Wine is Available At\nhttps://dragonfirewinesofficial.com/\n\nDruski sits down...",
    descriptionHtml:
      "This video is brought to you by PrizePicks <br>https://prizepicks.onelink.me/ivHR/FunnyMarco<br><br>Dragon Fire Sparkling Wine is Available At<br>https://dragonfirewinesofficial.com/<br><br>Druski sits down...",
    viewCount: 1546051,
    viewCountText: "1.5M views",
    published: 1739957851,
    publishedText: "6 days ago",
    lengthSeconds: 2658,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title:
      "VonOff1700 - Turnt In Real Life (ft. Rio Da Yung OG) (Official Video)",
    videoId: "XtdWTxTGDRg",
    author: "VonOff1700",
    authorId: "UC023sB-A8vI7F3ByKMF9BGA",
    authorUrl: "/channel/UC023sB-A8vI7F3ByKMF9BGA",
    authorVerified: false,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/XtdWTxTGDRg/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/XtdWTxTGDRg/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/XtdWTxTGDRg/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/XtdWTxTGDRg/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/XtdWTxTGDRg/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/XtdWTxTGDRg/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/XtdWTxTGDRg/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/XtdWTxTGDRg/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Watch the Official Video for 'Turnt In Real Life' by VonOff1700 & Rio Da Young OG\n\n#TurntUpNotBurntUp Out Now\nhttps://VonOff1700.lnk...\n\nFollow on Socials ‼️\nInstagram - https://www.instagram.c...",
    descriptionHtml:
      "Watch the Official Video for &#39;Turnt In Real Life&#39; by VonOff1700 &amp; Rio Da Young OG<br><br>#TurntUpNotBurntUp Out Now<br>https://VonOff1700.lnk...<br><br>Follow on Socials ‼️<br>Instagram - https://www.instagram.c...",
    viewCount: 647547,
    viewCountText: "647K views",
    published: 1740044251,
    publishedText: "5 days ago",
    lengthSeconds: 163,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "TRYING BANNED TEMU ITEMS WITH QUEN",
    videoId: "VkCknG-jdM4",
    author: "LARRAY",
    authorId: "UCt_DaLB_NDqPVxezyvcfRtg",
    authorUrl: "/channel/UCt_DaLB_NDqPVxezyvcfRtg",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/VkCknG-jdM4/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/VkCknG-jdM4/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/VkCknG-jdM4/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/VkCknG-jdM4/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/VkCknG-jdM4/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/VkCknG-jdM4/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/VkCknG-jdM4/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/VkCknG-jdM4/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "TRYING BANNED TEMU ITEMS WITH QUEN\n\nYALL. MY HANDS ARE TIED BUT I MANAGED TO FREE MY INDEX FINGER TO TYPE THIS. QUEN HIRED SOMEONE TO BUILD A SOUNDPROOF ROOM IN HER BASEMENT TO KEEP ME IN....",
    descriptionHtml:
      "TRYING BANNED TEMU ITEMS WITH QUEN<br><br>YALL. MY HANDS ARE TIED BUT I MANAGED TO FREE MY INDEX FINGER TO TYPE THIS. QUEN HIRED SOMEONE TO BUILD A SOUNDPROOF ROOM IN HER BASEMENT TO KEEP ME IN....",
    viewCount: 2271290,
    viewCountText: "2.2M views",
    published: 1739785051,
    publishedText: "1 week ago",
    lengthSeconds: 1094,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "I Survived in an Ancient, then Futuristic Town",
    videoId: "X3aoIWMC2qs",
    author: "Ryan Trahan",
    authorId: "UCnmGIkw-KdI0W5siakKPKog",
    authorUrl: "/channel/UCnmGIkw-KdI0W5siakKPKog",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/X3aoIWMC2qs/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/X3aoIWMC2qs/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/X3aoIWMC2qs/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/X3aoIWMC2qs/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/X3aoIWMC2qs/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/X3aoIWMC2qs/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/X3aoIWMC2qs/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/X3aoIWMC2qs/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "I ♥️ glaving\nsign up for Shopify: https://shopify.com/ryantrahan",
    descriptionHtml:
      "I ♥️ glaving<br>sign up for Shopify: https://shopify.com/ryantrahan",
    viewCount: 9727455,
    viewCountText: "9.7M views",
    published: 1739698651,
    publishedText: "1 week ago",
    lengthSeconds: 1868,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "SIDEMEN AMONG US PROXIMITY CHAT: CANNIBAL EDITION",
    videoId: "EMHb50V3Tco",
    author: "MoreSidemen",
    authorId: "UCh5mLn90vUaB1PbRRx_AiaA",
    authorUrl: "/channel/UCh5mLn90vUaB1PbRRx_AiaA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/EMHb50V3Tco/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/EMHb50V3Tco/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/EMHb50V3Tco/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/EMHb50V3Tco/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/EMHb50V3Tco/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/EMHb50V3Tco/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/EMHb50V3Tco/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/EMHb50V3Tco/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "🍗: Order food NOW at: https://www.eatsides.com/\n🎥: Access exclusive content at: https://www.sideplus.com/\n🍹: XIX Vodka: https://www.xixvodka.com/\n👉🏻: Subscribe to our Reacts...",
    descriptionHtml:
      "🍗: Order food NOW at: https://www.eatsides.com/<br>🎥: Access exclusive content at: https://www.sideplus.com/<br>🍹: XIX Vodka: https://www.xixvodka.com/<br>👉🏻: Subscribe to our Reacts...",
    viewCount: 4984411,
    viewCountText: "4.9M views",
    published: 1739957851,
    publishedText: "6 days ago",
    lengthSeconds: 3260,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "We Renovated An Old Warehouse Into Our Dream Studio",
    videoId: "ZaSUCJM3hcg",
    author: "Safiya Nygaard",
    authorId: "UCbAwSkqJ1W_Eg7wr3cp5BUA",
    authorUrl: "/channel/UCbAwSkqJ1W_Eg7wr3cp5BUA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/ZaSUCJM3hcg/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/ZaSUCJM3hcg/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/ZaSUCJM3hcg/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/ZaSUCJM3hcg/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/ZaSUCJM3hcg/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/ZaSUCJM3hcg/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/ZaSUCJM3hcg/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/ZaSUCJM3hcg/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Thank you to all of you subscribers out there for quite frankly, making all this possible! We can’t wait to make more content for you guys over the coming months (and years) - next up, 2...",
    descriptionHtml:
      "Thank you to all of you subscribers out there for quite frankly, making all this possible! We can’t wait to make more content for you guys over the coming months (and years) - next up, 2...",
    viewCount: 1561468,
    viewCountText: "1.5M views",
    published: 1740130651,
    publishedText: "4 days ago",
    lengthSeconds: 1960,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Our Daughter’s EMOTIONAL Birthday Surprise",
    videoId: "DpCrtVKIEmg",
    author: "The Royalty Family",
    authorId: "UCja7QUMRG9AD8X2F_vXFb9A",
    authorUrl: "/channel/UCja7QUMRG9AD8X2F_vXFb9A",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/DpCrtVKIEmg/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/DpCrtVKIEmg/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/DpCrtVKIEmg/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/DpCrtVKIEmg/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/DpCrtVKIEmg/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/DpCrtVKIEmg/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/DpCrtVKIEmg/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/DpCrtVKIEmg/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Our Daughter’s EMOTIONAL Birthday Surprise\n𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄 HERE 👉 ​⁠@royaltyfam \n𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄 To Gaming Channel 👉 ​⁠ ​⁠@RoyaltyGamin...",
    descriptionHtml:
      "Our Daughter’s EMOTIONAL Birthday Surprise<br>𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄 HERE 👉 ​⁠@royaltyfam <br>𝐒𝐔𝐁𝐒𝐂𝐑𝐈𝐁𝐄 To Gaming Channel 👉 ​⁠ ​⁠@RoyaltyGamin...",
    viewCount: 3882648,
    viewCountText: "3.8M views",
    published: 1739871451,
    publishedText: "1 week ago",
    lengthSeconds: 1494,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "I Ran Away With My Best Friend",
    videoId: "N8Kgz2wn6f4",
    author: "Jordan Matter",
    authorId: "UCKaCalz5N5ienIbfPzEbYuA",
    authorUrl: "/channel/UCKaCalz5N5ienIbfPzEbYuA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/N8Kgz2wn6f4/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/N8Kgz2wn6f4/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/N8Kgz2wn6f4/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/N8Kgz2wn6f4/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/N8Kgz2wn6f4/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/N8Kgz2wn6f4/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/N8Kgz2wn6f4/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/N8Kgz2wn6f4/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "If you want a chance to win something purchased in this video, send us a message on our texting platform (it's free): https://joinsubtext.com/teamsalish. Text us with the name of the item you...",
    descriptionHtml:
      "If you want a chance to win something purchased in this video, send us a message on our texting platform (it&#39;s free): https://joinsubtext.com/teamsalish. Text us with the name of the item you...",
    viewCount: 14870268,
    viewCountText: "14M views",
    published: 1739266651,
    publishedText: "2 weeks ago",
    lengthSeconds: 1804,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "I Spent 100 Hours Inside The Pyramids!",
    videoId: "NDsO1LT_0lw",
    author: "MrBeast",
    authorId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
    authorUrl: "/channel/UCX6OQ3DkcsbYNE6H8uQQuVA",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/NDsO1LT_0lw/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/NDsO1LT_0lw/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/NDsO1LT_0lw/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/NDsO1LT_0lw/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/NDsO1LT_0lw/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/NDsO1LT_0lw/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/NDsO1LT_0lw/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/NDsO1LT_0lw/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "I can’t believe we were allowed to do this\nSeason 2 of swarms is out now! You can even find a Gold Swarm worth $10,000! Grab yours now at Walmart, Target, Amazon, or top toy retailers worldwide....",
    descriptionHtml:
      "I can’t believe we were allowed to do this<br>Season 2 of swarms is out now! You can even find a Gold Swarm worth $10,000! Grab yours now at Walmart, Target, Amazon, or top toy retailers worldwide....",
    viewCount: 138027363,
    viewCountText: "138M views",
    published: 1739266651,
    publishedText: "2 weeks ago",
    lengthSeconds: 1303,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "A Game About Digging a Hole",
    videoId: "ZQCg0qBKn1M",
    author: "special edd",
    authorId: "UCel2B-6wZhvQHRAKXmpm1Ew",
    authorUrl: "/channel/UCel2B-6wZhvQHRAKXmpm1Ew",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/ZQCg0qBKn1M/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/ZQCg0qBKn1M/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/ZQCg0qBKn1M/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/ZQCg0qBKn1M/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/ZQCg0qBKn1M/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/ZQCg0qBKn1M/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/ZQCg0qBKn1M/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/ZQCg0qBKn1M/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "Just Keep Digging.\n\nNew HOT SAUCE: https://www.hungryboy.food\n\nSocials:\nTwitter: https://twitter.com/sauceddie\nInstagram: https://www.instagram.com/sauceddie\nTikTok: https://www.tiktok.com/@saucedd...",
    descriptionHtml:
      "Just Keep Digging.<br><br>New HOT SAUCE: https://www.hungryboy.food<br><br>Socials:<br>Twitter: https://twitter.com/sauceddie<br>Instagram: https://www.instagram.com/sauceddie<br>TikTok: https://www.tiktok.com/@saucedd...",
    viewCount: 932179,
    viewCountText: "932K views",
    published: 1740044251,
    publishedText: "5 days ago",
    lengthSeconds: 3226,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
  {
    type: "video",
    title: "Can I Break 50 With Grant Horvat and GM Golf?",
    videoId: "fRCCJ9K-EFs",
    author: "Bryson DeChambeau",
    authorId: "UCCxF55adGXOscJ3L8qdKnrQ",
    authorUrl: "/channel/UCCxF55adGXOscJ3L8qdKnrQ",
    authorVerified: true,
    videoThumbnails: [
      {
        quality: "maxresdefault",
        url: "https://i.ytimg.com/vi/fRCCJ9K-EFs/maxresdefault.jpg",
        width: 1280,
        height: 720,
      },
      {
        quality: "sddefault",
        url: "https://i.ytimg.com/vi/fRCCJ9K-EFs/sddefault.jpg",
        width: 640,
        height: 480,
      },
      {
        quality: "high",
        url: "https://i.ytimg.com/vi/fRCCJ9K-EFs/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      {
        quality: "medium",
        url: "https://i.ytimg.com/vi/fRCCJ9K-EFs/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      {
        quality: "default",
        url: "https://i.ytimg.com/vi/fRCCJ9K-EFs/default.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "start",
        url: "https://i.ytimg.com/vi/fRCCJ9K-EFs/1.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "middle",
        url: "https://i.ytimg.com/vi/fRCCJ9K-EFs/2.jpg",
        width: 120,
        height: 90,
      },
      {
        quality: "end",
        url: "https://i.ytimg.com/vi/fRCCJ9K-EFs/3.jpg",
        width: 120,
        height: 90,
      },
    ],
    description:
      "In this video I will be attempting to Break 50 with GM Golf and Grant Horvat from the front tees...\n\nShoutout to PGA Frisco for allowing us to film at their course!\nhttps://www.instagram.com/fields...",
    descriptionHtml:
      "In this video I will be attempting to Break 50 with GM Golf and Grant Horvat from the front tees...<br><br>Shoutout to PGA Frisco for allowing us to film at their course!<br>https://www.instagram.com/fields...",
    viewCount: 3102098,
    viewCountText: "3.1M views",
    published: 1739439451,
    publishedText: "1 week ago",
    lengthSeconds: 4037,
    liveNow: false,
    premium: false,
    isUpcoming: false,
    isNew: false,
    is4k: false,
    is8k: false,
    isVr180: false,
    isVr360: false,
    is3d: false,
    hasCaptions: false,
  },
];

//-----------------------------------------------------------------------------------------------
const dummySearchData = {
  contents: [
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/2NeAESLRZkU3CnTx7MOO_88K0-aAjyHUuFGpPL4PEsIBYSSeNVWVeX29LYRQ8s1lO5WH91R2kgs=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@TalkingTom",
          channelId: "UCm3hAp1m1xlAz0ve_EKAo4g",
          title: "Talking Tom",
        },
        badges: [],
        descriptionSnippet:
          "An afternoon in the treehouse turns into a day of epic DIY for Talking Tom and his friends! 🛠️     One idea turns into another, ...",
        isLiveNow: false,
        lengthSeconds: 1725,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/seqpPgxQpiw/mqdefault_6s.webp?du=3000&sqp=CPTJhL4G&rs=AOn4CLDQK-HXJvkU68fnWvpr15a-JKXxmA",
            width: 320,
          },
        ],
        publishedTimeText: "8 months ago",
        stats: {
          views: 45412755,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/seqpPgxQpiw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGpu8uIke22NHfR9NObvDtMTi7TA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/seqpPgxQpiw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPNIPE05IffENQ8ryw9sspmQl5SQ",
            width: 720,
          },
        ],
        title: "Mega Treehouse 🛠️ Talking Tom Shorts (S3 Episode 15)",
        videoId: "seqpPgxQpiw",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: [],
        descriptionSnippet:
          "All 26 incredible episodes of Talking Tom & Friends Season 3 in one super long compilation. Get ready for hours of fun! Thanks ...",
        isLiveNow: false,
        lengthSeconds: 16626,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/eB44HzDg9sg/mqdefault_6s.webp?du=3000&sqp=COiwhL4G&rs=AOn4CLDFRPEFdk7zlj45olzSHhIKf513Rw",
            width: 320,
          },
        ],
        publishedTimeText: "1 year ago",
        stats: {
          views: 2929395,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/eB44HzDg9sg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTUKFtnDqobbra5F9J4RmlQhIF-w",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/eB44HzDg9sg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNf0kcLWwwPa7GpYfh1dnQKzLD8A",
            width: 720,
          },
        ],
        title:
          "All Episodes of Season 3 🥳 MEGA 5 HOUR Marathon ⭐ Talking Tom & Friends Compilation",
        videoId: "eB44HzDg9sg",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/FSFb-FOdtn23yZfMajjzaslqq2jEMX4RIRfpmHmzGPfgLTt4CI5-Hyf2jjB9KXu93naf4Hm7hw=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@WildBrainZoo",
          channelId: "UCYej-juCoKZ6WAwWtqaD_EA",
          title: "WildBrain Zoo",
        },
        badges: [],
        descriptionSnippet:
          "Subscribe to WildBrain Zoo: https://bit.ly/3wXtdiS Welcome to the WildBrain Zoo channel. Every day we share cartoon animal kids ...",
        isLiveNow: false,
        lengthSeconds: 11154,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/9KklfI9U6Sg/mqdefault_6s.webp?du=3000&sqp=COinhL4G&rs=AOn4CLDpdL4zmnZwi8BPXmevgu4VCxTslw",
            width: 320,
          },
        ],
        publishedTimeText: "1 month ago",
        stats: {
          views: 251512,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/9KklfI9U6Sg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9UnUOEYamA2q6U1bkuaE1PNrX4Q",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/9KklfI9U6Sg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSKOPTV6y8x0vdpyRk1sczTIXB7g",
            width: 720,
          },
        ],
        title:
          "Weekend Camping Trip | Talking Tom & Friends | Season 1 | Cartoons | WildBrain Zoo",
        videoId: "9KklfI9U6Sg",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: [],
        descriptionSnippet:
          "There's tension at Tom and Ben Enterprises. But this ain't no professional squabble… It's a battle between the couples! On ...",
        isLiveNow: false,
        lengthSeconds: 1316,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/PKFA5zDaEco/mqdefault_6s.webp?du=3000&sqp=CJiehL4G&rs=AOn4CLAxrHJUJ2eEHaIEszIqQohGmtH7dQ",
            width: 320,
          },
        ],
        publishedTimeText: "2 years ago",
        stats: {
          views: 3539455,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/PKFA5zDaEco/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwCDg2sfDJdpTVR90eE1aLYriDnw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/PKFA5zDaEco/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBc8Qde17zNoBEdrG6rmfj-wZDGxg",
            width: 720,
          },
        ],
        title: "Couple Battle! 💔💪 Talking Tom & Friends Compilation",
        videoId: "PKFA5zDaEco",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/2NeAESLRZkU3CnTx7MOO_88K0-aAjyHUuFGpPL4PEsIBYSSeNVWVeX29LYRQ8s1lO5WH91R2kgs=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@TalkingTom",
          channelId: "UCm3hAp1m1xlAz0ve_EKAo4g",
          title: "Talking Tom",
        },
        badges: [],
        descriptionSnippet:
          "Grab some popcorn and get comfortable - it's time to binge-watch all 23 Talking Tom Shorts! Subscribe to my YouTube channel: ...",
        isLiveNow: false,
        lengthSeconds: 1242,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/Dtm5nMlqq1Q/mqdefault_6s.webp?du=3000&sqp=COCshL4G&rs=AOn4CLCYZn8ksH-vcmq1ZJXUAn02KFNcxw",
            width: 320,
          },
        ],
        publishedTimeText: "8 years ago",
        stats: {
          views: 672093577,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/Dtm5nMlqq1Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRciUSpDhzvxaaEVxpuSp9OgbE6g",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/Dtm5nMlqq1Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgTGr1IN7JjQgFqg8rtytQ0UaoiA",
            width: 720,
          },
        ],
        title: "Talking Tom Shorts – Ultra Marathon (All Episodes)",
        videoId: "Dtm5nMlqq1Q",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/2NeAESLRZkU3CnTx7MOO_88K0-aAjyHUuFGpPL4PEsIBYSSeNVWVeX29LYRQ8s1lO5WH91R2kgs=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@TalkingTom",
          channelId: "UCm3hAp1m1xlAz0ve_EKAo4g",
          title: "Talking Tom",
        },
        badges: [],
        descriptionSnippet:
          "Lights! Camera! MARATHON! It's time to watch the first 30 hilarious, epic, and awesome Talking Tom Shorts episodes. All you ...",
        isLiveNow: false,
        lengthSeconds: 1859,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/jvkW1MKSyOc/mqdefault_6s.webp?du=3000&sqp=CNGuhL4G&rs=AOn4CLBdx6ZKp1R3Fj1uwa6UkYK1qxAsQQ",
            width: 320,
          },
        ],
        publishedTimeText: "7 years ago",
        stats: {
          views: 686613526,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/jvkW1MKSyOc/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgwIGAocjAP&rs=AOn4CLAPUPXtXCnWpiNjAqzbF5SkjGOuwA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/jvkW1MKSyOc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgwIGAocjAP&rs=AOn4CLDx83zVx-f_uoSRyuav5XbbONubsA",
            width: 720,
          },
        ],
        title: "ALL Talking Tom Shorts - Hyper Marathon",
        videoId: "jvkW1MKSyOc",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/R2KYxsEnGbM3nEp_VzD0dA8zkn_APB6Kil0TOCWQpNR5RcfcSOt9DYnT0MgbckxWfeNEpj3CvA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@wbkids",
          channelId: "UC9trsD1jCTXXtN3xIOIU8gg",
          title: "WB Kids",
        },
        badges: [],
        descriptionSnippet:
          "Did you know that there are only 25 classic Tom & Jerry episodes that were displayed in a widescreen CinemaScope from the ...",
        isLiveNow: false,
        lengthSeconds: 1298,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/t0Q2otsqC4I/mqdefault_6s.webp?du=3000&sqp=CIy9hL4G&rs=AOn4CLAt91uNpozCTPzggZMgzWbXQyAPFA",
            width: 320,
          },
        ],
        publishedTimeText: "3 years ago",
        stats: {
          views: 763498100,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/t0Q2otsqC4I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFcrz2zM6mPUmJiCsC7c7suOzSug",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/t0Q2otsqC4I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVANFKKXmrdehkf7aM9issiuph5A",
            width: 720,
          },
        ],
        title:
          "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids",
        videoId: "t0Q2otsqC4I",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: [],
        descriptionSnippet:
          "When it comes to winter adventures, nothing beats saving Santa! And that's exactly what Talking Tom and his friends are getting ...",
        isLiveNow: false,
        lengthSeconds: 1907,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/Hfk_rc_BCw0/mqdefault_6s.webp?du=3000&sqp=CLK6hL4G&rs=AOn4CLCQL3zJ7bPRjdd-vPBSkgUk4Di9eA",
            width: 320,
          },
        ],
        publishedTimeText: "2 months ago",
        stats: {
          views: 201538,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/Hfk_rc_BCw0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2z0cRAccjebmWaTB8t4F1cpNsQA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/Hfk_rc_BCw0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJAPwRIwLSwB983Qf1EfmlpyIw_w",
            width: 720,
          },
        ],
        title: "The Magic of Winter ❄️ Talking Tom & Friends Compilation",
        videoId: "Hfk_rc_BCw0",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/FSFb-FOdtn23yZfMajjzaslqq2jEMX4RIRfpmHmzGPfgLTt4CI5-Hyf2jjB9KXu93naf4Hm7hw=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@WildBrainZoo",
          channelId: "UCYej-juCoKZ6WAwWtqaD_EA",
          title: "WildBrain Zoo",
        },
        badges: [],
        descriptionSnippet:
          "Subscribe to WildBrain Zoo: https://bit.ly/3wXtdiS Welcome to the WildBrain Zoo channel. Every day we share cartoon animal kids ...",
        isLiveNow: false,
        lengthSeconds: 11198,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/ItRM3QqHHcM/mqdefault_6s.webp?du=3000&sqp=COq_hL4G&rs=AOn4CLA8UEW8K1codwY8s9vdfk0Cv67lHQ",
            width: 320,
          },
        ],
        publishedTimeText: "4 months ago",
        stats: {
          views: 134099,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/ItRM3QqHHcM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdoZGwFeVP_fqYyiAE1j1zqooxpQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/ItRM3QqHHcM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVqp7Y_dTV0xEE18EqYPeEALy3EQ",
            width: 720,
          },
        ],
        title:
          "New Game Record | Talking Tom & Friends | Season 1 Marathon | Kids Cartoon | WildBrain Zoo",
        videoId: "ItRM3QqHHcM",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/R2KYxsEnGbM3nEp_VzD0dA8zkn_APB6Kil0TOCWQpNR5RcfcSOt9DYnT0MgbckxWfeNEpj3CvA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@wbkids",
          channelId: "UC9trsD1jCTXXtN3xIOIU8gg",
          title: "WB Kids",
        },
        badges: [],
        descriptionSnippet:
          "Infamous for their pranks, Tom and Jerry sure know how to pull off the best ones. But who is the best prankster of them all?",
        isLiveNow: false,
        lengthSeconds: 1310,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/mm0NgHN1dsA/mqdefault_6s.webp?du=3000&sqp=COC2hL4G&rs=AOn4CLB_OB5eNi9Stj738N6ibFw87oOIVA",
            width: 320,
          },
        ],
        publishedTimeText: "4 months ago",
        stats: {
          views: 2129360,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/mm0NgHN1dsA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAj98VE16_RybEjBXU5wgUlXR5zDA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/mm0NgHN1dsA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtFKLuV6IbkjnlSqZY6yWFXj4idg",
            width: 720,
          },
        ],
        title:
          "Tom & Jerry | Perfect Pranksters! 😹 | Classic Cartoon Compilation | @wbkids​",
        videoId: "mm0NgHN1dsA",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/AIdro_mQDv3YYtwrEY-oFDf_zzH-iLoSFxmjDh2GhAG5CFyMNfY=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@ForbesBreakingNews",
          channelId: "UCg40OxZ1GYh3u3jBntB6DLg",
          title: "Forbes Breaking News",
        },
        badges: ["New"],
        descriptionSnippet:
          "At today's Senate Energy Committee hearing, Sen. Tom Cotton (R-AR) spoke to witnesses about about foreign nationals working ...",
        isLiveNow: false,
        lengthSeconds: 364,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/2niK5i4VUMU/mqdefault_6s.webp?du=3000&sqp=CMO4hL4G&rs=AOn4CLDaBqtsUu5MXx-o1og6Yiq55_cNDQ",
            width: 320,
          },
        ],
        publishedTimeText: "6 days ago",
        stats: {
          views: 62869,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/2niK5i4VUMU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIccBbvanLS2kSAMT3qP79uCHY5A",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/2niK5i4VUMU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2hg8R0NB2oD3gSnloP8zwSQqI2A",
            width: 720,
          },
        ],
        title:
          "MUST WATCH: Tom Cotton Stunned By Number Of Russian & Chinese Scientists In U.S. Labs",
        videoId: "2niK5i4VUMU",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/58rU-oGkVDDK211z6hQdi61KeLV-0KebvVbWQAfr_ewskfdzQH28UpCxd8Lgnp8B5HEdDge1=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@Jimmyhogs",
          channelId: "UCXwylGxj9ocwu2-fA_ulZ5g",
          title: "Jimmyhogs",
        },
        badges: [],
        descriptionSnippet:
          "Request Videos here: https://bit.ly/JimmyhogsRequestBox ...",
        isLiveNow: false,
        lengthSeconds: 3128,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/VkccjiETpUk/mqdefault_6s.webp?du=3000&sqp=CI3IhL4G&rs=AOn4CLCPxkgIGgUaCOOnSmuhtw7LowLwfg",
            width: 320,
          },
        ],
        publishedTimeText: "5 months ago",
        stats: {
          views: 299986,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/VkccjiETpUk/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFAoOjAP&rs=AOn4CLCR6ZrUjDXLhpa-lslT_ZbT5dWzfA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/VkccjiETpUk/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIFAoOjAP&rs=AOn4CLCiKr2oP3owjjVtOekz3JU7_tqdgQ",
            width: 720,
          },
        ],
        title:
          "Preview 2 Talking Tom And Friends Extended Effects (Preview 2 Hanazuki Intro Extended Effects)",
        videoId: "VkccjiETpUk",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: [],
        descriptionSnippet:
          "Does anyone love food more than Talking Hank?! Probably not! He eats it, cooks it, talks about it, daydreams about it…",
        isLiveNow: false,
        lengthSeconds: 1311,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/jaYtADExtQM/mqdefault_6s.webp?du=3000&sqp=CLyXhL4G&rs=AOn4CLBrp1ojAX5-od6auYVTgedYMskrnw",
            width: 320,
          },
        ],
        publishedTimeText: "2 years ago",
        stats: {
          views: 8323175,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/jaYtADExtQM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmwvM9_j1lnnpvlQHNM9E1GX1vqA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/jaYtADExtQM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXRw41I_mL1ayOZsyYfQ5UEvDcTw",
            width: 720,
          },
        ],
        title: "Foodies Forever! 😋 NEW Talking Tom & Friends Compilation",
        videoId: "jaYtADExtQM",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/AIdro_m9DcsUbZH2bNPMysit1MR88TgqbGpVREPv04o8S1YeqJc=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@bobandtomshow",
          channelId: "UCRizlNzRDzYxS3NgDQXtueQ",
          title: "The BOB & TOM Show",
        },
        badges: ["New"],
        descriptionSnippet:
          "Comedian Al Jackson will be joining us. We are no longer feeding some music to YouTube because of copyright issues on ...",
        isLiveNow: false,
        lengthSeconds: 13795,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/zsuKFKbqZ7U/mqdefault_6s.webp?du=3000&sqp=CJXLhL4G&rs=AOn4CLCgrBCgwNeArbBYWtpIo9LGdyW7lg",
            width: 320,
          },
        ],
        publishedTimeText: "Streamed 12 hours ago",
        stats: {
          views: 21699,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/zsuKFKbqZ7U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcDOG4SXqh-ZyQRdMFPLTkzEF4vQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/zsuKFKbqZ7U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpwFAn5y8Sfc_wPgb_VrTTlmpEZQ",
            width: 720,
          },
        ],
        title: "The BOB & TOM Show - February 27, 2025",
        videoId: "zsuKFKbqZ7U",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/3N_BUH0YdQE7Duf7kCve5zQ4EENLHyEd5zLzaszPnE1jkEhiipE6D7kr3dZWmenFAPs2b5m59Q=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@KSLNews",
          channelId: "UCUKyRkZuMdNv87E8xbObN4g",
          title: "KSL News Utah",
        },
        badges: ["New"],
        descriptionSnippet:
          "Utah lawmakers honored the Brigham Young University football team and retiring athletic director Tom Holmoe after leading the ...",
        isLiveNow: false,
        lengthSeconds: 114,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/B284lP6GTwk/mqdefault_6s.webp?du=3000&sqp=CJnEhL4G&rs=AOn4CLBlp-7sz1M4od06DEz6u_z3Z0-SuA",
            width: 320,
          },
        ],
        publishedTimeText: "1 day ago",
        stats: {
          views: 146,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/B284lP6GTwk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCf5xXSgAW3IP5FOPX8u-wIYio9Qw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/B284lP6GTwk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAA1E8d8fRiZmYjJDYWnMphU8MEFA",
            width: 720,
          },
        ],
        title:
          "Legislature honors BYU football, retiring athletic director Tom Holmoe",
        videoId: "B284lP6GTwk",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/46JT9dgDOssDKVk-4EJGJORCyNHZ0CyA9jsRqBp7Mkr2ON6tw9k2UmClnc3cxFR1akX-XRnjtA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@outdoortom9675",
          channelId: "UCiLW00N3_Qe5yazpDk8xxjA",
          title: "Outdoor Tom",
        },
        badges: ["4K"],
        descriptionSnippet:
          "I wanted to do my first solo camping trip. I have been camping with my dad many times, but never on my own. So my dad agreed ...",
        isLiveNow: false,
        lengthSeconds: 2005,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/Vg27c5gxvtc/mqdefault_6s.webp?du=3000&sqp=CJCzhL4G&rs=AOn4CLDyx49iVZ3k2G44zCkG3_BkF5tZsg",
            width: 320,
          },
        ],
        publishedTimeText: "1 month ago",
        stats: {
          views: 6538741,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/Vg27c5gxvtc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyhLi4twys32E5g8vbxr4y73WNqw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/Vg27c5gxvtc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMh4DGIUv8cOc7FYYM12lwZcc1Uw",
            width: 720,
          },
        ],
        title:
          "12 Yrs Old & Alone in Alaska's Backcountry - Solo Winter Camping",
        videoId: "Vg27c5gxvtc",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: [],
        descriptionSnippet:
          "It's time to watch Talking Tom & Friends LIVE! Enjoy the adventures of Talking Tom, Talking Angela, Talking Hank, Talking Ben, ...",
        isLiveNow: false,
        lengthSeconds: 29846,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/Nffg9zZWyVU/mqdefault_6s.webp?du=3000&sqp=CJnIhL4G&rs=AOn4CLD0cipg7-5c-i6TOuFqKdie26jTag",
            width: 320,
          },
        ],
        publishedTimeText: "Streamed 2 years ago",
        stats: {
          views: 3987344,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/Nffg9zZWyVU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiEhVHjZAlZCqS3JTnVOrYPLSjJA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/Nffg9zZWyVU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDG8y3J4AE0J_b-TGlIVSEYNKavJQ",
            width: 720,
          },
        ],
        title:
          "Here Come the Super Friends! ⚡ Talking Tom & Friends Cartoon Collection",
        videoId: "Nffg9zZWyVU",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/gB6xBnWUyTlqyhIlrVTWn9F-D96C9glcNMEOKpgs_QUUw1hraGbBNxxDoEK7pw5gfDOixIT2X3s=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@thepressleygirls",
          channelId: "UC0o2n1IkGL93VmbTtVrtbsg",
          title: "thepressleygirls",
        },
        badges: ["New"],
        descriptionSnippet:
          "Thanks for joining us for supper. We're so glad that Olive is doing better, we're looking forward to the beach and I am excited ...",
        isLiveNow: false,
        lengthSeconds: 1605,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/BEWjX5-EX2k/mqdefault_6s.webp?du=3000&sqp=COTEhL4G&rs=AOn4CLCsQtxDBI9mPUNq6iI9TjQio-e48Q",
            width: 320,
          },
        ],
        publishedTimeText: "4 hours ago",
        stats: {
          views: 3594,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/BEWjX5-EX2k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqfaVxCS8BfI9dcJRwlhTLZkkEKw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/BEWjX5-EX2k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMtvie7dFcR_xjVcY5S4REZeX_Sg",
            width: 720,
          },
        ],
        title: "Eat Supper With Us - Emergency Vet, Vacation & Ginger Bug",
        videoId: "BEWjX5-EX2k",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: ["CC"],
        descriptionSnippet:
          "The CEO's left Goldie the goldfish in charge of his company! But things get even weirder when Talking Hank's the only one who ...",
        isLiveNow: false,
        lengthSeconds: 660,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/FIAfVquKgEU/mqdefault_6s.webp?du=3000&sqp=COTJhL4G&rs=AOn4CLCl0fTjg4GBHeJW1-ePePVI94cagQ",
            width: 320,
          },
        ],
        publishedTimeText: "5 years ago",
        stats: {
          views: 14964686,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/FIAfVquKgEU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjjFYU7MYm3Iv5mQToeyaQtQHULQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/FIAfVquKgEU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCb_5dUXcNaX3OEIs2DzjvjrFX_5w",
            width: 720,
          },
        ],
        title: "The New CEO - Talking Tom & Friends | Season 4 Episode 22",
        videoId: "FIAfVquKgEU",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/Bx1AcN4GBNoaBEcE80mRtVVxicDrRC1bGMmN-K4TUWtT-5WVhcBCKhOweDnrVWBTm4Qi4QWhJJQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@SeeMindyMom",
          channelId: "UCtTTYcpivrfvwZ6WF5OFP2Q",
          title: "See Mindy Mom",
        },
        badges: ["New"],
        descriptionSnippet:
          "Join Thrive Market today to get 30% off your first order + a free gift worth up to $60! Link to promote: ...",
        isLiveNow: false,
        lengthSeconds: 1257,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/qCokcWuCDYU/mqdefault_6s.webp?du=3000&sqp=CIijhL4G&rs=AOn4CLARM6-08CcmpGP5B5yJyM-vakp8Ew",
            width: 320,
          },
        ],
        publishedTimeText: "8 hours ago",
        stats: {
          views: 6925,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/qCokcWuCDYU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDcM7BfFbNOpu_Sy4SY7BEMTANEg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/qCokcWuCDYU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCobHMImiCrPg87XZhJ9CplffK_vA",
            width: 720,
          },
        ],
        title: "Eating Healthy on a Budget:  High Protein & Fiber Meal Ideas",
        videoId: "qCokcWuCDYU",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: [],
        descriptionSnippet:
          "Talking Angela has big, beautiful dreams for her life. ⭐ She's bold, driven, and believes in herself – most of the time! Whether ...",
        isLiveNow: false,
        lengthSeconds: 2584,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/APGYjbCPh1c/mqdefault_6s.webp?du=3000&sqp=CIbHhL4G&rs=AOn4CLBfoDQp-U2C11sK_vIf-NuES0adBA",
            width: 320,
          },
        ],
        publishedTimeText: "3 years ago",
        stats: {
          views: 6157336,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/APGYjbCPh1c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8Z2YKM-tIPtsdc7FVuYUshZ83KA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/APGYjbCPh1c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcxltjI-209gikUEa9TxHWbxsJPA",
            width: 720,
          },
        ],
        title:
          "😎Angela is the BOSS | Talking Tom & Friends Collection (Four Episodes)",
        videoId: "APGYjbCPh1c",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ITT1oJYb35XyWbvFNBQ6DOzxDRafNULb_146ZCc9N82u8Pkco1XoInGwF9ytbjOy8_-45rKR=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@Branzy",
          channelId: "UCk56ama_RvUkMzexS8I9SIQ",
          title: "Branzy",
        },
        badges: [],
        descriptionSnippet:
          "just to scare my friends. My friends @skipthetutorial @failboat and @JayMoji join me on a seemingly regular camping trip in ...",
        isLiveNow: false,
        lengthSeconds: 2926,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/ke8nRk4a8PI/mqdefault_6s.webp?du=3000&sqp=CNKMhL4G&rs=AOn4CLDlk48ly88XFjr5f2aTeKpjKe8TgA",
            width: 320,
          },
        ],
        publishedTimeText: "4 months ago",
        stats: {
          views: 1653517,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/ke8nRk4a8PI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIHNDBlammR6BtfZJ59aXdDavBAA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/ke8nRk4a8PI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8qIQHRDOAFm2vz2zDChBisIQSkA",
            width: 720,
          },
        ],
        title: "I Secretly Turned Minecraft into a Real Horror Game...",
        videoId: "ke8nRk4a8PI",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: [],
        descriptionSnippet:
          "It's here! All 26 amazing episodes of Talking Tom & Friends Season 3 in one incredible compilation. Get ready to binge them all ...",
        isLiveNow: false,
        lengthSeconds: 16656,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/8D0w1FcAbxw/mqdefault_6s.webp?du=3000&sqp=CPjMhL4G&rs=AOn4CLBVxweKtkJoRBe0Z-8UEJcjcagJCA",
            width: 320,
          },
        ],
        publishedTimeText: "5 years ago",
        stats: {
          views: 26600384,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/8D0w1FcAbxw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnok7urMquYrM5MOIt3V8xnUYZ3g",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/8D0w1FcAbxw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCP6s5kSnUThyTMf5-LVEQsHk8I4w",
            width: 720,
          },
        ],
        title: "Season 3 Binge! 🥳 Talking Tom & Friends Compilation",
        videoId: "8D0w1FcAbxw",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: ["CC"],
        descriptionSnippet:
          "Talking Tom gets invited to become one of the world's top models, and he loves the sudden fame and attention. But when his ...",
        isLiveNow: false,
        lengthSeconds: 660,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/_vcpgDBzWyc/mqdefault_6s.webp?du=3000&sqp=COK0hL4G&rs=AOn4CLDXgabs8BA8evMu4Fm6Y4ibM5tSUA",
            width: 320,
          },
        ],
        publishedTimeText: "5 years ago",
        stats: {
          views: 27884730,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/_vcpgDBzWyc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZyaoxZLA9c8Q3j2LWfXxHW-53QA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/_vcpgDBzWyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9YDZV4YTdn-9G8UvmiGeLL9VJHg",
            width: 720,
          },
        ],
        title: "Supermodel Tom - Talking Tom & Friends | Season 4 Episode 8",
        videoId: "_vcpgDBzWyc",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/-ynUSIz-9qsDmwZLkjBd0JYoWUGjL91KnTPJimeRz2URHgGYmB7qlxHcvVlnOMvPPSDtpyYSqA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@WildBrainKids",
          channelId: "UCbmWOFTbZoDLWqG1rvFnJ0g",
          title: "WildBrain Kids",
        },
        badges: [],
        descriptionSnippet:
          "When Talking Hank runs out of popcorn on movie night, he decides to grow his own corn so that they'll never run out again.",
        isLiveNow: false,
        lengthSeconds: 1980,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/R6yvopfgv8o/mqdefault_6s.webp?du=3000&sqp=COqhhL4G&rs=AOn4CLD2gnJgVOPlq2R20_h9HSga1Tjy4w",
            width: 320,
          },
        ],
        publishedTimeText: "2 years ago",
        stats: {
          views: 9861336,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/R6yvopfgv8o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4cANv4ktKHZP5Cyky1waIgSw9oA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/R6yvopfgv8o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD01gt60z2lv6V9TmhJ6OQZEQWpYg",
            width: 720,
          },
        ],
        title:
          "Corn Heads | Talking Tom & Friends | Cartoons for Kids | WildBrain Kids",
        videoId: "R6yvopfgv8o",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/9Y4x0kGe1QGbFzOfOa0Zinph8PLuy0mi6BStF0EVPx4VqxkupxND0Hat63IHHMwZ6nZhDATSWUc=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@DIRTRACKR",
          channelId: "UCI-KdS2Axe8CLA1bZcGR87g",
          title: "DIRTRACKR",
        },
        badges: ["New"],
        descriptionSnippet:
          "myKubota app: https://www.kubotausa.com/mykubota Apple download: https://apps.apple.com/us/app/mykubota/id1434354490 ...",
        isLiveNow: false,
        lengthSeconds: 488,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/K4zxx_DH3xs/mqdefault_6s.webp?du=3000&sqp=COHAhL4G&rs=AOn4CLD3qco97Al6aDbpkOJdaNQ1C8H3HA",
            width: 320,
          },
        ],
        publishedTimeText: "9 hours ago",
        stats: {
          views: 8637,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/K4zxx_DH3xs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAonHPNaZGZHWB_9GNI44UdenYMOQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/K4zxx_DH3xs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCY9ISwpfO5m7QfEUzAFasRLLDxCQ",
            width: 720,
          },
        ],
        title: "An Earnhardt tests a dirt late model",
        videoId: "K4zxx_DH3xs",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/2NeAESLRZkU3CnTx7MOO_88K0-aAjyHUuFGpPL4PEsIBYSSeNVWVeX29LYRQ8s1lO5WH91R2kgs=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@TalkingTom",
          channelId: "UCm3hAp1m1xlAz0ve_EKAo4g",
          title: "Talking Tom",
        },
        badges: [],
        descriptionSnippet:
          "If the friends can imagine it, they can make it real! How? With their super awesome magic paintbrush, of course! But can they ...",
        isLiveNow: false,
        lengthSeconds: 3569,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/AqpxfqcJesU/mqdefault_6s.webp?du=3000&sqp=CNjJhL4G&rs=AOn4CLB3-fEpc8XLuOZd1wyumgqIFmD4Xg",
            width: 320,
          },
        ],
        publishedTimeText: "5 months ago",
        stats: {
          views: 7816630,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/AqpxfqcJesU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBweYMuf-WiBisIKC86smKo1uqcyw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/AqpxfqcJesU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXh8pWewSMqnE1r5-X84utvkuQ_w",
            width: 720,
          },
        ],
        title: "Paintbrush Magic 🎨✨ Talking Tom Shorts (S3 Episode 19)",
        videoId: "AqpxfqcJesU",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/2NeAESLRZkU3CnTx7MOO_88K0-aAjyHUuFGpPL4PEsIBYSSeNVWVeX29LYRQ8s1lO5WH91R2kgs=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@TalkingTom",
          channelId: "UCm3hAp1m1xlAz0ve_EKAo4g",
          title: "Talking Tom",
        },
        badges: [],
        descriptionSnippet:
          "How is our #LunarNewYear dance?! Duet with us! Hi, guys! I'm Talking Tom – welcome to my channel. It's so cool to ...",
        isLiveNow: false,
        lengthSeconds: 17,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/mDzIA3VUFKI/mqdefault_6s.webp?du=3000&sqp=CI62hL4G&rs=AOn4CLAXn4SgwE5GXBVX1mDnNU5FpxgQ3A",
            width: 320,
          },
        ],
        publishedTimeText: "2 years ago",
        stats: {
          views: 67179693,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/mDzIA3VUFKI/hq720_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARh_IBMoHzAP&rs=AOn4CLBEMXbALHhtT2hO0CmokWmGXhO0ng",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/mDzIA3VUFKI/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARh_IBMoHzAP&rs=AOn4CLDz6H8y0yaqhg1Khxeq-lf-5xr8sw",
            width: 720,
          },
        ],
        title: "Lunar New Year Dance 💃👯🏮 Talking Tom #Shorts",
        videoId: "mDzIA3VUFKI",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/Y3eskQTMiTF4RZQJBp9t8vTechpHMkrHMP7MYxDtkQ5MW7we2Mse_vKkmL48p-zYICfn9VY0LK4=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: null,
          channelId: "UCElGBUWDCa05jRzc2PfmGqQ",
          title: "Tom MacDonald",
        },
        badges: ["4K"],
        descriptionSnippet:
          "Tom MacDonald & Roseanne Barr - Daddy's Home (Official Music Video) SUBSCRIBE TO THIS CHANNEL & CONNECT W/ TOM ...",
        isLiveNow: false,
        lengthSeconds: 132,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/nb7fAEQaJwE/mqdefault_6s.webp?du=3000&sqp=CLGthL4G&rs=AOn4CLDA2jfQIhHBvJRhkyGe_cgs8-N9VA",
            width: 320,
          },
        ],
        publishedTimeText: "1 month ago",
        stats: {
          views: 6183821,
        },
        thumbnails: [
          {
            height: 270,
            url: "https://i.ytimg.com/vi/nb7fAEQaJwE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBv2dV9l48vebTphysAhJuPxfqidQ",
            width: 480,
          },
        ],
        title: "Tom MacDonald & Roseanne Barr - Daddy's Home",
        videoId: "nb7fAEQaJwE",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/jAoWc9QwMsH9LqvrQ-8lTO5YVi3GOf4fD8PFv0Iv-I1mY_Jw6aqlWo8IkTHwdwV6F_TwLiIj=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@tombrady",
          channelId: "UC_W6zp_hCKSmiuvhboIvx-Q",
          title: "Tom Brady",
        },
        badges: ["4K"],
        descriptionSnippet:
          "Dude Perfect just opened up one of the most epic headquarters I've ever seen. Seriously, I left and started making calls about ...",
        isLiveNow: false,
        lengthSeconds: 423,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/1NS5swKRQls/mqdefault_6s.webp?du=3000&sqp=CNaxhL4G&rs=AOn4CLD1ZBfzHN9nytlZR574lY0rwsJ84Q",
            width: 320,
          },
        ],
        publishedTimeText: "1 month ago",
        stats: {
          views: 1709931,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/1NS5swKRQls/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcmQE_yKQxDCsDXOGktFtM_GbXEw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/1NS5swKRQls/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYF4CpIzwn673BQJBcA-AJSrtzLg",
            width: 720,
          },
        ],
        title: "Tom Brady vs Dude Perfect",
        videoId: "1NS5swKRQls",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ij_HkyGZCxV83Wy_tWXRYQTNfo3tmrHP7XiHnk5lmzNgzAuX3BWX_Obr33-A6yCezinhaisNVA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@NFLonNBC",
          channelId: "UCXn8eue3paGXJyI5UDQIyWg",
          title: "NFL on NBC",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "Mike Florio and Chris Simms unpack how Matthew Stafford could jumpstart the Raiders, the ways Las Vegas is utilizing Tom ...",
        isLiveNow: false,
        lengthSeconds: 477,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/YoMh0zifhyU/mqdefault_6s.webp?du=3000&sqp=CKephL4G&rs=AOn4CLDImd9VVjuZn9iQS7HhySzAV4ml9w",
            width: 320,
          },
        ],
        publishedTimeText: "1 day ago",
        stats: {
          views: 19982,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/YoMh0zifhyU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8xHhufX7kLPGGEXurb6LkxQbG3A",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/YoMh0zifhyU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3Z52gb6YVKgSkkQUHa495EFqojQ",
            width: 720,
          },
        ],
        title:
          "Tom Brady reportedly inquired about Matthew Stafford-Raiders trade | Pro Football Talk | NFL on NBC",
        videoId: "YoMh0zifhyU",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/-BxzGzHxcYuzGw-aO4JnEjr0nxdtUJhTC_KSBJFUneqWBGkYaKPLXVDuwEWw8LXGtL1PNk2gUQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@sundaeconversation",
          channelId: "UCzn4ij1jh39Zpj0N8vHiVqA",
          title: "Sundae Conversation",
        },
        badges: ["4K"],
        descriptionSnippet:
          "Caleb learns about pliability. This episode is presented by Gopuff. Produced by Kelsey Shaver, Tom Mullens, and Caleb Pressley ...",
        isLiveNow: false,
        lengthSeconds: 425,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/4U_0Q_eMtaE/mqdefault_6s.webp?du=3000&sqp=CJS8hL4G&rs=AOn4CLD1A-Mf5Z6X8aedCvHPJ1vsmGhoiA",
            width: 320,
          },
        ],
        publishedTimeText: "2 weeks ago",
        stats: {
          views: 1913249,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/4U_0Q_eMtaE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCIxr_oLDtSlpAOCsasgXPshuw9g",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/4U_0Q_eMtaE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8ThZBBqLfaQiEeeu-sxWzemS2ig",
            width: 720,
          },
        ],
        title: "TOM BRADY: Sundae Conversation with Caleb Pressley",
        videoId: "4U_0Q_eMtaE",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/AIdro_lU9CiwECube51yiMCR0QLTy0QxKoVVuJosYRLiEVblBWU=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@MovieTrailersSourceHD",
          channelId: "UCpJN7kiUkDrH11p0GQhLyFw",
          title: "Movie Trailers Source",
        },
        badges: ["New"],
        descriptionSnippet:
          "First movie trailer for Havoc starring Tom Hardy, Forest Whitaker.",
        isLiveNow: false,
        lengthSeconds: 64,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/N856svxtlEA/mqdefault_6s.webp?du=3000&sqp=CIDFhL4G&rs=AOn4CLDXsSaYmkHtE-Z6Hj9lEdyyP1_84g",
            width: 320,
          },
        ],
        publishedTimeText: "1 day ago",
        stats: {
          views: 19179,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/N856svxtlEA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNqYMaV_K0Oy8vcWqn-Vi-hNOnOA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/N856svxtlEA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnggDDcIIu6LCYbZZTxeZEOPwGgA",
            width: 720,
          },
        ],
        title: "HAVOC Official Teaser Trailer (2025) Tom Hardy",
        videoId: "N856svxtlEA",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ij_HkyGZCxV83Wy_tWXRYQTNfo3tmrHP7XiHnk5lmzNgzAuX3BWX_Obr33-A6yCezinhaisNVA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@NFLonNBC",
          channelId: "UCXn8eue3paGXJyI5UDQIyWg",
          title: "NFL on NBC",
        },
        badges: ["New"],
        descriptionSnippet:
          "Raiders HC Pete Carroll joins Mike Florio and Chris Simms to explain how he plans to leverage Tom Brady in Las Vegas as he ...",
        isLiveNow: false,
        lengthSeconds: 601,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/pXB9SefEg4M/mqdefault_6s.webp?du=3000&sqp=CMHNhL4G&rs=AOn4CLDZT-3vcmGEoP08gXl2uY4CC_81RQ",
            width: 320,
          },
        ],
        publishedTimeText: "2 days ago",
        stats: {
          views: 46330,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/pXB9SefEg4M/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw1wwzSep4L5_Wm09ZN1fbzAqwmQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/pXB9SefEg4M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhEWeHKdRtuPXHnh7Q65DHnqKEVQ",
            width: 720,
          },
        ],
        title:
          "Las Vegas Raiders' HC Pete Carroll working closely with Tom Brady | Pro Football Talk | NFL on NBC",
        videoId: "pXB9SefEg4M",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/MP1_t4BVJqZi0gWSYcJYxNv_IOYND9RwdnqLoA3cYyxFp1Y9N7epWZ3Av71DWxrpdcd0-dUF=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@mrlboydmusic",
          channelId: "UCLL5s1duiNNrOzDQBnDfkxA",
          title: "MRLBOYD MUSIC",
        },
        badges: ["New"],
        descriptionSnippet:
          "ROAD TO 250000 SUBSCRIPTIONS *** to Donate using Paypal!: https://www.paypal.com/paypalme/Mrlboydreacts Patreon ...",
        isLiveNow: false,
        lengthSeconds: 512,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/-EsQkl4Tpw0/mqdefault_6s.webp?du=3000&sqp=CLjHhL4G&rs=AOn4CLAr836wImQv2SGbBF1vxIROqdnpTg",
            width: 320,
          },
        ],
        publishedTimeText: "2 days ago",
        stats: {
          views: 13485,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/-EsQkl4Tpw0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBA5SHOv0TyhvYgK5E88KqGmrzYDQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/-EsQkl4Tpw0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRwOd7GphgT3AaLCD5wcvlmrgN3Q",
            width: 720,
          },
        ],
        title: "Tom MacDonald - Man In The Sky | REACTION",
        videoId: "-EsQkl4Tpw0",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/Y3eskQTMiTF4RZQJBp9t8vTechpHMkrHMP7MYxDtkQ5MW7we2Mse_vKkmL48p-zYICfn9VY0LK4=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: null,
          channelId: "UCElGBUWDCa05jRzc2PfmGqQ",
          title: "Tom MacDonald",
        },
        badges: ["New", "4K"],
        descriptionSnippet:
          'Tom MacDonald - "Man In The Sky" SUBSCRIBE TO THIS CHANNEL & CONNECT W/ TOM MACDONALD! FACEBOOK: ...',
        isLiveNow: false,
        lengthSeconds: 201,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/U58DTJwKCro/mqdefault_6s.webp?du=3000&sqp=COiyhL4G&rs=AOn4CLAgflu5DfKcSw95sSMhClizV6wN5w",
            width: 320,
          },
        ],
        publishedTimeText: "6 days ago",
        stats: {
          views: 3078161,
        },
        thumbnails: [
          {
            height: 270,
            url: "https://i.ytimg.com/vi/U58DTJwKCro/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjHbEHVpqBSLLNAbC9mI4S_PQHBA",
            width: 480,
          },
        ],
        title: 'Tom MacDonald - "Man In The Sky"',
        videoId: "U58DTJwKCro",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/qgV8AYrHigMLKQ4MoD-q41a0Mml9yuTuB7eh9sEM3hw7icWPd9GIstOubx2IEwoIIb_RhgJo9Q=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@tom56934",
          channelId: "UCJb-a3n0hHpkQuNpu5kAopQ",
          title: "Tom",
        },
        badges: [],
        descriptionSnippet:
          "In this video I've added every horror mod to one block in minecraft. My goal is to survive and thrive while also being hunted by all ...",
        isLiveNow: false,
        lengthSeconds: 2462,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/RxAhA2XoNSY/mqdefault_6s.webp?du=3000&sqp=CMrOhL4G&rs=AOn4CLAoBjSfOvztSTaOTmhX3HHMfsDtSA",
            width: 320,
          },
        ],
        publishedTimeText: "3 months ago",
        stats: {
          views: 2134603,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/RxAhA2XoNSY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtY-95EluudAYY3vOr-MMfFU4Tag",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/RxAhA2XoNSY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBs3vdTBzDvORAw7z1Dz00xYz2B3A",
            width: 720,
          },
        ],
        title: "Minecraft One Block, but it's EVERY HORROR MOD",
        videoId: "RxAhA2XoNSY",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/1zUL7BEnTNCLvGXDuUB-T4adu-JZYRpJdbYYwFtwCcinEEGv1PaHiFOx1E23IkO75ZEUtezD=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@TalkingFriends",
          channelId: "UCDCNmuaOXOo25Yn4mbMHhhQ",
          title: "Talking Tom & Friends TV",
        },
        badges: [],
        descriptionSnippet:
          "Have you seen Angela? Nope. No one has! It's as if she's been transported to another dimension… Will Tom and the gang ...",
        isLiveNow: false,
        lengthSeconds: 1309,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/9r09KMux7_M/mqdefault_6s.webp?du=3000&sqp=COm1hL4G&rs=AOn4CLBwMicxrMjxOT_LLWyb5LDz5kebZQ",
            width: 320,
          },
        ],
        publishedTimeText: "1 year ago",
        stats: {
          views: 14203025,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/9r09KMux7_M/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_6IdF8rIb1D-zo25OV0Pf9u7utA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/9r09KMux7_M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuVhVk620FG7zbXsDkUumu5MhyJA",
            width: 720,
          },
        ],
        title:
          "Angela The Digital Queen 👾👑 Talking Tom & Friends Compilation",
        videoId: "9r09KMux7_M",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/G3gLy3HBgiZ21mEt1uzR0VPA6VXpsgJReuD7Z91nHwcgyFVu_QpHNpxuULN1D0YEQBwD0F1HwQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@FoxNews",
          channelId: "UCXIJgqnII2ZOINSWNOGFThA",
          title: "Fox News",
        },
        badges: ["New", "CC"],
        descriptionSnippet:
          "'Border czar' Tom Homan discusses posters appearing in Los Angeles with personally identifiable information of certain ICE ...",
        isLiveNow: false,
        lengthSeconds: 356,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/bAYirriIxIA/mqdefault_6s.webp?du=3000&sqp=CIC6hL4G&rs=AOn4CLCRu08HDdIj6NditnCghYK74jZ3sQ",
            width: 320,
          },
        ],
        publishedTimeText: "1 day ago",
        stats: {
          views: 162538,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/bAYirriIxIA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVssWrQA7YRMBjeTYawysH4QqKrQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/bAYirriIxIA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNaGAZ9LqGfVvON_NcMSH47pFcHQ",
            width: 720,
          },
        ],
        title: "'The left has lost its mind,' Tom Homan declares",
        videoId: "bAYirriIxIA",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/Y3eskQTMiTF4RZQJBp9t8vTechpHMkrHMP7MYxDtkQ5MW7we2Mse_vKkmL48p-zYICfn9VY0LK4=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: null,
          channelId: "UCElGBUWDCa05jRzc2PfmGqQ",
          title: "Tom MacDonald",
        },
        badges: ["4K"],
        descriptionSnippet:
          "WRITTEN BY Tom MacDonald BEAT PRODUCED BY Tom MacDonald SHOT & DIRECTED by Nova Rockafeller ...",
        isLiveNow: false,
        lengthSeconds: 505,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/YyAumYg5Hxc/mqdefault_6s.webp?du=3000&sqp=CPe6hL4G&rs=AOn4CLA5NJskX-zO5pXmY7gJt5SHHMS93w",
            width: 320,
          },
        ],
        publishedTimeText: "10 months ago",
        stats: {
          views: 9396607,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/YyAumYg5Hxc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIqmBLjRkDN_USu5yIj_g4fLWGCw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/YyAumYg5Hxc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9-kkL8hJmhN8MxHu38ErBIL9-5g",
            width: 720,
          },
        ],
        title: 'Tom MacDonald - "God Mode"',
        videoId: "YyAumYg5Hxc",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/-ynUSIz-9qsDmwZLkjBd0JYoWUGjL91KnTPJimeRz2URHgGYmB7qlxHcvVlnOMvPPSDtpyYSqA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@WildBrainKids",
          channelId: "UCbmWOFTbZoDLWqG1rvFnJ0g",
          title: "WildBrain Kids",
        },
        badges: [],
        descriptionSnippet:
          "Talking Tom wants to play with his favorite toy, but his basketball is just out of reach! Can anyone help him get it down so Tom can ...",
        isLiveNow: false,
        lengthSeconds: 590,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/RvPWrmzDT2o/mqdefault_6s.webp?du=3000&sqp=CPTNhL4G&rs=AOn4CLAZ4_i23xvm-qL7QGVyUdvkj5QXOA",
            width: 320,
          },
        ],
        publishedTimeText: "2 years ago",
        stats: {
          views: 87910964,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/RvPWrmzDT2o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3y6BDF4DE5SzH2o2SlvdFo60LUw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/RvPWrmzDT2o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7RK1FgbrOnPokvw9rDOFr4ZHn8Q",
            width: 720,
          },
        ],
        title:
          "Tricky Toys | Talking Tom Shorts | Cartoons for Kids | WildBrain Kids",
        videoId: "RvPWrmzDT2o",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/Te17F6ihWtmKLAV5Ir4Kauw8f7DKFn50aT43b7NEG4b42n0XjpisoywM4Ej8IuxfbXFSNlgk=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@cnindia",
          channelId: "UClUsCEaF7EkbNFLBOwjCK8w",
          title: "Cartoon Network India",
        },
        badges: [],
        descriptionSnippet:
          "With friendship comes mischief , with mischief comes chaos and with chaos comes entertainment! Hangout with the world's best ...",
        isLiveNow: false,
        lengthSeconds: 3623,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/AV08nxhm52g/mqdefault_6s.webp?du=3000&sqp=CJiVhL4G&rs=AOn4CLAwOiBiHrmOai5Mbtd8kapDcj-jhg",
            width: 320,
          },
        ],
        publishedTimeText: "7 months ago",
        stats: {
          views: 6792385,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/AV08nxhm52g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-l9_WlefVbWKxffisRw7T6vItaA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/AV08nxhm52g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN9MWyglbbBArXlHqqa7sSdpymRw",
            width: 720,
          },
        ],
        title:
          "Tom & Jerry 😺🐭 | World’s Best Frenemies! | Catch the eternal chase of Tom & Jerry | Cartoon Network",
        videoId: "AV08nxhm52g",
      },
    },
  ],
  cursorNext:
    "ErQDEgN0b20arANTQlNDQVF0elpYRndVR2Q0VVhCcGQ0SUJJbEJNTWtSQ1kyUnROR1ZMWTJkc1ltbzJSbTFqYm5CcVlsOTNWMjFxUVhwT04xYUNBUXRsUWpRMFNIcEVaemx6WjRJQkN6bExhMnhtU1RsVk5sTm5nZ0VMVUV0R1FUVjZSR0ZGWTItQ0FRdEVkRzAxYmsxc2NYRXhVWUlCQzJwMmExY3hUVXRUZVU5amdnRUxkREJSTW05MGMzRkRORW1DQVF0cVlWbDBRVVJGZUhSUlRZSUJDM3B6ZFV0R1MySnhXamRWZ2dFTFFqSTROR3hRTmtkVWQydUNBUXRXWnpJM1l6Vm5lSFowWTRJQkMwRnhjSGhtY1dOS1pYTlZnZ0VMYlVSNlNVRXpWbFZHUzBtQ0FRdFNlRUZvUVRKWWIwNVRXWUlCQ3pseU1EbExUWFY0TjE5TmdnRUxZa0ZaYVhKeWFVbDRTVUdDQVF0WmVVRjFiVmxuTlVoNFk0SUJDMUoyVUZkeWJYcEVWREp2Z2dFTFFWWXdPRzU0YUcwMU1tZXlBUVlLQkFnWkVBTHFBUVFJQWhBVhiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D",
  didYouMean: null,
  estimatedResults: 346266561,
  filterGroups: [
    {
      filters: [
        {
          cursorSelect: "dG9tJiYmRWdJSUFRJTNEJTNE",
          label: "Last hour",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJSUFnJTNEJTNE",
          label: "Today",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJSUF3JTNEJTNE",
          label: "This week",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJSUJBJTNEJTNE",
          label: "This month",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJSUJRJTNEJTNE",
          label: "This year",
          selected: false,
        },
      ],
      title: "Upload date",
    },
    {
      filters: [
        {
          cursorSelect: "dG9tJiYmRWdJUUFRJTNEJTNE",
          label: "Video",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJUUFnJTNEJTNE",
          label: "Channel",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJUUF3JTNEJTNE",
          label: "Playlist",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJUUJBJTNEJTNE",
          label: "Movie",
          selected: false,
        },
      ],
      title: "Type",
    },
    {
      filters: [
        {
          cursorSelect: "dG9tJiYmRWdJWUFRJTNEJTNE",
          label: "Under 4 minutes",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJWUF3JTNEJTNE",
          label: "4 - 20 minutes",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJWUFnJTNEJTNE",
          label: "Over 20 minutes",
          selected: false,
        },
      ],
      title: "Duration",
    },
    {
      filters: [
        {
          cursorSelect: "dG9tJiYmRWdKQUFRJTNEJTNE",
          label: "Live",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdKd0FRJTNEJTNE",
          label: "4K",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJZ0FRJTNEJTNE",
          label: "HD",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJb0FRJTNEJTNE",
          label: "Subtitles/CC",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJd0FRJTNEJTNE",
          label: "Creative Commons",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdKNEFRJTNEJTNE",
          label: "360°",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdQUUFRRSUzRA==",
          label: "VR180",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdJNEFRJTNEJTNE",
          label: "3D",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdQSUFRRSUzRA==",
          label: "HDR",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdPNEFRRSUzRA==",
          label: "Location",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmRWdKSUFRJTNEJTNE",
          label: "Purchased",
          selected: false,
        },
      ],
      title: "Features",
    },
    {
      filters: [
        {
          cursorSelect: null,
          label: "Relevance",
          selected: true,
        },
        {
          cursorSelect: "dG9tJiYmQ0FJJTNE",
          label: "Upload date",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmQ0FNJTNE",
          label: "View count",
          selected: false,
        },
        {
          cursorSelect: "dG9tJiYmQ0FFJTNE",
          label: "Rating",
          selected: false,
        },
      ],
      title: "Sort by",
    },
  ],
  refinements: [
    "talking tom season 1",
    "talking tom season 5",
    "talking tom 2",
    "talking tom games",
    "my talking tom game",
    "talking tom tamil",
    "talking tom hindi",
    "talking tom season 6",
    "my talking tom friends game",
    "talking tom and angela",
    "talking tom app",
    "talking tom funny videos",
    "talking tom toy",
    "talking tom heroes",
  ],
};

//-----------------------------------------------------------------------------------------------

const root = document.querySelector("main");

const showUI = (list) => {
  root.innerHTML = "";
  list.forEach((obj, idx) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
    <div class="img-container">
    <img
    src="${obj.videoThumbnails[0].url}" width="100%" id='${idx}'>
    </div>
    <div class="text-container">
      <div>
      <img src="${obj.videoThumbnails.pop().url}">
      </div>
      <div>
      <h4>${obj.title}</h4>
      <p>${obj.author}</p>
      <p>${obj.viewCountText} • ${obj.publishedText}</p>
      </div>
    </div>
    
    
    `;
    newCard.addEventListener("click", () => {
      window.open(`./video.html?id=${obj.videoId}`, "_top");
    });
    root.appendChild(newCard);
  });
};

//-----------------------------------------------------------------------------------------------

const suggestionsContainer = document.querySelector("#search-suggestions");
const input = document.querySelector("input");

//-----------------------------------------------------------------------------------------------

const showSearchResultUI = (videoId) => {
  //suggestionsContainer.classList.display = "none";
  root.innerHTML = "";
  if (videoId) {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          `;
    root.appendChild(newCard);
  }

  dummySearchData.contents.forEach((obj) => {
    let vId = obj.video.videoId;
    const newCard2 = document.createElement("div");
    newCard2.className = "card";
    newCard2.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${vId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
    root.appendChild(newCard2);
  });
};

//-----------------------------------------------------------------------------------------------

suggestionsContainer.addEventListener("click", (e) => {
  console.log("clicked container 1");
  //suggestionsContainer.innerHTML = "";
  showSearchResultUI(e.target.id);
  suggestionsContainer.style.display = "none";

});
input.addEventListener("focusout", (e) => {
  //suggestionsContainer.innerHTML = "";
  setTimeout(() => { 
    suggestionsContainer.style.display="none";
  },500)
});

//-----------------------------------------------------------------------------------------------

const showSuggestions = (data) => {
  suggestionsContainer.style.display = "inline";
  suggestionsContainer.innerHTML = "";
  console.log(data);
  const suggestions = data.contents;
  suggestions.forEach((ele) => {
    const p = document.createElement("p");
    p.id = ele.video.videoId;
    p.innerText = ele.video.author.title;
    suggestionsContainer.appendChild(p);
  });
};

//-----------------------------------------------------------------------------------------------

let timeoutId = null;

const handleSearch = (e) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    //getDataSearch(e.target.value);
    showSuggestions(dummySearchData);
  }, 800);
};

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    showSearchResultUI(null);
    //suggestionsContainer.innerHTML = "";
    suggestionsContainer.style.display="none";
  }
});

//-----------------------------------------------------------------------------------------------

showUI(dummyData);
