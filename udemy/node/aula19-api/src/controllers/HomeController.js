import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Guilherme',
      sobrenome: 'Moraes',
      email: 'gui@gmail.com',
      idade: 23,
      peso: 90.5,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
