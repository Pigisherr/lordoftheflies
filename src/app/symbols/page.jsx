// app/symbols/page.js
"use client";
import React from "react";

export default function Symbols() {
  const symbols = [
    {
      name: "Conch Shell",
      meaning: "Symbol of Civilization and Order",
      description:
        "The conch shell represents civilization and the order that democracy brings. It is used to call meetings by blowing into it and establish speaking turns by being the item you need in your hand to be able to speak, which represents the boys' initial attempt to maintain structure on the island and not just do whatever they want.",
      significance:
        "As the boys become more and more crazy and violent, the conch loses its power over time. When Roger crushes the shell with Piggy's death, it marks the complete collapse of order and rationality.",
      quote:
        "Chapter 1: 'We can use this to call the others. Have a meeting. They’ll come when they hear us.'"
    },
    {
      name: "The Signal Fire",
      meaning: "Hope for Rescue and Return to Civilization",
      description:
        "The signal fire represents the boys' desire to be rescued and return to see their families and go back to their normal and civilized lives. It is the first priority of Ralph because keeping it lit is the only way they could get rescued and it is their only sign of hope and survival.",
      significance:
        "As Jack gains power and the boys become less and less civilized, the boys start to not even bother keeping the fire, which shows that most of the boys gave up their hopes and manners.",
      quote:
        "Chapter 2: 'The fire is the most important thing. Without the fire, we can’t be rescued.'"
    },
    {
      name: "The Beast",
      meaning: "Fear of the Unknown and Inner Savagery",
      description:
        "The beast represents the boys' fear of the unknown and their human nature and savagery. It initially starts with an imagined threat told by the younger boys but ultimately reflects the way the boys think.",
      significance:
        "The realization of Simon that the beast is just the darkness in each boy really shows the view of the author about human nature after his experiences with war. This useless fear drives the boys to commit irrational violence that could have been easily prevented.",
      quote:
        "Chapter 5: 'Maybe there is a beast… maybe it’s only us.'"
    },
    {
      name: "Lord of the Flies",
      meaning: "Symbol of Evil and Inner Corruption",
      description:
        "The Lord of the Flies is the pig’s head that Jack and the other hunters killed on a stick, symbolizing the use of evil in humans. It mocks Simon while really revealing what the beast truly is.",
      significance:
        "As the head rots, it reflects how savagery leads to corruption and overall negativity.",
      quote:
        "Chapter 8: 'Fancy thinking the Beast was something you could hunt and kill!'"
    },
    {
      name: "Piggy's Glasses",
      meaning: "Intelligence and the Power of Science",
      description:
        "Piggy's glasses symbolize intelligence and the power of science, because they are used to light up the signal fire, making them absolutely essential for the survival and hope of the boys.",
      significance:
        "Piggy’s glasses get damaged and later get stolen by Jack’s tribe, representing the decline of rationality and the rise of brute force and savagery.",
      quote:
        "Chapter 2: 'His specs – use them as burning glasses!'"
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-center mb-10">Symbols in Lord of the Flies</h1>
      <div className="space-y-10">
        {symbols.map((symbol, index) => (
          <div
            key={index}
            className="bg-gray-50 border-l-8 border-indigo-500 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-3 text-indigo-700">{symbol.name}</h2>
              <h3 className="text-lg text-gray-600 mb-2">{symbol.meaning}</h3>
              <p className="text-gray-700 mb-3">{symbol.description}</p>
              <p className="text-sm text-gray-500 mb-4">{symbol.significance}</p>
              <blockquote className="italic text-indigo-600 border-l-4 border-indigo-400 pl-4">
                {symbol.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
