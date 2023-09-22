select * from interns limit 2;

select max(id) as latest_topic from topics;

select name as sprint_1_topics from topics order by id limit 3;

select count(*) as total_interns from interns;

select sum(topic_id) as total_topics from interns;

select avg(topic_id) as average_topic from interns;

select * from interns where name like 'L_cky';
select * from interns where name like 'L%';
select * from interns where name like 'S%a';

-- second highest value of topic id
select max(id) from topics where id not in (select max(id) from topics);

-- fourth highest value of topic id
select id from topics order by id desc limit 3,1;