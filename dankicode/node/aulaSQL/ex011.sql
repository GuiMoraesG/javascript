create table users_roles (
users_id int not null,
roles_id int not null,
primary key (users_id, users_roles),
foreign key (users_id) reference users(id),
foreign key (roles_id) reference roles(id)
);

alter table users add column created_at datetime default now() on update now();