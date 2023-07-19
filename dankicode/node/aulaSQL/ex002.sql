create database cadastro
default character set utf8
default collate utf8_general_ci;

create table pessoas(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE,
    sexo ENUM('M', 'F'),
    peso DECIMAL(5,2),
    altura DECIMAL(3,2),
    nacionalidade VARCHAR(20) default 'Brasil',
    primary key (id)
) default charset = utf8;