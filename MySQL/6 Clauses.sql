use triweb_learning;

-- UNION

select topic_id from interns
union
select topic_id from organisers;


-- GROUP BY

select * from interns group by topic_id;

select topic_id, count(*) as interns_per_topic from interns group by topic_id;

select topic_id, count(*) as interns_per_topic 
from interns 
group by topic_id 
order by interns_per_topic desc;


-- HAVING: used because WHERE clause cannot be used with aggregate functions (sum, count, etc.)

select topic_id, count(*) as interns_per_topic 
from interns 
group by topic_id 
having topic_id>4
order by interns_per_topic desc;
