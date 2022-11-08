const express = require('express', 4.8,2)
const app = express ()
const port = 3000

app.get('/',(req, res) => {
    res.send ('Hellow world!')
})

app.get('/getClassesForUser' ,(req, res) => {
    console.log("req.body.user")
    {"classes",[{"sourcedId":"SourceId","status":"active","dateLastModified":"2022-04-23T18:25:43.511Z","metadata":{},"title":"English","classCode":"en","classType":"homeroom","location":"Room 19","grades":["4 grade"],"subjects":["English","Hindi"],"course":{"href":"href","sourcedId":"en","type":"course"},"school":{"href":"href","sourcedId":"SourceId","type":"org"},"terms":[{"href":"href","sourcedId":"SourceId","type":"academicSession"}],"subjectCodes":["en","hi"],"periods":["period 1","period 2"],"resources":[{"href":"href","sourcedId":"SourceId","type":"academicSession"}]},{"sourcedId":"SourceId","status":"active","dateLastModified":"2022-04-23T18:25:43.511Z","metadata":{},"title":"Maths","classCode":"maths","classType":"homeroom","location":"Room 20","grades":["4 grade"],"subjects":["English","Hindi"],"course":{"href":"href","sourcedId":"maths","type":"course"},"school":{"href":"href","sourcedId":"SourceId","type":"org"},"terms":[{"href":"href","sourcedId":"SourceId","type":"academicSession"}],"subjectCodes":["en","hi"],"periods":["period 1","period 2"],"resources":[{"href":"href","sourcedId":"SourceId","type":"academicSession"}]},{"sourcedId":"SourceId","status":"active","dateLastModified":"2022-04-23T18:25:43.511Z","metadata":{},"title":"Puzzle","classCode":"puzzle","classType":"homeroom","location":"Room 20","grades":["4 grade"],"subjects":["English","Hindi"],"course":{"href":"href","sourcedId":"puzzle","type":"course"},"school":{"href":"href","sourcedId":"SourceId","type":"org"},"terms":[{"href":"href","sourcedId":"SourceId","type":"academicSession"}],"subjectCodes":["en","hi"],"periods":["period 1","period 2"],"resources":[{"href":"href","sourcedId":"SourceId","type":"academicSession"}]}]}
    res.send({"classes":[]})
})

app.get('/getResultsForStudentForClass' ,(req, res) => {
    console.log("req",req)
    {"results",[{"sourcedId":"..String..","status":"active","dateLastModified":"..Date/Time..","metadata":{"lessonId":"en0000"},"lineItem":{"href":"..URI..","sourcedId":"..String..","type":"lineItem"},"student":{"href":"..URI..","sourcedId":"..String..","type":"user"},"class":{"href":"..URI..","sourcedId":"..String..","type":"class"},"scoreScale":{"href":"..URI..","sourcedId":"..String..","type":"scoreScale"},"scoreStatus":"submitted","score":60,"textScore":"..NormalizedString..","scoreDate":"..String(Date)..","comment":"..String..","learningObjectiveSet":[{"source":"..select from Union..","learningObjectiveResults":[{"learningObjectiveId":"..NormalizedString..","score":20,"textScore":"..NormalizedString.."}]}]},{"sourcedId":"..String..","status":"active","dateLastModified":"..Date/Time..","metadata":{"lessonId":"en_PreQuiz"},"lineItem":{"href":"..URI..","sourcedId":"..String..","type":"lineItem"},"student":{"href":"..URI..","sourcedId":"..String..","type":"user"},"class":{"href":"..URI..","sourcedId":"..String..","type":"class"},"scoreScale":{"href":"..URI..","sourcedId":"..String..","type":"scoreScale"},"scoreStatus":"submitted","score":60,"textScore":"..NormalizedString..","scoreDate":"..String(Date)..","comment":"..String..","learningObjectiveSet":[{"source":"..select from Union..","learningObjectiveResults":[{"learningObjectiveId":"..NormalizedString..","score":20,"textScore":"..NormalizedString.."}]}]}]}
    res.send({"results":[] })
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})