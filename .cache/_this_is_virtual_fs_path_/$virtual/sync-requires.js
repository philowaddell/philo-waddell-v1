
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/philo/development/philo-waddell-v1/src/pages/404.js")),
  "component---src-pages-desktop-js": preferDefault(require("/home/philo/development/philo-waddell-v1/src/pages/desktop.js")),
  "component---src-pages-index-js": preferDefault(require("/home/philo/development/philo-waddell-v1/src/pages/index.js")),
  "component---src-pages-mobile-js": preferDefault(require("/home/philo/development/philo-waddell-v1/src/pages/mobile.js"))
}

