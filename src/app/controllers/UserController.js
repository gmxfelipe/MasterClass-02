import Queue from '../lib/Queue';

export default {
    async Store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password,
        };

        // Adicionar job ResgistrationMail na fila
        await Queue.add('RegistrationMail', { user });

        await Queue.add('UseReport', { user });


        return res.json(user);
    }
};