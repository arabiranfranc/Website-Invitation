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
    isIcon: Math.random() < 0.25, // 25% chance it's a Roblox logo
  }));

  const event = {
    childName: "John Angelo",
    age: 7,
    date: "Wednesday, October 1, 2025",
    time: "4:30 PM - 7:00 PM",
    venue: "Jollibee Plaza Leon, Tondo, Manila",
    notes: "Games, Cake, and a small surprise!.",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-400 via-indigo-200 to-blue-600 flex items-center justify-center p-6">
      <div className="flex flex-col items-center">
        <div className="max-w-4xl w-full bg-white/90 backdrop-blur rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 relative">
          {/* Left side: photo of birthday boy */}
          <section className="relative p-2 md:p-4 flex flex-col items-center justify-center">
            <motion.img
              src="/John.jpg" // 👉 Replace with your own image in public folder
              alt="Birthday boy"
              className="rounded-xl shadow-lg mb-4 w-full h-110 object-cover"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src="/roblox1.png" // 👉 Add another character if you want
              alt="Roblox Character"
              onLoad={() => setLoaded(true)} // 👈 only animate after image loads
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute bottom-20 left-10 w-28 md:w-36"
            />
            {/* Balloons floating */}
            <div className="absolute -top-6 right-6 md:right-8 flex gap-2">
              <motion.div
                variants={balloonVariants}
                animate="float"
                className="w-12 h-24 md:w-14 md:h-20"
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
                className="w-10 h-24 md:w-12 md:h-18"
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
                className="w-10 h-24 md:w-12 md:h-18"
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
                    style={{
                      width: c.size,
                      height: c.size,
                      background: c.color,
                    }}
                    className="rounded-sm"
                  />
                )}
              </motion.div>
            ))}

            <div className="mt-2 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-600">
                You're Invited!
              </h1>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                Join us to celebrate{" "}
                <span className="font-semibold text-indigo-700">
                  {event.childName}
                </span>{" "}
                turning{" "}
                <span className="font-semibold text-indigo-700">
                  {event.age}
                </span>{" "}
                🎉
              </p>
            </div>
          </section>
          {/* Right side details */}
          <section className="p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Party Details
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-1">
                <strong className="w-24 text-sm text-gray-900">When</strong>
                <div>
                  <div className="font-medium">{event.date}</div>
                  <div className="text-sm text-gray-500">{event.time}</div>
                </div>
              </li>

              <li className="flex items-start gap-1">
                <strong className="w-24 text-sm text-gray-900">Where</strong>
                <div>
                  <div className="font-medium">{event.venue}</div>
                </div>
              </li>

              <li className="flex items-start gap-1">
                <strong className="w-24 text-sm text-gray-900">Notes</strong>
                <div className="text-sm text-gray-700">{event.notes}</div>
              </li>
            </ul>
          </section>
        </div>
        <div className="mt-3 flex justify-center items-center text-[10px] md:text-xs text-black">
          Made with ❤️ — Kuya
        </div>
      </div>
    </main>
  );
};

export default App;
