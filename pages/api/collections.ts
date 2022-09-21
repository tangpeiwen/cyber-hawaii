// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(
    [
      {
        "collection": "Bored Ape Yacht Club",
        "logo": "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120",
        "risk_factor": 3.6,
        "sudo_arbitrage_profit": -66.7,
        "opensea_floor_price": 74,
        "sudo_offer": 0,
        "confidence_index": 88,
        "confidence_level": "high"
      },
      {
        "collection": "Parallel Alpha",
        "logo": "https://lh3.googleusercontent.com/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL=s120",
        "risk_factor": null,
        "sudo_arbitrage_profit": null,
        "opensea_floor_price": 0.0022,
        "sudo_offer": 0,
        "confidence_index": 67,
        "confidence_level": "high"
      },
      {
        "collection": "Mutant Ape Yacht Club",
        "logo": "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s120",
        "risk_factor": 0.31,
        "sudo_arbitrage_profit": -11.75,
        "opensea_floor_price": 12.700000000000001,
        "sudo_offer": 0,
        "confidence_index": 89,
        "confidence_level": "high"
      },
      {
        "collection": "Otherdeed for Otherside",
        "logo": "https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s120",
        "risk_factor": 0.02,
        "sudo_arbitrage_profit": 0.0800000000000001,
        "opensea_floor_price": 1.689,
        "sudo_offer": 1.62,
        "confidence_index": 51,
        "confidence_level": "low"
      },
      {
        "collection": "ENS: Ethereum Name Service",
        "logo": "https://lh3.googleusercontent.com/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ=s60",
        "risk_factor": null,
        "sudo_arbitrage_profit": null,
        "opensea_floor_price": 5.6753000000000005e-22,
        "sudo_offer": 0,
        "confidence_index": 88,
        "confidence_level": "high"
      },
      {
        "collection": "Pumping Parrots",
        "logo": "https://openseauserdata.com/files/3c3be1213cf459ade3c624a5a16110ce.png",
        "risk_factor": 0.13,
        "sudo_arbitrage_profit": -0.6000000000000001,
        "opensea_floor_price": 0.81,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Moonbirds",
        "logo": "https://lh3.googleusercontent.com/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75=s120",
        "risk_factor": 0.61,
        "sudo_arbitrage_profit": -8.53,
        "opensea_floor_price": 9.88,
        "sudo_offer": 0,
        "confidence_index": 53,
        "confidence_level": "low"
      },
      {
        "collection": "Moonbirds Oddities",
        "logo": "https://lh3.googleusercontent.com/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q=s120",
        "risk_factor": 0.04,
        "sudo_arbitrage_profit": -0.16,
        "opensea_floor_price": 1.2956,
        "sudo_offer": 1,
        "confidence_index": 82,
        "confidence_level": "high"
      },
      {
        "collection": "Gutter Juice",
        "logo": "https://lh3.googleusercontent.com/xsApnCm19QrZDa8uPuZ8GBoNxRbKW5aPZQsUedWh3giAEM5Oo7dEDDjAQcEdVHDvbDlHfmOOv2mqyv5owaGHWvmDfc4zZ8Nq-gRxbw=s120",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.16,
        "opensea_floor_price": 0.18,
        "sudo_offer": 0,
        "confidence_index": 90,
        "confidence_level": "high"
      },
      {
        "collection": "World of Pepe Official",
        "logo": "https://openseauserdata.com/files/fddf3476b6fdb6dedefa0bdf1f77ee08.jpg",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.14,
        "opensea_floor_price": 0.164,
        "sudo_offer": 0,
        "confidence_index": 95,
        "confidence_level": "high"
      },
      {
        "collection": "CryptoNinja Partners",
        "logo": "https://openseauserdata.com/files/2a612d58a37abecd1458330b47e678e6.gif",
        "risk_factor": 0.05,
        "sudo_arbitrage_profit": -0.65,
        "opensea_floor_price": 0.8,
        "sudo_offer": 0,
        "confidence_index": 98,
        "confidence_level": "high"
      },
      {
        "collection": "Truffle Pass",
        "logo": "https://openseauserdata.com/files/3bf14f8ae84536238a072e5f027ea192.png",
        "risk_factor": 0.05,
        "sudo_arbitrage_profit": -0.48,
        "opensea_floor_price": 0.539,
        "sudo_offer": 0,
        "confidence_index": 92,
        "confidence_level": "high"
      },
      {
        "collection": "Catharsis by Dario Lanza",
        "logo": "https://openseauserdata.com/files/5498d13847bc597f4422fe822474ddde.png",
        "risk_factor": 0.03,
        "sudo_arbitrage_profit": -0.35000000000000003,
        "opensea_floor_price": 0.422,
        "sudo_offer": 0,
        "confidence_index": 62,
        "confidence_level": "high"
      },
      {
        "collection": "Doge Club(DOGC)",
        "logo": "https://openseauserdata.com/files/dd5e8baa0fa1c0e706dcd1fb871295ee.png",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.02,
        "opensea_floor_price": 0.02,
        "sudo_offer": 0,
        "confidence_index": 99,
        "confidence_level": "high"
      },
      {
        "collection": "BGYC",
        "logo": "https://openseauserdata.com/files/1c6d3c3c829315d38c2b2068a52f5d02.jpg",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.02,
        "opensea_floor_price": 0.0317,
        "sudo_offer": 0,
        "confidence_index": 97,
        "confidence_level": "high"
      },
      {
        "collection": "HOSHIBOSHI GENESIS",
        "logo": "https://openseauserdata.com/files/657bb626cbd563c14a8d3d791a31a4e8.png",
        "risk_factor": 0.49,
        "sudo_arbitrage_profit": -1,
        "opensea_floor_price": 1.6580000000000001,
        "sudo_offer": 0,
        "confidence_index": 90,
        "confidence_level": "high"
      },
      {
        "collection": ".bit: Web3 Identity",
        "logo": "https://openseauserdata.com/files/717c4c21ca86b6a498a83ed704c5783d.png",
        "risk_factor": null,
        "sudo_arbitrage_profit": null,
        "opensea_floor_price": 0.0021000000000000003,
        "sudo_offer": 0,
        "confidence_index": 99,
        "confidence_level": "high"
      },
      {
        "collection": "Doodles",
        "logo": "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s120",
        "risk_factor": 0.16,
        "sudo_arbitrage_profit": -6.41,
        "opensea_floor_price": 7.1000000000000005,
        "sudo_offer": 0,
        "confidence_index": 80,
        "confidence_level": "high"
      },
      {
        "collection": "grumpls",
        "logo": "https://openseauserdata.com/files/20bc9fcbdb077f0a89951f9621477a11.png",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.59,
        "opensea_floor_price": 0.67,
        "sudo_offer": 0,
        "confidence_index": 50,
        "confidence_level": "low"
      },
      {
        "collection": "3FACE | art that adapts to you",
        "logo": "https://openseauserdata.com/files/833efa2b978644b4fa8a2561b8d18e6d.png",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.23,
        "opensea_floor_price": 0.259,
        "sudo_offer": 0,
        "confidence_index": 85,
        "confidence_level": "high"
      },
      {
        "collection": "Jadu AVA",
        "logo": "https://openseauserdata.com/files/8cfd0697f4e86bb291e26bd27bec0d6a.png",
        "risk_factor": -0.01,
        "sudo_arbitrage_profit": -0.25,
        "opensea_floor_price": 0.27,
        "sudo_offer": 0,
        "confidence_index": 90,
        "confidence_level": "high"
      },
      {
        "collection": "CLONE X - X TAKASHI MURAKAMI",
        "logo": "https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s120",
        "risk_factor": -0.03,
        "sudo_arbitrage_profit": 0.04,
        "opensea_floor_price": 5.7,
        "sudo_offer": 5.34,
        "confidence_index": 71,
        "confidence_level": "high"
      },
      {
        "collection": "RTFKT Clone X Forging SZN 1 (PRE-FORGE) ⚒️",
        "logo": "https://openseauserdata.com/files/7b0c87d3326e91e267fbb190d3fd1d7f.gif",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.02,
        "opensea_floor_price": 0.0229,
        "sudo_offer": 0,
        "confidence_index": 65,
        "confidence_level": "high"
      },
      {
        "collection": "goblintown.wtf",
        "logo": "https://lh3.googleusercontent.com/cb_wdEAmvry_noTfeuQzhqKpghhZWQ_sEhuGS9swM03UM8QMEVJrndu0ZRdLFgGVqEPeCUzOHGTUllxug9U3xdvt0bES6VFdkRCKPqg=s120",
        "risk_factor": -0.02,
        "sudo_arbitrage_profit": -0.92,
        "opensea_floor_price": 1,
        "sudo_offer": 0,
        "confidence_index": 56,
        "confidence_level": "low"
      },
      {
        "collection": "The Potatoz",
        "logo": "https://openseauserdata.com/files/7f3cd1b5f71225f4aab4efab5542f253.gif",
        "risk_factor": 0.03,
        "sudo_arbitrage_profit": -0.16,
        "opensea_floor_price": 1.449,
        "sudo_offer": 1.09,
        "confidence_index": 83,
        "confidence_level": "high"
      },
      {
        "collection": "Bored Ape Kennel Club",
        "logo": "https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120",
        "risk_factor": 0.14,
        "sudo_arbitrage_profit": -5.9,
        "opensea_floor_price": 6.189990000000001,
        "sudo_offer": 0,
        "confidence_index": 29,
        "confidence_level": "low"
      },
      {
        "collection": "Pudgy Penguins",
        "logo": "https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s120",
        "risk_factor": 0.12,
        "sudo_arbitrage_profit": -0.11000000000000001,
        "opensea_floor_price": 3.45,
        "sudo_offer": 2.96,
        "confidence_index": 80,
        "confidence_level": "high"
      },
      {
        "collection": "YOLO Bunny",
        "logo": "https://openseauserdata.com/files/dd4dd38c32af4a9f474630cd108dc518.jpg",
        "risk_factor": 0.09,
        "sudo_arbitrage_profit": -0.42,
        "opensea_floor_price": 0.54,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "BoxcatPlanet Official",
        "logo": "https://openseauserdata.com/files/b839843c273057b4eac6533a1da9d443.gif",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.04,
        "opensea_floor_price": 0.049800000000000004,
        "sudo_offer": 0,
        "confidence_index": 92,
        "confidence_level": "high"
      },
      {
        "collection": "Dooplicator",
        "logo": "https://lh3.googleusercontent.com/RrCR2EKxJnu_JoadezfSwRBFeiYexn54OwWyAtGdCfZpfvwmjlxiqrajlOrIJ1ri9SRnc6P-UxW9_saOFwp69vUDcxxr_Wr2S_YXjqc=s120",
        "risk_factor": 0.11,
        "sudo_arbitrage_profit": -0.8200000000000001,
        "opensea_floor_price": 1,
        "sudo_offer": 0,
        "confidence_index": 93,
        "confidence_level": "high"
      },
      {
        "collection": "Gutter Clones",
        "logo": "https://lh3.googleusercontent.com/Y2xDAT7RUoCOUk1u-wsU430M7T4DnYbPKo63-0bQJJeVCIk6zAWJhVCobdTUr4VTMvhkH5aJbYBz8HcIQECJEL_vpUE4cB1Wz7vT=s120",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.15,
        "opensea_floor_price": 0.165,
        "sudo_offer": 0,
        "confidence_index": 83,
        "confidence_level": "high"
      },
      {
        "collection": "RENGA",
        "logo": "https://openseauserdata.com/files/f3b11e36be14a5d31c75b19d03996fed.gif",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.28,
        "opensea_floor_price": 0.31,
        "sudo_offer": 0,
        "confidence_index": 57,
        "confidence_level": "low"
      },
      {
        "collection": "VeeFriends",
        "logo": "https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120",
        "risk_factor": -0.04,
        "sudo_arbitrage_profit": -4.8500000000000005,
        "opensea_floor_price": 5.5,
        "sudo_offer": 0,
        "confidence_index": 50,
        "confidence_level": "low"
      },
      {
        "collection": "The Stoics by Gabe Weis - thestoics.art",
        "logo": "https://openseauserdata.com/files/c94e4322ce56aeaf726d0946e33a11a6.gif",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.12,
        "opensea_floor_price": 0.146,
        "sudo_offer": 0,
        "confidence_index": 95,
        "confidence_level": "high"
      },
      {
        "collection": "Genuine Undead",
        "logo": "https://openseauserdata.com/files/1eb8d685d4e404c9b1177dfe14c2c9e0.png",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.04,
        "opensea_floor_price": 0.168,
        "sudo_offer": 0.12,
        "confidence_index": 63,
        "confidence_level": "high"
      },
      {
        "collection": "ACK EDITIONS",
        "logo": "https://lh3.googleusercontent.com/du9RMWp2oTtFUo7W-qlft41zLwptMy4tgSTE3ieghzVs7hj4uFe4lSks5kz5kYjKmso-En2_HKmA7SrrKH_yzMZGycFT3HQ63s1Z=s120",
        "risk_factor": null,
        "sudo_arbitrage_profit": null,
        "opensea_floor_price": 0.15,
        "sudo_offer": 0,
        "confidence_index": 89,
        "confidence_level": "high"
      },
      {
        "collection": "Akutars",
        "logo": "https://lh3.googleusercontent.com/lU7HLkzbdUB07EpfR2wvLkLi8Msc5JyE5d7iDNmgVn3EdnNnNM-2c-027IHP0W8T1t2wH5Hl2gtv90tzF_LdUC6Q-UBYwXpBfMaOCA=s120",
        "risk_factor": 0.04,
        "sudo_arbitrage_profit": -0.39,
        "opensea_floor_price": 0.46900000000000003,
        "sudo_offer": 0,
        "confidence_index": 92,
        "confidence_level": "high"
      },
      {
        "collection": "CryptoSimeji Official",
        "logo": "https://openseauserdata.com/files/0f8b3e2df37972fece7b2d8fe692f229.png",
        "risk_factor": 0,
        "sudo_arbitrage_profit": 0.02,
        "opensea_floor_price": 0.0918,
        "sudo_offer": 0.1,
        "confidence_index": 63,
        "confidence_level": "high"
      },
      {
        "collection": "10KTF Stockroom",
        "logo": "https://lh3.googleusercontent.com/8Psw091U98gxhuI5MH0GDpjEebrlZ3XxzqDbP8eD35j0IyyFapeFu-zKYu_z1jn7PiduRxkXPgSc2wp-PgDpr3Ji70mD9yu1ksb3eQ=s120",
        "risk_factor": 0.03,
        "sudo_arbitrage_profit": -0.07,
        "opensea_floor_price": 0.116,
        "sudo_offer": 0,
        "confidence_index": 72,
        "confidence_level": "high"
      },
      {
        "collection": "The Saudis",
        "logo": "https://openseauserdata.com/files/2672eeeeaa51eaa4bf32b5d0280c0e3d.png",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.02,
        "opensea_floor_price": 0.22,
        "sudo_offer": 0.17,
        "confidence_index": 64,
        "confidence_level": "high"
      },
      {
        "collection": "Dragon Fish Tokyo",
        "logo": "https://openseauserdata.com/files/604a1c77a6ddbccc42ca71d12a062555.png",
        "risk_factor": 0.03,
        "sudo_arbitrage_profit": -0.23,
        "opensea_floor_price": 0.28,
        "sudo_offer": 0,
        "confidence_index": 60,
        "confidence_level": "low"
      },
      {
        "collection": "Tykes",
        "logo": "https://lh3.googleusercontent.com/FIVTOXvq6laXQrp0B60K6iEW3cNRD-q9FRmpI0bMe7EZ7_spGs6ZlA0gqEnTRkc7xbJhP6lzZQ6l0B0u_QD_GOp4DBF-oQdwPr7P3g=s120",
        "risk_factor": 0.34,
        "sudo_arbitrage_profit": -1.9000000000000001,
        "opensea_floor_price": 2.46999,
        "sudo_offer": 0,
        "confidence_index": 36,
        "confidence_level": "low"
      },
      {
        "collection": "Curio Key",
        "logo": "https://openseauserdata.com/files/a1e04c391553f9671872ae4df8d4b348.gif",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.03,
        "opensea_floor_price": 0.0475,
        "sudo_offer": 0,
        "confidence_index": 94,
        "confidence_level": "high"
      },
      {
        "collection": "Rose Invasion Official",
        "logo": "https://openseauserdata.com/files/7ab5faacc797413931b67842ec468409.png",
        "risk_factor": 0.04,
        "sudo_arbitrage_profit": -0.07,
        "opensea_floor_price": 0.12,
        "sudo_offer": 0,
        "confidence_index": 99,
        "confidence_level": "high"
      },
      {
        "collection": "your mom nft",
        "logo": "https://openseauserdata.com/files/bd88bdec6d14034c542bf4a5b9c7654f.gif",
        "risk_factor": null,
        "sudo_arbitrage_profit": null,
        "opensea_floor_price": 0.007,
        "sudo_offer": 0,
        "confidence_index": 99,
        "confidence_level": "high"
      },
      {
        "collection": "Todd James Art Party Official",
        "logo": "https://openseauserdata.com/files/7e02a73b8849aad7539e428405a1f658.png",
        "risk_factor": 0.05,
        "sudo_arbitrage_profit": -0.31,
        "opensea_floor_price": 0.3985,
        "sudo_offer": 0,
        "confidence_index": 95,
        "confidence_level": "high"
      },
      {
        "collection": "y00ts Yacht Club",
        "logo": "https://openseauserdata.com/files/61a40a1bd7292af01eb31e56d1f38235.png",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.02,
        "opensea_floor_price": 0.025,
        "sudo_offer": 0,
        "confidence_index": 82,
        "confidence_level": "high"
      },
      {
        "collection": "CryptoDickbutts",
        "logo": "https://lh3.googleusercontent.com/vw-gp8yUYkQsxQN5xbHrWEhY7rQWQZhIjgO2tvLxu46VY6iwulwWZt5VFS2Q9gy9qJaiJk8QspZs0qaM9z1ODeIyeUUseABOxdfVrC8=s120",
        "risk_factor": 0.22,
        "sudo_arbitrage_profit": -0.0800000000000001,
        "opensea_floor_price": 2.9000000000000004,
        "sudo_offer": 2.38,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Cool Cats NFT",
        "logo": "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120",
        "risk_factor": 0.04,
        "sudo_arbitrage_profit": -1.79,
        "opensea_floor_price": 1.9777,
        "sudo_offer": 0,
        "confidence_index": 67,
        "confidence_level": "high"
      },
      {
        "collection": "LAYC",
        "logo": "https://openseauserdata.com/files/3d1f199e672d68a33f442a53153b7377.jpg",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.06,
        "opensea_floor_price": 0.071999,
        "sudo_offer": 0,
        "confidence_index": 70,
        "confidence_level": "high"
      },
      {
        "collection": "CyberBrokers",
        "logo": "https://lh3.googleusercontent.com/h67MQaSTJ0u1GU6oNHR5K-V7Hjo2m_sMW5vwROMDP_ggPDkUNvx3OcZAkaxu-v0BPCIMuJaoRzeEl_AaUh9GFApBr9wPfwp1jnE8uQ=s120",
        "risk_factor": 0.08,
        "sudo_arbitrage_profit": -0.84,
        "opensea_floor_price": 0.99,
        "sudo_offer": 0,
        "confidence_index": 90,
        "confidence_level": "high"
      },
      {
        "collection": "DigiDaigaku Spirits",
        "logo": "https://openseauserdata.com/files/fd6ad67ae05f548caf71541fb4dcf648.png",
        "risk_factor": 0.03,
        "sudo_arbitrage_profit": -2.42,
        "opensea_floor_price": 2.8000000000000003,
        "sudo_offer": 0,
        "confidence_index": 75,
        "confidence_level": "high"
      },
      {
        "collection": "Rare Apepe YC",
        "logo": "https://lh3.googleusercontent.com/xVeNbgTjhD1vXcji7ws9NnB0eGPxSUMtEN9LAmf0ifIk-wEu42ecxNc-qMO31ICOahxBKEgqywmc5FjWn5L16Qo0IBjCsXuRbeaigQ=s120",
        "risk_factor": 0.02,
        "sudo_arbitrage_profit": 0,
        "opensea_floor_price": 0.399,
        "sudo_offer": 0.35000000000000003,
        "confidence_index": 63,
        "confidence_level": "high"
      },
      {
        "collection": "SuperRare",
        "logo": "https://lh3.googleusercontent.com/-1VbTF_qOdwTUTxW8KzJbFcMX0-mDF-BJM-gmmRl8ihvoo53PF_1z1m1snLXxwcxVFyJH7wk_kouq-KVyB55N9U=s60",
        "risk_factor": null,
        "sudo_arbitrage_profit": null,
        "opensea_floor_price": 0.09,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Akyllers",
        "logo": "https://openseauserdata.com/files/4be31068f830bfab187994c417d7fbb6.png",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.02,
        "opensea_floor_price": 0.022,
        "sudo_offer": 0,
        "confidence_index": 98,
        "confidence_level": "high"
      },
      {
        "collection": "RTFKT X NIKE MONOLITH",
        "logo": "https://lh3.googleusercontent.com/9Lu26NAuB18NXWaXsCTVfpetIL-3ue4nIexfFqCcMOfpX1MVD5nw87PwACPFEpNwSvWhSGhJL3HCjkOw30y-ir3j82d4eWyy8msu=s120",
        "risk_factor": 1,
        "sudo_arbitrage_profit": -0.6000000000000001,
        "opensea_floor_price": 1.83,
        "sudo_offer": 0,
        "confidence_index": 0,
        "confidence_level": "low"
      },
      {
        "collection": "Genesis Box",
        "logo": "https://openseauserdata.com/files/f4d45dbfa3027e116714b786da95c9bd.png",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.21,
        "opensea_floor_price": 0.23800000000000002,
        "sudo_offer": 0,
        "confidence_index": 94,
        "confidence_level": "high"
      },
      {
        "collection": "Wolf Game - Genesis Land",
        "logo": "https://lh3.googleusercontent.com/MNZ_7zfZRZ-AFrMOPh7Bylc7IkPr-RvGjSGj_YKSrkYX_QKTzQFUvqs4UKx_FTsY1ioGOHYJjRTkiIDuyShcT1li69EilYucMeqhKSY=s120",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.48,
        "opensea_floor_price": 0.54,
        "sudo_offer": 0,
        "confidence_index": 98,
        "confidence_level": "high"
      },
      {
        "collection": "RTFKT - MNLTH",
        "logo": "https://lh3.googleusercontent.com/gp39NTyxBPazqowYV9XTFxAU4eNk1i7FlmonHW4Zr7eS9UxEvrZ7f04rOLEhDxcuGxsbUx1Rm_N6Ky_Dp4A1ZQYHFAaEWj5YdBF0qg=s120",
        "risk_factor": 0.25,
        "sudo_arbitrage_profit": -2.31,
        "opensea_floor_price": 2.93,
        "sudo_offer": 0,
        "confidence_index": 20,
        "confidence_level": "low"
      },
      {
        "collection": "Champions Ascension",
        "logo": "https://openseauserdata.com/files/9ffae612e0c8ea54537f646b9c144c6f.png",
        "risk_factor": 0.17,
        "sudo_arbitrage_profit": -0.28,
        "opensea_floor_price": 0.48,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Metropolis World Passport Official",
        "logo": "https://openseauserdata.com/files/fa8624c350bab4f07b79333c3b789201.png",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.1,
        "opensea_floor_price": 0.11900000000000001,
        "sudo_offer": 0,
        "confidence_index": 92,
        "confidence_level": "high"
      },
      {
        "collection": "World of Women",
        "logo": "https://lh3.googleusercontent.com/EFAQpIktMBU5SU0TqSdPWZ4byHr3hFirL_mATsR8KWhM5z-GJljX8E73V933lkyKgv2SAFlfRRjGsWvWbQQmJAwu3F2FDXVa1C9F",
        "risk_factor": 0.02,
        "sudo_arbitrage_profit": -2.32,
        "opensea_floor_price": 2.5,
        "sudo_offer": 0,
        "confidence_index": 50,
        "confidence_level": "low"
      },
      {
        "collection": "The 187 by Truth Labs",
        "logo": "https://lh3.googleusercontent.com/6OZ8fXS5TGv6WdIdNU6P4RKkNueS2gAi87FNEjlPDSukk0dXbQy4Sd3u2Gz9uskJ3TQM8vutEIXUmDLp_1lMUoEDzgAupfBd4OsbttY=s120",
        "risk_factor": 2.57,
        "sudo_arbitrage_profit": -15,
        "opensea_floor_price": 19,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "RENGA Black Box",
        "logo": "https://openseauserdata.com/files/c6607f30698fec56931320239d63b690.gif",
        "risk_factor": -0.02,
        "sudo_arbitrage_profit": 0.009999999999999901,
        "opensea_floor_price": 0.71,
        "sudo_offer": 0.6900000000000001,
        "confidence_index": 71,
        "confidence_level": "high"
      },
      {
        "collection": "OzDao Pass",
        "logo": "https://openseauserdata.com/files/c05aea9ab167ee2c5fa23179ac508884.png",
        "risk_factor": 13.290000000000001,
        "sudo_arbitrage_profit": -4,
        "opensea_floor_price": 18.900000000000002,
        "sudo_offer": 0,
        "confidence_index": 0,
        "confidence_level": "low"
      },
      {
        "collection": "Looki",
        "logo": "https://openseauserdata.com/files/24d69f2fb87719edc973d686a0b43226.gif",
        "risk_factor": 0.1,
        "sudo_arbitrage_profit": -1.1500000000000001,
        "opensea_floor_price": 1.286,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Invisible Friends",
        "logo": "https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s120",
        "risk_factor": 0.23,
        "sudo_arbitrage_profit": -1.8,
        "opensea_floor_price": 2.1999,
        "sudo_offer": 0,
        "confidence_index": 75,
        "confidence_level": "high"
      },
      {
        "collection": "TGLP Genesis",
        "logo": "https://openseauserdata.com/files/14b4ef181f2c8dd829e2848e362389ab.gif",
        "risk_factor": 4.58,
        "sudo_arbitrage_profit": -0.15,
        "opensea_floor_price": 5.4,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Bones by Jarritos",
        "logo": "https://openseauserdata.com/files/26d741e8d2399adcee32dc05c965b4d6.png",
        "risk_factor": 0.08,
        "sudo_arbitrage_profit": -0.33,
        "opensea_floor_price": 0.44,
        "sudo_offer": 0,
        "confidence_index": 88,
        "confidence_level": "high"
      },
      {
        "collection": "Treeverse Plots",
        "logo": "https://lh3.googleusercontent.com/qwYkDJYhJQsMO-cyIVqjbHLlvevSlGC21RUq6McPXTHeJ1WTXUjCdP7aHTaSSS3hbyLW3QkVUadO2a7DpNVnrkyuTHG71WwwuKiEsg=s120",
        "risk_factor": -0.01,
        "sudo_arbitrage_profit": -0.85,
        "opensea_floor_price": 0.8845000000000001,
        "sudo_offer": 0,
        "confidence_index": 81,
        "confidence_level": "high"
      },
      {
        "collection": "0% PROJECT",
        "logo": "https://openseauserdata.com/files/1db5b31e62e3efe44460838b01dc7a40.gif",
        "risk_factor": 0.01,
        "sudo_arbitrage_profit": -0.02,
        "opensea_floor_price": 0.03,
        "sudo_offer": 0,
        "confidence_index": 79,
        "confidence_level": "high"
      },
      {
        "collection": "DigiDaigaku Genesis",
        "logo": "https://openseauserdata.com/files/fe93ea8b5aed4dfcebd9feadc13a8574.png",
        "risk_factor": 0.58,
        "sudo_arbitrage_profit": -0.28,
        "opensea_floor_price": 7.800000000000001,
        "sudo_offer": 5.97,
        "confidence_index": 50,
        "confidence_level": "low"
      },
      {
        "collection": "Gangster All Star Evolution",
        "logo": "https://openseauserdata.com/files/668c055bbf647cb3c2fb2938b4d8dc83.gif",
        "risk_factor": -0.02,
        "sudo_arbitrage_profit": -0.18,
        "opensea_floor_price": 0.1689,
        "sudo_offer": 0,
        "confidence_index": 62,
        "confidence_level": "high"
      },
      {
        "collection": "NFTrees",
        "logo": "https://lh3.googleusercontent.com/kKYNGoWd-qwSwP3vGX8OWFjONJkcaorIorzMfKTixENb2P13qKXlAFH0e3jzs4IAFseTgIM8x-lSTnXFmu8oFTmbZzcImEN4SInrEQ=s120",
        "risk_factor": 4.25,
        "sudo_arbitrage_profit": -7,
        "opensea_floor_price": 12.5,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Gutter Dogs",
        "logo": "https://lh3.googleusercontent.com/vNgijw2b0ybGsKbVw5210hQhv42uFiX2r0IMnD0GbyX-Tg-YI7F09_QnIWSiHdPIKfi4ANzH204I1SgKkBz_uMO0njDaVfsXivIPYMU=s120",
        "risk_factor": 0.28,
        "sudo_arbitrage_profit": -1.1500000000000001,
        "opensea_floor_price": 1.5489000000000002,
        "sudo_offer": 0,
        "confidence_index": 57,
        "confidence_level": "low"
      },
      {
        "collection": "IO: Imaginary Ones",
        "logo": "https://lh3.googleusercontent.com/NrS4UlK9ZqH2GuH_faBRtH2RIlsHHy3h9OmFpN46S1Y2gH6F3cBgZxZpJ-iuTdFZWsX2MaHNXaigXLaWtgp3zx4SrPDlD0CGj2L2Zs4=s120",
        "risk_factor": 0.07,
        "sudo_arbitrage_profit": -0.48,
        "opensea_floor_price": 0.5949,
        "sudo_offer": 0,
        "confidence_index": 36,
        "confidence_level": "low"
      },
      {
        "collection": "Looks Whale Official",
        "logo": "https://openseauserdata.com/files/49187bda391f6e45dbbd0aebfe1c4da8.png",
        "risk_factor": null,
        "sudo_arbitrage_profit": null,
        "opensea_floor_price": 0.009000000000000001,
        "sudo_offer": 0,
        "confidence_index": 84,
        "confidence_level": "high"
      },
      {
        "collection": "MoonCats",
        "logo": "https://openseauserdata.com/files/93ea4724fcb5596e34f3af1b63c9d7c6.gif",
        "risk_factor": 0.02,
        "sudo_arbitrage_profit": -0.21,
        "opensea_floor_price": 0.2394,
        "sudo_offer": 0,
        "confidence_index": 56,
        "confidence_level": "low"
      },
      {
        "collection": "Gutter Cat Gang",
        "logo": "https://lh3.googleusercontent.com/gjOExI2qNNJuv6fo4hmHamRzDMRLkYPFQtK4d67GE3bgdVJCyZngUwY_h6qp9244pp7l_pF2JBHtOJ8cLgzFbulxMK-KqlZnu9E1sg=s120",
        "risk_factor": 0.24,
        "sudo_arbitrage_profit": -5.5,
        "opensea_floor_price": 6.2,
        "sudo_offer": 0,
        "confidence_index": 0,
        "confidence_level": "low"
      },
      {
        "collection": "Wassies by Wassies",
        "logo": "https://lh3.googleusercontent.com/ju6vDR0sbEvqT0bAb4QPEzYMzpReEllDZ5MlICtxqJu76G5UrZ0cT-w6X3Mzf9e8KXZXJGNIyXGDRAoL-qlaApiJsj27ZdbOY5VvCA=s120",
        "risk_factor": 0.03,
        "sudo_arbitrage_profit": -0.51,
        "opensea_floor_price": 0.58,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "XCOPY",
        "logo": "https://lh3.googleusercontent.com/6u03VU9Xbl5_RWNbxO98ukh9TwUqF3Xfbbl0AljjVi28paJuDWAtmtZEEYVyvzsIjRwa0f6A9BHrDXVxQBKfEmwGWrDv26dKZHjrAg=s120",
        "risk_factor": null,
        "sudo_arbitrage_profit": null,
        "opensea_floor_price": 4.65,
        "sudo_offer": 0,
        "confidence_index": 50,
        "confidence_level": "low"
      },
      {
        "collection": "Satoshi Island Land NFT Deeds",
        "logo": "https://openseauserdata.com/files/594ccb2cd1af2f30a00901123d05adc7.png",
        "risk_factor": 0.17,
        "sudo_arbitrage_profit": -0.6900000000000001,
        "opensea_floor_price": 0.899,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Pixels - Farm Land",
        "logo": "https://openseauserdata.com/files/39bc09683242af3e70535579f36ddfd9.png",
        "risk_factor": 0.07,
        "sudo_arbitrage_profit": -0.23,
        "opensea_floor_price": 0.32,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "AMATO Official",
        "logo": "https://openseauserdata.com/files/2dcf3284305d2ec3dbba43eeb6afb069.png",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.02,
        "opensea_floor_price": 0.0245,
        "sudo_offer": 0,
        "confidence_index": 95,
        "confidence_level": "high"
      },
      {
        "collection": "Astrobot Society by Token Metrics",
        "logo": "https://openseauserdata.com/files/fec0aa9d9076cadd8d35031378cff6ec.png",
        "risk_factor": 0.05,
        "sudo_arbitrage_profit": -0.35000000000000003,
        "opensea_floor_price": 0.4395,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Royal Goats Club",
        "logo": "https://openseauserdata.com/files/41ca2331652eefb25905969afbf809aa.png",
        "risk_factor": 0.46,
        "sudo_arbitrage_profit": -0.28,
        "opensea_floor_price": 0.777,
        "sudo_offer": 0,
        "confidence_index": 100,
        "confidence_level": "high"
      },
      {
        "collection": "Fat Rat Mafia",
        "logo": "https://openseauserdata.com/files/2135ee738d460d8a8425fb46fa0640fc.gif",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.04,
        "opensea_floor_price": 0.043000000000000003,
        "sudo_offer": 0,
        "confidence_index": 79,
        "confidence_level": "high"
      },
      {
        "collection": "Meebits",
        "logo": "https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120",
        "risk_factor": 0.14,
        "sudo_arbitrage_profit": -3.1,
        "opensea_floor_price": 3.5,
        "sudo_offer": 0,
        "confidence_index": 50,
        "confidence_level": "low"
      },
      {
        "collection": "Joker Charlie Club Genesis",
        "logo": "https://lh3.googleusercontent.com/AUF_54a1b8LuxKov0fzCOGU_6klaIJe_N4pkjuqajLf08H9Hmp5HzwAkIWt6B_ev0Vql7f2PVpEM5nQpAQI1hQWyaP8JhZHV5jOqTMQ=s120",
        "risk_factor": 1.08,
        "sudo_arbitrage_profit": -0.01,
        "opensea_floor_price": 1.25,
        "sudo_offer": 0,
        "confidence_index": null,
        "confidence_level": null
      },
      {
        "collection": "Sappy Seals",
        "logo": "https://lh3.googleusercontent.com/c_wASW_EH06TmUJTAfZ9HYAx8rhKbu3SbOqpHHp0OistKOTJcPDjhSBg3S6OM3HG9ivBpVVtSnKkNJKilZQCc_8V1kTG7JQDSzmWoQ=s120",
        "risk_factor": 0.02,
        "sudo_arbitrage_profit": -0.02,
        "opensea_floor_price": 0.7000000000000001,
        "sudo_offer": 0.61,
        "confidence_index": 62,
        "confidence_level": "high"
      },
      {
        "collection": "Kuma Toys",
        "logo": "https://openseauserdata.com/files/c15fc8b3177a0bb04208b2980d27d2ca.png",
        "risk_factor": null,
        "sudo_arbitrage_profit": null,
        "opensea_floor_price": 0.0059,
        "sudo_offer": 0,
        "confidence_index": 98,
        "confidence_level": "high"
      },
      {
        "collection": "Chimpers",
        "logo": "https://lh3.googleusercontent.com/lkvZo5xkyjuvJ25mJ_3kCqZXy6jPGoOEsTvhpOrfMa-ybUvY4tmR22ih5JbiZF9g8IKQ5-ePC-HDvUZKbnwFIuiplO6_7Vxz0OmB=s120",
        "risk_factor": 0,
        "sudo_arbitrage_profit": -0.97,
        "opensea_floor_price": 1.05,
        "sudo_offer": 0,
        "confidence_index": 55,
        "confidence_level": "low"
      },
      {
        "collection": "XANA: GENESIS",
        "logo": "https://openseauserdata.com/files/b54aca07f01c1b29eeedcf07349d8a12.jpg",
        "risk_factor": 0.02,
        "sudo_arbitrage_profit": -0.15,
        "opensea_floor_price": 0.19,
        "sudo_offer": 0,
        "confidence_index": 93,
        "confidence_level": "high"
      }
    ]
  )
}
