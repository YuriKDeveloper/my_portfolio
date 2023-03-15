'use client';

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from '../styles';
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Yuri Gabriel Laurindo",
          from_email: form.email,
          to_email: "yurioichikts@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Obrigado te retornarei assim que possivel.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ah, algo deu errado. Por favor, tente novamente.");
        },
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="flex-[0.75] bg-white sm:ml-8 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contate-me.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual é o seu nome ?"
              className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual o seu email ?"
              className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="O que você gostaria de perguntar ?"
              className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-secondary-white py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
          >
            {loading ? "Enviando..." : "Enviado"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <img className="mt-[60px]" src="/cover3.png" alt="cover2" />
      </motion.div>
    </div>
  );
};

export default Contact;
