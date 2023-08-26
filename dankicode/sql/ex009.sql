alter table alunos add foreign key (cursospreferidos) references cursos (idcursos);

update alunos set cursopreferido = '8' where id = '1';

select alunos.nome, cursos.nome, cursos.ano from alunos join cursos on cursos.idcursos = alunos.cursopreferido;

select alunos.nome, cursos.nome, cursos.ano from alunos left outer join cursos on cursos.idcursos = alunos.cursopreferido;

select alunos.nome, cursos.nome, cursos.ano from alunos right outer join cursos on cursos.idcursos = alunos.cursopreferido;
