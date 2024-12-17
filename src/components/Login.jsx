import React, { useState } from "react";
import "./Login.css"; // Importamos el archivo CSS

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="container">
      {/* Columna Izquierda */}
      <div className="info-section">
        <h1 className="title">SAIT</h1>
        <p className="description">
          SAIT es una plataforma de Internet de las Cosas (IoT) diseñada para que
          las empresas creen una interfaz intuitiva y personalizada para el
          monitoreo remoto de dispositivos en campo.
        </p>
      </div>

      {/* Columna Derecha */}
      <div className="login-section">
        <form className="login-form">
          <h2 className="form-title">
            {isRegister ? "Crear Cuenta" : "Iniciar Sesión"}
          </h2>

          {/* Campos Comunes */}
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="input-field"
              required
            />
          </div>

          {/* Campos de Contraseña */}
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              className="input-field"
              required
            />
          </div>

          {/* Campo Extra para Registro */}
          {isRegister && (
            <div className="form-group">
              <label>Confirmar Contraseña</label>
              <input
                type="password"
                placeholder="Confirma tu contraseña"
                className="input-field"
                required
              />
            </div>
          )}

          {/* Botón de Acción */}
          <button type="submit" className="login-button">
            {isRegister ? "Registrarse" : "Iniciar Sesión"}
          </button>

          {/* Botón intuitivo para alternar entre Login y Registro */}
          <div className="toggle-container">
            <p className="toggle-text">
              {isRegister
                ? "¿Ya tienes una cuenta?"
                : "¿No tienes una cuenta?"}
            </p>
            <button
              type="button"
              onClick={toggleForm}
              className="toggle-button"
            >
              {isRegister ? "Inicia sesión" : "Regístrate"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
