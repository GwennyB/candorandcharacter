

HTML wireframes
site map and content listing
  nav links
  external credits (D&D home site, artwork, etc)
functional diagram
  splash loading - animation?  (STRETCH - maybe just embed a .gif as MVP)
  quiz form(s)
  dynamically populate char sheet
  user management - force through intended flow
  storage/recall/display
  rendering
  other site personalization?
user stories
requirements
plan README contents
Styling
  layout
  collect ref artwork links
  create aesthetic theme: choose fonts/colors and rules for how to apply them
initial characters: just 1 to start (MVP); maybe all of ours pre-populated (as stretch)


INTERACTIVE FLOW:
open index.html
  event listeners for each of 4 previously created characters
  options:
    nav links - to other pages (includes 'new char')
    load existing character
      query string in url to load correct character (can use just HTML link)
      go to 'existingcharacter.html', run separate JS
        get LS
        render
    create new character
      blurs
      tokens
      event listener on Q1 token
      handler: launch quiz
        submit:
          hide blur
          hide Q1 token
          calculate outputs
          populate outputs
          show Q2 token (event listener can already be active if token is inaccessible)
          repeat for Q2, Q3

          
