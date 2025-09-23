## these all authentication routes might be cluttered so organise them into a group inside () folder which only for organizational purposes 
### so routes are available simple
- /register
- /login
- /forgot-pass


#### understanding pathname for identifying active link

when navigating in a layout it only changes unique component means it doesnot mount old shared component as these are common to all component

if we want to remount whole DOM or loads new recreated all component we have to use `template.js` file
like `layout.js` it also accept a children prop for render a children component