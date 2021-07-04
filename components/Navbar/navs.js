export default [{
    id: "app",
    text: 'APP',
    children: [{
        id: 'Muon Presale'.toUpperCase(),
        text: 'muon presale',
        path: 'https://app.deus.finance/muon-presale',
        exact: true
      },
      {
        id: 'Stake And Yeild'.toUpperCase(),
        text: 'STAKE & YIELD',
        path: 'https://app.deus.finance/stake-and-yield',
        exact: true
      },
      {
        id: 'sealed Swap'.toUpperCase(),
        text: 'sealed swap',
        path: 'https://app.deus.finance/sealed-swap',
        exact: true
      },
      {
        id: 'vaultsL',
        text: 'VAULTS (LEGACY)',
        path: 'https://app.deus.finance/vaults',
        exact: true
      },
      {
        id: 'STAKING (LEGACY)',
        text: 'STAKING (LEGACY)',
        path: 'https://app.deus.finance/staking',
      }
    ]
  },
  {
    id: 'synthetics',
    text: 'SYNTHETICS',
    children: [{
        id: 'ETH',
        text: 'ETH',
        path: 'https://app.deus.finance/synchronizer',
        exact: true
      },
      {
        id: 'xDai',
        text: 'xDAI',
        path: 'https://app.deus.finance/crosschain/xdai/synchronizer',
        exact: true
      },
      {
        id: 'bsc',
        text: 'BSC',
        path: 'https://app.deus.finance/crosschain/bsc/synchronizer',
        exact: true
      },
      {
        id: 'heco',
        text: 'HECO',
        path: 'https://app.deus.finance/crosschain/heco/synchronizer',
        exact: true
      },
    ]
  },
  {
    id: 'swap',
    text: 'SWAP',
    path: 'https://app.deus.finance/swap',
    exact: true,
  },
  {
    id: 'tools',
    text: 'TOOLS',
    children: [
      {
        id: 'DEUS android',
        text: 'DEUS android',
        path: 'https://play.google.com/store/apps/details?id=finance.deus.deus_mobile&hl=en_US',
      },
      {
        id: 'simulator',
        text: 'DEUS simulator',
        path: 'https://simulate.deus.finance',
      },
      {
        id: 'tradingview',
        text: 'DEUS tradingview',
        path: 'https://chart.deus.finance',
      },
      {
        id: 'vote',
        text: 'DEUS vote',
        path: 'https://vote.deus.finance',
      }
    ]
  },
  {
    id: 'learn',
    text: 'LEARN',
    children: [{
      id: 'deusWiki',
      text: 'DEUS wiki',
      path: 'https://wiki.deus.finance/docs',
    }, ]
  },
  {
    id: "telegram",
    image: true,
    path: "https://t.me/deusfinance",
    children: [{
        id: 'announcement',
        text: 'Announcement Channel',
        path: 'https://t.me/deusfinance_news',
      },
      {
        id: 'Community',
        text: 'Community Channel',
        path: 'https://t.me/deusfinance',
      },
    ]
  },
  {
    id: "twitter",
    image: true,
    path: "https://twitter.com/DeusDao"
  },
  {
    id: "discord",
    image: true,
    path: "https://discord.com/invite/xfeYT6acha"
  },
].reverse()
