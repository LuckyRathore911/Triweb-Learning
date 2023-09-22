use triweb_learning;

-- CREATE: INSERT DATA IN TABLES

insert into topics(name) values("GitHub"),('HTML'),('CSS'),('MySQL'),('Node.js'),("JavaScript"),("ES6");

insert into interns(name, phone, email, topic_id) values('Lucky', 9999999999, 'lucky@gmail.com', 5);
insert into interns(name, phone, email, topic_id) values('Aiman',8888888888,'aiman@gmail.com',4);
insert into interns(name, phone, email, topic_id) values('Nivedita',7777777777,'nivedita@gmail.com',4),
('Aastha',6666666666,'aastha@gmail.com',3),('Vidhi',5555555555,'vidhi@gmail.com',6);
insert into interns(name, phone, email, topic_id) values('Sharmishtha',4444444444,'sharmishtha@gmail.com',1);
insert into interns values(7,'Shweta',3333333333,'shweta@gmail.com',5);

insert into organisers(name, topic_id) values('Aakarsh', 5), ('Aarush',1);

-- RETRIEVE: SELECT TABLE DATA

select * from interns;
select * from organisers;
select * from topics;

-- UPDATE: MODIFY TABLE DATA
update topics set name="Git-GitHub" where id=1;

-- DELETE: INSERT AND DELETE DATA FROM TABLE

insert into topics(name) values('gg'),('ff');
delete from topics where id=1 OR id=2;

SET FOREIGN_KEY_CHECKS = 0;
truncate table topics;
SET FOREIGN_KEY_CHECKS = 1;
