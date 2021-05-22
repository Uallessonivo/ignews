
<h1 align="center">
  IgNews
  <br>
</h1>

<h4 align="center">Website for payment system.</h4>

<p align="center">
  <a href="#stack">Stack</a> •
  <a href="#features">Features</a> •
  <a href="#how-to-use">How To Use</a> •
</p>


## STACK

- Typescript
- Next.js
- Next Auth
- Sass
- Stripe
- PrismicCMS
- FaunaDB
## Features

* Create account and login through github provider
* If the user has an active subscription, posts are fully loaded  
* If the user does not have an active subscription, only previews of the posts will be loaded
* The user's subscription status will be saved in the database
* If the user already has an active subscription, the subscription button redirects the user to the posts
* If the user does not have an active subscription, the subscription button will also appear in the post preview
* Posts are created in the Prismic CMS and updated on the website in real time

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Uallessonivo/ignews

# Go into the repository
$ cd ignews

# Install dependencies
$ npm install

# Run the app
$ npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## License

MIT

---

