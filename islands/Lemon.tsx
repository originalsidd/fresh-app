/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Lemon() {
  return (
    <div class={tw`text-center m-0`}>
      <img
        src="/logo.svg"
        width="500px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
    </div>
  );
}
