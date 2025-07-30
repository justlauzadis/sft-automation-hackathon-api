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
    title: 'Task 1 - Frogs', // appears at the top of the task's page

    subtitle:
      'Frogs are stuck inside the CPU after a catastrophic Blue Screen of Death! Help them leap across the lily pads of logic gates and escape the processor before time runs out.',
    description:
      'Using your favorite automation tools, win a puzzle of Frogs.',
    rules:
      'Proceed to any won game of Frogs to win 10 points.',
    credits: null, // insert website url inside "href" and change title "Some page"
    url: 'https://www.lutanho.net/play/frogs.html', // will be used to load the iframe
    alternativeUrl: null, // will be used as an alternative link
    height: '300px', // height of the iframe
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
    title: 'Task 3 - Simon Says',
    subtitle:
      'The computer hardware is sending you a sequence of signals! Can you automate the process to repeat the pattern and prove your memory is faster than RAM?',
    description:
      'Repeat the melody of what Simon Says.',
    rules:
      'A total of 15 points can be scored. Reach the score of 15 in Simon Says game. You score as many poins as your score in the Simon Says game (with 15 being the max score).',
    credits: null,
    url: 'https://weslleyaraujo.github.io/react-simon-says/',
    height: '700px',
  },
  {
    slug: 'task4',
    shortTitle: 'Task 4',
    title: 'Task 4 - Math',
    subtitle:
      'Your hardware calculator is the only thing standing between you and a system crash! Use your math skills and automation to solve calculations and navigate through the circuits of the computer.',
    description:
      "Using your favorite automation tool, reach the highest possible score solving math problems. Your final score should be obviously displayed to capture it.",
    rules:
      'A total of 15 points can be scored. First part: reaching 100 score with default options (addition only + number limit of 30) wins 5 points. Second part: team with the highest score with all 6 of the operations and number limit of 1000 wins all 15 points, other teams that achieved that - in proportion. If your team is able to achieve the second part, the first part can be skipped.',
    credits: null,
    url: 'https://www.mathster.com/10secondsmaths/',
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
      'A total of 15 points can be scored. All of the solutions have to draw a valid, complete circle. There are 3 goals: 1. Get the worst possible score - 5 points, others proportionally. 2. Get the best possible score among all teams - 5 points, others proportionally. 3. Score exactly 66.6% - 5 points, others proportionally.',
    credits: null,
    url: 'https://neal.fun/perfect-circle/',
    showIFrame: false,
  },
  {
    slug: 'task6',
    shortTitle: 'Task 6',
    title: 'Task 6 - Robot Karaoke',
    subtitle:
      'The computer hardware is alive with the sound of robot karaoke! Program your digital singer to perform a song and show off your automation skills in a battle of silicon voices.',
    description:
      'Submit a song for a song contest. Pick any karaoke track as your melody, and any TTS tool as your singer.',
    rules:
      'A total of 20 points can be scored. 10 points for a submitted song of at least 30 seconds. Additionally, 10, 7 and 5 points to be awarded for the winners of the song contest.',
    credits: '',
    url: null,
    alternativeUrl: null,
    showIFrame: false,
    outerLinks: [
      {
        url: 'https://youtube.com/',
        title: 'Youtube',
      },
      {
        url: 'https://www.naturalreaders.com/online/',
        title: 'Natural Readers',
      },
    ],
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
      'Max in-game score of all teams gets 20 points, others proportionally.',
    url: 'https://web.itu.edu.tr/~msilgu/tetris/tetris.html',
    height: '500px',
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
  type: 'SFT AUTOMATION',
  name: 'HACKATHON',
  story:
    'You were traveling through the depths of a computer system with your data set crew (your team) for an appointment with a cpu core. All of a sudden, everything stalled as if the time has completely stopped. "WE ARE DOOMED!!!" - someone started screaming... "It is a deadly blue screen of death!". The only way to save yourself and your team is to reach the non-volatile memory in computer\'s SSD until it\'s too late.',
  corePrincipals:
    'You have many challenges that are available from the left side menu. Each challenge has specific requirements that need to be reached for the task to be considered complete. The team can use any automation tools that they see as the most suitable to reach the goal. Teams are not limited to a single automation tool.',
  generalRules: [
    'Each successfully solved challenge should be captured with screen recording software. The recordings should include the command(s) that triggers the automated script and a visible browser window(s) that run the automated script.',
    'Video recordings should be sent to a dedicated Discord channel. Please send the recordings as early as possible - judges will provide feedback. You will be still allowed to upload another recording of the same task repeatedly.',
    'Judges will not need your code - no public repos required. However, if any questions, a judge can join the team space with an ask to clarify some questions.',
  ],
  notes: [
    'Have fun!',
  ],
  agenda: [
    '9:30-10:00 Welcome',
    '10:00-10:15 Intro',
    '10:15-12:30 Coding',
    '12:30-13:30 Lunch',
    '13:30-16:00 Coding',
    '16:00-17:00 Demos',
    '17:00 Results and Awards',
  ],
  judges: [
    { name: 'SFT team' },
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
    .json({ name: event.name, type: event.type });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
