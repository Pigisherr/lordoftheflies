// app/characters/page.js
"use client";
import React from "react";

export default function Characters() {
  const characters = [
    {
      name: "Ralph",
      role: "Leader and symbol of civilization and order",
      description:
        "Ralph is the elected leader of the boys and represents order, leadership, and civilization, his main priority is the signal fire and he tries to maintain structure on the island, even if the boys get more chaotic over time.",
      significance:
        "Ralph starts as an optimistic leader, by telling the other boys that he is confident that rescue will come if they stay organized. But as Jack gains power and the boys embrace savagery, Ralph really struggles to keep his authority and hope.",
      quote:
        "Chapter 2: 'We’ve got to have special people for looking after the fire. Any day there may be a ship out there.'"
    },
    {
      name: "Jack",
      role: "Leader of the Hunters and symbol of savagery and primal instincts",
      description:
        "Jack represents the dark side that every human has. As the leader of the hunters, he prioritizes having power over the the other boys and be the one who controls them all instead on focusing on having order and being rescued.",
      significance:
        "At the begining of the book, Jack tries the follow the rules but he quickly get frustrated of Ralph being the leader, because of that, he formed his own tribe where he uses fear and rewards, like meat, to have control.",
      quote:
        "Chapter 8: 'I’m not going to play any longer. Not with you.'"
    },
    {
      name: "Piggy",
      role: "Represents reason and intelligence",
      description:
        "Piggy is Ralph's best friend and supporter on the island by representing intelligence, logic, and rationality, his glasses symbolize knowledge and the ability to create fire.",
      significance:
        "Piggy’s physical weakness makes him an easy target for Jack and Roger, but his ideas often guide the leadership of Ralph. His death marks the collapse of rationality on the island.",
      quote:
        "Chapter 11: 'Which is better—to have rules and agree, or to hunt and kill?'"
    },
    {
      name: "Simon",
      role: "Symbol of innocence and morality",
      description:
        "Simon represents natural human virtue and morality, by beingz the only boy who truly understands the 'beast' is actually the darkness within themselves.",
      significance:
        "By being often alone and thoughtful, Simon has some knowledge that the other boys do not realize and his brutal death on the beach caused by Jack and the other hunters show how fear and mob mentality destroy innocence.",
      quote:
        "Chapter 5: 'Maybe there is a beast… maybe it’s only us.'"
    },
    {
      name: "Roger",
      role: "symbol of cruelty",
      description:
        "Roger represents cruelty without any restricton, with no societal rules, he embraces violence just for having fun.",
      significance:
        "At first, Roger does not immediatly start to go crazy and be mean to the other boys, because he remembers the consequences that it would have had in the civilized world. But as the order gets worse, he becomes more and more violent and even kills Piggy by rolling a boulder on him.",
      quote:
        "Chapter 11: 'Roger, with a sense of delirious abandonment, leaned all his weight on the lever.'"
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-center mb-10">Characters in Lord of the Flies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((character, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-2">{character.name}</h2>
              <h3 className="text-xl text-gray-700 mb-2">{character.role}</h3>
              <p className="text-gray-600 mb-3">{character.description}</p>
              <p className="text-sm text-gray-500 mb-4">{character.significance}</p>
              <blockquote className="italic text-blue-600 border-l-4 border-blue-400 pl-4">
                {character.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
