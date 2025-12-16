import React, { useState } from 'react';
import '../assets/login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Veuillez remplir tous les champs.');
            return;
        }

        setIsLoading(true);
        console.log('Tentative de connexion avec :', { email, password });

        try {

            await new Promise(resolve => setTimeout(resolve, 1500));
            if (email === 'hei.andry.3@gmail.com' && password === 'azerty123') {
                alert(`Connexion réussie ! Bienvenue.`);
            } else {
                setError('Email ou mot de passe incorrect.');
            }

        } catch (err) {
            console.error("Erreur de connexion:", err);
            setError("Impossible de se connecter au serveur. Veuillez vérifier votre connexion.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Connexion</h2>

                {/* Affichage conditionnel du message d'erreur */}
                {error && <p className="error-message">{error}</p>}

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Ex: votre@email.com"
                        disabled={isLoading}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Entrez votre mot de passe"
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    className="login-button"
                    disabled={isLoading} // Désactiver le bouton pendant le chargement
                >
                    {isLoading ? 'Connexion en cours...' : 'Se Connecter'}
                </button>

                <p className="forgot-password">
                    <a href="#">Mot de passe oublié ?</a>
                </p>
            </form>
        </div>
    );
};

export default Login;