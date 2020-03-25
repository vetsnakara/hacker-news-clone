/* global fetch */

const getUrl = path => {
  const BASE_URL = 'https://hacker-news.firebaseio.com/v0/'
  const JSON = '.json?print=pretty'
  return `${BASE_URL}${path}${JSON}`
}

const removeDead = posts => {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true)
}

const removeDeleted = posts => {
  return posts.filter(({ deleted }) => deleted !== true)
}

const onlyComments = posts => {
  return posts.filter(({ type }) => type === 'comment')
}

const onlyPosts = posts => {
  return posts.filter(({ type }) => type === 'story')
}

export const fetchItem = id => {
  const url = getUrl(`item/${id}`)
  return fetch(url).then(res => res.json())
}

export const fetchPosts = ids => {
  return Promise.all(ids.map(fetchItem)).then(posts =>
    removeDeleted(onlyPosts(removeDead(posts)))
  )
}

export const fetchComments = ids => {
  return Promise.all(ids.map(fetchItem)).then(comments =>
    removeDeleted(onlyComments(removeDead(comments)))
  )
}

export const fetchMainPosts = async type => {
  const url = getUrl(`${type}stories`)

  const allIds = await fetch(url).then(res => res.json())

  if (!allIds) {
    throw new Error(`There was an error fetching ${type} posts`)
  }

  const ids = allIds.slice(0, 50)

  const posts = await fetchPosts(ids)

  return onlyPosts(removeDeleted(removeDead(posts)))
}

export const fetchUser = id => {
  const url = getUrl(`user/${id}`)
  return fetch(url).then(res => res.json())
}
