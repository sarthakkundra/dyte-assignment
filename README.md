



# URL Shortener

## Demo
https://user-images.githubusercontent.com/52133994/126049180-3aef080d-33e1-4689-9937-ed8c126c0adf.mov

### Core features
1. Create / Read / Update / Delete (CRUD) short urls
2. Google oAuth
3. View analytics per url (Total hits and unique hits) unique hits are based off of IP and total hits measure the number of times the redirection route is called.

## Things I'd like to improve (given 24 hrs more)
1. Refactor Login Logout components into a HoC
2. Re rendering the URLs table with every CRUD operation. (Super easy, just need to change something in the parent component)
3. Performance upgradations using useMemo, useCallback etc where the functions do not need to re execute / render.
4. Performance improvements using caching of user's personal URLs.
5. UI responsiveness
