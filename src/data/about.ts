import aboutHeroImage from '../assets/images/about/about-hero.png'
import travelMedia from '../assets/images/about/travel.png'
import musicMedia from '../assets/videos/about/music.mp4'
import seriesMoviesMedia from '../assets/videos/about/series-movies.mp4'
import videoGamesMedia from '../assets/videos/about/video-games.mp4'

export type AboutHobbyKey = 'videoGames' | 'music' | 'seriesMovies' | 'travel'

export type AboutMediaPosition = 'start' | 'end'

export type AboutMediaFit = 'cover' | 'contain'

export type AboutMediaType = 'image' | 'video'

export interface AboutHobby {
  id: string
  translationKey: AboutHobbyKey
  media: string
  mediaPosition: AboutMediaPosition
  mediaFit: AboutMediaFit
  mediaType: AboutMediaType
}

export { aboutHeroImage }

export const aboutHobbies: AboutHobby[] = [
  {
    id: 'video-games',
    translationKey: 'videoGames',
    media: videoGamesMedia,
    mediaPosition: 'end',
    mediaFit: 'cover',
    mediaType: 'video',
  },
  {
    id: 'music',
    translationKey: 'music',
    media: musicMedia,
    mediaPosition: 'start',
    mediaFit: 'cover',
    mediaType: 'video',
  },
  {
    id: 'series-movies',
    translationKey: 'seriesMovies',
    media: seriesMoviesMedia,
    mediaPosition: 'end',
    mediaFit: 'cover',
    mediaType: 'video',
  },
  {
    id: 'travel',
    translationKey: 'travel',
    media: travelMedia,
    mediaPosition: 'start',
    mediaFit: 'cover',
    mediaType: 'image',
  },
]
