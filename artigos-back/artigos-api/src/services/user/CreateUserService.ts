import prismaClient from "../../prisma";
interface UserRequest {
    email: string;
    password: string;
}
class CreateUserService {
    async execute({ email, password }: UserRequest) {
        //verifica email ja cadastrado
        const userJaExiste = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        //verificar se email não foi enviado no body
        if (!email) {
            throw new Error("Email é obrigatório")
        }
        //verifica se email está duplicado no banco de dados
        if (userJaExiste) {
            throw new Error("user ja existe")
        } const user = await prismaClient.user.create(
            {
                data: {
                    email: email,
                    password: password
                },
                select: {
                    id: true,
                    email: true
                }
            }
        )
        return user
    }
}
export { CreateUserService }