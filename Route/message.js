const db    =   require('../models');
const express =  require('express');
const router =  express.Router();
const {addMessage,oldMessage}  =  require('../handlers/message')



router.get('/messages',async (req,res,next)=>{
            try{
                  let fullMessage = await db.Message.find({});
                  res.send(fullMessage);
                  return next();
            }catch(err){
                return next(err);
            }
})

router.post("/:id/message",addMessage);
router.get("/:id/message",oldMessage);

module.exports = router;