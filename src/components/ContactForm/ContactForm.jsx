import { MdMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;

    const email = event.target[1].value;

    const text = event.target[2].value;

    setName(name);
    setEmail(email);
    setText(text);
  };
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            text="VIA CALL"
            icon={<IoCallSharp fontSize="24px" color="white" />}
          />
        </div>
        <Button
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
          isOutline={true}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea rows={5} name="text" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" type="submit" />
          </div>
        </form>
        <div>
          {name}, {email}, {text}
        </div>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service.svg" alt="Service logo" />
      </div>
    </section>
  );
};

export default ContactForm;
