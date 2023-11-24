export const projects = [
	{
		slug: 'wapijs',
		title: 'Wapi.js',
		description:
			'Wapi.js is an innovative, open-source TypeScript library designed to streamline the integration with the WhatsApp Cloud API. This powerful tool simplifies the process of creating sophisticated chatbots, enabling developers to manage messaging functionalities and user interactions with ease. With its object-oriented design and single client interaction model, Wapi.js offers a clear and efficient architecture for WhatsApp API communication. Advanced features like event listeners and a component builder utility enhance its capabilities, making it a go-to solution for developers looking to leverage the WhatsApp platform.',
		keyFeatures: [],
		faqs: [
			{
				que: 'What is Wapi.js?',
				ans: "Wapi.js is an open- source TypeScript library that facilitates easy integration with the WhatsApp Cloud API.It's designed to assist developers in creating efficient and responsive chatbots."
			},
			{
				que: 'How does Wapi.js simplify chatbot development?',
				ans: 'Wapi.js uses an object-oriented approach and a unified client interface, making it easier to send messages, manage sessions, and handle errors. It also includes utilities for building API payloads and managing event-driven responses.'
			},
			{
				que: 'Is Wapi.js suitable for all levels of developers?',
				ans: 'Yes, Wapi.js is designed to be user-friendly for both novice and experienced developers. Its clear structure and comprehensive documentation make it accessible for anyone interested in chatbot development.'
			},
			{
				que: 'Are there automated testing and CI/CD processes in Wapi.js?',
				ans: 'Yes, Wapi.js incorporates advanced continuous integration and continuous deployment (CI/CD) pipelines, ensuring automated testing and streamlined development cycles for consistent and reliable versioning.'
			},
			{
				que: 'How can I contribute to Wapi.js?',
				ans: 'You can contribute to Wapi.js by checking out its GitHub repository. Contributions can range from code enhancements, documentation improvements, to reporting issues and suggesting new features.'
			}
		],
		coverImageUrl: '',
		bannerUrl: '',
		tags: [
			'Typescript',
			'Node.js',
			'CI/CD',
			'WhatsApp Cloud API',
			'Object-Oriented Programming',
			'Single Client Interface',
			'Event-Driven Architecture',
			'Open-Source',
			'Automated Testing'
		],
		githubUrl: 'https;//github.com/sarthakjdev/wapi.js',
		productionUrl: '',
		docsUrl: 'https://wapijs.co'
	},
	{
		slug: 'homelab',
		title: 'Home Server Configuration and Management',
		description:
			'This project demonstrates the configuration and management of a robust home server system using a combination of modern DevOps tools and practices. It highlights skills in server orchestration, network configuration, security, and continuous integration/continuous deployment (CI/CD) pipelines.',
		keyFeatures: [
			'Docker Swarm for container orchestration.',
			'Nginx as a reverse proxy and SSL configuration.',
			'Cloudflare Tunnel for secure exposure to the internet.',
			'Local DNS resolution with Dnsmasq in Docker.',
			'Automated workflows with CI / CD pipelines using GitHub Actions.',
			'Ansible for server provisioning and configuration.'
		],
		faqs: [
			{
				que: 'What was the primary goal of this home server setup?',
				ans: 'The main objective was to create a versatile, secure, and scalable home server system for personal use, focusing on learning and applying advanced server management and DevOps practices'
			},
			{
				que: 'How is security handled in your server setup?',
				ans: "Security is a key aspect, managed through SSL/TLS encryption for network traffic, secure handling of secrets with Docker, firewall configurations, and Cloudflare's security features."
			},
			{
				que: 'Can this setup be scaled or modified for different uses?',
				ans: 'Absolutely. The use of containerization and orchestration tools like Docker Swarm makes it highly scalable and adaptable to various applications and workloads, but upto the capability of the hardware resources available only.'
			},
			{
				que: 'Were there any significant challenges faced during the setup?',
				ans: 'Challenges included configuring the network for optimal performance and security, managing SSL certificates, and setting up automated deployment pipelines.Each was overcome through research and innovative problem- solving.'
			},
			{
				que: 'Is the server setup accessible remotely?',
				ans: "Yes, it's configured for secure remote access through SSH and web interfaces, leveraging Cloudflare Tunnel for secure, encrypted access."
			},
			{
				que: 'What future enhancements are planned for this setup?',
				ans: "Potential future enhancements include implementing additional monitoring tools, exploring more advanced CI/CD strategies, and expanding the server's capabilities with new services."
			}
		],
		coverImageUrl: '',
		bannerUrl: '',
		tags: [
			'Linux',
			'Ansible',
			'Linux Networking',
			'Docker Swarm',
			'Docker',
			'Github Actions',
			'Nginx',
			'Cloudflare',
			'Dnsmasq',
			'SSL / TLS Encryption'
		],
		githubUrl: 'https;//github.com/sarthakjdev/home-server-configs',
		productionUrl: '',
		docsUrl: 'https://homelab.sarthakjdev.com'
	}
]
