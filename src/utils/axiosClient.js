import axios from "axios"
import config from '../configs/config.js'

export const AxiosClient = axios.create({
    baseURL: config.SERVER_BASE_URL,
    headers: {}
})

export const twitterAxiosClient = axios.create({
    baseURL: config.TWITTER_BASE_URL,
    headers: {
        authorization: `Bearer ${config.TWITTER_API_BEARER_TOKEN}`
    }
})

export const oEmbedClient = axios.create({
    baseURL: config.OEMBED_BASE_URL,
})
