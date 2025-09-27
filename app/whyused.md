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

Learing about metadata to add different title to nested pages

#### all content added over time and updated as i learn more about nextJS

**`error.js|tsx` is used for custom error also it worked for nested error files** 
- these must me declared as client component
- you will find all necessory files here `./products/[productsId]/reviews/whyused.md`

`global-error.js|tsx` require html and bodt tags and this works only in production builds
> Last Updated 8:59 PM | 27 Sept 2025