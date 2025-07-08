const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;
const host = 'https://sft-automation-hackathon-api.onrender.com';
const frontEndHost = 'https://sft-automation-hackathon.onrender.com';

let corsOptions = {
  origin: [frontEndHost],
};

app.use(cors(corsOptions));

const tasks = [
  {
    slug: 'task1', // appears in the url
    shortTitle: 'Task 1', // appears in the navbar
    title: 'Task 1 - Broken Calculator', // appears at the top of the task's page

    subtitle:
      'Inside the depths of CPU Cores. Processor is pretty busy after just getting into a Blue screen of death. Help it to calculate the queue of aritmetical problems in front of your data spaceship to get out of it.',
    description:
      'Create an automated solution that can calculate to required numbers by using only available calculator buttons. Each level has different list of numbers and available calculator buttons.',
    rules:
      'A total of 6 points can be scored. There are 6 levels where each completed level scores 1 point.',
    credits: null, // insert website url inside "href" and change title "Some page"
    url: 'https://www.mathsisfun.com/games/broken-calculator.html', // will be used to load the iframe
    alternativeUrl: null, // will be used as an alternative link
    height: '850px', // height of the iframe
    padding: null, // add white space around the task
  },
  {
    slug: 'task2', // appears in the url
    shortTitle: 'Task 2', // appears in the navbar
    title: 'Task 2 - Follow the direction', // appears at the top of the task's page
    subtitle:
      'The nightmare in CPU branches valley. Create an algorithm that can get you out of CPU core decision branches in time, until everything gets shutdown!',
    description:
      'Create a script that can repeat the given directions quickly and without doing any mistakes.',
    rules:
      'Score 500 in "5 Moves including negatives" challenge to get 5 points.',
    credits: null, // insert website url inside "href" and change title "Some page"
    url: 'https://www.mathsisfun.com/games/direction-bearing-.html',
    alternativeUrl: null, // will be used as an alternative link
    height: '850px', // height of the iframe
    padding: null, // add white space around the task
  },
  {
    slug: 'task3',
    shortTitle: 'Task 3',
    title: 'Task 3 - Morse code',
    subtitle:
      "Catch the last bus to RAM'učiai or disappear forever!! MUHAHAHAHA!",
    description:
      'Using your favorite automation tool, create a script that translates morse code messages and prints them into console.',
    rules:
      'A total of 14 points can be scored. Translate a simple static message (5 words per minute) to get 4 points. Parse two messages in one run from dynamic message link to get another 10 points. Online translator can only be used for debugging.',
    credits: null,
    outerLinks: [
      {
        url: 'https://morsecode.world/international/translator.html',
        title: 'Morse code translator',
      },
      {
        url: host + '/task/morse/static',
        title: 'Static message',
      },
      {
        url: host + '/task/morse/dynamic',
        title: 'Dynamic mesage',
      },
    ],
    height: '700px',
    showIFrame: false,
  },
  {
    slug: 'task4',
    shortTitle: 'Task 4',
    title: 'Task 4 - Mayday Mayday!',
    subtitle:
      "Navigate your data set bus through the memory lane on your express route from RAM to SSD. Don't forget to follow the rules!",
    description:
      "Create a script that controls the plane's flight with your computer's microphone input to make the plane fly the longest distance of all teams. A solution must be automated.",
    rules:
      'A total of 10 points can be scored. A Top in-game score of all teams gets 15 points, others proportionally.',
    credits: null,
    url: 'https://mayday-mayday-tah-25.onrender.com',
    alternativeUrl: null,
    height: '700px',
  },
  {
    slug: 'task5',
    shortTitle: 'Task 5',
    title: 'Task 5 - Perfect Circle',
    subtitle:
      'Draw me like one of your French girls. We have reached SSD, but its a "bit locked".... Complete three tasks to unlock it.',
    description:
      'Create a script that draws circles according to the game rules. Complete three challenges - draw the best circle you can, draw the worst circle you can and manage to draw a circle that scores exactly 66.6%.',
    rules:
      'A total of 10 points can be scored. All of the solutions have to draw a valid, complete circle. There are 3 goals: 1. Get the worst possible score - 3 points, others proportionally. 2. Get the best possible score among all teams - 3 points, others proportionally. 3. Score exactly 66.6% - 4 points, others proportionally.',
    credits: null,
    url: 'https://neal.fun/perfect-circle/',
    showIFrame: false,
  },
  {
    slug: 'task6',
    shortTitle: 'Task 6',
    title: 'Task 6 - Agario',
    subtitle:
      'Autobots assemble! Compete with other spacehip teams to win the last leftover spot inside the SSD.',
    description:
      'Create the best agario bot that will compete in a live battle between all teams at the end of the hackathon. ',
    rules:
      'A total of 20 points can be scored. First, every submitted solution that can reach 150 health when playing alone gets 5 points by default. Second, your automation must have the ability to join the multiplayer game (by clicking the Start button) on a certain timestamp (planned game start). A team with most points after 3 minutes into the game will get extra points: 1st - 10 points, 2nd - 7, 3rd - 5',
    credits: '',
    url: 'https://agario-tah-25.onrender.com',
    alternativeUrl: null,
  },
  {
    slug: 'task7',
    shortTitle: 'Task 7',
    title: 'Task 7 - Tetris',
    subtitle:
      'You have secured a spot for your data spaceship. Now put all the other data back into it before its too late!.',
    description:
      'Please, create a smart solution that can actually play tetris and score points.',
    rules:
      'Max in-game score of all teams gets 15 points, others proportionally.',
    url: 'https://web.itu.edu.tr/~msilgu/tetris/tetris.html',
    height: '500px',
  },
  {
    slug: 'task8',
    shortTitle: 'Task 8',
    title: 'Task 8 - Presentation from the Future',
    subtitle: 'Please, welcome to the stage - the survivors of BSOD!',
    description: 'Submit a presentation into TAH25 competition.',
    rules:
      'A total of 15 points can be scored. Your automation has to do a presentation on any topic of your choice. The presentation should last between 1 and 2 minutes. It has to have separate audio (for example TTS tools) and visual parts. Submit two video recordings: the whole run from test run command till finish and the other one with only the presentation part. The presentation part video should not contain anything that would identify your team. Everything else is up to you!\n\n1st place - 10 points, 2nd - 7 points, 3rd - 5 points. All submitted presentations get 5 points by default.',
    alternativeUrl: null,
    height: '820px',
    url: null,
  },
];

const morseUrls = [
  'https://morsecode.world/m?m=eJxjYpWTW824mrGJBYQhJIwPgRBRhBhCFYiFrA-hG6G-iWUDJ0IE1RRs5qLagOkaTPfA7AEA6DE9MQ%3D%3D',
  'https://morsecode.world/m?m=eJxjYuXkbGVsZZzAPIEZRMPYEAhiw_gINciyCF1L2VH5CH0QNoxEsNBlEHxkmzD1o4rBRAFNaDY0',
  'https://morsecode.world/m?m=eJxVTVsKAAAEK-XLWXdOl_KhvIlsYxCLIEJJqVGRrJBDM24NWNPZyn6yuPHcfA_myoNj28lx1ARwO7VLaw%3D%3D',
  'https://morsecode.world/m?m=eJxjYuXljYmZygRHbaxTmYCMGAgZA2dAZGJgAMpFqEXSAzcHphRmDMQOqEAMAP5SJlQ%3D',
  'https://morsecode.world/m?m=eJxjYuXnDwj4wAhHG1iAFBhA6A-MIAjmwBkBATC1cCYhnQEwESwGBBCrHwAeF0Gx',
  'https://morsecode.world/m?m=eJxjYhUUdAeCK4wQBILuSAid_47ZHaocTIKlIVwUJlQBgoLLQSQBiMcpCw%3D%3D',
  'https://morsecode.world/m?m=eJxjYhUW3stoD0T2QAJEgUiICFgQCHYxo6pAVmlvDxOxh2mFMoFoFzOmIrAEkj1IIggLEOIAcQox0A%3D%3D',
  'https://morsecode.world/m?m=eJxjYhUXN4GBuYxzGU2QEDr_LROIRsMIxQhRExgFkQQCoFYYB0EhFCGMgJsKAOyZJ_Y%3D',
  'https://morsecode.world/m?m=eJxjYpWT09ZuZNTWBpFAGoxAfBAJE4dJwpXAMaokbv4aJm1tdK0IAQgXxIGrQ5IAUQCh9CPk',
  'https://morsecode.world/m?m=eJxjYpWV1dSsqdHUBJFAoFmjCSZrIHywMFRMcxETkAdWCaGgclCxGoQwUCHESIg5mggCKAAAoNYhRA%3D%3D',
  'https://morsecode.world/m?m=eJw1jcENADAIAhOTztEnC94erlyl6oOAnDHOvaimBbsM-0pY3dYSQ0yZsTws-WlHje2TRsXAfqQHf94g-g%3D%3D',
  'https://morsecode.world/m?m=eJxjYpWXL1FXVwfikpISCA1G6ur9TBBGCYgJVwORA5IlSIJ4NKpDlAMAKl8ZPQ%3D%3D',
  'https://morsecode.world/m?m=eJxjYlVVVQCCRDBSSAQRQOoxI5gDohLBciASJpkIZUA5MHEwDVYNAApAEpU%3D',
  'https://morsecode.world/m?m=eJxjYlVVVQCCRDBSSAQRQOoxI5gDohLBciASJpkIZUA5MHEwDVYNAApAEpU%3D',
  'https://morsecode.world/m?m=eJxjYjU0lJDwhEBPCRDw9FzNCGZ6goU8QdJgcRhjNSOQBVSDLAZhesIoT4hGsLAnSL0EWAiuHiELMxAuj8MmmGKoyQBW1x8E',
  'https://morsecode.world/m?m=eJxlTkEOADAEy5bsGX2AH_XT_rQp4TBEmiq1jxmRCTbyhaIwg9cVyUmgEiYKgL5GGBPq2se2D3M_7_YroS9T4gJ85iQd',
  'https://morsecode.world/m?m=eJxjYtXWlpEJkQkJCQGTIDaYghAyMocZQ6DSYCaqWhmYDrAqsE6IEhmIZggNUQNRDqEAt4gX4g%3D%3D',
  'https://morsecode.world/m?m=eJxjYtXX9_WVggBfIISgzYxgLghsZgSJgKR8QaIINRAVvmDdcE0wYSlfKAHT4wsRgbJ8oYbDTIIo9kVSSUgUbioAZ8wjvg%3D%3D',
  'https://morsecode.world/m?m=eJxjYjU1dREHAzDl4uICYrggiUCoeYwuUHXiMBUuQEGQDjjHRRwKwUoh2AUA0TIPfQ%3D%3D',
  'https://morsecode.world/m?m=eJxjYjU1FRd3cQFiEJrHCCJdQAyQGBjARSEyYCEXmBAUQWiwLKo5ULNd0FSDzIcb5yIOVi-OYQxCO8IxEG0IW8EUAM1pIGQ%3D',
  'https://morsecode.world/m?m=eJxjYrUBAhEbERCwselhBJEQNkQcTNpA-GBhqJgISClEl4gIVA6qF0m5CBYtcFOhLISYCAwAAOoKFp8%3D',
];

const event = {
  type: 'TEST AUTOMATION',
  name: 'HACKATHON',
  year: 2025,
  story:
    'You were traveling through the depths of a computer system with your data set crew (your team) for an appointment with a cpu core. All of a sudden, everything stalled as if the time has completely stopped. "WE ARE DOOMED!!!" - someone started screaming... "It is a deadly blue screen of death!". The only way to save yourself and your team is to reach the non-volatile memory in computer\'s SSD until it\'s too late.',
  corePrincipals:
    'You have 8 challenges that are available from the left side menu. Each challenge has specific requirements that need to be reached for the task to be considered complete. The team can use any automation tools that they see as the most suitable to reach the goal. Teams are not limited to a single automation tool.',
  generalRules: [
    'Each successfully solved challenge should be captured with screen recording software. The recordings should include the command(s) that triggers the automated script and a visible browser window(s) that run the automated script.',
    'Video recordings should be sent to a respective Teams channel (#team-name). Please send the recordings as early as possible - judges will provide feedback. You will be still allowed to upload another recording of the same task repeatedly.',
    'Judges will not need your code - no public repos required. However, if any questions, a judge can join the team space with an ask to clarify some questions.',
    'Submission deadline at 17:00.',
    'Top teams and/or most interesting solutions will be asked (in advance) to do short demos at 17:15-18:20.',
  ],
  notes: [
    'Teams channel "Test Automation Hackathon 2025 / General" will be used for communicating any additions or changes to the rules above.',
  ],
  agenda: [
    '9:00-10:00 Registration',
    '10:00-10:30 Intro',
    '10:30-12:30 Coding',
    '12:30-13:30 Lunch',
    '13:30-17:00 Coding',
    '17:00 Code freeze',
    '17:00-17:15 Break',
    '17:15-18:20 Interactive tasks and demos',
    '18:20-18:30 Break',
    '18:30-19:00 Results and Awards',
    "19:00-00:00 Let's meet @Narauti",
  ],
  judges: [
    { name: 'Dominykas Poškus', email: 'dominykas.poskus@cognizant.com' },
    { name: 'Ernestas Žėkas', email: 'ernestas.zekas@cognizant.com' },
    { name: 'Ieva Radavičiūtė' },
    { name: 'Jelena Černyšova', email: 'jelena.cernysova@cognizant.com' },
    { name: 'Justas Lauzadis', email: 'justas.lauzadis@cognizant.com' },
    { name: 'Laurynas Vilčinskas', email: 'laurynas.vilcinskas@cognizant.com' },
  ],
};

app.get('/tasks/count', (req, res) => {
  res.status(200).json({ count: tasks.length });
});

app.get('/tasks/:id', (req, res) => {
  if (req.params.id && req.params.id >= 1 && req.params.id <= tasks.length) {
    try {
      const id = Number.parseInt(req.params.id);
      if (tasks[id - 1].url && tasks[id - 1].url.constructor === Array) {
        const response = JSON.parse(JSON.stringify(tasks[id - 1]));
        response.url =
          tasks[id - 1].url[
            Math.floor(Math.random() * tasks[id - 1].url.length)
          ];
        res.status(200).json(response);
      } else {
        res.status(200).json(tasks[id - 1]);
      }
    } catch (err) {
      console.log(err);
      res.status(404).json({ error: 'Request is not valid.' });
    }
  } else {
    res.status(404).json({ error: 'Request is not valid.' });
  }
});

app.get('/event/info', (req, res) => {
  res.status(200).json(event);
});

app.get('/task/morse/dynamic', (req, res) => {
  const response = JSON.parse(JSON.stringify(tasks[2]));
  response.url = morseUrls[Math.floor(Math.random() * morseUrls.length)];
  console.log(response.url);
  res.redirect(response.url);
});

app.get('/task/morse/static', (req, res) => {
  res.redirect(
    'https://morsecode.world/m?m=eJxjYmVl_cCIDC-wQjCMRLCQ-TBVF1gn8CJ0IYsj68GuHwIBQQE4wQ%3D%3D'
  );
});

app.get('/event/info/shallow', (req, res) => {
  res
    .status(200)
    .json({ name: event.name, type: event.type, year: event.year });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
