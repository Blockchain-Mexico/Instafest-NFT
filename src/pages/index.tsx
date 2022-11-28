import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSendTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'
import AnimatedText from 'react-animated-text-content';
import { AwesomeButtonProgress } from "react-awesome-button";
import Image from 'next/image'
import profilePic from '../assets/logos/instafest.png'
import profilePic2 from '../assets/concerts/Demo.png'
import {ButtonBase} from "@mui/material";
import { AwesomeButton } from "react-awesome-button";

const Home: NextPage = () => {

  // TODO: Adapt to the Backend is Next Project the send tx is = ? the string
  const { data, isIdle, isError, isLoading, isSuccess, sendTransaction } =
      useSendTransaction({
        request: {
          to: 'yanniksood.eth',
          value: BigNumber.from('10000000000000000'), // .1 ETH
        },
      })

  return (
      <div className={styles.container}>
        <Head>
          <title> Instafest NFT </title>

          <meta name="description" content="ETH + Next.js DApp Boilerplate" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
                  <main className={styles.main}>
                      <div className="row-auto">
                          <Image
                              src={profilePic}
                              alt="Picture of the author"
                              width={315} automatically provided
                              height={81} automatically provided
                              blurDataURL="data:..." automatically provided
                              placeholder="blur" // Optional blur-up while loading
                          />
                      </div>
                      <h2 className={styles.title}>
                          Create a festival lineup from your top artists.
                          <AnimatedText
                              type="words" // animate words or chars
                              animation={{
                                  x: '200px',
                                  y: '-20px',
                                  scale: 1.1,
                                  ease: 'ease-in-out',
                              }}
                              animationType="lights"
                              interval={0.00006}
                              duration={5.85}
                              tag="p"
                              className="animated-paragraph"
                              includeWhiteSpaces
                              threshold={0.1}
                              rootMargin="20%"
                          >
                              Sign in to your Spotify account to get started.

                          </AnimatedText>
                          <AnimatedText
                              type="words" // animate words or chars
                              animation={{
                                  x: '200px',
                                  y: '-20px',
                                  scale: 1.1,
                                  ease: 'ease-in-out',
                              }}
                              animationType="rifle"
                              interval={0.0006}
                              duration={1.25}
                              tag="p"
                              className="animated-paragraph"
                              includeWhiteSpaces
                              threshold={0.1}
                              rootMargin="20%"
                          >
                              And create a NFT of your gig.
                          </AnimatedText>

                      </h2>

                      <div className={styles.grid}>
                          <Link href='/confirmation' >
                              <Button
                                  backgroundColor="#1DB954"
                                  borderRadius="25px"
                                  margin={2.5}
                                  _hover={{
                                      bg: '#E4007C'
                                  }}
                                  _active={{
                                      bg: '#E4007C'
                                  }}
                              >
                                  <p>  Sign in with Spotify </p>
                              </Button>
                          </Link>

                      </div>
                      <Image
                          src={profilePic2}
                          alt="Picture of the author"
                          width={600} automatically provided
                          height={600} automatically provided
                          blurDataURL="data:..." automatically provided
                          placeholder="blur" // Optional blur-up while loading
                      />
                  </main>


      </div>
  )
}

export default Home
