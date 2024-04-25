"use client";

import SectionHeader from "./Section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./Submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeader>Contact Me!</SectionHeader>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        You can contact me directly at{" "}
        <a className="underline" href="mailto:saffetadak_@hotmail.com">
          saffetadak_@hotmail.com{" "}
        </a>
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          required
          maxLength={320}
          type="email"
          name="email"
          className="px-4 h-14 rounded-lg borderBlack dark:bg-white/10 dark:focus:bg-white/20 dark:text-gray-400 darkModeShadow transition-all"
          placeholder="Your email here"
        />
        <textarea
          required
          maxLength={4000}
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 min-h-16 max-h-72 dark:bg-white/10 dark:focus:bg-white/20 dark:text-gray-400 darkModeShadow transition-all"
          placeholder="Your message here"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
