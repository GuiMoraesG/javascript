--  Ex1:
insert into users (first_name, last_name, salary, email, password_hash)
values ('Guilherme', 'Moraes', round(rand() * 10000, 2), 'gui@gmail.com', 'w'),
('Gabriela', 'Silva', round(rand() * 10000, 2), 'gsilva@gmail.com', '12345'),
('Tais', 'Carla', round(rand() * 10000, 2), 'planet@gmail.com', 'pizzaDeHamburguer'),
('Maria', 'Garcia', round(rand() * 10000, 2), 'garcia@gmail.com', 'asdwqejumumillop'),
('Mario', 'Mario', round(rand() * 10000, 2), 'mario@gmail.com', 'marioluigi');

-- Ex2:
insert into profiles (bio, description, user_id) 
select concat('Bio de: ', first_name), concat('Descrição de: ', + first_name), id from users;

-- Ex3:
insert into users_roles (users_id, roles_id) select id, (select id from roles order by rand() limit 1) from users;

-- Ex4:
select * from users order by id desc;

-- Ex5:
update users set first_name = 'Mario' where id = '121';

-- Ex6:
delete from users_roles where users_id = '121';

-- Ex7:
delete users
from users
inner join users_roles on users.id = users_roles.users_id
inner join roles on roles.id = users_roles.roles_id
where roles.name = 'PUT';

-- Ex8:
select users.id, users.first_name, profiles.bio, roles.name from users
inner join profiles on users.id = profiles.user_id
inner join users_roles on users.id = users_roles.users_id
inner join roles on roles.id = users_roles.roles_id;

-- Ex9:
select users.id, users.first_name, profiles.bio, roles.name from users
left join profiles on users.id = profiles.user_id
left join users_roles on users.id = users_roles.users_id
left join roles on roles.id = users_roles.roles_id;

-- Ex10:
select users.id, users.first_name, profiles.bio, roles.name, users.salary from users
left join profiles on users.id = profiles.user_id
left join users_roles on users.id = users_roles.users_id
left join roles on roles.id = users_roles.roles_id
order by salary asc;