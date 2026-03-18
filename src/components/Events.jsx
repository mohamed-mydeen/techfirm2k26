import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GOOGLE_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSd_ErsEwmcJnvwMgn_fd1-NA49tWMYY0AD0eYNgo1VhooLNkA/viewform';


const technicalEvents = [
  {
    id: 'paper',
    name: 'Paper Presentation',
    icon: '📄',
    color: 'from-violet-600/20 to-purple-600/10',
    borderColor: 'border-violet-500/30',
    glowColor: 'rgba(139,92,246,0.3)',
    description: 'Present your research and innovative ideas to a panel of expert judges.',
    guidelines: [
      '	All participants must wear their college ID card.',
      '	Each team can have a maximum of 3 members.',
      '	Participants must bring their presentation in PPT format',
      '	The time limit for each presentation must be strictly followed',
      '	Topics should be technical and relevant to the domain.',
      "	Participants must be ready with a soft copy and backup (via email).",
      '	Judges’ decisions will be final and binding.',      
    ],
  },
  {
    id: 'expo',
    name: 'Project Expo',
    icon: '🖥️',
    color: 'from-blue-600/20 to-cyan-600/10',
    borderColor: 'border-blue-500/30',
    glowColor: 'rgba(59,130,246,0.3)',
    description: 'Showcase your cutting-edge projects to industry-level judges and peers.',
    guidelines: [
      'All participants must wear their college ID card',
      'Each team can have a maximum of 3 members',
      'Only original projects are allowed. Plagiarism will lead to disqualification',
      'Participants must bring their project setup (laptop, hardware, etc.)',
      'Participants must clearly explain their project and do proper demonstration if required when judges arrive.Prototype or functional demo is preferred',
      'Evaluation will be based on innovation, technical quality, presentation, relevance, and overall impact of the project',
      'Judges’ decisions will be final and binding',
      'Use of unsafe or hazardous materials is strictly prohibited',
      'Projects must not violate ethical or legal standards',
      'Any form of misconduct or rule violation will result in disqualification'

    ],
  },
  {
    id: 'coding',
    name: 'Coding Contest',
    icon: '💻',
    color: 'from-green-600/20 to-emerald-600/10',
    borderColor: 'border-green-500/30',
    glowColor: 'rgba(34,197,94,0.3)',
    description: 'Battle it out in the ultimate arena of logic, algorithms, and problem-solving.',
    guidelines: [
      'All participants must wear their college ID cards at all times during the event.',
      'The contest is open to all students enrolled in a participating institution.',
      'Allowed programming languages include C, C++, Java, and Python (as specified per challenge).',
      'Submissions must be made either online or offline, as instructed by the organizers.',
      'Participants must work individually. Collaboration, external assistance, or sharing of solutions is strictly prohibited.',
      'Problems will be of varying difficulty levels6.	Any form of malpractice, including copying, pasting, or switching tabs during online assessments, will be monitored and will result in disqualification.',
      'Evaluation criteria include correctness, efficiency, logical approach, and creativity. Code readability will also be considered for Level 3.',
      'Participants must adhere strictly to the given time limits. Late submissions will not be accepted',
    ],
  },
  {
    id: 'quiz',
    name: 'Tech Quiz',
    icon: '🧠',
    color: 'from-orange-600/20 to-amber-600/10',
    borderColor: 'border-orange-500/30',
    glowColor: 'rgba(249,115,22,0.3)',
    description: 'Test your knowledge across IT, AI, programming, and general technology.',
    guidelines: [
      'All participants must wear their college ID card',
      'This is an individual participation event',
      'The quiz will be conducted using the Kahoot platform',
      'Participants must bring a mobile phone with internet connection',
      'Points are awarded based on speed and correctness',
      'The decision of the quiz master/judges will be final' 
,
    ],
  },
];

const nonTechnicalEvents = [
  {
    id: 'poster',
    name: 'Poster Designing',
    icon: '🎨',
    color: 'from-pink-600/20 to-rose-600/10',
    borderColor: 'border-pink-500/30',
    glowColor: 'rgba(236,72,153,0.3)',
    description: 'Design innovative and eye-catching posters on a spot-assigned topic.',
    guidelines: [
      'All participants must wear their college ID card',
      'Posters must be created using tools like Canva,Adobe Express, VistaCreate, or Figma only.',
      'Alldesigns must be original',
      'Participants must complete the poster within the given time limit',
      'Internet may be used only for basic resources; copying designs is not allowed',
      'Maintain creativity, neatness, and relevance to the theme',
      ' Judges’decision will be final and binding'
    ],
  },
  
  {
    id: 'photography',
    name: 'Photography',
    icon: '📷',
    color: 'from-indigo-600/20 to-blue-600/10',
    borderColor: 'border-indigo-500/30',
    glowColor: 'rgba(99,102,241,0.3)',
    description: 'Capture the essence of the moment with your unique photographic eye.',
    guidelines: [
      'Participants must carry their college ID card. ',
      'The competition can be individual or team-based (max 2-3 members per team is allowed).',
      'Each participant can submit only one photograph.',
      'The photograph must be original and taken by the participant.',
      'Editing or filters are strictly not allowed',
      'Images should be submitted in JPEG/PNG format with good clarity.',
      'The theme “Nature” must be strictly followed',
      'Only 30 minutes will be given to capture the photograph',
      'Participants must submit their photo before the specified deadline',
      'Any form of plagiarism or downloaded images will lead to disqualification.',
      'Judge’s decision will be final and binding.'
    ],
  },
  {
    id: 'adzap',
    name: 'Adzap',
    icon: '🎭',
    color: 'from-yellow-600/20 to-amber-600/10',
    borderColor: 'border-yellow-500/30',
    glowColor: 'rgba(234,179,8,0.3)',
    description: 'Improvise a funny and creative advertisement for a random product on the spot.',
    guidelines: [
      'All participants must wear their college ID cards during the event.',
      'The event is open to all students from participating institutions',
      'Participants must strictly follow the instructions given for each round',
      'Performances must be carried out as per the mode decided by the organizers',
      'Participants must perform individually. Teamwork or external help is not allowed',
      'Any form of malpractice or unfair means will lead to disqualification',
      'Participants will be judged based on creativity, confidence, performance, and presentation',
      'Participants must adhere to the time limits. Late or extended performances will not be considered'
    ],
  },
  {
    id: 'connections',
    name: 'Connections',
    icon: '🔗',
    color: 'from-red-600/20 to-rose-600/10',
    borderColor: 'border-red-500/30',
    glowColor: 'rgba(239,68,68,0.3)',
    description: 'Find the hidden connections between seemingly unrelated images and clues.',
    Rules: [
      'All participants must wear their college ID card. ',
      'Maximum of three persons can participate per team',
      'Various sets of images, words, or puzzles will be given, and participants must identify the correct connection. ',
      ' Time will be a key factor in determining winners.',
      'Participants will be evaluated based on accuracy, speed, and logical thinking.',
      ' Winners will be chosen based on the above criteria.'
    ],
  },
  {
    id: 'cricket',
    name: 'Box Cricket',
    icon: '🏏',
    color: 'from-lime-600/20 to-green-600/10',
    borderColor: 'border-lime-500/30',
    glowColor: 'rgba(132,204,22,0.3)',
    description: 'Short-format indoor cricket — fast-paced, thrilling, and fun for everyone.',
    guidelines: [
      'Each team must have a minimum of 2 players and a maximum of 3 players',
      'The match will be played for ‘3’ overs per team',
      'Each team is allowed a maximum of 3 wickets',
      'A batsman will be declared out if the ball is hit over the box',
      'Runs are limited from “1 to 4” only',
      'The decision of the umpire will be final and binding',
    ],
    Notes: [
      'The tournament will follow a knockout format, where teams will compete in single-elimination matches until a winner is crowned.',
      'Teams are encouraged to bring their own cricket equipment, although some may be provided by the organizers.',
      'Participants must adhere to the rules of fair play and sportsmanship throughout the tournament.',
    ],
  },
];

const EventCard = ({ event, onViewGuidelines }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className={`glass-card p-7 flex flex-col gap-4 group cursor-default relative overflow-hidden `}
    style={{
      '--hover-glow': event.glowColor,
    }}
  >
    {/* Icon */}
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${event.color} border ${event.borderColor} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
      {event.icon}
    </div>

    <div className="flex-1">
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">{event.name}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{event.description}</p>
    </div>

    <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
      <button
        onClick={() => onViewGuidelines(event)}
        className="w-full py-2.5 px-4 rounded-xl glass border border-white/10 hover:border-violet-500/40 text-sm font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-between group/btn"
      >
        View Guidelines
        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        onClick={() => window.open(GOOGLE_FORM, '_blank')}
        className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-violet-600/20 to-pink-600/20 border border-violet-500/30 hover:from-violet-600 hover:to-pink-600 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-violet-500/25"
      >
        Register Now →
      </button>
    </div>
  </motion.div>
);

const GuidelineModal = ({ event, onClose }) => (
  <AnimatePresence>
    {event && (
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="modal-content"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${event.color} border ${event.borderColor} flex items-center justify-center text-2xl`}>
                {event.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                <p className="text-sm text-slate-400 mt-0.5">Event Guidelines</p>
              </div>
            </div>
            <button onClick={onClose}
              className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all shrink-0">
              ✕
            </button>
          </div>

          {/* Description */}
          <p className="text-slate-300 mb-6 leading-relaxed">{event.description}</p>

          {/* Guidelines */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-widest text-violet-400 font-bold mb-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              Rules & Regulations
            </h4>
            <ul className="space-y-3">
              {event.guidelines.map((rule, i) => (
                <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={() => window.open(GOOGLE_FORM, '_blank')}
            className="w-full btn-primary text-center justify-center py-3.5">
            <span>Register for {event.name}</span>
          </button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section id="events" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Competitions</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unleash Your <span className="gradient-text">Potential</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Choose from our lineup of technical and non-technical competitions designed to challenge and inspire.
          </p>

          {/* Tab switcher */}
          <div className="mt-10 inline-flex p-1 glass rounded-2xl border border-white/10 gap-1">
            {[['technical', '⚙️ Technical'], ['non-technical', '🎭 Non-Technical']].map(([key, label]) => (
              <button key={key} onClick={() => setActiveTab(key)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === key ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-500/30' : 'text-slate-400 hover:text-white'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(activeTab === 'technical' ? technicalEvents : nonTechnicalEvents).map(event => (
            <EventCard key={event.id} event={event} onViewGuidelines={setSelectedEvent} />
          ))}
        </div>
      </div>

      {/* Guideline Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <GuidelineModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
