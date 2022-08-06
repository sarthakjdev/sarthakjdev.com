import discordIcon from '../../public/images/project/discord.svg'
import crossknotlogo from '../../public/images/project/crossknotlogo.svg'

const projects = [
    {
        name: 'crossknot hacks website',
        keywords: ['nodejs', 'next.js','tailwind CSS' ],
        query: 'crossknot-hacks',
        catergory: 'open source & community',
        github: 'https://github.com/crossknot-community/crossknot-hackathon',
        live: 'https://crossknothacks.co',
        icon: crossknotlogo,
        description: 'CrossKnot Hacks was a 36 hours interactive coding event to bring developers and other interested people together to improve upon or build a new software program.',
        detailed_desc: 'CrossKnot Hacks was a 36 hours an interactive coding event to bring developers and other interested people together to improve upon or build a new software program. I implemented the whole website code from scratch in next.js along with dynamic data fetchung implementation in the web app. We used netlify to deploy the website. Through this websi, we managed to direct enough traffic to get around 1200+ registration in our hackathon.'

    },
    {
        name: 'rejoice bot',
        keywords: ['nodejs', 'discord.js', 'discord application', 'postgreSQL'],
        query: 'rejoice',
        catergory: 'personal & freelanced',
        github: 'https://github.com/sarthakjdev/rejoice-bot',
        live: 'https://crossknothacks.co',
        icon: discordIcon,
        description: 'Multi-server Discord bot application with multiple utility features implemented using discord.js library and have used PostgreSQL for the data storage. Implemented a unique feature that enables users to create their community profile in order to foster community culture in the industry.', 
        detailed_desc: 'A discord bot that has the following feature Creating a central USER PROFILE of users through the bot, and that profile can be fetched in all the server where the bot is added. This unique feature is implemented to foster the community culture. Welcoming the new user to the servers, with a feature where you can make the welcome message temoprary. Marking people as VIP, so that no one tag them unnecessarily. Ranking mechanism. Creating Star-Boards for most liked messages.'
    },
    {
        name: 'rejoice bot',
        keywords: ['nodejs', 'discord.js', 'discord application', 'postgreSQL'],
        query: 'rejoice',
        catergory: 'personal & freelanced',
        github: 'https://github.com/sarthakjdev/rejoice-bot',
        live: 'https://crossknothacks.co',
        icon: discordIcon,
        description: 'Multi-server Discord bot application with multiple utility features implemented using discord.js library and have used PostgreSQL for the data storage. Implemented a unique feature that enables users to create their community profile in order to foster community culture in the industry.', 
        detailed_desc: 'A discord bot that has the following feature Creating a central USER PROFILE of users through the bot, and that profile can be fetched in all the server where the bot is added. This unique feature is implemented to foster the community culture. Welcoming the new user to the servers, with a feature where you can make the welcome message temoprary. Marking people as VIP, so that no one tag them unnecessarily. Ranking mechanism. Creating Star-Boards for most liked messages.'
    },
]

export default projects