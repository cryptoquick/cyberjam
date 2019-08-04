# cyberjam

drive traffic to your site with a network of peers for cryptocurrency rewards.

earn crypto just by visiting websites when notified.

it's like an airdrop, similar to earn.com, but with a browser extension, and a focus on driving real users to your site.

when a site is broadcast, browsers automatically open up a new request to the site, opening it in an iframe object in the background script.

for running the extension, each peer earns some crypto tokens after successfully visiting sites that are broadcast as well as personally visiting sites, stored in a token contract and backed by ethereum, and can be cashed out when desired.

the payment model for those who want to make use of the network, one possibility is that they will purchase 0.1 ETH, or \$~20 worth of tokens, given the price of ETH on a given day, which would purchase 1000 passive clicks, or 100 active clicks.

## mvp features

- [ ] extension

  - [ ] web3 login
  - [ ] notifications
  - [ ] passive visits
  - [ ] display list of active sites
  - [ ] look for text or meta tag key in response
  - [ ] callback to server to validate response

- [ ] server

  - [ ] web3 auth
  - [ ] /validate - validates clients who claim to have visited the site
  - [ ] tracker - track active peers
  - [ ] notifications server

- [ ] site

  - [ ] explainer copy
  - [ ] install extension
  - [ ] check token funds in wallet
  - [ ] request a cyberjam

    - [ ] immediate passive visits from real users' browsers
    - [ ] eventual active visits from real users

## backlog

- [ ] script tag to be placed on the site which provides a key based on a hash of the user's IP to increase trust that there was a visit

## stack

- [ ] typescript
- [ ] node.js
- [ ] redis
- [ ] web3.js
- [ ] now.sh
