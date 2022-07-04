/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Lemon() {
  return (
    <div class={tw`flex flex-column items-center m-0 pb-4`}>
      <img
        src="/logo.svg"
        width="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      Todo App created using Fresh🍋
    </div>
  );
}
