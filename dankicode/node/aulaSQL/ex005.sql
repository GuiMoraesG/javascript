insert into cursos values(default, 'HTML', 'Curso de HTML', '40', '37', '2014'),(default, 'PHP', 'Curso de HTML', '40', '37', '2014'),(default, 'JAVA', 'Curso de HTML', '40', '37', '2014'),(default, 'PYTHON', 'Curso de HTML', '40', '37', '2014'),(default, 'CSS', 'Curso de HTML', '40', '37', '2014'),(default, 'RUBY', 'Curso de HTML', '40', '37', '2014'),(default, 'Arduino', 'Curso de HTML', '40', '37', '2014');

update cursos set nome = 'Java', descricao = 'Curso de Java' where idcursos = '10';

delete from cursos where idcursos = '14';