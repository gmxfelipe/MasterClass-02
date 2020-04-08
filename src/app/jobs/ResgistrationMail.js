import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async  handle({ data }) {
        const { user } = data;
        await Mail.sendMail({
            from: 'Felipe Augusto <felipeagomesdeoliveira@gmail.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Ôla, ${user.name}, bem-vindo ao sistema de filas do Felipe Augusto :D` 
        });
    },
}