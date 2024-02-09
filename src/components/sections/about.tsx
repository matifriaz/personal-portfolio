"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        reprehenderit delectus molestiae optio dicta vitae ea repudiandae fuga
        iusto quo mollitia modi sapiente dignissimos architecto atque labore,
        dolorum voluptas quod.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur
        voluptas aliquam voluptatum ex iure corrupti omnis maxime, vero facere
        molestias, eligendi numquam! Doloremque dicta accusamus est magnam
        reprehenderit dolorem!
      </p>
    </motion.section>
  );
}
