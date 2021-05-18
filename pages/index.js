import Head from 'next/head'
import Image from 'next/image'
import {styled} from '../stitches.config'

const Box = styled('div', {
  backgroundColor: 'red',
  height: '100px',
  width: '100px'
})

export default function Home() {
  return (
    <Box></Box>
  )
}
