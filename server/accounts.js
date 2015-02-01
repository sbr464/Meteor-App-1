// first, remove configuration entry in case service is already configured
// Accounts.loginServiceConfiguration.remove({
//   service: "facebook"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "facebook",
//   appId: "yourAppId",
//   secret: "yourSecret"
// });

// first, remove configuration entry in case service is already configured
// Accounts.loginServiceConfiguration.remove({
//   service: "twitter"
// });
// Accounts.loginServiceConfiguration.insert({
//   service: "twitter",
//   consumerKey: "yourConsumerKey",
//   secret: "yourSecret"
// });

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "google"
});
Accounts.loginServiceConfiguration.insert({
  service: "google",
  clientId: "320147843270-48ck62rcdgmbo5jiqrnfm0bnj8bn51no.apps.googleusercontent.com",
  secret: "c4_pLAVJJCcHarh4R6KGYti2"
});