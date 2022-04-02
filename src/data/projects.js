import rejoice from '../../public/images/project/rejoice.svg'
import valrix from '../../public/images/project/valrix.svg'
import valque from '../../public/images/project/valque.svg'

const projects = [
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
    {
        name: 'crossknot hackathon website',
        keywords: ['nodejs', 'next.js','tailwind CSS' ],
        query: 'crossknot-hackathon',
        catergory: 'open source & community',
        github: 'https://github.com/crossknot-community/crossknot-hackathon',
        icon: valque,
        description: 'Single server discord bot application for creating matchmaking queue for valorant game in thediscord server itself.'
    },
    {
        name: 'crossknot api',
        keywords: ['nodejs', 'next.js','tailwind CSS' ],
        query: 'valque',
        catergory: 'open source & community',
        github: 'https://github.com/crossknot-community/crossknot-api',
        icon: valque,
        description: 'Single server discord bot application for creating matchmaking queue for valorant game in thediscord server itself.'
    },
]

export default projects