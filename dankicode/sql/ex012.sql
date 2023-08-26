-- Intera sobre todos os registros de users.
insert into profiles (bio, description, user_id) select first_name, first_name, id from users;

insert into profiles (bio, description, user_id) select concat('Bio de ', first_name), concat('Descrição de ', first_name), id from users;

select * from users, profiles where users.id = profiles.user_id;