import { CreateChatAndRedirect } from "../chat-services/chat-thread-service";
import { ChatContextMenu } from "./chat-context-menu";
import { NewChat } from "./new-chat";

export const ChatMenuHeader = () => {
  return (
    <img src={'/danrevi-logo.svg'} width="100" padding-right="20" />
    <div className="flex p-2 px-3 justify-end">  
      <form action={CreateChatAndRedirect} className="flex gap-2 pr-3">
        <NewChat />
        <ChatContextMenu />
      </form>
    </div>
  );
};
