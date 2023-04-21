'use client'

import { TwitterTweetEmbed } from "react-twitter-embed"

export function Tweet({ id, className }) {
    return <TwitterTweetEmbed tweetId={id} />
}