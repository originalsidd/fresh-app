/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { tw } from "@twind";
import Ocean from "../islands/Ocean.tsx";
import Lemon from "../islands/Lemon.tsx";

export default function Home() {
  const [flag, setFlag] = useState(true);
  const setBgHandler = () => {
    setFlag(!flag);
  }

  return (
    <div class={tw`w-80 mx-auto p-10`}>
      <Lemon />
      <Ocean setBgHandler={setBgHandler}/>
    </div>
  );
}
