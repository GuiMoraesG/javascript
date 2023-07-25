select round(rand() * 10000, 2)

update users set salary = round(rand() * 10000, 2);

insert into users_roles (users_id, roles_id) select id, (select id from roles order by rand() limit 1) from users;

select u.id as uid, u.first_name from users as u;

select u.id as uid, u.first_name, p.id as pid, p.bio from users as u left join profiles as p on u.id = p.user_id;

select u.id as uid, u.first_name, p.id as pid, p.bio, r.name
from users as u left join profiles as p on u.id = p.user_id
inner join users_roles as ur on u.id = ur.users_id
inner join roles as r on ur.roles_id = r.id;


