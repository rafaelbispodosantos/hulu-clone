const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
  title: 'Tremging',
  url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
  title: 'Top Rated',
  url: `/movie/top-rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMoveis: {
  title: 'Action',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchComedyMoveis: {
  title: 'Comedy',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  fetchHorrorMoveis: {
  title: 'Horror',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  }
} 