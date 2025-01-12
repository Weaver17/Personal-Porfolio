import React from "react";
import { EXPERIENCES } from "../constants";

const WorkXP = () => {
  return (
    <section className="pt-20" id="work">
      <h2 className="text-center text-4xl font-semibold tracking-tighter">
        Work Experience
      </h2>
      <div className="space-y-10 p-10">
        {EXPERIENCES.map((xp, index) => (
          <div
            key={index}
            className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-2xl font-semibold">{xp.title}</h3>
            <p className="text-xl">{xp.company}</p>
            <p className="text-sm text-stone-300">{xp.duration}</p>
            <p className="mt-2 text-base">{xp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkXP;
