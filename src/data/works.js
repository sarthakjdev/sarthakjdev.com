import rejoice from '../../public/images/project/rejoice.svg'
import valrix from '../../public/images/project/valrix.svg'
import valque from '../../public/images/project/valque.svg'

const projects = [
    {
        name: 'crossknot hacks website',
        keywords: ['nodejs', 'next.js','tailwind CSS' ],
        query: 'crossknot-hacks',
        catergory: 'open source & community',
        github: 'https://github.com/crossknot-community/crossknot-hackathon',
        live: 'https://crossknothacks.co',
        icon: valque,
        description: 'CrossKnot Hacks was a 36 hours an interactive coding event to bring developers and other interested people together to improve upon or build a new software program.',
        detailed_desc: 'CrossKnot Hacks was a 36 hours an interactive coding event to bring developers and other interested people together to improve upon or build a new software program. I implemented the whole website code from scratch in next.js along with dynamic data fetchung implementation in the web app. We used netlify to deploy the website. Through this websi, we managed to direct enough traffic to get around 1200+ registration in our hackathon.'

    },
    {
        name: 'rejoice bot',
        keywords: ['nodejs', 'discord.js', 'discord application', 'postgreSQL'],
        query: 'rejoice',
        catergory: 'personal & freelanced',
        github: 'https://github.com/sarthakjdev/rejoice-bot',

        icon: rejoice,
        description: 'Multi-server Discord bot application with multiple utility features implemented using discord.js library and have used PostgreSQL for the data storage. Implemented a unique feature that enables users to create their community profile in order to foster community culture in the industry.', 
        detailed_desc: 'A discord bot that has the following feature Creating a central USER PROFILE of users through the bot, and that profile can be fetched in all the server where the bot is added. This unique feature is implemented to foster the community culture. Welcoming the new user to the servers, with a feature where you can make the welcome message temoprary. Marking people as VIP, so that no one tag them unnecessarily. Ranking mechanism. Creating Star-Boards for most liked messages.'
    },
    {
        name: 'valrix bot',
        keywords: ['nodejs', 'discord.js', 'discord application', 'postgreSQL'],
        query: 'valrix',
        catergory: 'personal & freelanced',
        github: 'https://github.com/sarthakjdev/valrix',
        icon: valrix,
        description: 'Single server Discord bot application, developed in discord.js, integrated with PostgreSQL, provides complete utility for valorant game in the discord itself, from team creation to the custom scoreboard for teams and individual players.'
    },
    {
        name: 'valque bot',
        keywords: ['nodejs', 'discord.js', 'discord application'],
        query: 'valque',
        catergory: 'personal & freelanced',
        github: 'https://github.com/sarthakjdev/valque',
        icon: valque,
        description: 'Single server discord bot application for creating matchmaking queue for valorant game in thediscord server itself.'
    },
]

export default projects