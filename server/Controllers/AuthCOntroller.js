import UserModel  from "../Models/uerModel.js";
import bcrypt from 'bcrypt';

//Resgistering a new User
export const registerUser = async(req, res) => {

    const {username, password, firstname, lastname} = req.body;


    const salt = await bcrypt.genSalt(10) //this generate the Hash function
    const hashedPass = await bcrypt.hash(password, salt)// generate hashed password

    const newUser = new UserModel({username, 
        password: hashedPass, 
        firstname, 
        lastname})

    try{
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error){
        res.status(500).json({message: error.message})

    }

}

// login User

export const loginUser = async (req, res)=>{
    const {username, password} = req.body

    try{
        const user = await UserModel.findOne({username:username})

        if(user)
        {
            const validity = await bcrypt.compare(password, user.password)

            validity? res.status(200).json(user): res.status(400).json("Wrong Password")
        }
        else{
            res.status(404).json("User Doesn't Exist")
        }
    } catch (error) {
        res.status(500).json({message: error.message})

    }

}