alter table pessoas add column profissao varchar(10);


alter table pessoas drop column profissao;

alter table pessoas add column profissao varchar(10) after nome;

alter table pessoas modify column profissao varchar(20);

alter table pessoas change column profissao prof varchar(20);

alter table pessoas rename to alunos;

create table if not exists cursos(
    nome varchar(30) not null unique,
    descricao text,
    carga int unsigned,
    totaulas int,
    ano year default '2023'
) default charset = utf8;