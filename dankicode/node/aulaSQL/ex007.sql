select * from alunos where nome like 'M%';
select * from alunos where nome like '%m';

select distinct altura from alunos;

select count(nome) from alunos;

select max(altura) from alunos where sexo = 'F';
select min(altura) from alunos where sexo = 'F';
select sum(altura) from alunos;