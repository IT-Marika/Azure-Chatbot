import { CreateChatAndRedirect } from "../chat-services/chat-thread-service";
import { ChatContextMenu } from "./chat-context-menu";
import { NewChat } from "./new-chat";

export const ChatMenuHeader = () => {
  return (
    
    <div className="flex p-2 px-3 justify-center">  
      <img src={'/danrevi-logo.svg'} width="130" />
      <form action={CreateChatAndRedirect} className="flex gap-2 pr-3">
        <NewChat />
        <ChatContextMenu />
      </form>
    </div>
  );
};
