import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchChatByProject, fetchChatMessages, sendMessage } from "@/Redux/Chat/Action";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChatBox = () => {
    const dispatch = useDispatch();
    const { auth, chat } = useSelector((store) => store);
    const { id } = useParams();
    const [message, setMessage] = useState("");

    useEffect(() => {
        dispatch(fetchChatByProject(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (chat.chat?.id) {
            dispatch(fetchChatMessages(chat.chat.id));
        }
    }, [dispatch, chat.chat]);

    const handleSendMessage = () => {
        if (message.trim()) {
            dispatch(sendMessage({
                senderId: auth.user?.id,
                projectId: id,
                content: message,
            }));
            setMessage("");
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="sticky top-0">
            <div className="border rounded-lg">
                <h1 className="border-b p-5">Chat Box</h1>
                <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
                    {chat.messages?.map((item, index) => {
                        const isSender = item.sender.id === auth.user?.id;
                        return (
                            <div className={`flex gap-2 mb-2 ${isSender ? "justify-end" : "justify-start"}`} key={index}>
                                {!isSender && (
                                    <Avatar>
                                        <AvatarFallback>{item.sender?.fullName.charAt(0) || "U"}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={`space-y-2 py-2 px-5 border rounded-xl ${isSender ? "rounded-se-2xl rounded-s-xl" : "rounded-ss-2xl rounded-e-xl"}`}>
                                    <p>{item.sender?.fullName || "Unknown"}</p>
                                    <p className="text-gray-300">{item.content}</p>
                                </div>
                                {isSender && (
                                    <Avatar>
                                        <AvatarFallback>{auth.user?.fullName.charAt(0) || "U"}</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        );
                    })}
                </ScrollArea>
                <div className="relative p-0">
                    <Input
                        placeholder="type message..."
                        className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <Button
                        onClick={handleSendMessage}
                        className="absolute right-2 top-3 rounded-full"
                        size="icon"
                        variant="ghost"
                    >
                        <PaperPlaneIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
