import React from "react";
import { EXPERIENCES } from "../constants";
import * as motion from "motion/react-client";

const WorkXP = () => {
  return (
    <section className="pt-20" id="work">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Work Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-10 p-10"
      >
        {EXPERIENCES.map((xp, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.4 }}
            key={index}
            className="rounded-xl border border-blue-100/30 bg-blue-100/10 p-4"
          >
            <h3 className="text-2xl font-semibold">{xp.title}</h3>
            <p className="text-xl">{xp.company}</p>
            <p className="text-sm text-stone-300">{xp.duration}</p>
            <p className="mt-2 text-base">{xp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkXP;
