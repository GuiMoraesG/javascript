select altura from alunos group by altura;
select altura, count(nome) from alunos group by altura;

select altura, count(nome) from alunos group by altura having count(nome) > 3;
