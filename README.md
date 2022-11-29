# 👽 Welcome to Instafest NFT


-Create a festival lineup from your top artists.
-Sign in to your Spotify account to get started.

⭐️ And create a NFT of your gig.

Why? be viral is just for a click bait moment but your gig is for forever.

It was a copy past ultra sound money.

Run:

yarn 

yarn run dev 


## 💻 Latest Updates [July 6th, 2022]

- Integrated Rainbowkit
- Updated Wagmi
- Cleaned up the Nav code


## 🚀 Quick Start

```bash
git clone https://github.com/ilyxium/eth-nextjs-boilerplate.git
# then
npm install
# then
npm run dev
```

Please note: Some users have mentioned issues with using yarn, so I recommend using NPM

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 What's under the hood

This boilerplate uses the following open source libraries to bring you a fully functional, mobile optimized dApp:

- [next.js](https://nextjs.org/docs)
- [react.js](https://reactjs.org/)
- [wagmi](https://wagmi-xyz.vercel.app/)
- [ethers.js](https://docs.ethers.io/v5/)
- [chakra](https://chakra-ui.com/)
- [rainbowkit](https://www.rainbowkit.com/docs/introduction)

## 💎 What you get

- Connect Wallet + One wagmi hook [send a transaction] done for you! 💲
- Scalable header + mobile menu ↔️
- Mobile friendly 📱

<img width="489" alt="Screen Shot 2022-07-06 at 3 13 53 PM" src="https://user-images.githubusercontent.com/100057052/177625571-5ee7a1fe-bbb1-4031-b3f5-cfb535171763.png">

- 3 pages, including a 404 page, and routing done ✅
- Examples of buttons and links 👽

## 🔌 Connectors

The boilerplate now uses [rainbowkit](https://www.rainbowkit.com/docs/introduction). They make it super easy to configure the connector, and allows you to choose chains, styling, and more. 

Change your chains in app.tsx:

```
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
      alchemyProvider(),
      publicProvider()
    ]
  );
```


