"use client";
import styles from "@/styles/components/get-in-touch-with-me.module.scss";
import { useState, ChangeEvent, FormEvent } from "react";

const GetInTouchWithMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, subject, message } = formData;
    const mailtoLink = `mailto:aleksem07@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}%0A%0A${encodeURIComponent(name)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className={styles.getintouchwithme}>
      <h2 className={styles.getintouchwithme_title}>Get in Touch With Me</h2>
      <form
        className={`${styles.getintouchwithme_form} ${styles.form}`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="subject">subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label htmlFor="message">message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          className={`button ${styles.getintouchwithme_button}`}
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default GetInTouchWithMe;
