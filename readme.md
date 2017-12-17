# Node + Mongo Reference

## This is based (but modified) on: https://www.w3schools.com/nodejs/nodejs_mongodb.asp
### Be sure to type the correct mongo version (i.e. 3.7) in the file path

1. Download mongoDB from https://www.mongodb.com/download-center?jmp=nav#community
2. Create a data\db inside C:\ 
3. Download and install mongodb package: > C:\Users\Your Name>npm install mongodb
4. First, run the mongod database by 
```
C:\Program Files\MongoDB\Server\3.6\bin>mongod 
```
5. Second, run to mongo cli by `C:\Program Files\MongoDB\Server\3.6\bin>mongo `
6. Node.js can use this module to manipulate MongoDB databases: `var mongo = require('mongodb');`
7. Every *.js file correspounds to an action on mongodb, so just type in a console: `node thefilename.js` to execute that particular command

more here: https://docs.mongodb.com/manual/reference/