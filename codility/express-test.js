/* 'use strict';

const express = require('express');
const app = express();
app.use(express.json());

let candidates = []

// route/endpoint for the server
app.get('/candidates', (req, res) => {
   // check if there is no candidate that exists in the DB(just in memory in this case)
   if (candidates.length == 0) {
      return res.status(404).json({ msg: 'Not found' })
   }

   res.json(candidates)
});

// route/endpoint for the server
app.get('/candidates/search', (req, res) => {
   // check if there is no candidate that exists in the DB(just in memory in this case)
   if (candidates.length == 0) {
      return res.status(404).json({ msg: 'Not found' })
   }

   // check if request include the required query
   if (Object.keys(req.query).length == 0 || req.query.skills == "") {
      return res.status(400).json({ msg: 'Invalid request' })
   }

   /* const rawQuery = req.query.skills

   // maybe should clean or verify data first?
   const skills = rawQuery.split(',')
   console.log(skills)

   for (let i = 0; i < skills.length; i++) {

   } *

   const skillsQuery = req.query.skills // this gives us a string 
   // we want to split it into individual skill (comma-seperated)
   const skills = skillsQuery.split(',')

   console.log(skills)

   let ideal = []

   for (let i = 0; i < candidates.length; i++) {
      for (let j = 0; j < skills.length; j++) {
         if (candidates[i].skills == skills[j]) {
            ideal.push(candidates)
         }
      }
   }

   //const data = candidates.filter(person => person.skills.includes(skills[0]))
   res.json(ideal)
   

});

app.post('/candidates', (req, res) => {
   if (Object.keys(req.body).length == 0) {
      return res.status(400).json({msg: 'Invalid request'})
   }

   const person = {
      id: req.body.id,
      name: req.body.name,
      skills: req.body.skills
   }

   candidates.push(person)
   res.json('200 OK')
})

// define port for the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log("Server started on port " + PORT);
}); */


'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

// this is where we kept the added candidates records
let candidates = [
   {
      "id": "person1",
      "name": "Amy Fish",
      "skills": ["scala", "go"]
   }
]

app.get('/candidates', (req, res) => {
   // check if there is no candidate that exists in the DB(just in memory in this case)
   if (candidates.length == 0) {
      return res.status(404).json({ msg: 'Not found' })
   }

   res.json(candidates)
});

app.post('/candidates', function (req, res) {
   // check for invalid request and return 400
   if (Object.keys(req.body).length == 0) {
      return res.status(400).json({ msg: 'Bad Request' })
   }

   // we want to store every skills in lowercase, to maintain consistency and easy matching when searching
   const skills = req.body.skills.map((s) => s.toLowerCase())

   // an object to keep the records of the newly added candidate
   const person = {
      id: req.body.id,
      name: req.body.name,
      skills: skills
   }

   // saves the newly added candidate to the DB & send success code
   candidates.push(person)
   res.json('200 OK')
});

app.get('/candidates/search', function (req, res) {
   res.setHeader('Content-Type', 'application/json');
   
   // check if request include the required query
   if (Object.keys(req.query).length == 0 || req.query.skills == "") {
      return res.status(400).json({ msg: 'Invalid request' })
   }

   // check if there is no candidate that exists in the DB
   if (candidates.length == 0) {
      return res.status(404).json({ msg: 'Not found' })
   }

   const skillsQuery = req.query.skills // this gives us a string 
   // we want to split it into individual skill (comma-seperated)
   const skills = skillsQuery.split(',')

   let matchedSkills = Array(candidates.length).fill(0)
   // now we want to get the most suitable candidate
   for (let i = 0; i < candidates.length; i++) {
      let count = 0

      while(count < skills.length) {
         if (candidates[i].skills.includes(skills[count].toString().trim().toLowerCase())) {
            matchedSkills[i]++
            //console.log(skills[count])
         }
         count++
      }
   }

   const max = Math.max(...matchedSkills)

   if (max > 0) {
      const idealCandidateIndex = matchedSkills.indexOf(max)

      // question mentioned return any of the candidates, if there are more than 1 that is best.
      // so I assume we should return only 1 candidate
      res.json(candidates[idealCandidateIndex])
   } 
   else {
      res.status(404).json({ msg: 'Not found' })
   }
   console.log(max)

   /* const idealCandidateIndex = matchedSkills.indexOf(max)
   
   //console.log(skills)
   
   res.json(candidates[idealCandidateIndex]) */
});

app.listen(process.env.HTTP_PORT || 5000, () => {
   console.log("Server started");
});