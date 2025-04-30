"use client";
import Container from "@/components/Container";
import React, { useState } from "react";
import Cookie from "js-cookie";
import { redirect } from "next/navigation";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Benutzername und Passwort in der Login-Logik verwenden
    console.log(`Anmeldung mit Benutzername: ${userName} und Passwort: ${password}`);

    const response = {
      token: "Login ist richtig", // Token für die erfolgreiche Anmeldung
      expire: 7, // Ablaufzeit des Tokens in Tagen
    };

    // Token in Cookies speichern
    Cookie.set("token", response.token, { expires: response.expire });

    // Weiterleitung zum Dashboard
    redirect("/dashboard");
  };

  return (
    <div>
      <Container>
        <div className="border p-4 flex flex-col w-72 mx-auto">
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Benutzername" // Eingabefeld für den Benutzernamen
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2"
            type="password"
            placeholder="Passwort" // Eingabefeld für das Passwort
          />
          <button onClick={handleLogin} className="mt-2 p-1 bg-amber-500">
            ورود 
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
