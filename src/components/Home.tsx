import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { Row, Col, Stack } from 'react-bootstrap'
import '../App.css'
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from '../components/icons'
import { LanguageSelector } from '../components/LanguageSelector'
import { TextArea } from '../components/TextArea'
import { AUTO_LANGUAGE, VOICE_FOR_LANGUAGE } from '../constants'
import { useStore } from '../hooks/useStore'
import { translate } from '../services/translate'
import { SectionType } from '../types.d'
import { HeroImageRight } from '../components/Hero'
import { createStyles, Container, Title, Text, Button, rem } from '@mantine/core';
import { UserInfoIcons } from '../components/CreatorCard'
import {StatsGridIcons} from '../components/Counter'
import {FooterSocial} from '../components/Footer'

const useStyles = createStyles((theme) => ({

  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      ' url(src/assets/Background.jpg)',
    paddingTop: `calc(${theme.spacing.xl} )`,
    paddingBottom: `calc(${theme.spacing.xl} )`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

function Home () {
  const {
    loading,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useStore()

  const debouncedFromText = useDebounce(fromText, 2500)

  useEffect(() => {
    if (debouncedFromText === '') return

    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  const { classes } = useStyles();
  const data = 
  [{title: 'new users', value: '3780', diff: 43},
  {title: 'Translations', value: '7834', diff: 58},
  {title: 'Efectivity', value: '99%', diff: 1}
]

  return (
    <>
    <div>
    <div className={classes.root}>
      <Container size="lg">
      <Title className={classes.title}>
              
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'green', to: 'blue' }}
              >
                VIBES
              </Text>{' '}
            </Title> 
      {/* <img src="src\assets\Logo 2 cut.png" alt="" width='300px'  /> */}
        <div className={classes.inner}>
      
          <div className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'white', to: 'blue' }}
              >
                powerful and advanced
              </Text>{' '}
              translator created with ChatGPT
            </Title>

            <Text className={classes.description} mt={30} color='black'>
            Experience the future of translation with our powerful and advanced translator created with ChatGPT. Break down language barriers, connect with people around the world, and unlock a world of possibilities with effortless and precise translations.
            </Text>
          </div>
        </div>
        {/* <Title className={classes.title} >AI Translator</Title>{' '} */}
        <Container>
          <div className='translator'>
          {/* <Title className={classes.title} >AI Translator</Title>{' '} */}
          </div>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />

            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>

        </Col>

        <Col xs='auto' >
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <div style={{ position: 'relative' }}>
            <TextArea
              loading={loading}
              type={SectionType.To}
              value={result}
              onChange={setResult}
            />
            <div style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex' }}>
            <Button
              variant='link'
              onClick={handleClipboard}>
                <ClipboardIcon />
            </Button>
            <Button
              variant='link'
              onClick={handleSpeak}>
                <SpeakerIcon />
            </Button>
            </div>

            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
        
  {/* <UserInfoIcons avatar = "src\assets\foto-Perfil.jpg"
  name = "Will Sierra"
  title= "Web Developer"
  phone= "+573102553612"
  email= "willjusi@gmail.com"
></UserInfoIcons>  */}
      <StatsGridIcons data = {data} ></StatsGridIcons>   
      <FooterSocial/>
      </Container>
   
    </div>


    </div>
    
  </> 
    
  )
}

export default Home