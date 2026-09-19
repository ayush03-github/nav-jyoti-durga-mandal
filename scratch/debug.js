const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Check what is exported from files
const LyricsReader = require('./src/components/LyricsReader');
console.log('LyricsReader exports:', Object.keys(LyricsReader));

const RelatedContent = require('./src/components/RelatedContent');
console.log('RelatedContent exports:', Object.keys(RelatedContent));

const ContentCard = require('./src/components/ContentCard');
console.log('ContentCard exports:', Object.keys(ContentCard));

const Breadcrumbs = require('./src/components/Breadcrumbs');
console.log('Breadcrumbs exports:', Object.keys(Breadcrumbs));
