import React, { useState } from "react";
import styles from "@/styles/components/burger.module.scss";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.menu_icon} ${isOpen ? styles.menu_icon_open : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
    </div>
  );
};

export default Burger;
