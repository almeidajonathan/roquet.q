module.exports = {  //implicitly receives req and res from route.js
    index(req, res) {
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password


        console.log(`room = ${roomId}, question = ${questionId}, action = ${action}, passaword = ${password}`)
    }
}