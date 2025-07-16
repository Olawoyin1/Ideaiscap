
import { useState } from "react";
import CircularCard from "../components/CircularCard";
import ContributorModal from "./ContributorModal";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

// import FancyLinkButton from "../components/Button";

interface Social {
  icon: ReactNode;
  onClick: () => void;
}

export interface Contributor {
  name: string;
  imageUrl: string;
  socials?: Social[];
  about: string;
}

const Contributors = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedContributor, setSelectedContributor] = useState<Contributor | null>(null);

 const contributors: Contributor[] = [
  {
    name: "Olawoyin Gbolahan",
    imageUrl:
      "https://res.cloudinary.com/dunid4t4g/image/upload/v1751881220/ghcr8a6eesmyacnqnrkn.webp",
    about:
      "Olawoyin is a sociology enthusiast and dedicated writer with a passion for exploring social structures, inequalities, and collective behavior. With a strong academic background and practical engagement in community research, he brings both insight and clarity to complex social topics. Through his work with Sosioloji, he advocates for education, youth empowerment, and transformative dialogue across generations.",
    
  },
  {
    name: "Jonathan Doe",
    imageUrl:
      "https://res.cloudinary.com/dunid4t4g/image/upload/v1751875303/uastl3o4bafvs7izkuwy.webp",
    about:
      "Jonathan is a seasoned editor with over a decade of experience in publishing, academic editing, and digital media. Known for his meticulous attention to detail and narrative shaping, he collaborates closely with contributors to refine ideas and elevate the clarity of every piece. His work ensures that each voice on the platform resonates with authenticity and purpose.",
   
  },
  {
    name: "Sosioloji",
    imageUrl:
      "https://res.cloudinary.com/dunid4t4g/image/upload/v1751583678/ilaqalb7z6ngg2a6diwh.webp",
    about:
      "Sosioloji is not just a movement but a platform that uplifts grassroots voices and challenges social norms through critical discourse. It brings together young thinkers, activists, and scholars to question existing power structures and envision new ways of being. With roots in activism and public sociology, Sosioloji drives conversations around justice, equity, and liberation.",
    
  },
  {
    name: "WiseAndSane",
    imageUrl:
      "https://res.cloudinary.com/dunid4t4g/image/upload/v1751583500/n9o8a0h4wpca7mjtqmjk.webp",
    about:
      "WiseAndSane is a multidisciplinary thinker focused on blending ancient wisdom with modern insight. Through writing and mentorship, WiseAndSane delves into themes of self-mastery, mental clarity, and collective well-being. Their contributions offer a thoughtful lens on how we can build more conscious, resilient, and harmonious societies—one conversation at a time.",
    
  },
];


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, email });
    // Add your API submission logic here
  };

  return (
    <section className="py-20 md:py-10 max-w-7xl mx-auto md:h-screen flex items-center justify-center flex-col px-10 md:px-12">
      <div className="w-full">
        <h1 className="text-2xl font-extrabold mb-4 text-gray-800">Meet Our Contributors</h1>
        <p className="text-gray-600 leading-relaxed mb-1">
          Our contributors are passionate individuals committed to knowledge sharing, research, and community empowerment.
        </p>
      </div>

      {/* Contributors Grid */}
      <div className="mt-8 w-full mb-16">
        <h2 className="text-2xl font-extrabold mb-8 text-gray-800">Contributing Authors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 md:gap-20 place-items-center">
          {contributors.map((person, index) => (
            <div key={index} onClick={() => setSelectedContributor(person)} className="cursor-pointer">
              <CircularCard imageUrl={person.imageUrl} name={person.name} socials={person.socials} />
            </div>
          ))}
        </div>
      </div>

      {/* Join Form */}
      <div className="w-full ">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Want to be a Contributor?</h3>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end w-full">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                className="mt-1 w-full px-[7px] py-3 border border-gray-400 rounded-md focus:outline-none text-sm"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="Enter Your Firstname"

              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="mt-1 w-full px-[7px] py-3 border border-gray-400 rounded-md focus:outline-none text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Enter Your Lastname"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-[7px] py-3 border border-gray-400 rounded-md focus:outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your Email Address"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3"
              >
                I want to be a contributor
                
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Modal */}
      <AnimatePresence>
  {selectedContributor && (
    <ContributorModal
      contributor={selectedContributor}
      onClose={() => setSelectedContributor(null)}
    />
  )}
</AnimatePresence>
    </section>
  );
};

export default Contributors;
