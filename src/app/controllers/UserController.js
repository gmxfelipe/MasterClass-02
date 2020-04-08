import Mail from '../lib/Mail';

export default {
    async Store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password,
        };

        // Adicionar job ResgistrationMail na fila
        
        return res.json(user);
    }
};