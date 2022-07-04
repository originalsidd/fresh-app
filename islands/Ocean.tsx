/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface OceanProps {
  setBgHandler: (params: void) => void;
}

export default function Ocean(props: OceanProps) {
  const text = tw`p-3 my-2 bg-yellow-500 text-center`;
  const rectangle = tw`p-4 h-100 bg-yellow-500`;

  return (
  	<div class={tw`flex flex-1 flex-col justify-items-center align-items-center`}>
			<div class={text}>FRESH</div>
			<button class={rectangle} onclick={props.setBgHandler}>CLick ME!</button>	  
  	</div>
  );
}
