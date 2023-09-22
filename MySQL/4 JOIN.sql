use triweb_learning;

-- INNER JOIN: skips null valued records
select i.name as Intern_name, t.name as Topic, o.name as Organiser_name
from interns i 
inner join topics t 
on t.id=i.topic_id
inner join organisers o 
on o.topic_id = t.id;

select i.name as Intern_name, t.name as Topic, o.name as Organiser_name
from interns i 
join topics t 
on t.id=i.topic_id
inner join organisers o 
on o.topic_id = t.id
where t.id=5;

-- LEFT JOIN
select i.name as Intern_name, t.name as Topic, o.name as Organiser_name
from interns i 
left join topics t 
on t.id=i.topic_id
left join organisers o 
on o.topic_id = t.id;

-- RIGHT JOIN
select t.name as Topic, o.name as Organiser_name
from organisers o
right join  topics t 
on o.topic_id = t.id;