const MusicBrainzApi = require('musicbrainz-api').MusicBrainzApi;

const mbApi = new MusicBrainzApi({
  appName: 'my-app',
  appVersion: '0.1.0',
  appContactInfo: 'premanshu@usf.edu'
});

const start = async function(a, b) {
    const result = await mbApi.searchArtist("chopin");
    console.log(result);
}

start();