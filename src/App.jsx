import React, { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const balloonVariants = {
    float: {
      y: [0, -20, 0],
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
    },
  };

  // Confetti with random Roblox logos
  const confetti = Array.from({ length: 20 }).map(() => ({
    left: `${Math.random() * 90}%`,
    rotate: Math.random() * 360,
    delay: Math.random() * 2,
    size: Math.random() * 10 + 6,
    color: ["#F59E0B", "#EF4444", "#10B981", "#3B82F6", "#A78BFA"][
      Math.floor(Math.random() * 5)
    ],
    isIcon: Math.random() < 0.25,
  }));

  const event = {
    childName: "John Angelo",
    age: 7,
    date: "Wednesday, October 1, 2025",
    time: "4:30 PM - 7:00 PM",
    venue: "Jollibee Plaza Leon, Tondo, Manila",
    notes: "Games, Cake, and a small surprise!",
  };

  return (
    <main className="h-screen w-screen bg-gradient-to-br from-green-400 via-indigo-200 to-blue-600 flex items-center justify-center overflow-hidden relative">
      {/* Card */}
      <div className="h-[90%] w-[90%] bg-white/90 backdrop-blur rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 relative">
        {/* Left side: photo of birthday boy */}
        <section className="relative flex flex-col items-center justify-center p-2 md:p-4">
          <motion.img
            src="/John.jpg"
            alt="Birthday boy"
            className="rounded-xl shadow-lg mb-2 w-full h-[50%] md:h-[70%] object-cover"
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Balloons floating */}
          <div className="absolute -top-4 right-4 flex gap-2">
            <motion.div
              variants={balloonVariants}
              animate="float"
              className="w-8 h-16 md:w-10 md:h-20"
            >
              <svg
                viewBox="0 0 64 96"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <ellipse cx="32" cy="28" rx="22" ry="24" fill="#FB7185" />
                <path
                  d="M32 52c-6 6-6 10 0 16"
                  stroke="#6B7280"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-8 h-16 md:w-10 md:h-18"
            >
              <svg
                viewBox="0 0 64 96"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <ellipse cx="32" cy="28" rx="18" ry="22" fill="#60A5FA" />
                <path
                  d="M32 50c-5 5-5 9 0 14"
                  stroke="#6B7280"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="w-8 h-16 md:w-10 md:h-18"
            >
              <svg
                viewBox="0 0 64 96"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <ellipse cx="32" cy="28" rx="16" ry="20" fill="#34D399" />
                <path
                  d="M32 48c-4 4-4 8 0 12"
                  stroke="#6B7280"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>
          </div>

          {/* Confetti with Roblox logos */}
          {confetti.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ y: -20, opacity: 0, rotate: 0 }}
              animate={{
                y: [-20, 70, 160],
                opacity: [0, 1, 0],
                rotate: [0, c.rotate, c.rotate + 90],
              }}
              transition={{
                delay: c.delay,
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
              }}
              style={{ left: c.left }}
              className="pointer-events-none absolute top-0"
            >
              {c.isIcon ? (
                <img
                  src="/roblox-logo.png"
                  alt="Roblox"
                  style={{ width: c.size + 8, height: c.size + 8 }}
                  className="opacity-90"
                />
              ) : (
                <div
                  style={{ width: c.size, height: c.size, background: c.color }}
                  className="rounded-sm"
                />
              )}
            </motion.div>
          ))}

          <div className="mt-2 text-center">
            <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-blue-600">
              You're Invited!
            </h1>
            <p className="mt-1 text-xs md:text-base text-gray-600">
              Join us to celebrate{" "}
              <span className="font-semibold text-indigo-700">
                {event.childName}
              </span>{" "}
              turning{" "}
              <span className="font-semibold text-indigo-700">{event.age}</span>{" "}
              🎉
            </p>
          </div>
        </section>

        {/* Right side details */}
        <section className="p-3 md:p-6 flex flex-col justify-center text-xs md:text-base">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">
            Party Details
          </h2>

          <ul className="space-y-2 md:space-y-4 text-gray-700">
            <li className="flex items-start gap-1">
              <strong className="w-16 md:w-24 text-gray-900">When</strong>
              <div>
                <div className="font-medium">{event.date}</div>
                <div className="text-gray-500">{event.time}</div>
              </div>
            </li>

            <li className="flex items-start gap-1">
              <strong className="w-16 md:w-24 text-gray-900">Where</strong>
              <div>
                <div className="font-medium">{event.venue}</div>
              </div>
            </li>

            <li className="flex items-start gap-1">
              <strong className="w-16 md:w-24 text-gray-900">Notes</strong>
              <div className="text-gray-700">{event.notes}</div>
            </li>
          </ul>
        </section>
      </div>

      {/* Roblox Character */}
      <motion.img
        src="/roblox1.png"
        alt="Roblox Character"
        onLoad={() => setLoaded(true)}
        initial={{ y: 50, opacity: 0 }}
        animate={loaded ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 right-0 w-20 md:w-28"
      />

      {/* Footer */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs text-black">
        Made with ❤️ — Kuya
      </div>
    </main>
  );
};

export default App;
