// DEADREPO
// 

const { TwitterApi } = require('twitter-api-v2');
const fetch = require('cross-fetch');
const fs = require('fs');
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const sharp = require('sharp');
const express = require("express")
const app = express();

require('dotenv').config();

// Initialise Twitter client
const client = new TwitterApi({
  appKey: `${process.env.consumer_key}`,
  appSecret: `${process.env.consumer_secret}`,
  accessToken: `${process.env.access_token}`,
  accessSecret: `${process.env.access_token_secret}`,
});

  //PEPE
  async function PEPE(){

    //If you wanna put the timestamp
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(dateTime)

    const cgData = await CoinGeckoClient.simple.price({
      ids: 'pepe',
      vs_currencies: 'usd',
    });
    const pepeUSD = Number(cgData.data.pepe.usd);

    const msg = `◤　　　　　　　　　　　  ◥
  🐸 $PEPE, A MOVEMENT ！
◣　　　　　　　　　　　  ◢\n\n🐸 Currently at ($${pepeUSD})\n\n✦ @pepecoineth \n\n✦ Powered by @coingecko\n\n#PEPE #NFT`;

    newTweet = await client.v1.tweet(msg);


    console.log(cgData.data.pepe.usd + " ADA\n")
    console.log(`Tweeted: ($${pepeUSD})`);

    
  }

app.get("/pepe",(req,res)=>{
  PEPE(); //calling the function
  res.send("PEPE TWEET") //Giving a response back.
})

//http://localhost:3000/pepe
  
app.listen(3000, function() {
  console.log(' ┼ TWITTER BOT ACTIVATED ┼\n ┼ A new ERA BEGIN ┼')
  
})