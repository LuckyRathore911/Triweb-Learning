-- DATABASE CREATION and USE
create database triweb_learning;
use triweb_learning;


-- TABLE CREATION

create table topics(id int not null auto_increment primary key, name varchar(255));

create table interns(id int not null auto_increment primary key, name varchar(255) not null, phone varchar(255), email varchar(255));
alter table interns add topic_id int, add foreign key (topic_id) references topics(id);

create table organisers(id int not null auto_increment primary key, topic_id int, foreign key (topic_id) references topics(id));
alter table organisers add name varchar(255), add email varchar(255) default 'triweb@gmail.com';

create table to_be_deleted(id int, name varchar(255));


-- TABLE DELETION
drop table to_be_deleted;

