import React, { useState } from "react";
import './Login.css'

// Define los tipos para los datos del formulario
interface LogInProps {
    onSubmit?: (data: { email: string; password: string }) => void;
}

const LogIn: React.FC<LogInProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, complete ambos campos.');
      return;
    }

    setError(null);

    // Llamar a onSubmit si está definido
    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  return (
    <section className="Login-container">
      <div className="login-Form">
        <h2>Iniciar Sesión</h2>
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </section>
  );
};

export default LogIn;