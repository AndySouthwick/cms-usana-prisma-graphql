const userResolver = require('./users-resolver')
const pageResolver = require('./pages-resolver')
const componentResolver = require('./components-resolver')
const textCenterResolver = require('./text-center-resolver')
const textLeftResolver = require('./text-left-resolver')
const textRightResolver = require('./text-right-resolver')
const heroSlideResolver = require('./hero-slide-resolver')
const cardResolver = require('./cards-resolver')
const imageResolver = require('./images-resolver')
module.exports = [
  userResolver,
  pageResolver,
  componentResolver,
  textCenterResolver,
  textLeftResolver,
  textRightResolver,
  heroSlideResolver,
  cardResolver,
  imageResolver
]