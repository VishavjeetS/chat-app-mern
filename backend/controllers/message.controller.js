import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id:recieverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] },
        });

        if (!conversation) {
            conversation = Conversation.create({
                participants: [senderId, recieverId],
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        });

        //Socket io implementation

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([newMessage.save(), conversation.save()]);


        res.status(201).json(newMessage);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

export const getMessage = async (req, res) => {
    try {
        const {id} = req.params;
        const { _id: userId } = req.user;

        const conversation = await Conversation.findOne({
            participants: { $all: [userId, id] },
        }).populate("messages");

        if (!conversation) {
            return res.status(404).json({ error: "Conversation not found" });
        }

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}