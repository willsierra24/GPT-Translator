import { createStyles, Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconBrandAbstract } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandGit } from '@tabler/icons-react';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text 
        component="span"
        inherit
        fw={500}
        variant= 'text'
        color='white'
        gradient={{ from: 'white', to: 'white' }}
        >© Will Sierra, All rights reserved.
        </Text>

        <Group spacing={0} className={classes.links} position="right" noWrap>
            <a href="https://www.linkedin.com/in/will-sierra-dev/">
            <IconBrandLinkedin size="1.50rem" stroke={1.5} color='white' />
            </a>
            <a href="https://github.com/willsierra24">
            <IconBrandGithub size="1.50rem" stroke={1.5} color='white' />
            </a>

          {/* <ActionIcon size="lg"> */}
          <a href="https://twitter.com/will_jusivi">
            <IconBrandTwitter size="1.50rem" stroke={1.5} color='white'/>
            </a>
          {/* </ActionIcon> */}
        </Group>
      </Container>
    </div>
  );
}