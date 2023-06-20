class MeuServico {

    async enviarDados(dados) {
        // Lógica para enviar os dados para o serviço externo
        const response = await fetch('http://localhost:3333/users', {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resultado = await response.json();
            return resultado;
    }
}


export default MeuServico;



