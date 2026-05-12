"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (usuario === "leleco" && senha === "2105") {
      router.push("/painel");
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <div className="container">
      <div className="loginBox">
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={entrar}>Entrar</button>
      </div>
    </div>
  );
}