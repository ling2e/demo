const express = require("express")
const router =  express.Router()
const path = require("path")
const uuid = require("uuid").v4()

// const cred = require("google-auth.json")
// const { Storage } = require("@google-cloud/storage")

let { Storage } = require("@google-cloud/storage")

const storage = new Storage({
    keyFilename: path.join(__dirname,'/google-auth.json'),
    projectId : 'vidoe-streaming'
})

let bucket = storage.bucket('vidoe-streaming.appspot.com')
router.get("/",(req,res)=>{
    // bucket.getFiles().then(e=>{
    //     let data = e[0][0]
    //     console.log(data.metadata)
    //     res.send(data.metadata.mediaLink)
    // })
    
    // Upload file
    let filePath = path.join(__dirname,'/Maroon 5 - Animals.mp4')
    let option = {
        destination: `demo_${uuid}.mp4`,
        preconditionOpts: {
            ifGenerationMatch: 0
        },
      };
    bucket.upload(filePath,option)
    .then((e)=>{
        res.send(`Success uploaded : <br/><pre>${JSON.stringify(e[0].metadata)}</pre>`)
    })
    .catch(err=>{
        if(err){
            res.send(`<pre>${err}</pre>`)
        }
    })

})


module.exports = router
