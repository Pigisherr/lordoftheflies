import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex mt-10 flex-col justify-center items-center gap-10 w-[80%] mx-auto p-6 bg-gray-50 rounded-lg shadow-xl">
            <div className="text-center flex flex-col items-center">
                <h1 className="text-5xl font-extrabold text-blue-700">Brief Book Summary</h1>
                <p className="max-w-3xl text-lg mt-4 text-gray-700 leading-relaxed">
                 A plane carrying English boys crashes, and they are left stranded on a deserted island. They attempt to get things organized, create rules, and build a society at first, but as fear and power issues arise, they begin to act in a wild and crazy manner.
                </p>
            </div>

            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-blue-700">About the Author</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-3">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <span className="font-bold text-2xl text-blue-800">William Golding</span> was a British author, best known for his first book Lord of the Flies, he was part of the Royal Navy during World War II and saw the horrors of war. These wild experiences made him believe that every human being has an evil side, which is one of the most important theme in Lord of the Flies, his books earned him the Nobel Prize in Literature of 1983.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    This book illustrates the uncertainty and fear that came after World War II, Golding served in the navy, and he saw how fast people become violent if there is no authority. The breakdown of peace during wars is in parallel with the breakdown of order on the island.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    The novel was written and published in the 1950s and clearly shows the dynamics of the Cold War. The world was seperated into Western democracies and communist states, represented by Ralph (democracy) and Jack (dictatorship).
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="/williamgolding.jpg" 
                        width={300} 
                        height={300} 
                        alt="Photo of William Golding, the author of Lord of the Flies"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
