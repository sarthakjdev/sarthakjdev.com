export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

export const IS_STAGING = !IS_DEVELOPMENT && !IS_PRODUCTION

export const siteDescription =
	"Specializing in backend engineering and DevOps, I'm dedicated to transforming core ideas into high-performance digital realities.Streamlining development processes and building robust, scalable solutions.Let’s drive innovation together! 🚀"

export const isBrowser = typeof window !== 'undefined'

export const validEmailRegex =
	/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

export const ValidPhoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/ // E.164

export const validUsernameRegex = /^[a-z0-9]+$/i

export const UTM_SOURCE_LS = '__utm_source'
export const UTM_MEDIUM_LS = '__utm_medium'
export const UTM_CAMPAIGN_LS = '__utm_campaign'

export const DEFAULT_AVATAR =
	'https://cdn.hashnode.com/res/hashnode/image/upload/v1659089761812/fsOct5gl6.png'

export const MAX_MAIN_NAV_LINKS = 7

export const DEFAULT_COVER =
	'https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format'

export const DEFAULT_LIGHT_POST_COVER =
	'https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format'

export const blurImageDimensions = { w: 400, h: 210 }

export const hashnodeEnv = process.env.NEXT_PUBLIC_HASHNODE_ENV

export const protocol = IS_DEVELOPMENT ? 'http://' : 'https://'

export const IS_SERVER = typeof window === 'undefined'

export const IS_BROWSER = typeof window !== 'undefined'

export const HASHNODE_PUBLICATION_HOST = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST

export const HASHNODE_GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT
