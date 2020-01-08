# julianehendershot.com

## Getting started

```sh
npm i
npm run dev
```

## To do

- [x] routes: home, contact, about, projects
- [ ] Create/Update language context
- [ ] Create `Link` component that handles language
- [ ] `react-intl`
- [ ] add from `/` to `/en` redirection
- [ ] favicon
- [ ] title
- [ ] lazyimages for youtube/vimeo iframe
- [ ] side menu as header on the left for desktop, on top for mobile
- [ ] check routes
- [ ] contact form frontend
- [ ] Language picker add blur

## Redirection

[This option was considered for a while](https://stackoverflow.com/questions/4529379/is-it-good-practise-to-use-meta-refresh-tags-for-redirects-instead-of-header-f) but it's not best practices apparently so Cloudflare was used for redirection

```html
<!DOCTYPE html>
<html>
  <head>
    <meta
      http-equiv="refresh"
      content="0; url=https://julianehendershot.com/en"
    />
    <title>301 Moved</title>
  </head>
  <body>
    <h1>301 Moved</h1>
    The document has moved
    <a href="https://julianehendershot.com/en">here</a>.
  </body>
</html>
```
