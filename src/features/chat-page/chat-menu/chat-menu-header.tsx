import { CreateChatAndRedirect } from "../chat-services/chat-thread-service";
import { ChatContextMenu } from "./chat-context-menu";
import { NewChat } from "./new-chat";
import { Logo, LogoImage } from "../ui/logo";

export const ChatMenuHeader = () => {
  return (
      <Logo className="h-12 w-80">
        <LogoImage src={"danrevi-logo.svg"} />
      </Logo>
    <div className="flex p-2 px-3 justify-end">
      <form action={CreateChatAndRedirect} className="flex gap-2 pr-3">
        <NewChat />
        <ChatContextMenu />
      </form>
    </div>
  );
};
