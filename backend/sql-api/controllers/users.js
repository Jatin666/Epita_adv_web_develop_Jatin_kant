// const { contact } = require('../models')
const db = require('../models')

const registerUser = async (req, res)=>{
    let user;
    const { username, password } = req.body

    // res.send(username)

    try {

        user = await db.users.findOne({
            where:{
                username,
            }
        })
        console.log({user})
        if (!user) {
            let user = await db.users.create({username,password})
    
            await addContact(req, user.id)
            await addRole(req, user.id)
            await addAddress(req, user.id)
            console.log(JSON.stringify(user))
    
            return res.status(200).json({message:'User created successfully'})
        }else{
            return res.json({error: {errorType:"USER_ALREADY_EXIST", message:"User already exists."} })
        }

        

    } catch (error) {   
        res.send(error)
    }


}

const  addContact = async (req, userId)=>{
    let contact = req.body.contact
    console.log({contact})
    await db.contact.create({...contact,userId})
}

const  addAddress = async (req, userId)=>{
    let address = req.body.address
    console.log({address})
    await db.address.create({...address,userId})
}

const  addRole = async (req, userId)=>{
    let role = req.body.role
    console.log({role})
    await db.role.create({...role,userId})
}

const loginUser = async (req,res)=>{
    const { email, password } = req.body;
    try {
        if(!email || !password) return res.json({error:{errorType: "Fill all inputs"}})
        const { userId } = await db.contact.findOne({
            where: {
                email,
            },
        });

        if(!userId) return res.status(401).json({message: "User not found"})

        const user = await db.users.findOne({
            where:{
                id: userId,
                password
            }
        })
        if (!user) {
            return res.status(401).json({message: "Password invalid."}) 
        }
        res.status(200).send({id:user.id,username: user.username});
    } catch (error) {
        next(createError(400, error.message));
    }
}
module.exports = { registerUser, loginUser }