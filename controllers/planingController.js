const Story = require("../models/story");
const Goal = require("../models/goal");

createStory = (req, res) => {
    
    let body = req.body;
    body.userId = req.user._id;

    if (!body) {
        return res.status(404).json({
        success: false,
        error: 'You must provide a story',
        })
    }
    const story = new Story(body)
    if (!story) {
        return res.status(404).json({ success: false, error: err })
    }

    story.save()      
        .then(() => {
            return res.status(201).json({
                success: true,
                id: story._id,
                message: 'Story created!',
            })
        })
        .catch(error => {
            return res.status(404).json({
                error,
                message: 'Story not created!',
            }) 
        })
};

getStories = async (req, res) => {
    await Story.find({userId:req.user._id}, (err, stories) => {
        if (err) {
            return res.status(404).json({ success: false, error: err })
        }
        if (!stories.length) {
            return res
                .status(404)
                .json({ success: false, error: `Stories not found` })
        }
        return res.status(200).json({ success: true, data: stories })
    }).catch(err => console.log(err))

};

deleteStory = async (req, res) => {

    await Story.findOneAndDelete({ _id: req.params.id }, (err, story) => {
        if (err) {
            return res.status(404).json({ success: false, error: err })
        }
        if (!story) {
            return res
                .status(404)
                .json({ success: false, error: `Story not found` })
        }

        return res.status(200).json({ success: true, data: story })
    }).catch(err => console.log(err))
}

updateStory = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(404).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Story.findOne({ _id: req.params.id }, (err, story) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Story not found!',
            })
        }
        else{
            story.title = body.title
            story.story = body.story
            story.profileImage = body.profileImage
            story.backgroundImage = body.backgroundImage
            story.author = body.author
        }
        
        story.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: story._id,
                    message: 'Story updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Story not updated!',
                })
            })
    })
}

//==========================================================

createGoal = (req, res) => {
    const body = req.body;
    body.userId = req.user._id;

    if (!body) {
        return res.status(404).json({
            success: false,
            error: 'You must provide a Goal',
        })
    }
    const goal = new Goal(body)
    if (!goal) {
        return res.status(404).json({ success: false, error: err })
    }

    goal.save()      
        .then(() => {
            return res.status(201).json({
                success: true,
                id: goal._id,
                message: 'Goal created!',
            })
        })
        .catch(error => {
            return res.status(404).json({
                error,
                message: 'goal not created!',
            }) 
        })
}

getGoals = async (req, res) => {
    
    await Goal.find({userId:req.user._id}, (err, goals) => {
        if (err) {
            return res.status(404).json({ success: false, error: err })
        }
        if (!goals.length) {
            return res
                .status(404)
                .json({ success: false, error: `Goals not found` })
        }
        return res.status(200).json({ success: true, data: goals })
    }).catch(err => console.log(err))
}

deleteGoal = async (req, res) => {
    console.log('calling delete')
    await Goal.findOneAndDelete({ _id: req.params.id }, (err, goal) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!goal) {
            return res
                .status(404)
                .json({ success: false, error: `Goal not found` })
        }

        return res.status(200).json({ success: true, data: goal })
    }).catch(err => console.log(err))
}

updateGoal = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(404).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Goal.findOne({ _id: req.params.id }, (err, goal) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Goal not found!',
            })
        }
        else{
        goal.title = body.title
        goal.link = body.link
        goal.description = body.description
        goal.completeGoal = body.completeGoal
        }
        
        goal.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: goal._id,
                    message: 'Goal updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Goal not updated!',
                })
            })
    })
}

module.exports = {
    createStory,
    getStories,
    deleteStory,
    updateStory,
    
    createGoal,
    getGoals,
    deleteGoal,
    updateGoal,
}