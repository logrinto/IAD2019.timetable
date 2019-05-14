module.exports = {
  pathPrefix: `/IAD2019.timetable`,

  __experimentalThemes: [{
    resolve: 'gatsby-theme-timetable',
    options: {
      root: __dirname,
    }
  }],

  siteMetadata: {
    title: 'Semesterplan',
    author: 'Stefan Huber',
    authorUrl: 'http://signalwerk.ch/',
    description: 'Semesterplan für IAD'
  },
};
