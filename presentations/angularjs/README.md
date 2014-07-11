# Introduction to AngularJS

Authors/Presenters: Tejen Shrestha & Jonathan Tahan

This presentation was made using reveal.js - A framework for easily creating beautiful presentations using HTML. [Check out the live demo of reveal.js](http://lab.hakim.se/reveal-js/).

### Full setup

Some reveal.js features, like external markdown and speaker notes, require that presentations run from a local web server. The following instructions will set up such a server.

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

4. Clone the bah-js-community repository
   ```sh
   $ git clone https://github.com/zdoc01/bah-js-community.git
   ```

5. Navigate to the angularjs/reveal.js folder
   ```sh
   $ cd presentations/angularjs/reveal.js
   ```

6. Install dependencies
   ```sh
   $ npm install
   ```

7. Serve the presentation and monitor source files for changes
   ```sh
   $ grunt serve
   ```

8. Open <http://localhost:8000> to view your presentation

   You can change the port by using `grunt serve --port 8001`.
