/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import TodoComponent from "../islands/Todo.tsx";
import Lemon from "../islands/Lemon.tsx";

export default function Todo() {
  return (
    <div
      class={tw`w-screen h-screen flex flex-col justify-center items-center bg-yellow-100`}
    >
      <Lemon />
      <TodoComponent />
    </div>
  );
}