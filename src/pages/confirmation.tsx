import { Button, Link } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSendTransaction } from 'wagmi'
import { BigNumber } from '@ethersproject/bignumber'
import AnimatedText from 'react-animated-text-content';
import { AwesomeButtonProgress } from "react-awesome-button";
import Image from 'next/image'
import profilePic from '../assets/logos/BFG1.5@2x.png'
import Grid from '@material-ui/core/Grid'


const confimation: NextPage = () => {

    // TODO: Adapt to the Backend is Next Project the send tx is = ? the string
    const { data, isIdle, isError, isLoading, isSuccess, sendTransaction } =
        useSendTransaction({
            request: {
                to: 'yanniksood.eth',
                value: BigNumber.from('10000000000000000'), // .1 ETH
            },
        })

    return (
        <Grid container>
            <Grid item xs={6}>
                Customize
            </Grid>
            <Grid item xs={6}>
                ...
            </Grid>
        </Grid>
    )
}

export default confimation
