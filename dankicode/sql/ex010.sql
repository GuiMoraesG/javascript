create table alunos_assiste_curso (
    id int not null auto_increment,
    datas date,
    idalunos int,
    idcurso int,
    primary key (id),
    foreign key (idalunos) references alunos (id),
    foreign key (idcurso) references cursos (idcursos)
) default charset = utf8;

insert into alunos_assiste_curso values(default, '2014-03-01', '1', '8');
insert into alunos_assiste_curso values(default, '2014-03-01', '1', '8'),(default, '2014-03-01', '2', '9'),(default, '2014-03-01', '3', '10'),(default, '2014-03-01', '4', '11'),(default, '2014-03-01', '5', '12'),(default, '2014-03-01', '6', '8');

select * from alunos al join alunos_assiste_curso a on al.id = a.idalunos; 

select * from alunos al join alunos_assiste_curso a on al.id = a.idalunos join cursos c on a.idcurso = c.idcursos; 

select al.nome, a.idalunos from alunos al join alunos_assiste_curso a on al.id = a.idalunos; 

