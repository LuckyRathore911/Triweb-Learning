use triweb_learning;

select name from topics where id=4 or id=3;
select * from interns where topic_id=4 and id=2;

-- select custom feild
select name from interns where id in (1,5,8);

select * from interns where id between 1 and 8;

select name as intern_name, phone as phone_number from interns where id between 1 and 8;

-- create and use object of table to select
select i.* from interns as i;
select i.* from interns i;

select * from interns where id<>6;

select * from interns where id<>6 order by topic_id desc;

-- null values cannot be compared by <,>,=,<>, etc.
select * from interns where id is null;
select * from interns where id is not null;