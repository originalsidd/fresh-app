import { HandlerContext } from "$fresh/server.ts";

const JOKES = [
  "Why do Java developers often wear glasses? They can't C#.",
  "A SQL query walks into a bar, goes up to two tables and says “can I join you?”",
  "Wasn't hard to crack Forrest Gump's password. 1forrest1.",
  "I love pressing the F5 key. It's refreshing.",
  "Called IT support and a chap from Australia came to fix my network connection.  I asked “Do you come from a LAN down under?”",
  "There are 10 types of people in the world. Those who understand binary and those who don't.",
  "Why are assembly programmers often wet? They work below C level.",
  "My favourite computer based band is the Black IPs.",
  "What programme do you use to predict the music tastes of former US presidential candidates? An Al Gore Rhythm.",
  "An SEO expert walked into a bar, pub, inn, tavern, hostelry, public house.",
  "Why do Python devs feel like they're in the wrong place? Because they're not using PEP8.",
  "A programmer is someone who fixes things that aren't broken.",
  "I have a problem. I don't know what it is, but I can't solve it.",
  "I'm not a great programmer; I'm just a good programmer with great habits.",
  "Hello, I'm a new programmer. I'm trying to solve a problem that no one has solved before.",
];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const randomIndex = Math.floor(Math.random() * 10);
  const body = JOKES[randomIndex];
  return new Response(body);
};
