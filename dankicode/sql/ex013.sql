select u.id, p.id, p.bio, u.first_name from users as u inner join profiles as p on u.id = p.user_id;

select u.id, p.id, p.bio, u.first_name from users as u left join profiles as p on u.id = p.user_id;

select u.id, p.id, p.bio, u.first_name from users as u right join profiles as p on u.id = p.user_id;
