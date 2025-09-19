## next js foundation inside app/
`page.js`
contains 
- this file containing react component default functional export which show as the home route of the application like `/`
```bash
localhost:3000
```
> in case of nextjs default

### anything in the page.js show on the home route 

---

## layout

`layout.js`
conatins 
- layout configuration and used to setup shared layout accross the 
- also usefull for setting html tags
- accept `childern` props and rendered page inside this layout
- can be nested for different layout for different routes
- called `Root Layout`

### something interesting 
here is Multiple root layout

- (auth)
   -  `register`
        - `page.js`
   -  `login`
        - `page.js`
    
        `layout.js`
- (marketing)
   - `revenue`
        - `page.js`
   - `customers`
        -  `page.js`

        `layout.js`

        `page.js`

--- 
this layout inside route groups are refered as Root Layout 
--- 
## not found 404

`not-found.js` optional
- for custom not found page over the next js default


#### all content added over time and updated as i learn more about nextJS
> Last Updated 8:14 PM | 9 Sept 2025