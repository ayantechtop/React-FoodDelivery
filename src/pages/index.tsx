import { useState } from "react";
import { ContactForm } from "../components/ContactForm";
import { api } from "../services/api";

export default function Home() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
