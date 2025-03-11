// app/themes/page.js
"use client";
import React from "react";

export default function Themes() {
  const themes = [
    {
      title: "Civilization versus Savagery",
      description:
        "This theme explores the rivalry between order and primal instincts, Ralph represents civilization by being the boy focuses on rules and the signal fire, while Jack represents savagery by prioritizing power and hunting.",
      details:
        "When they first found themselves on the island, the boys try to keep the order with meetings and rules, but as they get more scared and hungry, the group becomes more and more chaotic.",
      quote:
        "In Chapter 11, Piggy says: \"Which is better—to be a pack of painted Indians like you are, or to be sensible like Ralph is?\"'"
    },
    {
      title: "Power and Leadership",
      description:
        "The conflict about power between Ralph and Jack shows the damaging influence of authority, Ralph leads democratically after being voted as chief by ecery other boy, but Jack is the exact opposite and rules like a dictator using by fear and violence.",
      details:
        "Ralph is elected the leader because of his calm and rational attitude, with a focus on rescue. Because jack is not happy about it, he creates his own tribe, and get more members by promising fresh meat and protection from the beast.",
      quote:
        "In Chapter 9, Jack says: 'See? They do what I want.'"
    },
    {
      title: "Loss of Innocence",
      description:
        "The boys' transformation from innocent school boys to violent hunters reflects that they lost of innocence, the island, initially a paradise with no grownups and freedom, becomes more like a battleground.",
      details:
        "The turning point is the first pig hunt, where all the boys chanted: 'Kill the pig. Cut her throat. Bash her in.', with Simon's brutal death that will symbolize even more the end of their innocence and the dominance of savagery.",
      quote:
        "Chapter 12: 'Ralph wept for the end of innocence, the darkness of man's heart, and the fall of the true, wise friend called Piggy.'"
    },
    {
      title: "Fear and the Unknown",
      description:
        "ar is one of the major emotions that drives most of the boys behavior, by turning the beast into something that only existed in their imagination into a symbol of their darkness. The beast was never real, but it is their fear that makes it so.",
      details:
        "Simon is the one that understands the truth, by for example saying when he talked about the beast: 'Maybe it's only us.'. But by trying to tell the truth, he got killed by the terrified boys.",
      quote:
        "Piggy says in chapter 5: 'Unless we get frightened of people.'"
    },
    {
      title: "Human Nature",
      description:
        "William Golding presents a pessimistic view of human nature, by suggesting that behind civilization lies an immense capacity for cruelty, violence and savagery.",
      details:
        "As the boy’s situation get worse, they become less civil, which reveals their darker, truer form.",
      quote:
        "Ralph says in chapter 12: 'The skull regarded Ralph like one who knows all the answers and won't tell."
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-center mb-10">Themes in Lord of the Flies</h1>
      <div className="space-y-8">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="bg-white border-l-8 border-yellow-500 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-3 text-yellow-700">{theme.title}</h2>
              <p className="text-gray-700 mb-2">{theme.description}</p>
              <p className="text-sm text-gray-600 mb-4">{theme.details}</p>
              <blockquote className="italic text-yellow-600 border-l-4 border-yellow-400 pl-4">
                {theme.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
