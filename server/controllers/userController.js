import User from "../models/User"

// Get user data
export const getUserData = async(req,res) => {

    const userId = req.auth.userId

    try {

        const user = await User.findById(userId)

        if (!user) {
            return res.json({succes:false, message:'User Not Found'})           
        }

        res.json({success:true, user})

    } catch (error) {
        res.json({succes:false, message: error.message})
    }

}

//  Apply for a job
export const applyForJob = async(req,res) => {

}


// Get user applied Applications
export const getUserJobApplications = async(req,res) => {

}

// update user profile (resume only, rest via clerk)
export const updateUserResume = async(req,res) => {

}