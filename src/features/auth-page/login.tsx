"use client";
import { AI_NAME } from "@/features/theme/theme-config";
import { signIn } from "next-auth/react";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LoginProps {
  isDevMode: boolean;
  githubEnabled: boolean;
  entraIdEnabled: boolean;
}

export const LogIn: FC<LoginProps> = (props) => {
  return (
    <Card className="flex gap-2 flex-col min-w-[300px]">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl flex gap-2">
          <Avatar className="h-12 w-12">
            <AvatarImage src={"ai-icon.png"} />
          </Avatar>
          <span className="text-secondary">{AI_NAME}</span>
        </CardTitle>
        <CardDescription>
          Log ind med din Microsoft 365 konto
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {props.entraIdEnabled && (
          <Button onClick={() => signIn("azure-ad")}>LOG IND</Button>
        )}
        {props.isDevMode && (
          <Button onClick={() => signIn("localdev")}>
            Basic Auth (DEV ONLY)
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
