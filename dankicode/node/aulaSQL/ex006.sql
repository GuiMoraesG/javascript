insert into alunos values(default, 'Maria', 'dentista', '2012-04-01', 'F', '80.80', '1.80', default),(default, 'Maria', 'dentista', '2012-04-01', 'F', '80.80', '1.80', default),(default, 'Maria', 'dentista', '2012-04-01', 'F', '80.80', '1.80', default),(default, 'Maria', 'dentista', '2012-04-01', 'F', '80.80', '1.80', default),(default, 'Maria', 'dentista', '2012-04-01', 'F', '80.80', '1.80', default);

select * from cursos order by nome desc;

select * from alunos where sexo = 'M';

select nome, sexo from alunos where peso <= '90.00';

select * from alunos where altura between '1.20' and '1.80';

select * from alunos where altura in ('1.80', '1.20', '2.00');

select * from cursos where carga > 35 and aulas < 30;