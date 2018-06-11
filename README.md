# State Population Visualizer

## Setup

### Dependencies

This project runs on NodeJS. If you don't have it, it can be easily installed [with homebrew](https://brew.sh/).

To install homebrew... 

```sh
 $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

To install node with homebrew...

```sh
 $ brew install node
```

### Installation & Launch

The application may be installed and launched with the following commands...

```sh
 # Clone down using SSH
 $ git clone git@github.com:superbuggy/state-populations-visualized.git

 # Clone down using HTTP
 $ git clone https://github.com/superbuggy/state-populations-visualized.git

 $ cd state-populations-visualized/
 $ npm i
 $ npm start
```

## Approach

### Front End

Initially, I'd sought out to learn and use a map library but saw the suggested time limit probably wouldn't accomodate the learning curve. Instead, I opted to use as few libraries as possible, opting to use an SVG map of the United States sourced from wikipedia. The SVG lent itself well with the DOM API. Originally, I thought I would color in the map as a choropleth/heatmap, but ran out of time.

CSS is used to style an SVG path representing each state.

Uses ES2015 fetch.

### Back End

I exported the provided spreadsheet as a `.csv`, cleaned the trailing columns, imported it into my server-side app using the npm module `csvtojson`, and then served the resulting JSON to be consumed by the front-end application.

## Sources

  - [US States by population from Wikipedia](https://simple.wikipedia.org/wiki/List_of_U.S._states_by_population)
  - [US SVG Map Wikipedia](https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg)

