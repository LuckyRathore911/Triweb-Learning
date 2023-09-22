create table organisers_duplicate(id int not null auto_increment primary key, 
topic_id int, 
name varchar(255),
email varchar(255) default 'triweb@gmail.com',
foreign key (topic_id) references topics(id)
);

insert into organisers_duplicate(id, name, email, topic_id)
select id, name, email, topic_id 
from organisers
where id=2;

select * from organisers_duplicate;