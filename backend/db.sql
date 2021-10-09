use meditech;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

create table data_breach_report(
	 NameOfCoveredEntity varchar(200),
     State varchar(5),
     CoveredEntityType varchar(50),
     IndividualsAffected int,
     BreachSubmissionDate date,
     TypeOfBreach varchar(100),
     LocationOfBreachedInformation varchar(150)
);

insert into data_breach_report (NameOfCoveredEntity, State, CoveredEntityType ,IndividualsAffected,BreachSubmissionDate,TypeOfBreach,LocationOfBreachedInformation)
values ("siParadigm, LLC","NJ","Healthcare Provider",1654,'2021-07-26',"Unauthorized Access/Disclosure","Network Server");

insert into data_breach_report (NameOfCoveredEntity, State, CoveredEntityType ,IndividualsAffected,BreachSubmissionDate,TypeOfBreach,LocationOfBreachedInformation)
values ('montefiore Medical Center','NY','Healthcare Provider',1787,'2021-01-29','Unauthorized Access/Disclosure','Electronic Medical Record');