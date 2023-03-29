const express = require('express')
// import { verify } from 'jsonwebtoken'

import { CreateTask, getTask, getTasks, UpdateTask } from '../Controllers/Task.js'
const CreateTask = require('../controller/Task')
import { verifyJwtToken} from '../middleWare/Verify.js'

const Router = express.Router()

Router.post('/create'  , verifyJwtToken,CreateTask)
Router.put('/:id',verifyJwtToken,UpdateTask)
Router.get('/:id',verifyJwtToken, getTask)
Router.get('/', verifyJwtToken, getTasks) 

export default Router 
