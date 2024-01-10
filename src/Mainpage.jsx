import React from "react";
import { styled } from "styled-components";
import backgroundimg from "./babyshowerimg.jpg";
import MapIcon from '@mui/icons-material/Map';
import EventIcon from '@mui/icons-material/Event';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
<style>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap" rel="stylesheet"></link>
</style>

const Container = styled.div`
font-family: Fira Sans;

`
const HeaderContainer = styled.div`

`
const Img = styled.img`
    width: 100%;
    @media only screen and (min-width: 420px){
        width: 50%;
        margin-left: 25%;
        height: 600px;
    width: 50%;
    } 
`
const Header = styled.div`
    background-color: #0084ff80;
    color: white;
    text-align: center;
`

const Par = styled.p`

`
const Heading = styled.h3`
    
`
const Span1 = styled.span`

`
const Info = styled.div`
background-color: #e8e7e7;
padding: 15px;
`
const InfoH1 = styled.h1`
    font-size: 25px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Where = styled.p`
color: #6c6a6a;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 20px;
`
const When = styled.p`
color: #6c6a6a;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 20px;
`
const WhereP = styled.p`
color: #474646;
font-size: large;
`
const WhenP = styled.p`
color: #474646;
font-size: large;
`
const WhenDiv = styled.div`
    color: blue;
    display: flex;
`
const WhereDiv = styled.div`
    color: blue;
    display: flex;
`
const WhereP2 = styled.p`
    position: relative;
    bottom: 13px;
`
const WhenP2 = styled.p`
    position: relative;
    bottom: 13px;
`
const Division = styled.div`
    background-color: #737373;
    height: 7px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`
const Host = styled.div`
    padding: 15px;
`
const HostBy = styled.p`
color: #6c6a6a;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 18px;
`
const HostName = styled.p`
color: black;
font-size: 20px;
font-weight: 800;
`
const HostMessage = styled.p`
color: #ffffff;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 17px;
background-color: #5d5c5c;
padding: 30px;
margin: 10px;
`
const ContactUs = styled.div`
padding: 15px;
`
const ContactHead = styled.p`
    color: #6c6a6a;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size: 18px;
`
const ContactNumber = styled.p`
    color: blue;
    margin-left: 10px;
    font-weight: 700;
` 
const GiftRegistry = styled.div`
    background-color: #5100ff40;
    padding: 20px;
    margin: 15px;
    border-radius: 5%;
    font-size: 18px;
`
const GiftregHead = styled.p`
    color: black;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 22px;
`
const GiftRegDiv2 = styled.div`
    padding: 30px;
    text-align: center;
    border: 1px solid black;
`
const GiftImg = styled.div`

`
const GiftFooter = styled.p`
color: black;
text-decoration: none;
`
const Mainpage = () => {
  return (
    <Container>
        <HeaderContainer>
            <Img src={backgroundimg}/>
            <Header>
            <Heading>Baby Pandya Comming Soon</Heading>
            <Par>Vivek Pandya 5147125417 <br></br>
Sunday, March 12, 2023 at 10:30 AM ET<br></br><br></br>
<Span1>
Binbrook Little Theatre Inc2600 Hamilton Regional Road Binbrook, Ontario L0R 1C0
</Span1>
</Par>    
        </Header>
        </HeaderContainer>
<Info>
<InfoH1>Baby Pandya Comming Soon</InfoH1>
<Where>Where</Where>
<WhereP>Binbrook Little Theatre Inc2600 Hamilton Regional Road Binbrook, Ontario L0R 1C0</WhereP>
<WhereDiv>
    <a href='https://maps.app.goo.gl/YSviMN7EafESWv1z6'>
   <MapIcon/>  <WhereP2>View Map</WhereP2></a>
</WhereDiv>
<When>When</When>
<WhenP>Sunday, March 12, 2023 at 10:30 AM ET</WhenP>
<WhenDiv>
    <a href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmhjaXA2MzZlaTZhZW8wY3JvNmdocTgydjQgc2F1bmFrMzAwMEBt&tmsrc=saunak3000%40gmail.com'>
<EventIcon/> <WhenP2>Add to Calendar</WhenP2></a>
</WhenDiv>
</Info>
<Division></Division>
<Host>
<HostBy>Hosted By</HostBy>
<HostName>Vivek Pandya</HostName>
<HostMessage>
Please wear the traditional attire so we can drag you to the grab a floor! See you all very soon!!<br></br>Baby pandya is on its way. Please help us prepare for the very special day join us for Meshwa's baby shower on 12th March 2023. We invite you to be a part of the special occasion. The entire Pandya family will be waiting for you!
</HostMessage>
</Host>
<Division></Division>
<ContactUs>
    <ContactHead>Contact Us</ContactHead>
    <ContactNumber>(514) 712-5417</ContactNumber>
</ContactUs>
<GiftRegistry>
    <GiftregHead>Meshwa and Vivek's Gift Registry</GiftregHead>
    <a href='https://www.amazon.ca/s?k=amazon+baby+shower+gifts&hvadid=667601834872&hvdev=c&hvlocphy=9000925&hvnetw=g&hvqmt=e&hvrand=6194465128785648843&hvtargid=kwd-307416043826&hydadcr=1728_13630572&tag=googcana-20&ref=pd_sl_67qewjel8v_e'>
    <GiftRegDiv2>
        <GiftImg>
            <CardGiftcardIcon/>
        </GiftImg>
        <GiftFooter>View the Gift Registry</GiftFooter>
    </GiftRegDiv2>
    </a>
</GiftRegistry>
    </Container>
  )
}

export default Mainpage
