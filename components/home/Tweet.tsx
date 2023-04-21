'use client'

import { TwitterTweetEmbed } from "react-twitter-embed"

export function Tweet({ id }) {
    return <TwitterTweetEmbed tweetId={id} />
}