import tailwindIcon from '../../public/images/tech/tailwind.svg'


const projects = [
    {
        name: 'rejoice bot',
        query: 'rejoice',
        github: 'https://github.com/sarthakjdev/rejoice',
        icon: tailwindIcon,
        description: 'Multi-server Discord bot application with multiple utility features implemented using discord.js library and have used PostgreSQL for the data storage. Implemented a unique feature that enables users to create their community profile in order to foster community culture in the industry.'
    },
    {
        name: 'valrix bot',
        query: 'valrix',
        github: 'https://github.com/valrix-bot',
        icon: tailwindIcon,
        description: 'Single server Discord bot application, developed in discord.js, integrated with PostgreSQL, provides complete utility for valorant game in the discord itself, from team creation to the custom scoreboard for teams and individual players.'
    },
    {
        name: 'valque bot',
        query: 'valque',
        github: 'https://github.com/valque',
        icon: tailwindIcon,
        description: 'Single server discord bot application for creating matchmaking queue for valorant game in thediscord server itself.'
    },
]

export default projects